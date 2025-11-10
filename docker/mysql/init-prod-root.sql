-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS `NotificationsDB_prod`;

-- Create the dedicated user for the API and grant privileges
CREATE USER IF NOT EXISTS 'mysql'@'%' IDENTIFIED WITH caching_sha2_password BY 'hXvQcYwSnEqGLWV18BRjhPYpn8AFOhredMi42O69k7WIadboGok6kTAoLjxXTNiO';
GRANT ALL PRIVILEGES ON `NotificationsDB_prod`.* TO 'mysql'@'%';

FLUSH PRIVILEGES;
