#!/bin/bash

echo "Building production Docker image..."
docker-compose -f docker-compose.prod.yml build

echo "Starting production services..."
docker-compose -f docker-compose.prod.yml up -d

echo "Production services started."