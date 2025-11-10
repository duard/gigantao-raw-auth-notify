// src/modules/sankhya/tsiusu/tsiusu.types.ts
import { SankhyaPartnerDetails } from '../tgfpar/tgfpar.types'
import { SankhyaEmployeeDetails } from '../tfpfun/tfpfun.types'
import { SankhyaCompanyDetails } from '../tsiemp/tsiemp.types' // Import SankhyaCompanyDetails
import { SankhyaAddress } from '../../shared/sankhya.address.types'; // Import SankhyaAddress

export interface SankhyaUserDetails {
  CODUSU: number;
  NOMEUSU?: string; // Added NOMEUSU
  EMAIL?: string; // Added EMAIL
  INTERNO?: string; // Added INTERNO
  CPF?: string; // Added CPF
  ABREGAVETA?: string;
  ACCOUNTDHEXPIRA?: Date;
  ACCOUNTEMAIL?: string;
  ACCOUNTID?: string;
  ACCOUNTNOMEFOTO?: string;
  ACCOUNTPARTNER?: string;
  ACCOUNTTOKEN?: string;
  ACESSAFORMULAREL?: string;
  ACESSOPDVCANCITENS?: string;
  ACESSOPDVSANG?: string;
  ACESSOPDVSANGPDESP?: string;
  ACESSOPDVSUPR?: string;
  ACESSOVISUALCAB?: string;
  AD_AUTOPERAR1?: string;
  AD_AUTOPERAR2?: string;
  AD_AUTOPERAR3?: string;
  AD_AUTOPERAR4?: string;
  AD_AUTOPERAR5?: string;
  AD_AUTOPERAR6?: string;
  AD_AUTOPERAR7?: string;
  AD_AUTOSIRVO?: string;
  AD_CADEADOMOS?: string;
  AD_CODVEICULO?: number;
  AD_ENVIA_WPP?: string;
  AD_IDEXTERNO?: string;
  AD_MATMOSAIC?: string;
  AD_REABRIROS?: string;
  AD_RECEBENOTIFASO?: string;
  AD_RECEBENOTIFICACAO?: string;
  AD_TELEFONECORP?: string;
  ALTCTAFAT?: string;
  ALTCTAIMPBOL?: string;
  ALTORDCFECH?: string;
  APENASCOMPLIB?: string;
  APROVCOT?: string;
  ATUNUVERSAO?: string;
  AVISAVARPRECO?: string;
  BAIXADESP?: string;
  BAIXAREC?: string;
  CAIXA?: string;
  CODCARGAACESSO?: number;
  CODCENCUSPAD?: number;
  CODCONTATOPERFIL?: number;
  CODCTABCOINT?: number;
  CODCTABCOINT2?: number;
  CODEMP?: number;
  CODEMPNEGOC?: number;
  CODEQUIP?: number;
  CODETAPA?: number;
  CODFUNC?: number;
  CODGRUPO?: number;
  CODIDECONECT?: string;
  CODPARC?: number;
  CODPARCPERFIL?: number;
  AD_CARGO?: string;
  AD_FUNCAO?: string;
  partnerDetails?: SankhyaPartnerDetails; // Added partner details
  employeeDetails?: SankhyaEmployeeDetails; // Added employee details
  companyDetails?: SankhyaCompanyDetails; // Added company details
  address?: SankhyaAddress; // Added address
}
