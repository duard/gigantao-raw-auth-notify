import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { AdAcertoviagemEntity } from './aD_ACERTOVIAGEM.entity';
import { AdGigpontosEntity } from './aD_GIGPONTOS.entity';
import { AdSirvoEntity } from './aD_SIRVO.entity';
import { AdSirvomotEntity } from './aD_SIRVOMOT.entity';
import { AudittfpageEntity } from './aUDITTFPAGE.entity';
import { AudittfpbasEntity } from './aUDITTFPBAS.entity';
import { AudittfpferEntity } from './aUDITTFPFER.entity';
import { AudittfpfolEntity } from './aUDITTFPFOL.entity';
import { AudittfpmovEntity } from './aUDITTFPMOV.entity';
import { TfpacdEntity } from './tFPACD.entity';
import { TfpacuEntity } from './tFPACU.entity';
import { TfpaenEntity } from './tFPAEN.entity';
import { TfpafdtEntity } from './tFPAFDT.entity';
import { TfpageEntity } from './tFPAGE.entity';
import { TfpagnocatrfEntity } from './tFPAGNOCATRF.entity';
import { TfpajuEntity } from './tFPAJU.entity';
import { TfpalunoEntity } from './tFPALUNO.entity';
import { TfpamfEntity } from './tFPAMF.entity';
import { TfpapoEntity } from './tFPAPO.entity';
import { TfpapufaeEntity } from './tFPAPUFAE.entity';
import { TfpasoEntity } from './tFPASO.entity';
import { TfpatrEntity } from './tFPATR.entity';
import { TfpbasEntity } from './tFPBAS.entity';
import { TfpbastesteEntity } from './tFPBASTESTE.entity';
import { TfpbhmEntity } from './tFPBHM.entity';
import { TfpbhmcpEntity } from './tFPBHMCP.entity';
import { TfpbhsEntity } from './tFPBHS.entity';
import { TfpbhtEntity } from './tFPBHT.entity';
import { TfpbiodmpEntity } from './tFPBIODMP.entity';
import { TfpcatrEntity } from './tFPCATR.entity';
import { TfpchqEntity } from './tFPCHQ.entity';
import { TfpcmvEntity } from './tFPCMV.entity';
import { TfpdigEntity } from './tFPDIG.entity';
import { TfpdpdEntity } from './tFPDPD.entity';
import { TfpdpfEntity } from './tFPDPF.entity';
import { TfperrferEntity } from './tFPERRFER.entity';
import { TfpescfaeEntity } from './tFPESCFAE.entity';
import { TfpestEntity } from './tFPEST.entity';
import { TfpexmEntity } from './tFPEXM.entity';
import { TfpfbeEntity } from './tFPFBE.entity';
import { TfpfbhEntity } from './tFPFBH.entity';
import { TfpfcpuEntity } from './tFPFCPU.entity';
import { TfpfctiEntity } from './tFPFCTI.entity';
import { TfpfdefEntity } from './tFPFDEF.entity';
import { TfpfdfEntity } from './tFPFDF.entity';
import { TfpferEntity } from './tFPFER.entity';
import { TfpffuEntity } from './tFPFFU.entity';
import { TfpfpoEntity } from './tFPFPO.entity';
import { TfpftrcEntity } from './tFPFTRC.entity';
import { TfpftrfEntity } from './tFPFTRF.entity';
import { TfpctgEntity } from './tFPCTG.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsipaiEntity } from './tSIPAI.entity';
import { TfpgcbEntity } from './tFPGCB.entity';
import { TfptriburendbenefextEntity } from './tFPTRIBURENDBENEFEXT.entity';
import { TsiageEntity } from './tSIAGE.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TfpfcoEntity } from './tFPFCO.entity';
import { TfpghrEntity } from './tFPGHR.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TrsreqEntity } from './tRSREQ.entity';
import { TfptprEntity } from './tFPTPR.entity';
import { TfpponraioEntity } from './tFPPONRAIO.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpltrEntity } from './tFPLTR.entity';
import { TfpcatEntity } from './tFPCAT.entity';
import { TgpnivEntity } from './tGPNIV.entity';
import { TfpcghEntity } from './tFPCGH.entity';
import { TfpsinEntity } from './tFPSIN.entity';
import { TfpconEntity } from './tFPCON.entity';
import { TfpcrrEntity } from './tFPCRR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TfppssEntity } from './tFPPSS.entity';
import { TsiufsEntity } from './tSIUFS.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TfphfuEntity } from './tFPHFU.entity';
import { TfphsafEntity } from './tFPHSAF.entity';
import { TfphtrEntity } from './tFPHTR.entity';
import { TfplfuEntity } from './tFPLFU.entity';
import { TfplotEntity } from './tFPLOT.entity';
import { TfpmedEntity } from './tFPMED.entity';
import { TfpmovEntity } from './tFPMOV.entity';
import { TfpmovantEntity } from './tFPMOVANT.entity';
import { TfpmrhEntity } from './tFPMRH.entity';
import { TfpnewmedEntity } from './tFPNEWMED.entity';
import { TfpnotificEntity } from './tFPNOTIFIC.entity';
import { TfpocoEntity } from './tFPOCO.entity';
import { TfpocorjsEntity } from './tFPOCORJS.entity';
import { TfppantEntity } from './tFPPANT.entity';
import { TfpplsEntity } from './tFPPLS.entity';
import { TfpponEntity } from './tFPPON.entity';
import { TfpponbatidasEntity } from './tFPPONBATIDAS.entity';
import { TfpponfechamentoEntity } from './tFPPONFECHAMENTO.entity';
import { TfpponlautEntity } from './tFPPONLAUT.entity';
import { TfppsfEntity } from './tFPPSF.entity';
import { TfppubEntity } from './tFPPUB.entity';
import { TfpreqEntity } from './tFPREQ.entity';
import { TfpreqbenEntity } from './tFPREQBEN.entity';
import { TfpreqrescEntity } from './tFPREQRESC.entity';
import { TfprmdEntity } from './tFPRMD.entity';
import { TfprneEntity } from './tFPRNE.entity';
import { TfproeEntity } from './tFPROE.entity';
import { TfprpoEntity } from './tFPRPO.entity';
import { TfprpoEspEntity } from './tFPRPO_ESP.entity';
import { TfprpsEntity } from './tFPRPS.entity';
import { TfprtfEntity } from './tFPRTF.entity';
import { TfprtmEntity } from './tFPRTM.entity';
import { TfprttEntity } from './tFPRTT.entity';
import { TfpsalEntity } from './tFPSAL.entity';
import { TfpsbafEntity } from './tFPSBAF.entity';
import { TfpsfeEntity } from './tFPSFE.entity';
import { TfptomEntity } from './tFPTOM.entity';
import { TfpvalEntity } from './tFPVAL.entity';
import { TfpvcaEntity } from './tFPVCA.entity';
import { TfpvpsEntity } from './tFPVPS.entity';
import { TgaahEntity } from './tGAAH.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcveEntity } from './tGFCVE.entity';
import { TgffadEntity } from './tGFFAD.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfhorEntity } from './tGFHOR.entity';
import { TgpavdEntity } from './tGPAVD.entity';
import { TgpfcfEntity } from './tGPFCF.entity';
import { TgwsepEntity } from './tGWSEP.entity';
import { TpqpesEntity } from './tPQPES.entity';
import { TrscanEntity } from './tRSCAN.entity';
import { TrssubEntity } from './tRSSUB.entity';

