#!/bin/bash

# Load .env.production variables
if [ -f .env.production ]; then
    export $(grep -v '^#' .env.production | xargs)
else
    echo "Error: .env.production not found!"
    exit 1
fi

# --- Parse MYSQL_MASTER_URL for master connection (to create DB and app user) ---
# Example: mysql://master_user:master_password@host:port/
MYSQL_MASTER_USER=$(echo $MYSQL_MASTER_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_MASTER_PASSWORD=$(echo $MYSQL_MASTER_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_MASTER_HOST=$(echo $MYSQL_MASTER_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_MASTER_PORT=$(echo $MYSQL_MASTER_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')

# Fallback for master user/password (should be provided by user)
if [ -z "$MYSQL_MASTER_USER" ]; then
    echo "Error: MYSQL_MASTER_USER not found in MYSQL_MASTER_URL. Please check .env.production."
    exit 1
fi
if [ -z "$MYSQL_MASTER_PASSWORD" ]; then
    echo "Error: MYSQL_MASTER_PASSWORD not found in MYSQL_MASTER_URL. Please check .env.production."
    exit 1
fi


# --- Parse MYSQL_URL for application user connection (to create tables) ---
# Example: mysql://user:password@host:port/database?ssl-mode=REQUIRED
MYSQL_APP_USER=$(echo $MYSQL_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_APP_PASSWORD=$(echo $MYSQL_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_APP_HOST=$(echo $MYSQL_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_APP_PORT=$(echo $MYSQL_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')
MYSQL_APP_DATABASE=$(echo $MYSQL_URL | sed -n 's/.*\/\([^?]*\).*/\1/p')

# Fallback for app user/password
if [ -z "$MYSQL_APP_USER" ]; then
    MYSQL_APP_USER="auth_api"
fi
if [ -z "$MYSQL_APP_PASSWORD" ]; then
    MYSQL_APP_PASSWORD="senha123"
fi
if [ -z "$MYSQL_APP_DATABASE" ]; then
    MYSQL_APP_DATABASE="gigantao_auth_notify_prod"
fi


echo "Attempting to initialize production database..."

# --- Stage 1: Connect as master user to create database and application user ---
echo "Stage 1: Creating database and application user with master privileges..."
echo "Master Host: $MYSQL_MASTER_HOST"
echo "Master Port: $MYSQL_MASTER_PORT"
echo "Master User: $MYSQL_MASTER_USER"

docker run --rm -e MYSQL_PWD="$MYSQL_MASTER_PASSWORD" \
  mysql:8 \
  mysql -h "$MYSQL_MASTER_HOST" -P "$MYSQL_MASTER_PORT" -u "$MYSQL_MASTER_USER" < docker/mysql/init-prod-root.sql

if [ $? -ne 0 ]; then
    echo "Error: Stage 1 (master initialization) failed."
    exit 1
fi
echo "Stage 1: Database and application user created successfully."

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
