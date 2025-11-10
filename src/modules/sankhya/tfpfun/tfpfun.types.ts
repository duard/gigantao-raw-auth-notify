// src/modules/sankhya/tfpfun/tfpfun.types.ts
import { SankhyaAddress } from '../../shared/sankhya.address.types';

export interface SankhyaEmployeeDetails {
  CODFUNC: number;
  NOMEFUNC?: string;
  CPF?: string;
  PERTENCEDP?: string;
  NUMEND?: string;
  COMPLEMENTO?: string;
  CEP?: string;
  TELEFONE?: string;
  EMAIL?: string;
  CODBAI?: number;
  CODCID?: number;
  NOMECID?: string;
  UF_ABBR?: string;
  UF_NAME?: string;
  BAIRRO?: string;
  address?: SankhyaAddress;
}
