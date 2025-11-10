#!/bin/bash
mysql --connect-timeout=10 -h 192.168.1.9 -P 3306 -u mysql -phXvQcYwSnEqGLWV18BRjhPYpn8AFOhredMi42O69k7WIadboGok6kTAoLjxXTNiO default --ssl-mode=REQUIRED -e "SELECT 1"
if [ $? -eq 0 ]; then
  echo "MySQL connection successful!"
else
  echo "MySQL connection failed."
fi