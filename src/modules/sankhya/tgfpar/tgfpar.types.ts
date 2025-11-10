// src/modules/sankhya/tgfpar/tgfpar.types.ts
import { SankhyaAddress } from '../../shared/sankhya.address.types'; // Import SankhyaAddress

export interface SankhyaPartnerDetails {
  CODPARC: number;
  CGC_CPF?: string;
  RAZAOSOCIAL?: string;
  NOMEPARC?: string;
  address?: SankhyaAddress;
  // Add other relevant fields from TGFPAR as needed
}
