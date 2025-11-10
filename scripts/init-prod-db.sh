#!/bin/bash
set -e

# ---------------------------
# Variáveis de conexão MySQL
# ---------------------------
MYSQL_USER="auth_api"
MYSQL_PASSWORD="senha123"
MYSQL_HOST="192.168.1.9"       # IP do servidor MySQL do Coolify
MYSQL_PORT="3306"
MYSQL_DATABASE="gigantao_auth_notify_prod"

# Arquivo SQL com criação de tabelas
INIT_SQL_FILE="$(pwd)/docker/mysql/init-prod-app.sql"

echo "Conectando no MySQL provisionado pelo Coolify..."
docker run --rm -e MYSQL_PWD="$MYSQL_PASSWORD" mysql:8 \
    mysql --ssl-mode=REQUIRED -h "$MYSQL_HOST" -P "$MYSQL_PORT" -u "$MYSQL_USER" -e "SELECT 1;" > /dev/null

echo "Conexão bem-sucedida!"

echo "Criando tabelas no banco $MYSQL_DATABASE..."
docker run --rm -e MYSQL_PWD="$MYSQL_PASSWORD" -v $(pwd)/docker/mysql:/docker/mysql mysql:8 \
    mysql --ssl-mode=REQUIRED -h "$MYSQL_HOST" -P "$MYSQL_PORT" -u "$MYSQL_USER" "$MYSQL_DATABASE" \
    < /docker/mysql/init-prod-app.sql

echo "Tabelas criadas com sucesso!"
