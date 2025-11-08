// src/modules/sankhya/auth/auth.types.ts
import { SankhyaPartnerDetails } from '../tgfpar/tgfpar.types';
import { SankhyaEmployeeDetails } from '../tfpfun/tfpfun.types';
import { SankhyaGroupDetails } from '../tsigru/tsigru.types'; // Import SankhyaGroupDetails

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
  groups: SankhyaGroupDetails[]; // List of SankhyaGroupDetails objects
}
