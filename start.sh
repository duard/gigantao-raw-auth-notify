#!/bin/bash

# ===========================================
# Multi-environment Docker Compose starter
# ===========================================

# Function to clean up containers
cleanup() {
    echo
    echo "🛑 Stopping and removing containers for environment: $ENVIRONMENT..."
    docker compose --profile "$ENVIRONMENT" down
    exit 0
}

# Trap signals for proper cleanup
trap cleanup SIGINT SIGTERM

# Check if environment argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <environment>"
    echo "Available environments: development, local, homologation, test, production"
    exit 1
fi

ENVIRONMENT=$1
ENV_FILE=""
SERVICES_TO_START=""
APP_START_CMD=""

# ----------------------------
# Define environment-specific configs
# ----------------------------
case "$ENVIRONMENT" in
    development)
        ENV_FILE=".env.dev"
        SERVICES_TO_START="api-auth-development mysql"
        APP_START_CMD="pnpm run dev"
        ;;
    local)
        ENV_FILE=".env.local"
        SERVICES_TO_START="api-auth-local mysql"
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
        exit 1
        ;;
esac

# Ensure env file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Environment file '$ENV_FILE' not found."
    exit 1
fi

# Export START_CMD so it is visible dentro do container
export START_CMD="$APP_START_CMD"

echo "----------------------------------------------"
echo "🌐 Starting services for environment: $ENVIRONMENT"
echo "Services: $SERVICES_TO_START"
echo "Command inside container: $START_CMD"
echo "----------------------------------------------"

# ----------------------------
# Special handling for production
# ----------------------------
if [ "$ENVIRONMENT" == "production" ]; then
    echo "⚡ Initializing production database..."
    bash scripts/init-prod-db.sh
    if [ $? -ne 0 ]; then
        echo "❌ Production DB initialization failed. Aborting."
        exit 1
    fi

    echo "🚀 Building production Docker image..."
    docker compose --profile "$ENVIRONMENT" --env-file "$ENV_FILE" build
fi

# ----------------------------
# Start services
# ----------------------------
if [ "$ENVIRONMENT" == "development" ] || [ "$ENVIRONMENT" == "local" ]; then
    docker compose --profile "$ENVIRONMENT" --env-file "$ENV_FILE" up --build --remove-orphans $SERVICES_TO_START
else
    docker compose --profile "$ENVIRONMENT" --env-file "$ENV_FILE" up --remove-orphans $SERVICES_TO_START
fi
