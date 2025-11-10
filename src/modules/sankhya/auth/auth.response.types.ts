// src/modules/sankhya/auth/auth.response.types.ts

import { SankhyaGroupDetails } from "../tsigru/tsigru.types";

export interface AuthTokenResponse {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
}

export interface AuthSessionResponse {
  sessionId: string;
  createdAt: string;
  lastAccess: string;
  ipAddress: string;
  userAgent: string;
}

export interface AuthUserDetailsResponse {
  id: number;
  username: string;
  email: string;
  fullName: string;
  cpf?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthEmployeeAddressResponse {
  CEP: string;
  NUMERO: string;
  COMPLEMENTO: string | null;
  BAIRRO: string;
  CODCID: number;
  NOMECID: string;
  UF: string;
}

export interface AuthEmployeeScaleResponse {
  tipo: string;
  horarioEntrada: string;
  horarioSaida: string;
  intervalo: string;
}

export interface AuthEmployeeResponse {
  employeeId: number;
  matricula: string;
  cargoCodigo: number;
  cargoDescricao: string;
  setorCodigo: number;
  setorDescricao: string;
  vinculo: string;
  dataAdmissao: string;
  dataNascimento: string;
  sexo: string;
  telefone: string;
  endereco: AuthEmployeeAddressResponse;
  empresaId: number;
  escala: AuthEmployeeScaleResponse;
}

export interface AuthCompanyAddressResponse {
  CEP: string;
  NUMERO: string;
  BAIRRO: string;
  NOMECID: string;
  UF: string;
}

export interface AuthCompanyResponse {
  id: number;
  name: string;
  cnpj: string;
  address: AuthCompanyAddressResponse;
}

export interface AuthResponse {
  token: AuthTokenResponse;
  session: AuthSessionResponse;
  userDetails: AuthUserDetailsResponse;
  employee?: AuthEmployeeResponse;
  company?: AuthCompanyResponse;
  permissionsDetails: string[];
  groupsDetails: SankhyaGroupDetails[];
}
