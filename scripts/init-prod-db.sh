#!/bin/bash
set -e

# Variáveis do MySQL (externo Coolify)
MYSQL_MASTER_URL="mysql://mysql:hXvQcYwSnEqGLWV18BRjhPYpn8AFOhredMi42O69k7WIadboGok6kTAoLjxXTNiO@mksck0o8sgok0kscssc4gk4w:3306/default?ssl-mode=REQUIRED"
MYSQL_APP_URL="mysql://auth_api:senha123@mksck0o8sgok0kscssc4gk4w:3306/gigantao_auth_notify_prod?ssl-mode=REQUIRED"

# Parse master
MYSQL_MASTER_USER=$(echo $MYSQL_MASTER_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_MASTER_PASSWORD=$(echo $MYSQL_MASTER_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_MASTER_HOST=$(echo $MYSQL_MASTER_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_MASTER_PORT=$(echo $MYSQL_MASTER_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')

# Parse app
MYSQL_APP_USER=$(echo $MYSQL_APP_URL | sed -n 's/mysql:\/\/\([^:]*\):.*/\1/p')
MYSQL_APP_PASSWORD=$(echo $MYSQL_APP_URL | sed -n 's/mysql:\/\/[^:]*:\([^@]*\).*@.*/\1/p')
MYSQL_APP_HOST=$(echo $MYSQL_APP_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
MYSQL_APP_PORT=$(echo $MYSQL_APP_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')
MYSQL_APP_DATABASE=$(echo $MYSQL_APP_URL | sed -n 's/.*\/\([^?]*\).*/\1/p')

echo "Conectando no MySQL externo do Coolify..."

# --- Cria DB e usuário ---
docker run --rm -e MYSQL_PWD="$MYSQL_MASTER_PASSWORD" mysql:8 \
    mysql --ssl-mode=REQUIRED -h "$MYSQL_MASTER_HOST" -P "$MYSQL_MASTER_PORT" -u "$MYSQL_MASTER_USER" -e "
CREATE DATABASE IF NOT EXISTS $MYSQL_APP_DATABASE CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS '$MYSQL_APP_USER'@'%' IDENTIFIED WITH caching_sha2_password BY '$MYSQL_APP_PASSWORD';
GRANT ALL PRIVILEGES ON $MYSQL_APP_DATABASE.* TO '$MYSQL_APP_USER'@'%';
FLUSH PRIVILEGES;
"

# --- Cria tabelas ---
docker run --rm -e MYSQL_PWD="$MYSQL_APP_PASSWORD" -v $(pwd)/docker/mysql:/docker/mysql mysql:8 \
    mysql --ssl-mode=REQUIRED -h "$MYSQL_APP_HOST" -P "$MYSQL_APP_PORT" -u "$MYSQL_APP_USER" "$MYSQL_APP_DATABASE" \
    < /docker/mysql/init-prod-app.sql

echo "Banco de dados e tabelas criados com sucesso!"
