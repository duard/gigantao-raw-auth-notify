#!/bin/bash

# Function to clean up containers
cleanup() {
    echo "Stopping and removing production services..."
    docker compose -f docker-compose.prod.yml --env-file .env.production down
    exit 0
}

# Trap signals for proper cleanup
trap cleanup SIGINT SIGTERM

echo "--- Resolved Environment Variables for 'api' service (production) ---"
docker compose -f docker-compose.prod.yml --env-file .env.production config | grep 'environment:' -A 10
echo "------------------------------------------------------"

echo "Building production Docker image..."
docker compose -f docker-compose.prod.yml --env-file .env.production build

echo "Starting production services..."
docker compose -f docker-compose.prod.yml --env-file .env.production up  --remove-orphans api

echo "Production services started."
