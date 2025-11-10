#!/bin/bash
set -e
set -x

# -------------------------------
# Load .env.production variables
# -------------------------------
if [ -f .env.production ]; then
    export $(grep -v '^#' .env.production | xargs)
else
    echo "Error: .env.production not found!"
    exit 1
fi

# -------------------------------
# Parse MYSQL_MASTER_URL (master user to create DB & user)
# -------------------------------
MYSQL_MASTER_USER=$(echo $MYSQL_MASTER_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_MASTER_PASSWORD=$(echo $MYSQL_MASTER_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_MASTER_HOST=$(echo $MYSQL_MASTER_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_MASTER_PORT=$(echo $MYSQL_MASTER_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')

# -------------------------------
# Parse MYSQL_URL (app user to create tables)
# -------------------------------
MYSQL_APP_USER=$(echo $MYSQL_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_APP_PASSWORD=$(echo $MYSQL_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_APP_HOST=$(echo $MYSQL_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_APP_PORT=$(echo $MYSQL_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')
MYSQL_APP_DATABASE=$(echo $MYSQL_URL | sed -n 's/.*\/\([^?]*\).*/\1/p')

# Defaults if missing
MYSQL_APP_USER=${MYSQL_APP_USER:-auth_api}
MYSQL_APP_PASSWORD=${MYSQL_APP_PASSWORD:-senha123}
MYSQL_APP_DATABASE=${MYSQL_APP_DATABASE:-gigantao_auth_notify_prod}

echo "Attempting to initialize production database..."

# -------------------------------
# Stage 1: Create database and API user
# -------------------------------
echo "Stage 1: Creating database and application user..."
docker run --rm -e MYSQL_PWD="$MYSQL_MASTER_PASSWORD" mysql:8 \
  mysql --ssl-mode=REQUIRED \
  -h "$MYSQL_MASTER_HOST" -P "$MYSQL_MASTER_PORT" -u "$MYSQL_MASTER_USER" \
  < docker/mysql/init-prod-root.sql

echo "Stage 1 completed successfully."

# -------------------------------
# Stage 2: Create tables
# -------------------------------
echo "Stage 2: Creating tables..."
docker run --rm -e MYSQL_PWD="$MYSQL_APP_PASSWORD" mysql:8 \
  mysql --ssl-mode=REQUIRED \
  -h "$MYSQL_APP_HOST" -P "$MYSQL_APP_PORT" -u "$MYSQL_APP_USER" "$MYSQL_APP_DATABASE" \
  < docker/mysql/init-prod-app.sql

echo "Production database initialized successfully!"
