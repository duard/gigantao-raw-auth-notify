#!/bin/bash

# Load .env.production variables
if [ -f .env.production ]; then
    export $(grep -v '^#' .env.production | xargs)
else
    echo "Error: .env.production not found!"
    exit 1
fi

# Parse MYSQL_URL
# Example: mysql://user:password@host:port/database?ssl-mode=REQUIRED
MYSQL_USER=$(echo $MYSQL_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_PASSWORD=$(echo $MYSQL_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_HOST=$(echo $MYSQL_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_PORT=$(echo $MYSQL_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')
MYSQL_DATABASE=$(echo $MYSQL_URL | sed -n 's/.*\/\([^?]*\).*/\1/p')

# Fallback for user/password if parsing is incomplete (e.g., if URL format changes)
# These fallbacks should ideally not be needed if MYSQL_URL is always complete
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

# Execute the SQL script using a temporary Docker container with mysql client
# Pass password via MYSQL_PWD environment variable for security
MYSQL_PWD="$MYSQL_PASSWORD" docker run --rm \
  mysql:8 \
  mysql -h "$MYSQL_HOST" -P "$MYSQL_PORT" -u "$MYSQL_USER" "$MYSQL_DATABASE" < docker/mysql/init-prod.sql

if [ $? -eq 0 ]; then
    echo "Production database initialized successfully!"
else
    echo "Error: Failed to initialize production database."
    exit 1
fi
