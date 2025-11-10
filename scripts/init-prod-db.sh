#!/bin/bash
set -euo pipefail
set -x

# Load .env.production
if [ ! -f .env.production ]; then
    echo "Error: .env.production not found!"
    exit 1
fi

export $(grep -v '^#' .env.production | xargs)

# --- Parse MASTER connection ---
MYSQL_MASTER_USER=$(echo $MYSQL_MASTER_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_MASTER_PASSWORD=$(echo $MYSQL_MASTER_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_MASTER_HOST=$(echo $MYSQL_MASTER_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_MASTER_PORT=$(echo $MYSQL_MASTER_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')

# --- Parse APP connection ---
MYSQL_APP_USER=$(echo $MYSQL_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_APP_PASSWORD=$(echo $MYSQL_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_APP_HOST=$(echo $MYSQL_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_APP_PORT=$(echo $MYSQL_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')
MYSQL_APP_DATABASE=$(echo $MYSQL_URL | sed -n 's/.*\/\([^?]*\).*/\1/p')

# --- Stage 1: Create database and user ---
echo "Stage 1: Creating database and application user..."
mysql --ssl-mode=REQUIRED \
      -h "$MYSQL_MASTER_HOST" -P "$MYSQL_MASTER_PORT" \
      -u "$MYSQL_MASTER_USER" -p"$MYSQL_MASTER_PASSWORD" <<SQL
CREATE DATABASE IF NOT EXISTS \`$MYSQL_APP_DATABASE\`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS '$MYSQL_APP_USER'@'%' IDENTIFIED WITH caching_sha2_password BY '$MYSQL_APP_PASSWORD';
GRANT ALL PRIVILEGES ON \`$MYSQL_APP_DATABASE\`.* TO '$MYSQL_APP_USER'@'%';

FLUSH PRIVILEGES;
SQL

echo "Stage 1 completed."

# --- Stage 2: Create tables ---
echo "Stage 2: Creating tables..."
mysql --ssl-mode=REQUIRED \
      -h "$MYSQL_APP_HOST" -P "$MYSQL_APP_PORT" \
      -u "$MYSQL_APP_USER" -p"$MYSQL_APP_PASSWORD" "$MYSQL_APP_DATABASE" < docker/mysql/init-prod-app.sql

echo "Production database initialized successfully!"
