#!/bin/bash

# Function to clean up containers
cleanup() {
    echo "Stopping and removing containers for environment: $ENVIRONMENT..."
    docker compose --profile "$ENVIRONMENT" down
    exit 0
}

# Trap signals for proper cleanup
trap cleanup SIGINT SIGTERM

# Check if an environment argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <environment>"
    echo "Available environments: development, local, homologation, test, production"
    exit 1
fi

ENVIRONMENT=$1
ENV_FILE=""
SERVICES_TO_START="" # Services will be determined by profile
APP_START_CMD="" # Command to start the application inside the container

case "$ENVIRONMENT" in
    development)
        ENV_FILE=".env.dev"
        SERVICES_TO_START="api-auth-development mysql" # Explicitly start mysql for development profile
        APP_START_CMD="pnpm run dev"
        ;;
    local)
        ENV_FILE=".env.local"
        SERVICES_TO_START="api-auth-local mysql" # Explicitly start mysql for local profile
        APP_START_CMD="pnpm run dev"
        ;;
    homologation)
        ENV_FILE=".env.homolog"
        SERVICES_TO_START="api-auth-homologation"
        APP_START_CMD="pnpm run start"
        ;;
    test)
        ENV_FILE=".env.test"
        SERVICES_TO_START="api-auth-test"
        APP_START_CMD="pnpm run start"
        ;;
    production)
        ENV_FILE=".env.production"
        SERVICES_TO_START="api-auth-production"
        APP_START_CMD="pnpm run start"
        ;;
    *)
        echo "Invalid environment: $ENVIRONMENT"
        echo "Available environments: development, local, homologation, test, production"
        exit 1
        ;;
esac

# Ensure the selected environment file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "Error: Environment file '$ENV_FILE' not found."
    exit 1
fi

echo "--- Resolved Environment Variables for 'api' service ($ENVIRONMENT) ---"
SERVICE_CONFIG_NAME="api-auth-$ENVIRONMENT"
# Use the correct service name based on the profile for config inspection
# This command uses grep as yq might not be installed
docker compose --profile "$ENVIRONMENT" --env-file "$ENV_FILE" config | grep -E "^\s+$SERVICE_CONFIG_NAME:|^(\s+environment:|\s+- )" | grep 'environment:' -A 10
echo "------------------------------------------------------"

# Special handling for production environment
if [ "$ENVIRONMENT" == "production" ]; then
    echo "Initializing production database..."
    # Assuming init-prod-db.sh is still relevant and in the scripts directory
    bash scripts/init-prod-db.sh
    if [ $? -ne 0 ]; then
        echo "Error: Production database initialization failed. Aborting."
        exit 1
    fi

    echo "Building production Docker image..."
    docker compose --profile "$ENVIRONMENT" --env-file "$ENV_FILE" build
fi

echo "Starting services for environment: $ENVIRONMENT..."
export START_CMD="$APP_START_CMD" # Export START_CMD to be available for docker compose
# Use --build for development and local to ensure latest changes are picked up
# For production, build is already done above
if [ "$ENVIRONMENT" == "development" ] || [ "$ENVIRONMENT" == "local" ]; then
    docker compose --profile "$ENVIRONMENT" --env-file "$ENV_FILE" up --build --remove-orphans $SERVICES_TO_START
else
    docker compose --profile "$ENVIRONMENT" --env-file "$ENV_FILE" up --remove-orphans $SERVICES_TO_START
fi

echo "Services for $ENVIRONMENT started."