@Index('PK_TFPFUN', ['codemp', 'codfunc'], { unique: true })
@Index('TFPFUN_I01', ['codfunc', 'codemp'], {})
@Index('TFPFUN_I02', ['cpf'], {})
@Index('TFPFUN_I03', ['dtlotenis'], {})
@Index('TFPFUN_I04', ['codcategesocial', 'sitesocial'], {})
@Index('TFPFUN_I05', ['codemp', 'codfunc', 'codgrupoctbz'], {})
@Entity('TFPFUN', { schema: 'SANKHYA' })
export class TfpfunEntity {
  @Column('smallint', { name: 'CODPAIS', nullable: true })
  codpais: number | null;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { name: 'NOMEFUNC', nullable: true, length: 100 })
  nomefunc: string | null;

  @Column('char', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('char', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('char', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('int', { name: 'NUMCPS', nullable: true })
  numcps: number | null;

  @Column('char', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('char', { name: 'PIS', nullable: true, length: 11 })
  pis: string | null;

  @Column('char', { name: 'IDENTIDADE', nullable: true, length: 15 })
  identidade: string | null;

  @Column('char', {
    name: 'SEXO',
    nullable: true,
    length: 1,
    default: () => "'M'",
  })
  sexo: string | null;

  @Column('smallint', { name: 'ESTADOCIVIL', nullable: true })
  estadocivil: number | null;

  @Column('smallint', { name: 'NIVESC', nullable: true })
  nivesc: number | null;

  @Column('smallint', { name: 'ANOCHEGPAIS', nullable: true })
  anochegpais: number | null;

  @Column('varchar', { name: 'NOMEMAE', nullable: true, length: 100 })
  nomemae: string | null;

  @Column('varchar', { name: 'NOMEPAI', nullable: true, length: 100 })
  nomepai: string | null;

  @Column('smallint', { name: 'DEPENDIRF', nullable: true })
  dependirf: number | null;

  @Column('smallint', { name: 'DEPENDSALFAM', nullable: true })
  dependsalfam: number | null;

  @Column('smallint', { name: 'MESDIA', nullable: true })
  mesdia: number | null;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('datetime', { name: 'DTADM' })
  dtadm: Date;

  @Column('datetime', { name: 'DTDEM', nullable: true })
  dtdem: Date | null;

  @Column('datetime', { name: 'DTAVISOPREVIO', nullable: true })
  dtavisoprevio: Date | null;

  @Column('datetime', { name: 'DTCARTEIRASAUDE', nullable: true })
  dtcarteirasaude: Date | null;

  @Column('char', { name: 'CODCTABCO', nullable: true, length: 14 })
  codctabco: string | null;

  @Column('char', { name: 'CTAFGTS', nullable: true, length: 10 })
  ctafgts: string | null;

  @Column('char', { name: 'PRIMEMPREGO', length: 1, default: () => "'S'" })
  primemprego: string;

  @Column('smallint', { name: 'VINCULO', nullable: true })
  vinculo: number | null;

  @Column('char', {
    name: 'TIPSAL',
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  tipsal: string | null;

  @Column('varchar', { name: 'TIPTAB', nullable: true, length: 2 })
  tiptab: string | null;

  @Column('money', { name: 'SALBASE', nullable: true })
  salbase: number | null;

  @Column('char', {
    name: 'SITUACAO',
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  situacao: string | null;

  @Column('char', {
    name: 'SITSIND',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  sitsind: string | null;

  @Column('float', { name: 'HORASSEM', nullable: true, precision: 53 })
  horassem: number | null;

  @Column('varchar', { name: 'AFASTFGTS', nullable: true, length: 3 })
  afastfgts: string | null;

  @Column('smallint', { name: 'AFASTRAIS', nullable: true })
  afastrais: number | null;

  @Column('smallint', { name: 'CAUSAAFAST', nullable: true })
  causaafast: number | null;

  @Column('smallint', { name: 'CODSAQ', nullable: true })
  codsaq: number | null;

  @Column('char', { name: 'CONVMED', length: 1, default: () => "'N'" })
  convmed: string;

  @Column('int', { name: 'NUMCARTAOPONTO', nullable: true })
  numcartaoponto: number | null;

  @Column('smallint', { name: 'DEPENDCONVMED', nullable: true })
  dependconvmed: number | null;

  @Column('float', { name: 'PERCCONV', nullable: true, precision: 53 })
  percconv: number | null;

  @Column('char', {
    name: 'TIPRECEB',
    nullable: true,
    length: 1,
    default: () => "'C'",
  })
  tipreceb: string | null;

  @Column('numeric', {
    name: 'MATRICULA',
    nullable: true,
    precision: 12,
    scale: 0,
  })
  matricula: number | null;

  @Column('char', { name: 'CODADMFGTS', nullable: true, length: 2 })
  codadmfgts: string | null;

  @Column('char', { name: 'CODADMFGTSII', nullable: true, length: 2 })
  codadmfgtsii: string | null;

  @Column('char', { name: 'TRABOUTRAEMP', length: 1, default: () => "'N'" })
  traboutraemp: string;

  @Column('image', { name: 'IMAGEM', nullable: true })
  imagem: Buffer | null;

  @Column('char', {
    name: 'DEFICIENTEFISICO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  deficientefisico: string | null;

  @Column('char', { name: 'SENHA', nullable: true, length: 12 })
  senha: string | null;

  @Column('datetime', { name: 'DTOPTFGTS' })
  dtoptfgts: Date;

  @Column('smallint', { name: 'RACAFUNCIONARIO', default: () => '(2)' })
  racafuncionario: number;

  @Column('char', { name: 'PARTPAT', length: 1, default: () => "'2'" })
  partpat: string;

  @Column('char', { name: 'TITELEITORAL', nullable: true, length: 12 })
  titeleitoral: string | null;

  @Column('smallint', { name: 'ZONAELEITORAL', nullable: true })
  zonaeleitoral: number | null;

  @Column('char', { name: 'NRORESERVISTA', nullable: true, length: 15 })
  nroreservista: string | null;

  @Column('smallint', { name: 'DIACADPIS', nullable: true })
  diacadpis: number | null;

  @Column('char', { name: 'NROCNH', nullable: true, length: 20 })
  nrocnh: string | null;

  @Column('datetime', { name: 'DTAFASTAMENTO', nullable: true })
  dtafastamento: Date | null;

  @Column('float', {
    name: 'PERCADIANTAMENTO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  percadiantamento: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'CELULAR', nullable: true, length: 13 })
  celular: string | null;

  @Column('char', { name: 'RNE', nullable: true, length: 20 })
  rne: string | null;

  @Column('char', { name: 'SITPAIS', nullable: true, length: 1 })
  sitpais: string | null;

  @Column('datetime', { name: 'DTVALPAIS', nullable: true })
  dtvalpais: Date | null;

  @Column('datetime', { name: 'DTCPS', nullable: true })
  dtcps: Date | null;

  @Column('datetime', { name: 'DTRG', nullable: true })
  dtrg: Date | null;

  @Column('char', { name: 'ORGAORG', nullable: true, length: 6 })
  orgaorg: string | null;

  @Column('datetime', { name: 'DTCADPIS', nullable: true })
  dtcadpis: Date | null;

  @Column('smallint', { name: 'SECAOELEITORAL', nullable: true })
  secaoeleitoral: number | null;

  @Column('smallint', { name: 'DIASFERIAS', nullable: true })
  diasferias: number | null;

  @Column('datetime', { name: 'DTVENCEXP1', nullable: true })
  dtvencexp1: Date | null;

  @Column('datetime', { name: 'DTVENCEXP2', nullable: true })
  dtvencexp2: Date | null;

  @Column('datetime', { name: 'PRIMEIRACNH', nullable: true })
  primeiracnh: Date | null;

  @Column('datetime', { name: 'VENCIMENTOCNH', nullable: true })
  vencimentocnh: Date | null;

  @Column('char', { name: 'CATEGORIACNH', nullable: true, length: 4 })
  categoriacnh: string | null;

  @Column('float', { name: 'REMUMINIMA', precision: 53, default: () => '(0)' })
  remuminima: number;

  @Column('char', { name: 'TIPCONTA', nullable: true, length: 8 })
  tipconta: string | null;

  @Column('char', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('smallint', { name: 'TIPDEFICIENCIA', default: () => '(0)' })
  tipdeficiencia: number;

  @Column('int', { name: 'CODGRUPOCTBZ', nullable: true })
  codgrupoctbz: number | null;

  @Column('char', { name: 'SINDICALIZADO', length: 1, default: () => "'N'" })
  sindicalizado: string;

  @Column('smallint', { name: 'NACIONALIDADE', nullable: true })
  nacionalidade: number | null;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('int', { name: 'CODFUNCORIG', nullable: true })
  codfuncorig: number | null;

  @Column('datetime', { name: 'DTTRANSFERENCIA', nullable: true })
  dttransferencia: Date | null;

  @Column('smallint', { name: 'REGIME', nullable: true })
  regime: number | null;

  @Column('varchar', { name: 'TIPPONTO', length: 1, default: () => "'S'" })
  tipponto: string;

  @Column('smallint', { name: 'DIAAPURAPONTO', default: () => '(0)' })
  diaapuraponto: number;

  @Column('char', { name: 'DIRRECIPROCO', length: 1, default: () => "'N'" })
  dirreciproco: string;

  @Column('varchar', { name: 'SERIECPS', nullable: true, length: 6 })
  seriecps: string | null;

  @Column('float', { name: 'PERCINSAL', nullable: true, precision: 53 })
  percinsal: number | null;

  @Column('float', { name: 'PERCPERIC', nullable: true, precision: 53 })
  percperic: number | null;

  @Column('char', { name: 'POSSUIRRA', length: 1, default: () => "'N'" })
  possuirra: string;

  @Column('smallint', { name: 'QUEMPAGARRA', default: () => '(1)' })
  quempagarra: number;

  @Column('varchar', { name: 'NROPROCESSORRA', nullable: true, length: 20 })
  nroprocessorra: string | null;

  @Column('datetime', { name: 'DTLAUDORRA', nullable: true })
  dtlaudorra: Date | null;

  @Column('varchar', { name: 'CAIXAPOSTAL', nullable: true, length: 12 })
  caixapostal: string | null;

  @Column('varchar', { name: 'NRONATURAL', nullable: true, length: 10 })
  nronatural: string | null;

  @Column('datetime', { name: 'DTNATURAL', nullable: true })
  dtnatural: Date | null;

  @Column('varchar', { name: 'NROPASSAPORTE', nullable: true, length: 12 })
  nropassaporte: string | null;

  @Column('varchar', { name: 'EMISSORPPORTE', nullable: true, length: 12 })
  emissorpporte: string | null;

  @Column('datetime', { name: 'DTEMIPPORTE', nullable: true })
  dtemipporte: Date | null;

  @Column('datetime', { name: 'DTVALPPORTE', nullable: true })
  dtvalpporte: Date | null;

  @Column('varchar', { name: 'NRORIC', nullable: true, length: 15 })
  nroric: string | null;

  @Column('varchar', { name: 'ORGAORIC', nullable: true, length: 12 })
  orgaoric: string | null;

  @Column('datetime', { name: 'DTEMIRIC', nullable: true })
  dtemiric: Date | null;

  @Column('char', { name: 'TIPCERTIDAO', nullable: true, length: 1 })
  tipcertidao: string | null;

  @Column('varchar', { name: 'NROCERTCIVIL', nullable: true, length: 50 })
  nrocertcivil: string | null;

  @Column('varchar', { name: 'CARTORIO', nullable: true, length: 30 })
  cartorio: string | null;

  @Column('varchar', { name: 'NROLIVROREG', nullable: true, length: 10 })
  nrolivroreg: string | null;

  @Column('datetime', { name: 'DTEMICERTCIVIL', nullable: true })
  dtemicertcivil: Date | null;

  @Column('char', { name: 'PROVISAOFERIAS', length: 1, default: () => "'S'" })
  provisaoferias: string;

  @Column('char', { name: 'PROVISAO13', length: 1, default: () => "'S'" })
  provisao13: string;

  @Column('char', { name: 'TEMPOPARCIAL', length: 1, default: () => "'N'" })
  tempoparcial: string;

  @Column('char', { name: 'SEMINTEGRAL', length: 1, default: () => "'N'" })
  semintegral: string;

  @Column('char', { name: 'NOVOEMPREGO', length: 1, default: () => "'N'" })
  novoemprego: string;

  @Column('datetime', { name: 'DTQUITACAO', nullable: true })
  dtquitacao: Date | null;

  @Column('smallint', { name: 'DIASAVISOPREVIO', nullable: true })
  diasavisoprevio: number | null;

  @Column('smallint', { name: 'COMPSALARIO', default: () => '(1)' })
  compsalario: number;

  @Column('char', { name: 'COMPENSASABADO', length: 1, default: () => "'N'" })
  compensasabado: string;

  @Column('varchar', { name: 'NOMEARQHOMOLOGNET', nullable: true, length: 250 })
  nomearqhomolognet: string | null;

  @Column('char', { name: 'DISPENSAPONTO', length: 1, default: () => "'N'" })
  dispensaponto: string;

  @Column('char', { name: 'MEI', length: 1, default: () => "'N'" })
  mei: string;

  @Column('varchar', { name: 'ORGAORNE', nullable: true, length: 20 })
  orgaorne: string | null;

  @Column('datetime', { name: 'DTEXPRNE', nullable: true })
  dtexprne: Date | null;

  @Column('varchar', { name: 'NROC', nullable: true, length: 14 })
  nroc: string | null;

  @Column('varchar', { name: 'ORGAOOC', nullable: true, length: 20 })
  orgaooc: string | null;

  @Column('datetime', { name: 'DTEXPOC', nullable: true })
  dtexpoc: Date | null;

  @Column('datetime', { name: 'DTVALOC', nullable: true })
  dtvaloc: Date | null;

  @Column('varchar', { name: 'ORGAOCNH', nullable: true, length: 20 })
  orgaocnh: string | null;

  @Column('datetime', { name: 'DTEXPCNH', nullable: true })
  dtexpcnh: Date | null;

  @Column('datetime', { name: 'DTCHEGPAIS', nullable: true })
  dtchegpais: Date | null;

  @Column('char', { name: 'CASADOBR', length: 1, default: () => "'N'" })
  casadobr: string;

  @Column('char', { name: 'FILHOSBR', length: 1, default: () => "'N'" })
  filhosbr: string;

  @Column('varchar', { name: 'OBSDEFICIENCIA', nullable: true, length: 250 })
  obsdeficiencia: string | null;

  @Column('smallint', { name: 'INDADMISSAO', nullable: true })
  indadmissao: number | null;

  @Column('smallint', { name: 'REGIMETRAB', nullable: true })
  regimetrab: number | null;

  @Column('smallint', { name: 'REGIMEJOR', nullable: true })
  regimejor: number | null;

  @Column('int', { name: 'CODCATEGESOCIAL', nullable: true })
  codcategesocial: number | null;

  @Column('datetime', { name: 'DTTERMINO', nullable: true })
  dttermino: Date | null;

  @Column('smallint', { name: 'CONTTRABTEMP', nullable: true })
  conttrabtemp: number | null;

  @Column('smallint', { name: 'OPTFGTS', nullable: true })
  optfgts: number | null;

  @Column('varchar', { name: 'CNPJEMPANT', nullable: true, length: 14 })
  cnpjempant: string | null;

  @Column('varchar', { name: 'MATRICULAEMPANT', nullable: true, length: 30 })
  matriculaempant: string | null;

  @Column('datetime', { name: 'DTVINCEMPANT', nullable: true })
  dtvincempant: Date | null;

  @Column('varchar', { name: 'OBSEMPANT', nullable: true, length: 250 })
  obsempant: string | null;

  @Column('varchar', { name: 'CNPJEMPCED', nullable: true, length: 14 })
  cnpjempced: string | null;

  @Column('varchar', { name: 'MATRICULAEMPCED', nullable: true, length: 30 })
  matriculaempced: string | null;

  @Column('datetime', { name: 'DTADMEMPCED', nullable: true })
  dtadmempced: Date | null;

  @Column('smallint', { name: 'INFOONUS', nullable: true })
  infoonus: number | null;

  @Column('datetime', { name: 'DTASO', nullable: true })
  dtaso: Date | null;

  @Column('varchar', { name: 'MEDICOASO', nullable: true, length: 60 })
  medicoaso: string | null;

  @Column('varchar', { name: 'TELMEDICOASO', nullable: true, length: 15 })
  telmedicoaso: string | null;

  @Column('varchar', { name: 'CRMMEDICOASO', nullable: true, length: 8 })
  crmmedicoaso: string | null;

  @Column('varchar', { name: 'UFCRMMEDASO', nullable: true, length: 2 })
  ufcrmmedaso: string | null;

  @Column('datetime', { name: 'DTINC_ESOCIAL', nullable: true })
  dtincEsocial: Date | null;

  @Column('datetime', { name: 'DTULTENV_ESOCIAL', nullable: true })
  dtultenvEsocial: Date | null;

  @Column('char', { name: 'CAGEDADM', length: 1, default: () => "'N'" })
  cagedadm: string;

  @Column('char', { name: 'SEGDESEMPREGO', length: 1, default: () => "'N'" })
  segdesemprego: string;

  @Column('datetime', { name: 'DTLOTENIS', nullable: true })
  dtlotenis: Date | null;

  @Column('smallint', { name: 'NUMLOTENIS', nullable: true })
  numlotenis: number | null;

  @Column('char', { name: 'NISENVIADO', length: 1, default: () => "'N'" })
  nisenviado: string;

  @Column('varchar', { name: 'COMPLEMENTORG', nullable: true, length: 20 })
  complementorg: string | null;

  @Column('char', { name: 'STEP', nullable: true, length: 1 })
  step: string | null;

  @Column('varchar', { name: 'NROFOLHAREG', nullable: true, length: 5 })
  nrofolhareg: string | null;

  @Column('float', {
    name: 'REMUNERAMESANT',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  remuneramesant: number | null;

  @Column('smallint', { name: 'CLASSTRABESTRANG', nullable: true })
  classtrabestrang: number | null;

  @Column('char', { name: 'TRABAPOSENT', length: 1, default: () => "'N'" })
  trabaposent: string;

  @Column('varchar', { name: 'OBSVARIAVEL', nullable: true, length: 999 })
  obsvariavel: string | null;

  @Column('float', { name: 'SALBASEANTERIOR', nullable: true, precision: 53 })
  salbaseanterior: number | null;

  @Column('datetime', { name: 'DTFIMQUARENTENA', nullable: true })
  dtfimquarentena: Date | null;

  @Column('smallint', { name: 'MTVDESLIGTSV', nullable: true })
  mtvdesligtsv: number | null;

  @Column('varchar', { name: 'NMSOCIAL', nullable: true, length: 70 })
  nmsocial: string | null;

  @Column('char', { name: 'INFOCOTA', length: 1, default: () => "'N'" })
  infocota: string;

  @Column('text', { name: 'JUSTCONTR', nullable: true })
  justcontr: string | null;

  @Column('smallint', { name: 'TPINCLCONTR', nullable: true })
  tpinclcontr: number | null;

  @Column('char', { name: 'SUSPEXPAFAST', length: 1, default: () => "'S'" })
  suspexpafast: string;

  @Column('char', { name: 'TEMDESCASSIST', length: 1, default: () => "'N'" })
  temdescassist: string;

  @Column('smallint', { name: 'TPINSCTOMADOR', nullable: true })
  tpinsctomador: number | null;

  @Column('smallint', { name: 'TPINSCESTABVINC', nullable: true })
  tpinscestabvinc: number | null;

  @Column('varchar', { name: 'NRINSCTOMADOR', nullable: true, length: 14 })
  nrinsctomador: string | null;

  @Column('varchar', { name: 'CPFSUBSTITUIDO', nullable: true, length: 11 })
  cpfsubstituido: string | null;

  @Column('text', { name: 'JUSTPRORR', nullable: true })
  justprorr: string | null;

  @Column('varchar', { name: 'NRINSCESTABVINC', nullable: true, length: 14 })
  nrinscestabvinc: string | null;

  @Column('smallint', { name: 'INDMV', default: () => '(0)' })
  indmv: number;

  @Column('char', { name: 'ENVESOCIAL', length: 1, default: () => "'N'" })
  envesocial: string;

  @Column('varchar', { name: 'RECIBOESOCIAL', nullable: true, length: 40 })
  reciboesocial: string | null;

  @Column('datetime', { name: 'INIVALESOCIAL', nullable: true })
  inivalesocial: Date | null;

  @Column('datetime', { name: 'FIMVALESOCIAL', nullable: true })
  fimvalesocial: Date | null;

  @Column('char', {
    name: 'TEMCONTRIBSINDICAL',
    length: 1,
    default: () => "'N'",
  })
  temcontribsindical: string;

  @Column('char', { name: 'APRENDIZGRAVIDA', length: 1, default: () => "'N'" })
  aprendizgravida: string;

  @Column('char', { name: 'SITESOCIAL', nullable: true, length: 1 })
  sitesocial: string | null;

  @Column('smallint', { name: 'TPREGTRABCED', nullable: true })
  tpregtrabced: number | null;

  @Column('smallint', { name: 'TPREGPREVCED', nullable: true })
  tpregprevced: number | null;

  @Column('char', { name: 'IDCONSIG', length: 1, default: () => "'N'" })
  idconsig: string;

  @Column('varchar', { name: 'INSCONSIG', nullable: true, length: 5 })
  insconsig: string | null;

  @Column('varchar', { name: 'NRCONTR', nullable: true, length: 15 })
  nrcontr: string | null;

  @Column('varchar', { name: 'NRCERTOBITO', nullable: true, length: 32 })
  nrcertobito: string | null;

  @Column('char', { name: 'INDNIF', nullable: true, length: 1 })
  indnif: string | null;

  @Column('varchar', { name: 'NIFBENEF', nullable: true, length: 20 })
  nifbenef: string | null;

  @Column('smallint', { name: 'INDCUMPRPARC', nullable: true })
  indcumprparc: number | null;

  @Column('datetime', { name: 'DTTRANSFDEST', nullable: true })
  dttransfdest: Date | null;

  @Column('smallint', { name: 'CODEMPDEST', nullable: true })
  codempdest: number | null;

  @Column('int', { name: 'CODFUNCDEST', nullable: true })
  codfuncdest: number | null;

  @Column('varchar', { name: 'CNPJDESTTRANSF', nullable: true, length: 14 })
  cnpjdesttransf: string | null;

  @Column('varchar', { name: 'CODMOTDESLIGTRANSF', nullable: true, length: 2 })
  codmotdesligtransf: string | null;

  @Column('float', { name: 'REMUNBASE', nullable: true, precision: 53 })
  remunbase: number | null;

  @Column('float', { name: 'SALPROFESSOR', nullable: true, precision: 53 })
  salprofessor: number | null;

  @Column('char', { name: 'DISPPEREXP', length: 1, default: () => "'N'" })
  dispperexp: string;

  @Column('text', { name: 'METERG', nullable: true })
  meterg: string | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('text', { name: 'DSCATIVDES', nullable: true })
  dscativdes: string | null;

  @Column('float', { name: 'JORNADAPROF', nullable: true, precision: 53 })
  jornadaprof: number | null;

  @Column('varchar', {
    name: 'JORNADAESPPROF',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  jornadaespprof: string | null;

  @Column('datetime', { name: 'DTESOCIAL2205', nullable: true })
  dtesocial2205: Date | null;

  @Column('datetime', { name: 'DTESOCIAL2206', nullable: true })
  dtesocial2206: Date | null;

  @Column('varchar', { name: 'OBJDET', nullable: true, length: 255 })
  objdet: string | null;

  @Column('varchar', { name: 'CPFANT', nullable: true, length: 11 })
  cpfant: string | null;

  @Column('int', { name: 'MATRICANT', nullable: true })
  matricant: number | null;

  @Column('datetime', { name: 'DTALTCPF', nullable: true })
  dtaltcpf: Date | null;

  @Column('varchar', { name: 'OBSALTCPF', nullable: true, length: 255 })
  obsaltcpf: string | null;

  @Column('varchar', { name: 'MATRICULAOLD', nullable: true, length: 30 })
  matriculaold: string | null;

  @Column('char', { name: 'CADINI', nullable: true, length: 1 })
  cadini: string | null;

  @Column('float', { name: 'SEMANASPORMES', nullable: true, precision: 53 })
  semanaspormes: number | null;

  @Column('datetime', { name: 'DTINIGRUPOHR', nullable: true })
  dtinigrupohr: Date | null;

  @Column('smallint', { name: 'ORDEMGRUPOHR', nullable: true })
  ordemgrupohr: number | null;

  @Column('smallint', { name: 'DIASEMGRUPOHR', nullable: true })
  diasemgrupohr: number | null;

  @Column('char', { name: 'PERTENCEDP', length: 1, default: () => "'N'" })
  pertencedp: string;

  @Column('char', { name: 'CONTRATOSUSP', length: 1, default: () => "'N'" })
  contratosusp: string;

  @Column('datetime', { name: 'DTVENCEXP1OR', nullable: true })
  dtvencexp1Or: Date | null;

  @Column('datetime', { name: 'DTVENCEXP2OR', nullable: true })
  dtvencexp2Or: Date | null;

  @Column('varchar', {
    name: 'LOTACAOESOCIAL',
    nullable: true,
    length: 500,
    default: () => 'NULL',
  })
  lotacaoesocial: string | null;

  @Column('smallint', { name: 'CODMAD', nullable: true })
  codmad: number | null;

  @Column('smallint', { name: 'CODMADDEM', nullable: true })
  codmaddem: number | null;

  @Column('float', { name: 'SALAJUSTADOSIND', nullable: true, precision: 53 })
  salajustadosind: number | null;

  @Column('char', { name: 'REPLIDER', nullable: true, length: 1 })
  replider: string | null;

  @Column('int', { name: 'USUVPJSUP', nullable: true })
  usuvpjsup: number | null;

  @Column('int', { name: 'TELEGRAMID', nullable: true })
  telegramid: number | null;

  @Column('char', {
    name: 'ADERIMP927',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  aderimp927: string | null;

  @Column('float', { name: 'SALBASECPU', nullable: true, precision: 53 })
  salbasecpu: number | null;

  @Column('float', { name: 'HORASSEMCPU', nullable: true, precision: 53 })
  horassemcpu: number | null;

  @Column('float', { name: 'PERREDCPU', nullable: true, precision: 53 })
  perredcpu: number | null;

  @Column('char', { name: 'AJUDACOMP', length: 1, default: () => "'N'" })
  ajudacomp: string;

  @Column('char', {
    name: 'SUSPCONTRATO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  suspcontrato: string | null;

  @Column('char', { name: 'AFASTAMENTO', nullable: true, length: 1 })
  afastamento: string | null;

  @Column('varchar', { name: 'OBSERVACAOMP', nullable: true, length: 255 })
  observacaomp: string | null;

  @Column('int', { name: 'SEQCPU', nullable: true })
  seqcpu: number | null;

  @Column('datetime', { name: 'DTINICIORED', nullable: true })
  dtiniciored: Date | null;

  @Column('datetime', { name: 'DTFIMRED', nullable: true })
  dtfimred: Date | null;

  @Column('datetime', { name: 'DTFIMCONTRINT', nullable: true })
  dtfimcontrint: Date | null;

  @Column('float', { name: 'SALBASERED', nullable: true, precision: 53 })
  salbasered: number | null;

  @Column('float', { name: 'HORASSEMRED', nullable: true, precision: 53 })
  horassemred: number | null;

  @Column('char', { name: 'APRENDCONTRIND', length: 1, default: () => "'N'" })
  aprendcontrind: string;

  @Column('varchar', {
    name: 'NRINSCINFOCELETISTA',
    nullable: true,
    length: 15,
  })
  nrinscinfoceletista: string | null;

  @Column('char', { name: 'TRANSFEXTERNA', length: 1, default: () => "'N'" })
  transfexterna: string;

  @Column('smallint', { name: 'INDRETIFESOCIAL2206', nullable: true })
  indretifesocial2206: number | null;

  @Column('varchar', { name: 'DSCALT', nullable: true, length: 150 })
  dscalt: string | null;

  @Column('varchar', { name: 'NUMPROCTSVE', nullable: true, length: 20 })
  numproctsve: string | null;

  @Column('varchar', { name: 'NRPROCTRAB', nullable: true, length: 20 })
  nrproctrab: string | null;

  @Column('varchar', {
    name: 'BLOQUEIABATIDAONLINE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  bloqueiabatidaonline: string | null;

  @Column('varchar', { name: 'TMPRESIDTRABESTRANG', nullable: true, length: 1 })
  tmpresidtrabestrang: string | null;

  @Column('varchar', { name: 'CONDINGESTRANG', nullable: true, length: 1 })
  condingestrang: string | null;

  @Column('smallint', { name: 'MOTEXPATRIADO', nullable: true })
  motexpatriado: number | null;

  @Column('varchar', {
    name: 'DISPENSAMATRICULA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  dispensamatricula: string | null;

  @Column('char', { name: 'CTPSDIGITAL', length: 1, default: () => "'N'" })
  ctpsdigital: string;

  @Column('image', { name: 'AD_RECRUTAMENTO', nullable: true })
  adRecrutamento: Buffer | null;

  @Column('varchar', { name: 'AD_RECRUTA', nullable: true, length: 10 })
  adRecruta: string | null;

  @Column('smallint', { name: 'INDSITREMUNDESLIG', nullable: true })
  indsitremundeslig: number | null;

  @Column('datetime', { name: 'DTFIMREMUN', nullable: true })
  dtfimremun: Date | null;

  @Column('char', { name: 'ENDFISCEXT', nullable: true, length: 1 })
  endfiscext: string | null;

  @Column('varchar', { name: 'AD_CARTAOSUS', nullable: true, length: 100 })
  adCartaosus: string | null;

  @Column('varchar', { name: 'NATATIVIDADE', nullable: true, length: 1 })
  natatividade: string | null;

  @Column('varchar', { name: 'RECIBOESOCIAL2205', nullable: true, length: 50 })
  reciboesocial2205: string | null;

  @Column('varchar', { name: 'AFASTFGTSANT', nullable: true, length: 3 })
  afastfgtsant: string | null;

  @Column('varchar', { name: 'RECIBOESOCIAL2206', nullable: true, length: 50 })
  reciboesocial2206: string | null;

  @Column('smallint', { name: 'TPINSCAPREND', nullable: true })
  tpinscaprend: number | null;

  @Column('datetime', { name: 'DTALTS2200', nullable: true })
  dtalts2200: Date | null;

  @Column('varchar', { name: 'MOTDESLIGESOCIAL', nullable: true, length: 2 })
  motdesligesocial: string | null;

  @Column('int', { name: 'CODTPRJUD', nullable: true })
  codtprjud: number | null;

  @Column('smallint', { name: 'CAUSAAFASTANT', nullable: true })
  causaafastant: number | null;

  @Column('varchar', { name: 'CNPJPRAT', nullable: true, length: 14 })
  cnpjprat: string | null;

  @Column('varchar', { name: 'POSSUIFILHOS', nullable: true, length: 1 })
  possuifilhos: string | null;

  @Column('varchar', { name: 'ORIENTACAOSEXUAL', nullable: true, length: 1 })
  orientacaosexual: string | null;

  @Column('varchar', { name: 'MOTDESLIGESOCIALANT', nullable: true, length: 2 })
  motdesligesocialant: string | null;

  @Column('varchar', { name: 'IDENTIDADEGENERO', nullable: true, length: 1 })
  identidadegenero: string | null;

  @Column('varchar', { name: 'NRPROCTRABANT', nullable: true, length: 20 })
  nrproctrabant: string | null;

  @Column('smallint', { name: 'AFASTRAISANT', nullable: true })
  afastraisant: number | null;

  @Column('varchar', { name: 'NATATIVIDADEANT', nullable: true, length: 1 })
  natatividadeant: string | null;

  @Column('varchar', { name: 'RECIBOESOCIAL2200', nullable: true, length: 50 })
  reciboesocial2200: string | null;

  @Column('datetime', { name: 'DTDEMJUD', nullable: true })
  dtdemjud: Date | null;

  @Column('smallint', { name: 'CODCATEGESOCIALANT', nullable: true })
  codcategesocialant: number | null;

  @Column('varchar', { name: 'NRINSCAPREND', nullable: true, length: 14 })
  nrinscaprend: string | null;

  @Column('varchar', { name: 'MATANOTJUD', nullable: true, length: 30 })
  matanotjud: string | null;

  @Column('varchar', { name: 'PVD', nullable: true, length: 1 })
  pvd: string | null;

  @Column('datetime', { name: 'DTADMJUD', nullable: true })
  dtadmjud: Date | null;

  @Column('datetime', { name: 'DTALTS2299', nullable: true })
  dtalts2299: Date | null;

  @Column('smallint', { name: 'INDADMISSAOANT', nullable: true })
  indadmissaoant: number | null;

  @Column('varchar', { name: 'NRPROCTRABDESLIG', nullable: true, length: 20 })
  nrproctrabdeslig: string | null;

  @Column('varchar', { name: 'CNPJENTQUAL', nullable: true, length: 14 })
  cnpjentqual: string | null;

  @Column('datetime', { name: 'DTSENTPROCTRAB', nullable: true })
  dtsentproctrab: Date | null;

  @Column('char', { name: 'SITUACAOANT', nullable: true, length: 1 })
  situacaoant: string | null;

  @Column('datetime', { name: 'DTDISPENSAPONTO', nullable: true })
  dtdispensaponto: Date | null;

  @Column('date', { name: 'DTESOCIAL2206_BKP', nullable: true })
  dtesocial2206Bkp: Date | null;

  @Column('date', { name: 'DTESOCIAL2205_BKP', nullable: true })
  dtesocial2205Bkp: Date | null;

  @Column('datetime', { name: 'AD_DATAESOCIAL2206', nullable: true })
  adDataesocial2206: Date | null;

  @Column('datetime', { name: 'AD_DATAESOCIAL2205', nullable: true })
  adDataesocial2205: Date | null;

  @Column('varchar', { name: 'VALIDADO', nullable: true, length: 1 })
  validado: string | null;

  @Column('varchar', {
    name: 'TRANSFSEMONUSCEDENTE',
    nullable: true,
    length: 2,
  })
  transfsemonuscedente: string | null;

  @Column('varchar', { name: 'AD_APADRINHADO', nullable: true, length: 10 })
  adApadrinhado: string | null;

  @OneToMany(
    () => AdAcertoviagemEntity,
    (adAcertoviagemEntity) => adAcertoviagemEntity.tfpfun,
  )
  adAcertoviagems: AdAcertoviagemEntity[];

  @OneToMany(
    () => AdGigpontosEntity,
    (adGigpontosEntity) => adGigpontosEntity.tfpfun,
  )
  adGigpontos: AdGigpontosEntity[];

  @OneToMany(() => AdSirvoEntity, (adSirvoEntity) => adSirvoEntity.tfpfun)
  adSirvos: AdSirvoEntity[];

  @OneToMany(
    () => AdSirvomotEntity,
    (adSirvomotEntity) => adSirvomotEntity.tfpfun,
  )
  adSirvomots: AdSirvomotEntity[];

  @OneToMany(
    () => AudittfpageEntity,
    (audittfpageEntity) => audittfpageEntity.tfpfun,
  )
  audittfpages: AudittfpageEntity[];

  @OneToMany(
    () => AudittfpbasEntity,
    (audittfpbasEntity) => audittfpbasEntity.tfpfun,
  )
  audittfpbas: AudittfpbasEntity[];

  @OneToMany(
    () => AudittfpferEntity,
    (audittfpferEntity) => audittfpferEntity.tfpfun,
  )
  audittfpfers: AudittfpferEntity[];

  @OneToMany(
    () => AudittfpfolEntity,
    (audittfpfolEntity) => audittfpfolEntity.tfpfun,
  )
  audittfpfols: AudittfpfolEntity[];

  @OneToMany(
    () => AudittfpmovEntity,
    (audittfpmovEntity) => audittfpmovEntity.tfpfun,
  )
  audittfpmovs: AudittfpmovEntity[];

  @OneToMany(() => TfpacdEntity, (tfpacdEntity) => tfpacdEntity.tfpfun)
  tfpacds: TfpacdEntity[];

  @OneToMany(() => TfpacuEntity, (tfpacuEntity) => tfpacuEntity.tfpfun)
  tfpacus: TfpacuEntity[];

  @OneToMany(() => TfpaenEntity, (tfpaenEntity) => tfpaenEntity.tfpfun)
  tfpaens: TfpaenEntity[];

  @OneToMany(() => TfpafdtEntity, (tfpafdtEntity) => tfpafdtEntity.tfpfun)
  tfpafdts: TfpafdtEntity[];

  @OneToMany(() => TfpageEntity, (tfpageEntity) => tfpageEntity.tfpfun)
  tfpages: TfpageEntity[];

  @OneToMany(
    () => TfpagnocatrfEntity,
    (tfpagnocatrfEntity) => tfpagnocatrfEntity.tfpfun,
  )
  tfpagnocatrfs: TfpagnocatrfEntity[];

  @OneToMany(() => TfpajuEntity, (tfpajuEntity) => tfpajuEntity.tfpfun)
  tfpajus: TfpajuEntity[];

  @OneToMany(() => TfpalunoEntity, (tfpalunoEntity) => tfpalunoEntity.tfpfun)
  tfpalunos: TfpalunoEntity[];

  @OneToMany(() => TfpamfEntity, (tfpamfEntity) => tfpamfEntity.tfpfun)
  tfpamfs: TfpamfEntity[];

  @OneToMany(() => TfpapoEntity, (tfpapoEntity) => tfpapoEntity.tfpfun)
  tfpapos: TfpapoEntity[];

  @OneToMany(() => TfpapufaeEntity, (tfpapufaeEntity) => tfpapufaeEntity.tfpfun)
  tfpapufaes: TfpapufaeEntity[];

  @OneToMany(() => TfpasoEntity, (tfpasoEntity) => tfpasoEntity.tfpfun)
  tfpasos: TfpasoEntity[];

  @OneToMany(() => TfpatrEntity, (tfpatrEntity) => tfpatrEntity.tfpfun)
  tfpatrs: TfpatrEntity[];

  @OneToMany(() => TfpbasEntity, (tfpbasEntity) => tfpbasEntity.tfpfun)
  tfpbas: TfpbasEntity[];

  @OneToMany(
    () => TfpbastesteEntity,
    (tfpbastesteEntity) => tfpbastesteEntity.tfpfun,
  )
  tfpbastestes: TfpbastesteEntity[];

  @OneToMany(() => TfpbhmEntity, (tfpbhmEntity) => tfpbhmEntity.tfpfun)
  tfpbhms: TfpbhmEntity[];

  @OneToMany(() => TfpbhmcpEntity, (tfpbhmcpEntity) => tfpbhmcpEntity.tfpfun)
  tfpbhmcps: TfpbhmcpEntity[];

  @OneToMany(() => TfpbhsEntity, (tfpbhsEntity) => tfpbhsEntity.tfpfun)
  tfpbhs: TfpbhsEntity[];

  @OneToMany(() => TfpbhtEntity, (tfpbhtEntity) => tfpbhtEntity.tfpfun)
  tfpbhts: TfpbhtEntity[];

  @OneToMany(() => TfpbiodmpEntity, (tfpbiodmpEntity) => tfpbiodmpEntity.tfpfun)
  tfpbiodmps: TfpbiodmpEntity[];

  @OneToMany(() => TfpcatrEntity, (tfpcatrEntity) => tfpcatrEntity.tfpfun)
  tfpcatrs: TfpcatrEntity[];

  @OneToMany(() => TfpchqEntity, (tfpchqEntity) => tfpchqEntity.tfpfun)
  tfpchqs: TfpchqEntity[];

  @OneToMany(() => TfpcmvEntity, (tfpcmvEntity) => tfpcmvEntity.tfpfun)
  tfpcmvs: TfpcmvEntity[];

  @OneToOne(() => TfpdigEntity, (tfpdigEntity) => tfpdigEntity.tfpfun)
  tfpdig: TfpdigEntity;

  @OneToMany(() => TfpdpdEntity, (tfpdpdEntity) => tfpdpdEntity.tfpfun)
  tfpdpds: TfpdpdEntity[];

  @OneToMany(() => TfpdpfEntity, (tfpdpfEntity) => tfpdpfEntity.tfpfun)
  tfpdpfs: TfpdpfEntity[];

  @OneToOne(() => TfperrferEntity, (tfperrferEntity) => tfperrferEntity.tfpfun)
  tfperrfer: TfperrferEntity;

  @OneToMany(() => TfpescfaeEntity, (tfpescfaeEntity) => tfpescfaeEntity.tfpfun)
  tfpescfaes: TfpescfaeEntity[];

  @OneToOne(() => TfpestEntity, (tfpestEntity) => tfpestEntity.tfpfun)
  tfpest: TfpestEntity;

  @OneToMany(() => TfpexmEntity, (tfpexmEntity) => tfpexmEntity.tfpfun)
  tfpexms: TfpexmEntity[];

  @OneToMany(() => TfpfbeEntity, (tfpfbeEntity) => tfpfbeEntity.tfpfun)
  tfpfbes: TfpfbeEntity[];

  @OneToMany(() => TfpfbhEntity, (tfpfbhEntity) => tfpfbhEntity.tfpfun)
  tfpfbhs: TfpfbhEntity[];

  @OneToMany(() => TfpfcpuEntity, (tfpfcpuEntity) => tfpfcpuEntity.tfpfun)
  tfpfcpus: TfpfcpuEntity[];

  @OneToMany(() => TfpfctiEntity, (tfpfctiEntity) => tfpfctiEntity.tfpfun)
  tfpfctis: TfpfctiEntity[];

  @OneToMany(() => TfpfdefEntity, (tfpfdefEntity) => tfpfdefEntity.tfpfun)
  tfpfdefs: TfpfdefEntity[];

  @OneToMany(() => TfpfdfEntity, (tfpfdfEntity) => tfpfdfEntity.tfpfun)
  tfpfdfs: TfpfdfEntity[];

  @OneToMany(() => TfpferEntity, (tfpferEntity) => tfpferEntity.tfpfun)
  tfpfers: TfpferEntity[];

  @OneToMany(() => TfpffuEntity, (tfpffuEntity) => tfpffuEntity.tfpfun)
  tfpffus: TfpffuEntity[];

  @OneToMany(() => TfpfpoEntity, (tfpfpoEntity) => tfpfpoEntity.tfpfun)
  tfpfpos: TfpfpoEntity[];

  @OneToMany(() => TfpftrcEntity, (tfpftrcEntity) => tfpftrcEntity.tfpfun)
  tfpftrcs: TfpftrcEntity[];

  @OneToMany(() => TfpftrfEntity, (tfpftrfEntity) => tfpftrfEntity.tfpfun)
  tfpftrfs: TfpftrfEntity[];

  @ManyToOne(() => TfpctgEntity, (tfpctgEntity) => tfpctgEntity.tfpfuns)
  @JoinColumn([
    { name: 'CODCATEGESOCIAL', referencedColumnName: 'codcategesocial' },
  ])
  codcategesocial2: TfpctgEntity;

  @ManyToOne(() => TfpctgEntity, (tfpctgEntity) => tfpctgEntity.tfpfuns2)
  @JoinColumn([
    { name: 'CODCATEGTRABCEDIDO', referencedColumnName: 'codcategesocial' },
  ])
  codcategtrabcedido: TfpctgEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpfuns)
  @JoinColumn([{ name: 'CODCIDTRAB', referencedColumnName: 'codcid' }])
  codcidtrab: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpfuns2)
  @JoinColumn([{ name: 'CODCIDCERTCIVIL', referencedColumnName: 'codcid' }])
  codcidcertcivil: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpfuns3)
  @JoinColumn([{ name: 'CODCIDRIC', referencedColumnName: 'codcid' }])
  codcidric: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpfuns4)
  @JoinColumn([{ name: 'NACIONALPAIS', referencedColumnName: 'codcid' }])
  nacionalpais: TsicidEntity;

  @ManyToOne(() => TsipaiEntity, (tsipaiEntity) => tsipaiEntity.tfpfuns)
  @JoinColumn([{ name: 'CODPAISNAC', referencedColumnName: 'codpais' }])
  codpaisnac: TsipaiEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpfuns2)
  @JoinColumn([
    { name: 'CODEMPFUNCSUP', referencedColumnName: 'codemp' },
    { name: 'CODFUNCSUP', referencedColumnName: 'codfunc' },
  ])
  tfpfun2: TfpfunEntity;

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpfun2)
  tfpfuns2: TfpfunEntity[];

  @ManyToOne(() => TfpgcbEntity, (tfpgcbEntity) => tfpgcbEntity.tfpfuns)
  @JoinColumn([{ name: 'CODGRUPOCTBZ', referencedColumnName: 'codgrupoctbz' }])
  codgrupoctbz2: TfpgcbEntity;

  @ManyToOne(
    () => TfptriburendbenefextEntity,
    (tfptriburendbenefextEntity) => tfptriburendbenefextEntity.tfpfuns,
  )
  @JoinColumn([{ name: 'FORMTRIBU', referencedColumnName: 'codtribu' }])
  formtribu: TfptriburendbenefextEntity;

  @ManyToOne(() => TsiageEntity, (tsiageEntity) => tsiageEntity.tfpfuns)
  @JoinColumn([
    { name: 'CODAGE', referencedColumnName: 'codage' },
    { name: 'CODBCO', referencedColumnName: 'codbco' },
  ])
  tsiage: TsiageEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tfpfuns)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai: TsibaiEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tfpfuns)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao: TfpfcoEntity;

  @ManyToOne(() => TfpghrEntity, (tfpghrEntity) => tfpghrEntity.tfpfuns, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([
    { name: 'CODGRUPOHORARIO', referencedColumnName: 'codgrupohorario' },
  ])
  codgrupohorario: TfpghrEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpfuns)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpfuns2)
  @JoinColumn([{ name: 'CODEMPRESPNIS', referencedColumnName: 'codemp' }])
  codemprespnis: TfpempEntity;

  @ManyToOne(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.tfpfuns)
  @JoinColumn([{ name: 'NUREQUISICAO', referencedColumnName: 'nurequisicao' }])
  nurequisicao: TrsreqEntity;

  @ManyToOne(() => TfptprEntity, (tfptprEntity) => tfptprEntity.tfpfuns)
  @JoinColumn([{ name: 'CODTPR', referencedColumnName: 'codtpr' }])
  codtpr: TfptprEntity;

  @ManyToOne(
    () => TfpponraioEntity,
    (tfpponraioEntity) => tfpponraioEntity.tfpfuns,
  )
  @JoinColumn([{ name: 'CODLOCALPONTO', referencedColumnName: 'id' }])
  codlocalponto: TfpponraioEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfpfuns)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;

  @ManyToOne(() => TfpltrEntity, (tfpltrEntity) => tfpltrEntity.tfpfuns)
  @JoinColumn([{ name: 'CODLTR', referencedColumnName: 'codltr' }])
  codltr: TfpltrEntity;

  @ManyToOne(() => TfpcatEntity, (tfpcatEntity) => tfpcatEntity.tfpfuns)
  @JoinColumn([{ name: 'CODCATEG', referencedColumnName: 'codcateg' }])
  codcateg: TfpcatEntity;

  @ManyToOne(() => TgpnivEntity, (tgpnivEntity) => tgpnivEntity.tfpfuns)
  @JoinColumn([{ name: 'CODNIVEL', referencedColumnName: 'codnivel' }])
  codnivel: TgpnivEntity;

  @ManyToOne(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.tfpfuns)
  @JoinColumn([{ name: 'CODCARGAHOR', referencedColumnName: 'codcargahor' }])
  codcargahor: TfpcghEntity;

  @ManyToOne(() => TfpsinEntity, (tfpsinEntity) => tfpsinEntity.tfpfuns)
  @JoinColumn([{ name: 'CODSIND', referencedColumnName: 'codsind' }])
  codsind: TfpsinEntity;

  @ManyToOne(() => TfpconEntity, (tfpconEntity) => tfpconEntity.tfpfuns)
  @JoinColumn([{ name: 'CODCONVENIO', referencedColumnName: 'codconvenio' }])
  codconvenio: TfpconEntity;

  @ManyToOne(() => TfpcrrEntity, (tfpcrrEntity) => tfpcrrEntity.tfpfuns)
  @JoinColumn([{ name: 'CODCARREIRA', referencedColumnName: 'codcarreira' }])
  codcarreira: TfpcrrEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpfuns)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tfpfuns)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo: TfpcarEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfpfuns)
  @JoinColumn([{ name: 'NUPROCESSOTRAB', referencedColumnName: 'nuprocesso' }])
  nuprocessotrab: TfppssEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfpfuns2)
  @JoinColumn([{ name: 'NUPROCESSOJUD', referencedColumnName: 'nuprocesso' }])
  nuprocessojud: TfppssEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfpfuns)
  @JoinColumn([{ name: 'UFRG', referencedColumnName: 'coduf' }])
  ufrg: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfpfuns2)
  @JoinColumn([{ name: 'UFCPS', referencedColumnName: 'coduf' }])
  ufcps: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfpfuns3)
  @JoinColumn([{ name: 'UFPPORTE', referencedColumnName: 'coduf' }])
  ufpporte: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfpfuns4)
  @JoinColumn([{ name: 'UFCNH', referencedColumnName: 'coduf' }])
  ufcnh: TsiufsEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tfpfuns)
  @JoinColumn([{ name: 'CODTOMADOR', referencedColumnName: 'codparc' }])
  codtomador: TgfparEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tfpfuns)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpfuns5)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpfuns6)
  @JoinColumn([{ name: 'CIDNASC', referencedColumnName: 'codcid' }])
  cidnasc: TsicidEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tfpfuns2)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(() => TfphfuEntity, (tfphfuEntity) => tfphfuEntity.tfpfun)
  tfphfus: TfphfuEntity[];

  @OneToMany(() => TfphsafEntity, (tfphsafEntity) => tfphsafEntity.tfpfun)
  tfphsafs: TfphsafEntity[];

  @OneToOne(() => TfphtrEntity, (tfphtrEntity) => tfphtrEntity.tfpfun)
  tfphtr: TfphtrEntity;

  @OneToMany(() => TfplfuEntity, (tfplfuEntity) => tfplfuEntity.tfpfun)
  tfplfus: TfplfuEntity[];

  @OneToMany(() => TfplotEntity, (tfplotEntity) => tfplotEntity.tfpfun)
  tfplots: TfplotEntity[];

  @OneToMany(() => TfpmedEntity, (tfpmedEntity) => tfpmedEntity.tfpfun)
  tfpmeds: TfpmedEntity[];

  @OneToMany(() => TfpmovEntity, (tfpmovEntity) => tfpmovEntity.tfpfun)
  tfpmovs: TfpmovEntity[];

  @OneToMany(() => TfpmovantEntity, (tfpmovantEntity) => tfpmovantEntity.tfpfun)
  tfpmovants: TfpmovantEntity[];

  @OneToMany(() => TfpmrhEntity, (tfpmrhEntity) => tfpmrhEntity.tfpfun)
  tfpmrhs: TfpmrhEntity[];

  @OneToMany(() => TfpnewmedEntity, (tfpnewmedEntity) => tfpnewmedEntity.tfpfun)
  tfpnewmeds: TfpnewmedEntity[];

  @OneToMany(
    () => TfpnotificEntity,
    (tfpnotificEntity) => tfpnotificEntity.tfpfun,
  )
  tfpnotifics: TfpnotificEntity[];

  @OneToMany(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpfun)
  tfpocos: TfpocoEntity[];

  @OneToMany(() => TfpocorjsEntity, (tfpocorjsEntity) => tfpocorjsEntity.tfpfun)
  tfpocorjs: TfpocorjsEntity[];

  @OneToMany(() => TfppantEntity, (tfppantEntity) => tfppantEntity.tfpfun)
  tfppants: TfppantEntity[];

  @OneToMany(() => TfpplsEntity, (tfpplsEntity) => tfpplsEntity.tfpfun)
  tfppls: TfpplsEntity[];

  @OneToMany(() => TfpponEntity, (tfpponEntity) => tfpponEntity.tfpfun)
  tfppons: TfpponEntity[];

  @OneToMany(
    () => TfpponbatidasEntity,
    (tfpponbatidasEntity) => tfpponbatidasEntity.tfpfun,
  )
  tfpponbatidas: TfpponbatidasEntity[];

  @OneToMany(
    () => TfpponfechamentoEntity,
    (tfpponfechamentoEntity) => tfpponfechamentoEntity.tfpfun,
  )
  tfpponfechamentos: TfpponfechamentoEntity[];

  @OneToMany(
    () => TfpponlautEntity,
    (tfpponlautEntity) => tfpponlautEntity.tfpfun,
  )
  tfpponlauts: TfpponlautEntity[];

  @OneToMany(() => TfppsfEntity, (tfppsfEntity) => tfppsfEntity.tfpfun)
  tfppsfs: TfppsfEntity[];

  @OneToOne(() => TfppubEntity, (tfppubEntity) => tfppubEntity.tfpfun)
  tfppub: TfppubEntity;

  @OneToMany(() => TfpreqEntity, (tfpreqEntity) => tfpreqEntity.tfpfun)
  tfpreqs: TfpreqEntity[];

  @OneToMany(() => TfpreqbenEntity, (tfpreqbenEntity) => tfpreqbenEntity.tfpfun)
  tfpreqbens: TfpreqbenEntity[];

  @OneToMany(
    () => TfpreqrescEntity,
    (tfpreqrescEntity) => tfpreqrescEntity.tfpfun,
  )
  tfpreqrescs: TfpreqrescEntity[];

  @OneToMany(() => TfprmdEntity, (tfprmdEntity) => tfprmdEntity.tfpfun)
  tfprmds: TfprmdEntity[];

  @OneToMany(() => TfprneEntity, (tfprneEntity) => tfprneEntity.tfpfun)
  tfprnes: TfprneEntity[];

  @OneToMany(() => TfproeEntity, (tfproeEntity) => tfproeEntity.tfpfun)
  tfproes: TfproeEntity[];

  @OneToMany(() => TfprpoEntity, (tfprpoEntity) => tfprpoEntity.tfpfun)
  tfprpos: TfprpoEntity[];

  @OneToMany(() => TfprpoEspEntity, (tfprpoEspEntity) => tfprpoEspEntity.tfpfun)
  tfprpoEsps: TfprpoEspEntity[];

  @OneToMany(() => TfprpsEntity, (tfprpsEntity) => tfprpsEntity.tfpfun)
  tfprps: TfprpsEntity[];

  @OneToMany(() => TfprtfEntity, (tfprtfEntity) => tfprtfEntity.tfpfun)
  tfprtfs: TfprtfEntity[];

  @OneToMany(() => TfprtmEntity, (tfprtmEntity) => tfprtmEntity.tfpfun)
  tfprtms: TfprtmEntity[];

  @OneToMany(() => TfprttEntity, (tfprttEntity) => tfprttEntity.tfpfun)
  tfprtts: TfprttEntity[];

  @OneToMany(() => TfpsalEntity, (tfpsalEntity) => tfpsalEntity.tfpfun)
  tfpsals: TfpsalEntity[];

  @OneToMany(() => TfpsbafEntity, (tfpsbafEntity) => tfpsbafEntity.tfpfun)
  tfpsbafs: TfpsbafEntity[];

  @OneToMany(() => TfpsfeEntity, (tfpsfeEntity) => tfpsfeEntity.tfpfun)
  tfpsfes: TfpsfeEntity[];

  @OneToMany(() => TfptomEntity, (tfptomEntity) => tfptomEntity.tfpfun)
  tfptoms: TfptomEntity[];

  @OneToMany(() => TfpvalEntity, (tfpvalEntity) => tfpvalEntity.tfpfun)
  tfpvals: TfpvalEntity[];

  @OneToMany(() => TfpvcaEntity, (tfpvcaEntity) => tfpvcaEntity.tfpfun)
  tfpvcas: TfpvcaEntity[];

  @OneToMany(() => TfpvpsEntity, (tfpvpsEntity) => tfpvpsEntity.tfpfun)
  tfpvps: TfpvpsEntity[];

  @OneToMany(() => TgaahEntity, (tgaahEntity) => tgaahEntity.tfpfun)
  tgaahs: TgaahEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tfpfun)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcveEntity, (tgfcveEntity) => tgfcveEntity.tfpfun)
  tgfcves: TgfcveEntity[];

  @OneToMany(() => TgffadEntity, (tgffadEntity) => tgffadEntity.tfpfun)
  tgffads: TgffadEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tfpfun)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfhorEntity, (tgfhorEntity) => tgfhorEntity.tfpfun)
  tgfhors: TgfhorEntity[];

  @OneToMany(() => TgpavdEntity, (tgpavdEntity) => tgpavdEntity.tfpfun)
  tgpavds: TgpavdEntity[];

  @OneToMany(() => TgpfcfEntity, (tgpfcfEntity) => tgpfcfEntity.tfpfun)
  tgpfcfs: TgpfcfEntity[];

  @OneToMany(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.tfpfun)
  tgwseps: TgwsepEntity[];

  @OneToMany(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.tfpfun)
  tpqpes: TpqpesEntity[];

  @OneToMany(() => TrscanEntity, (trscanEntity) => trscanEntity.tfpfun)
  trscans: TrscanEntity[];

  @OneToMany(() => TrssubEntity, (trssubEntity) => trssubEntity.tfpfun)
  trssubs: TrssubEntity[];
}
