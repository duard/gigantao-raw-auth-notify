#!/bin/bash

# Load .env.production variables
if [ -f .env.production ]; then
    export $(grep -v '^#' .env.production | xargs)
else
    echo "Error: .env.production not found!"
    exit 1
fi

# --- Parse MYSQL_ROOT_URL for root connection ---
# Example: mysql://root:root_password@host:port/
MYSQL_ROOT_USER=$(echo $MYSQL_ROOT_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_ROOT_PASSWORD=$(echo $MYSQL_ROOT_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_ROOT_HOST=$(echo $MYSQL_ROOT_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_ROOT_PORT=$(echo $MYSQL_ROOT_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')

# Fallback for root user/password
if [ -z "$MYSQL_ROOT_USER" ]; then
    MYSQL_ROOT_USER="root"
fi
# MYSQL_ROOT_PASSWORD should always be provided by the user for root access

# --- Parse MYSQL_URL for application user connection ---
# Example: mysql://user:password@host:port/database?ssl-mode=REQUIRED
MYSQL_APP_USER=$(echo $MYSQL_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_APP_PASSWORD=$(echo $MYSQL_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_APP_HOST=$(echo $MYSQL_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_APP_PORT=$(echo $MYSQL_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')
MYSQL_APP_DATABASE=$(echo $MYSQL_URL | sed -n 's/.*\/\([^?]*\).*/\1/p')

# Fallback for app user/password
if [ -z "$MYSQL_APP_USER" ]; then
    MYSQL_APP_USER="mysql"
fi
if [ -z "$MYSQL_APP_PASSWORD" ]; then
    MYSQL_APP_PASSWORD="hXvQcYwSnEqGLWV18BRjhPYpn8AFOhredMi42O69k7WIadboGok6kTAoLjxXTNiO"
fi

echo "Attempting to initialize production database..."

# --- Stage 1: Connect as root to create database and user ---
echo "Stage 1: Creating database and user with root privileges..."
echo "Root Host: $MYSQL_ROOT_HOST"
echo "Root Port: $MYSQL_ROOT_PORT"
echo "Root User: $MYSQL_ROOT_USER"

docker run --rm -e MYSQL_PWD="$MYSQL_ROOT_PASSWORD" \
  mysql:8 \
  mysql -h "$MYSQL_ROOT_HOST" -P "$MYSQL_ROOT_PORT" -u "$MYSQL_ROOT_USER" < docker/mysql/init-prod-root.sql

if [ $? -ne 0 ]; then
    echo "Error: Stage 1 (root initialization) failed."
    exit 1
fi
echo "Stage 1: Database and user created successfully."

# --- Stage 2: Connect as application user to create tables ---
echo "Stage 2: Creating tables with application user privileges..."
echo "App Host: $MYSQL_APP_HOST"
echo "App Port: $MYSQL_APP_PORT"
echo "App User: $MYSQL_APP_USER"
echo "App Database: $MYSQL_APP_DATABASE"

docker run --rm -e MYSQL_PWD="$MYSQL_APP_PASSWORD" \
  mysql:8 \
  mysql -h "$MYSQL_APP_HOST" -P "$MYSQL_APP_PORT" -u "$MYSQL_APP_USER" "$MYSQL_APP_DATABASE" < docker/mysql/init-prod-app.sql

if [ $? -eq 0 ]; then
    echo "Production database initialized successfully!"
else
    echo "Error: Stage 2 (table creation) failed."
    exit 1
fi
