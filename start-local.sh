#!/bin/bash

# Function to clean up containers
cleanup() {
    echo "Stopping and removing containers..."
    docker compose --env-file .env.local down
    exit 0
}

# Trap signals for proper cleanup
trap cleanup SIGINT SIGTERM

echo "--- Resolved Environment Variables for 'dev' service ---"
docker compose --env-file .env.local config | grep 'environment:' -A 10
echo "------------------------------------------------------"

# Start the services in foreground
docker compose --env-file .env.local up --build --remove-orphans api mysql
