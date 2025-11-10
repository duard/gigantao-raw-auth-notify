#!/bin/bash
set -e

# ------------------------------
# Variáveis de conexão MySQL
# ------------------------------

# Usuário root
MYSQL_ROOT_USER="root"
MYSQL_ROOT_PASSWORD="qDLIJoHcOa5wt5Zx5Zx5X9xwqEvdcyFU8DBg6LkqJLwzYayrtZ786PUnD9wvLHfJZh9"
MYSQL_HOST="192.168.1.9"
MYSQL_PORT="3306"

# Usuário da aplicação
MYSQL_APP_USER="auth_api"
MYSQL_APP_PASSWORD="senha123"
MYSQL_APP_DATABASE="gigantao_auth_notify_prod"

# Caminho do arquivo SQL para criar tabelas
INIT_SQL_FILE="$(pwd)/docker/mysql/init-prod-app.sql"

echo "Conectando como root no MySQL externo..."
docker run --rm -e MYSQL_PWD="$MYSQL_ROOT_PASSWORD" mysql:8 \
    mysql --ssl-mode=REQUIRED -h "$MYSQL_HOST" -P "$MYSQL_PORT" -u "$MYSQL_ROOT_USER" -e "SELECT 1;" > /dev/null
echo "Conexão como root OK!"

# Criar usuário da aplicação (idempotente)
echo "Criando usuário '$MYSQL_APP_USER' e dando todos os privilégios no banco '$MYSQL_APP_DATABASE'..."
docker run --rm -e MYSQL_PWD="$MYSQL_ROOT_PASSWORD" mysql:8 \
    mysql --ssl-mode=REQUIRED -h "$MYSQL_HOST" -P "$MYSQL_PORT" -u "$MYSQL_ROOT_USER" -e "
CREATE DATABASE IF NOT EXISTS $MYSQL_APP_DATABASE CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS '$MYSQL_APP_USER'@'%' IDENTIFIED WITH caching_sha2_password BY '$MYSQL_APP_PASSWORD';
GRANT ALL PRIVILEGES ON $MYSQL_APP_DATABASE.* TO '$MYSQL_APP_USER'@'%';
FLUSH PRIVILEGES;
"

echo "Usuário criado e privilégios concedidos."

# Criar tabelas usando o usuário da aplicação
echo "Criando tabelas em '$MYSQL_APP_DATABASE'..."
docker run --rm -e MYSQL_PWD="$MYSQL_APP_PASSWORD" -v $(pwd)/docker/mysql:/docker/mysql mysql:8 \
    mysql --ssl-mode=REQUIRED -h "$MYSQL_HOST" -P "$MYSQL_PORT" -u "$MYSQL_APP_USER" "$MYSQL_APP_DATABASE" \
    < /docker/mysql/init-prod-app.sql

echo "Banco de dados e tabelas criados com sucesso!"
