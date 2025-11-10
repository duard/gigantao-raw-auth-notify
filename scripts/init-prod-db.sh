#!/bin/bash

# Load .env.production variables
if [ -f .env.production ]; then
    export $(grep -v '^#' .env.production | xargs)
else
    echo "Error: .env.production not found!"
    exit 1
fi

# Parse MYSQL_URL
MYSQL_HOST=$(echo $MYSQL_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_PORT=$(echo $MYSQL_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')
MYSQL_USER=$(echo $MYSQL_URL | sed -n 's/mysql:\([^@]*\).*@.*/\1/p' | sed 's/:.*//')
MYSQL_PASSWORD=$(echo $MYSQL_URL | sed -n 's/mysql:[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_DATABASE=$(echo $MYSQL_URL | sed -n 's/.*\/\([^?]*\).*/\1/p')

# Fallback for user/password if parsing is incomplete (e.g., if URL format changes)
if [ -z "$MYSQL_USER" ]; then
    MYSQL_USER="mysql" # Default user from the example URL
fi
if [ -z "$MYSQL_PASSWORD" ]; then
    MYSQL_PASSWORD="hXvQcYwSnEqGLWV18BRjhPYpn8AFOhredMi42O69k7WIadboGok6kTAoLjxXTNiO" # Default password from the example URL
fi

echo "Attempting to initialize production database..."
echo "Host: $MYSQL_HOST"
echo "Port: $MYSQL_PORT"
echo "User: $MYSQL_USER"
echo "Database: $MYSQL_DATABASE"

# Execute the SQL script
mysql -h "$MYSQL_HOST" -P "$MYSQL_PORT" -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" < docker/mysql/init-prod.sql

if [ $? -eq 0 ]; then
    echo "Production database initialized successfully!"
else
    echo "Error: Failed to initialize production database."
    exit 1
fi
