#!/bin/bash
set -e

# Configuração do MySQL (ajuste conforme seu docker-compose)
MYSQL_HOST="192.168.1.9"
MYSQL_PORT="3306"
MYSQL_ROOT_USER="mysql"
MYSQL_ROOT_PASSWORD="hXvQcYwSnEqGLWV18BRjhPYpn8AFOhredMi42O69k7WIadboGok6kTAoLjxXTNiO"

# Usuário e database da aplicação
APP_DB="gigantao_auth_notify_prod"
APP_USER="auth_api"
APP_PASSWORD="senha123"

# Caminho do arquivo SQL (tabelas)
SQL_FILE="./docker/mysql/init-prod-app.sql"

echo "Conectando no MySQL e inicializando banco de dados..."

# 1️⃣ Criação de banco e usuários
mysql --ssl-mode=REQUIRED -h $MYSQL_HOST -P $MYSQL_PORT -u $MYSQL_ROOT_USER -p$MYSQL_ROOT_PASSWORD <<EOF
CREATE DATABASE IF NOT EXISTS $APP_DB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS '$APP_USER'@'%' IDENTIFIED WITH caching_sha2_password BY '$APP_PASSWORD';
GRANT ALL PRIVILEGES ON $APP_DB.* TO '$APP_USER'@'%';
FLUSH PRIVILEGES;
EOF

echo "Banco e usuário criados com sucesso."

# 2️⃣ Criação das tabelas
mysql --ssl-mode=REQUIRED -h $MYSQL_HOST -P $MYSQL_PORT -u $APP_USER -p$APP_PASSWORD $APP_DB < $SQL_FILE

echo "Tabelas criadas com sucesso!"
