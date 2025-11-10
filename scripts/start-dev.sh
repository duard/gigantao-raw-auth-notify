#!/bin/bash

# Function to clean up containers
cleanup() {
    echo "Stopping and removing containers..."
    docker compose -f docker-compose.dev.yml --env-file .env.development down
    exit 0
}

# Trap signals for proper cleanup
trap cleanup SIGINT SIGTERM

echo "--- Resolved Environment Variables for 'api' service (development) ---"
docker compose -f docker-compose.dev.yml --env-file .env.development config | grep 'environment:' -A 10
echo "------------------------------------------------------"

# Start the services in foreground
docker compose -f docker-compose.dev.yml --env-file .env.development up --build --remove-orphans api