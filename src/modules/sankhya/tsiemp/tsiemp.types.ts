import { SankhyaAddress } from "../shared/sankhya.address.types";

export interface SankhyaCompanyDetails {
  CODEMP: number;
  NOMEFANTASIA?: string;
  RAZAOSOCIAL?: string;
  CGC?: string;
  INSCESTAD?: string;
  INSCMUN?: string;
  TELEFONE?: string;
  EMAIL?: string;
  CEP?: string;
  NUMEND?: string;
  COMPLEMENTO?: string;
  CODBAI?: number;
  CODCID?: number;
  CODMUN?: number; // This is the same as CODCID in this context
  NOMECID?: string;
  UF_ABBR?: string;
  UF_NAME?: string;
  BAIRRO?: string;
  address?: SankhyaAddress;
}
