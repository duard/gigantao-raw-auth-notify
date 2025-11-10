// src/modules/sankhya/auth/auth.types.ts
import { SankhyaAddress } from '../shared/sankhya.address.types'; // Import SankhyaAddress
import { SankhyaUserPermission } from '../tddper/tddper.types';
import { SankhyaEmployeeDetails } from '../tfpfun/tfpfun.types';
import { SankhyaPartnerDetails } from '../tgfpar/tgfpar.types';
import { SankhyaPersonDetails } from '../tgfpes/tgfpes.types'; // Import SankhyaPersonDetails
import { SankhyaCompanyDetails } from '../tsiemp/tsiemp.types'; // Import SankhyaCompanyDetails
import { SankhyaGroupDetails } from '../tsigru/tsigru.types'; // Import SankhyaGroupDetails

export interface CompactSankhyaUser {
  id: number; // CODUSU
  name: string; // NOMEUSU
  email: string; // EMAIL
  cpf?: string; // CPF
  internalCode?: string; // INTERNO

  companyId?: number; // CODEMP
  employeeId?: number; // CODFUNC
  partnerId?: number; // CODPARC
  jobTitle?: string; // AD_CARGO
  function?: string; // AD_FUNCAO

  partnerDetails?: SankhyaPartnerDetails;
  employeeDetails?: SankhyaEmployeeDetails;
  personDetails?: SankhyaPersonDetails;
  companyDetails?: SankhyaCompanyDetails;
  address?: SankhyaAddress;
  userAddress?: SankhyaAddress;

  permissionsDetails: string[]; // Renamed from permissions
  groupsDetails: SankhyaGroupDetails[]; // Renamed from groups
}
