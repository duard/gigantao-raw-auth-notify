-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS `gigantao_auth_notify_prod`;

-- Create the dedicated user for the API and grant privileges
CREATE USER IF NOT EXISTS 'auth_api'@'%' IDENTIFIED WITH caching_sha2_password BY 'senha123';
GRANT ALL PRIVILEGES ON `gigantao_auth_notify_prod`.* TO 'auth_api'@'%';
GRANT ALL PRIVILEGES ON `gigantao_auth_notify_prod`.* TO 'auth_api'@'10.0.1.6';
GRANT ALL PRIVILEGES ON `gigantao_auth_notify_prod`.* TO 'auth_api'@'fd27:1fa:ace::6';
GRANT ALL PRIVILEGES ON `gigantao_auth_notify_prod`.* TO 'auth_api'@'192.168.1.9';

FLUSH PRIVILEGES;
