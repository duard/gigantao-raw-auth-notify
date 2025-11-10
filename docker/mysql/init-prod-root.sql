-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS `gigantao_auth_notify_prod`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- Create or update the dedicated API user
CREATE USER IF NOT EXISTS 'auth_api'@'%' IDENTIFIED WITH caching_sha2_password BY 'senha123'
  REQUIRE NONE
  PASSWORD EXPIRE NEVER
  ACCOUNT UNLOCK;

-- Grant privileges to the API user
GRANT ALL PRIVILEGES ON `gigantao_auth_notify_prod`.* TO 'auth_api'@'%';
GRANT ALL PRIVILEGES ON `gigantao_auth_notify_prod`.* TO 'auth_api'@'::1';
GRANT ALL PRIVILEGES ON `gigantao_auth_notify_prod`.* TO 'auth_api'@'fd27:1fa:ace::6';

FLUSH PRIVILEGES;