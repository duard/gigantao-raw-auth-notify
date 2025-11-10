-- Switch to the correct database
USE `NotificationsDB_prod`;

-- Tabelas
CREATE TABLE IF NOT EXISTS notifications (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NULL,
  tenant_id BIGINT UNSIGNED NULL,
  type VARCHAR(64) NOT NULL,
  category VARCHAR(64) DEFAULT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  data JSON NULL,
  parent_id BIGINT UNSIGNED NULL,
  root_id BIGINT UNSIGNED NULL,
  is_read BOOLEAN DEFAULT FALSE,
  is_archived BOOLEAN DEFAULT FALSE,
  status ENUM('PENDING','SENT','FAILED','PROCESSED') DEFAULT 'PENDING',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_user_created (user_id, created_at DESC),
  INDEX idx_type_status (type, status),
  INDEX idx_thread (root_id, parent_id)
);

CREATE TABLE IF NOT EXISTS user_sessions (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  token VARCHAR(512) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  INDEX idx_user_id (user_id),
  INDEX idx_token (token)
);

CREATE TABLE IF NOT EXISTS tgo_usuarios (
  id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  sankhya_user_id BIGINT UNSIGNED NOT NULL,
  username VARCHAR(20) NOT NULL UNIQUE,
  full_name VARCHAR(40) DEFAULT NULL,
  access_control CHAR(50) DEFAULT NULL,
  email VARCHAR(80) DEFAULT NULL,
  password_hash VARCHAR(250) DEFAULT NULL,
  level SMALLINT UNSIGNED DEFAULT 100,
  last_access_at DATETIME DEFAULT NULL,
  access_limit_at DATETIME DEFAULT NULL,
  sankhya_updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_cashier CHAR(1) DEFAULT 'N',
  has_ecf CHAR(1) DEFAULT 'N',
  central_nf_printer CHAR(1) DEFAULT 'S',
  smtp_server VARCHAR(80) DEFAULT NULL,
  smtp_type CHAR(1) DEFAULT 'N',
  smtp_username VARCHAR(80) DEFAULT NULL,
  smtp_password VARCHAR(250) DEFAULT NULL,
  can_export_reports CHAR(1) DEFAULT 'S',
  can_view_all_headers CHAR(1) DEFAULT 'T',
  show_profit_analysis CHAR(1) DEFAULT 'S',
  quote_approval_type CHAR(1) DEFAULT 'M',
  user_name_ad VARCHAR(50) DEFAULT NULL,
  cpf CHAR(11) NOT NULL,
  rg CHAR(15) DEFAULT NULL,
  birth_date DATETIME DEFAULT NULL,
  function_code SMALLINT DEFAULT NULL,
  internal_code VARCHAR(32) DEFAULT NULL,
  queue_name CHAR(30) DEFAULT NULL,
  password_never_expires CHAR(1) DEFAULT 'S',
  smtp_port SMALLINT DEFAULT 25,
  smtp_security CHAR(1) DEFAULT 'N',
  email_sol_lib VARCHAR(80) DEFAULT NULL,
  not_sla_queue CHAR(1) DEFAULT NULL,
  locale VARCHAR(8) DEFAULT 'PT_BR',
  user_type INT DEFAULT 0,
  phone VARCHAR(20) DEFAULT NULL,
  address VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL,
  UNIQUE KEY (sankhya_user_id)
);

CREATE TABLE IF NOT EXISTS integrator_state (
  id INT AUTO_INCREMENT PRIMARY KEY,
  table_name VARCHAR(255) NOT NULL,
  last_sync_timestamp DATETIME NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
