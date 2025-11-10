#!/bin/bash
set -e
set -x

# -----------------------------
# Load .env.production variables
# -----------------------------
if [ ! -f .env.production ]; then
    echo "Error: .env.production not found!"
    exit 1
fi

export $(grep -v '^#' .env.production | xargs)

# -----------------------------
# Parse MYSQL_MASTER_URL
# -----------------------------
MYSQL_MASTER_USER=$(echo $MYSQL_MASTER_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_MASTER_PASSWORD=$(echo $MYSQL_MASTER_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_MASTER_HOST=$(echo $MYSQL_MASTER_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_MASTER_PORT=$(echo $MYSQL_MASTER_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')

# -----------------------------
# Parse MYSQL_URL
# -----------------------------
MYSQL_APP_USER=$(echo $MYSQL_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_APP_PASSWORD=$(echo $MYSQL_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_APP_HOST=$(echo $MYSQL_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_APP_PORT=$(echo $MYSQL_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')
MYSQL_APP_DATABASE=$(echo $MYSQL_URL | sed -n 's/.*\/\([^?]*\).*/\1/p')

# Defaults
MYSQL_APP_USER=${MYSQL_APP_USER:-auth_api}
MYSQL_APP_PASSWORD=${MYSQL_APP_PASSWORD:-senha123}
MYSQL_APP_DATABASE=${MYSQL_APP_DATABASE:-gigantao_auth_notify_prod}

echo "-----------------------------"
echo "Initializing production DB..."
echo "Master: $MYSQL_MASTER_USER@$MYSQL_MASTER_HOST:$MYSQL_MASTER_PORT"
echo "App DB: $MYSQL_APP_DATABASE, User: $MYSQL_APP_USER"
echo "-----------------------------"

# -----------------------------
# Stage 1: Create database & user (idempotent)
# -----------------------------
docker run --rm -e MYSQL_PWD="$MYSQL_MASTER_PASSWORD" mysql:8 \
  mysql --ssl-mode=REQUIRED -h "$MYSQL_MASTER_HOST" -P "$MYSQL_MASTER_PORT" -u "$MYSQL_MASTER_USER" \
  -e "
  -- Create database if missing
  CREATE DATABASE IF NOT EXISTS \`$MYSQL_APP_DATABASE\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

  -- Create user if missing
  CREATE USER IF NOT EXISTS '$MYSQL_APP_USER'@'%' IDENTIFIED WITH caching_sha2_password BY '$MYSQL_APP_PASSWORD';

  -- Grant privileges (idempotent)
  GRANT ALL PRIVILEGES ON \`$MYSQL_APP_DATABASE\`.* TO '$MYSQL_APP_USER'@'%';
  FLUSH PRIVILEGES;
  "

echo "Stage 1: Database and user ensured!"

# -----------------------------
# Stage 2: Create tables (idempotent)
# -----------------------------
# The SQL file should use CREATE TABLE IF NOT EXISTS
docker run --rm -e MYSQL_PWD="$MYSQL_APP_PASSWORD" mysql:8 \
  mysql --ssl-mode=REQUIRED -h "$MYSQL_APP_HOST" -P "$MYSQL_APP_PORT" -u "$MYSQL_APP_USER" "$MYSQL_APP_DATABASE" \
  < docker/mysql/init-prod-app.sql

echo "Stage 2: Tables ensured!"
echo "Production database initialization complete!"
