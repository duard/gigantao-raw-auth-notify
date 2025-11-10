-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS `gigantao_auth_notify_prod`;

-- Create the dedicated user for the API and grant privileges
CREATE USER IF NOT EXISTS 'auth_api'@'%' IDENTIFIED WITH caching_sha2_password BY 'senha123';
GRANT ALL PRIVILEGES ON `gigantao_auth_notify_prod`.* TO 'auth_api'@'%';

FLUSH PRIVILEGES;
