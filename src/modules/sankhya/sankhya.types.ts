export type SankhyaUser = {
  id: number
  sankhya_user_id: number
  username: string
  full_name: string | null
  access_control: string | null
  email: string | null
  password_hash: string | null
  level: number
  last_access_at: Date | null
  access_limit_at: Date | null
  sankhya_updated_at: Date
  is_cashier: string
  has_ecf: string
  central_nf_printer: string
  smtp_server: string | null
  smtp_type: string | null
  smtp_username: string | null
  smtp_password: string | null
  can_export_reports: string
  can_view_all_headers: string
  show_profit_analysis: string
  quote_approval_type: string
  user_name_ad: string | null
  cpf: string
  rg: string | null
  birth_date: Date | null
  function_code: number | null
  internal_code: string | null
  queue_name: string | null
  password_never_expires: string | null
  smtp_port: number
  smtp_security: string
  email_sol_lib: string | null
  not_sla_queue: string | null
  locale: string
  user_type: number
  phone: string | null
  address: string | null
  created_at: Date
  updated_at: Date
  deleted_at: Date | null
}

export type UserSession = {
  id: number
  user_id: number
  token: string
  created_at: Date
  expires_at: Date
}
