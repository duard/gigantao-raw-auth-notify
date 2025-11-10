#!/bin/bash
set -e

# -----------------------------
# Variáveis de conexão MySQL
# -----------------------------
MYSQL_HOST="mksck0o8sgok0kscssc4gk4w"
MYSQL_PORT="3306"
MYSQL_ROOT_USER="mysql"
MYSQL_ROOT_PASSWORD="hXvQcYwSnEqGLWV18BRjhPYpn8AFOhredMi42O69k7WIadboGok6kTAoLjxXTNiO"

APP_DB="gigantao_auth_notify_prod"
APP_USER="auth_api"
APP_PASSWORD="senha123"
SQL_FILE="./docker/mysql/init-prod-app.sql"

# -----------------------------
# Espera o MySQL ficar pronto
# -----------------------------
echo "Aguardando MySQL ficar pronto..."
until mysqladmin ping -h "$MYSQL_HOST" -P "$MYSQL_PORT" --silent; do
    echo "MySQL não está pronto ainda... esperando 2s"
    sleep 2
done

echo "MySQL pronto! Criando banco e usuário..."

# -----------------------------
# Criação do banco e usuário
# -----------------------------
cat <<SQL > /tmp/init.sql
CREATE DATABASE IF NOT EXISTS $APP_DB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS '$APP_USER'@'%' IDENTIFIED WITH caching_sha2_password BY '$APP_PASSWORD';
GRANT ALL PRIVILEGES ON $APP_DB.* TO '$APP_USER'@'%';
FLUSH PRIVILEGES;
SQL

mysql --ssl-mode=PREFERRED -h $MYSQL_HOST -P $MYSQL_PORT -u $MYSQL_ROOT_USER -p$MYSQL_ROOT_PASSWORD < /tmp/init.sql

echo "Banco e usuário criados com sucesso!"

# -----------------------------
# Criação das tabelas via SQL externo
# -----------------------------
echo "Criando tabelas no banco $APP_DB..."
mysql --ssl-mode=PREFERRED -h $MYSQL_HOST -P $MYSQL_PORT -u $APP_USER -p$APP_PASSWORD $APP_DB < $SQL_FILE

echo "Tabelas criadas com sucesso!"
