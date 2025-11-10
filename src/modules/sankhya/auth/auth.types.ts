// src/modules/sankhya/auth/auth.types.ts
import { SankhyaAddress } from '../shared/sankhya.address.types'; // Import SankhyaAddress
import { SankhyaUserPermission } from '../tddper/tddper.types';
import { SankhyaEmployeeDetails } from '../tfpfun/tfpfun.types';
import { SankhyaPartnerDetails } from '../tgfpar/tgfpar.types';
import { SankhyaPersonDetails } from '../tgfpes/tgfpes.types'; // Import SankhyaPersonDetails
import { SankhyaCompanyDetails } from '../tsiemp/tsiemp.types'; // Import SankhyaCompanyDetails
import { SankhyaGroupDetails } from '../tsigru/tsigru.types'; // Import SankhyaGroupDetails

export interface CompactSankhyaUser {
  CODUSU: number;
  NOMEUSU: string;
  EMAIL: string;
  INTERNO?: string; // Added INTERNO
  CPF?: string; // Added CPF
  CODEMP?: number;
  CODFUNC?: number;
  CODPARC?: number;
  AD_CARGO?: string;
  AD_FUNCAO?: string;
  partnerDetails?: SankhyaPartnerDetails;
  employeeDetails?: SankhyaEmployeeDetails;
  personDetails?: SankhyaPersonDetails; // Added person details
  companyDetails?: SankhyaCompanyDetails;
  address?: SankhyaAddress; // Added address
  userAddress?: SankhyaAddress; // Address for the user, potentially from partner details
  permissions: string[]; // List of IDACESSO strings
  groups: SankhyaGroupDetails[]; // List of SankhyaGroupDetails objects
}
