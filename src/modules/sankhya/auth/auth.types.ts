// src/modules/sankhya/auth/auth.types.ts
import { SankhyaPartnerDetails } from '../tgfpar/tgfpar.types';
import { SankhyaEmployeeDetails } from '../tfpfun/tfpfun.types';

export interface CompactSankhyaUser {
  CODUSU: number;
  NOMEUSU: string;
  EMAIL: string;
  CODEMP?: number;
  CODFUNC?: number;
  CODPARC?: number;
  AD_CARGO?: string;
  AD_FUNCAO?: string;
  partnerDetails?: SankhyaPartnerDetails;
  employeeDetails?: SankhyaEmployeeDetails;
  permissions: string[]; // List of IDACESSO strings
  groups: number[]; // List of CODGRUPO numbers
}
