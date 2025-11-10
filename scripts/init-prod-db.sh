#!/bin/bash
set -e

# Variáveis do MySQL (root)
MYSQL_MASTER_URL="mysql://root:qDLIJoHcOa5wt5Zx5X9xwqEvdcyFU8DBg6LkqJLwzYayrtZ786PUnD9wvLHfJZh9@192.168.1.9:3306/default?ssl-mode=REQUIRED"

# Variáveis do App
MYSQL_APP_URL="mysql://auth_api:senha123@192.168.1.9:3306/gigantao_auth_notify_prod?ssl-mode=REQUIRED"

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

# Arquivo SQL com criação de tabelas
INIT_SQL_FILE="$(pwd)/docker/mysql/init-prod-app.sql"

echo "Testando conexão com o banco de dados como root..."
if docker run --rm -e MYSQL_PWD="$MYSQL_MASTER_PASSWORD" mysql:8 \
    mysql --connect-timeout=10 --ssl-mode=REQUIRED -h "$MYSQL_MASTER_HOST" -P "$MYSQL_MASTER_PORT" -u "$MYSQL_MASTER_USER" -e "SELECT 1" > /dev/null; then
    echo "Conexão com o banco de dados (root) bem-sucedida."
else
    echo "Falha ao conectar no banco de dados como root. Verifique as credenciais e a conectividade."
    exit 1
fi

# --- Cria DB e usuário ---
echo "Criando banco de dados $MYSQL_APP_DATABASE..."
docker run --rm -e MYSQL_PWD="$MYSQL_MASTER_PASSWORD" mysql:8 \
    mysql --ssl-mode=REQUIRED -h "$MYSQL_MASTER_HOST" -P "$MYSQL_MASTER_PORT" -u "$MYSQL_MASTER_USER" -e "CREATE DATABASE IF NOT EXISTS $MYSQL_APP_DATABASE CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

echo "Criando usuário $MYSQL_APP_USER..."
docker run --rm -e MYSQL_PWD="$MYSQL_MASTER_PASSWORD" mysql:8 \
    mysql --ssl-mode=REQUIRED -h "$MYSQL_MASTER_HOST" -P "$MYSQL_MASTER_PORT" -u "$MYSQL_MASTER_USER" -e "CREATE USER IF NOT EXISTS '$MYSQL_APP_USER'@'%' IDENTIFIED WITH caching_sha2_password BY '$MYSQL_APP_PASSWORD';"

echo "Concedendo privilégios para $MYSQL_APP_USER em $MYSQL_APP_DATABASE..."
docker run --rm -e MYSQL_PWD="$MYSQL_MASTER_PASSWORD" mysql:8 \
    mysql --ssl-mode=REQUIRED -h "$MYSQL_MASTER_HOST" -P "$MYSQL_MASTER_PORT" -u "$MYSQL_MASTER_USER" -e "GRANT ALL PRIVILEGES ON $MYSQL_APP_DATABASE.* TO '$MYSQL_APP_USER'@'%';"

echo "Atualizando privilégios..."
docker run --rm -e MYSQL_PWD="$MYSQL_MASTER_PASSWORD" mysql:8 \
    mysql --ssl-mode=REQUIRED -h "$MYSQL_MASTER_HOST" -P "$MYSQL_MASTER_PORT" -u "$MYSQL_MASTER_USER" -e "FLUSH PRIVILEGES;"

# --- Cria tabelas ---
echo "Criando tabelas no banco de dados $MYSQL_APP_DATABASE..."
docker run --rm -e MYSQL_PWD="$MYSQL_APP_PASSWORD" -v $(pwd)/docker/mysql:/docker/mysql mysql:8 \
    mysql --ssl-mode=REQUIRED -h "$MYSQL_APP_HOST" -P "$MYSQL_APP_PORT" -u "$MYSQL_APP_USER" "$MYSQL_APP_DATABASE" \
    < "$INIT_SQL_FILE"

echo "Banco de dados e tabelas criados com sucesso!"