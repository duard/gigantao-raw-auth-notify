#!/bin/bash

# Function to clean up containers
cleanup() {
    echo "Stopping and removing containers for environment: $ENVIRONMENT..."
    docker compose -f "$COMPOSE_FILE" --env-file "$ENV_FILE" down
    exit 0
}

# Trap signals for proper cleanup
trap cleanup SIGINT SIGTERM

# Check if an environment argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <environment>"
    echo "Available environments: dev, local, prod"
    exit 1
fi

ENVIRONMENT=$1
COMPOSE_FILE=""
ENV_FILE=""
SERVICES_TO_START="api" # Default service to start

case "$ENVIRONMENT" in
    dev)
        COMPOSE_FILE="docker-compose.dev.yml"
        ENV_FILE=".env.development"
        ;;
    local)
        COMPOSE_FILE="docker-compose.local.yml"
        ENV_FILE=".env.local"
        SERVICES_TO_START="api mysql" # Local environment includes MySQL
        ;;
    prod)
        COMPOSE_FILE="docker-compose.prod.yml"
        ENV_FILE=".env.production"
        ;;
    *)
        echo "Invalid environment: $ENVIRONMENT"
        echo "Available environments: dev, local, prod"
        exit 1
        ;;
esac

# Ensure the selected compose file exists
if [ ! -f "$COMPOSE_FILE" ]; then
    echo "Error: Docker Compose file '$COMPOSE_FILE' not found."
    exit 1
fi

# Ensure the selected environment file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "Error: Environment file '$ENV_FILE' not found."
    exit 1
fi

echo "--- Resolved Environment Variables for 'api' service ($ENVIRONMENT) ---"
docker compose -f "$COMPOSE_FILE" --env-file "$ENV_FILE" config | grep 'environment:' -A 10
echo "------------------------------------------------------"

# Special handling for production environment
if [ "$ENVIRONMENT" == "prod" ]; then
    echo "Initializing production database..."
    bash scripts/init-prod-db.sh
    if [ $? -ne 0 ]; then
        echo "Error: Production database initialization failed. Aborting."
        exit 1
    fi

    echo "Building production Docker image..."
    docker compose -f "$COMPOSE_FILE" --env-file "$ENV_FILE" build
fi

echo "Starting services for environment: $ENVIRONMENT..."
docker compose -f "$COMPOSE_FILE" --env-file "$ENV_FILE" up --build --remove-orphans $SERVICES_TO_START

echo "Services for $ENVIRONMENT started."
