// src/modules/sankhya/tgfpes/tgfpes.types.ts
import { SankhyaAddress } from '../shared/sankhya.address.types'; // Import SankhyaAddress

export interface SankhyaPersonDetails {
  CODPESSOA: number;
  NOMEFANTASIA?: string;
  RAZAOSOCIAL?: string;
  CGC_CPF?: string;
  address?: SankhyaAddress;
  // Add other relevant fields from TGFPES as needed
}
