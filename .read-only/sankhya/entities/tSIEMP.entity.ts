import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { AdTfpavaEntity } from './aD_TFPAVA.entity';
import { AdTsicndEntity } from './aD_TSICND.entity';
import { AstreqEntity } from './aSTREQ.entity';
import { TcaconEntity } from './tCACON.entity';
import { TcadiaEntity } from './tCADIA.entity';
import { TcadseEntity } from './tCADSE.entity';
import { TcaempEntity } from './tCAEMP.entity';
import { TcamatEntity } from './tCAMAT.entity';
import { TcaparEntity } from './tCAPAR.entity';
import { TcaperEntity } from './tCAPER.entity';
import { TcapreEntity } from './tCAPRE.entity';
import { TcaremEntity } from './tCAREM.entity';
import { TcaturEntity } from './tCATUR.entity';
import { TcbefbEntity } from './tCBEFB.entity';
import { TcbefrEntity } from './tCBEFR.entity';
import { TcbempEntity } from './tCBEMP.entity';
import { TcbfctEntity } from './tCBFCT.entity';
import { TcbftrEntity } from './tCBFTR.entity';
import { TcbhltEntity } from './tCBHLT.entity';
import { TcbimodEntity } from './tCBIMOD.entity';
import { TcbimorEntity } from './tCBIMOR.entity';
import { TcbmetEntity } from './tCBMET.entity';
import { TcbpciEntity } from './tCBPCI.entity';
import { TcbspeEntity } from './tCBSPE.entity';
import { TccconEntity } from './tCCCON.entity';
import { TcfcptEntity } from './tCFCPT.entity';
import { TcfdocEntity } from './tCFDOC.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';
import { TcfpnuEntity } from './tCFPNU.entity';
import { TcibemEntity } from './tCIBEM.entity';
import { TcicabcteEntity } from './tCICABCTE.entity';
import { TcicteEntity } from './tCICTE.entity';
import { TcilocEntity } from './tCILOC.entity';
import { TcseqpEntity } from './tCSEQP.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpcpuEntity } from './tFPCPU.entity';
import { TfpctiEntity } from './tFPCTI.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfppgeEntity } from './tFPPGE.entity';
import { TfpponlautEntity } from './tFPPONLAUT.entity';
import { TfppontcfEntity } from './tFPPONTCF.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';
import { TfxadfEntity } from './tFXADF.entity';
import { TgaahEntity } from './tGAAH.entity';
import { TgampaEntity } from './tGAMPA.entity';
import { TgapeaEntity } from './tGAPEA.entity';
import { TgfcajaEntity } from './tGFCAJA.entity';
import { TgfcitbEntity } from './tGFCITB.entity';
import { TgfclxEntity } from './tGFCLX.entity';
import { TgfcnaeEntity } from './tGFCNAE.entity';
import { TgfefbEntity } from './tGFEFB.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfepsEntity } from './tGFEPS.entity';
import { TgfepsdEntity } from './tGFEPSD.entity';
import { TgfeqfEntity } from './tGFEQF.entity';
import { TgffciEntity } from './tGFFCI.entity';
import { TgffemEntity } from './tGFFEM.entity';
import { Tgfgir1Entity } from './tGFGIR1.entity';
import { TgfgvpEntity } from './tGFGVP.entity';
import { TgflcrEntity } from './tGFLCR.entity';
import { TgfmaqEntity } from './tGFMAQ.entity';
import { TgfnesEntity } from './tGFNES.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfpplEntity } from './tGFPPL.entity';
import { TgfrocEntity } from './tGFROC.entity';
import { TgfsemEntity } from './tGFSEM.entity';
import { TgfuseEntity } from './tGFUSE.entity';
import { TgfviagEntity } from './tGFVIAG.entity';
import { TgwragEntity } from './tGWRAG.entity';
import { TimadmEntity } from './tIMADM.entity';
import { TimimbEntity } from './tIMIMB.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TimtxcEntity } from './tIMTXC.entity';
import { TmsaverbhistEntity } from './tMSAVERBHIST.entity';
import { TmscalocoEntity } from './tMSCALOCO.entity';
import { TmsconfempEntity } from './tMSCONFEMP.entity';
import { TmsconfuniEntity } from './tMSCONFUNI.entity';
import { TmsfvgEntity } from './tMSFVG.entity';
import { TmsfvmEntity } from './tMSFVM.entity';
import { TmsordcarregEntity } from './tMSORDCARREG.entity';
import { TmspedEntity } from './tMSPED.entity';
import { TmspedrotEntity } from './tMSPEDROT.entity';
import { TrsvneEntity } from './tRSVNE.entity';
import { TsiataEntity } from './tSIATA.entity';
import { TsicdfeEntity } from './tSICDFE.entity';
import { TsiceuEntity } from './tSICEU.entity';
import { TsicmdEntity } from './tSICMD.entity';
import { TsicpoEntity } from './tSICPO.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsicidEntity } from './tSICID.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TsiiufEntity } from './tSIIUF.entity';
import { TsiterEntity } from './tSITER.entity';
import { TsiuctEntity } from './tSIUCT.entity';
import { TfpreqEntity } from './tFPREQ.entity';

@Index('PK_TSIEMP', ['codemp'], { unique: true })
@Index('TSIEMP_I01', ['codempmatriz'], {})
@Entity('TSIEMP', { schema: 'SANKHYA' })
export class TsiempEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { name: 'NOMEFANTASIA', nullable: true, length: 40 })
  nomefantasia: string | null;

  @Column('char', { name: 'RAZAOSOCIAL', nullable: true, length: 40 })
  razaosocial: string | null;

  @Column('char', { name: 'RAZAOABREV', length: 15 })
  razaoabrev: string;

  @Column('smallint', { name: 'CODEMPMATRIZ', nullable: true })
  codempmatriz: number | null;

  @Column('char', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('char', { name: 'COMPLEMENTO', nullable: true, length: 10 })
  complemento: string | null;

  @Column('char', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('varchar', { name: 'FAX', nullable: true, length: 13 })
  fax: string | null;

  @Column('char', { name: 'TELEX', nullable: true, length: 12 })
  telex: string | null;

  @Column('char', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('char', { name: 'HOMEPAGE', nullable: true, length: 255 })
  homepage: string | null;

  @Column('smallint', { name: 'NUMPROPR', nullable: true })
  numpropr: number | null;

  @Column('char', { name: 'PRINCTITULAR', nullable: true, length: 40 })
  princtitular: string | null;

  @Column('char', { name: 'CGC', nullable: true, length: 14 })
  cgc: string | null;

  @Column('char', { name: 'INSCESTAD', nullable: true, length: 16 })
  inscestad: string | null;

  @Column('char', { name: 'INSCMUN', nullable: true, length: 16 })
  inscmun: string | null;

  @Column('int', { name: 'CODMUN', nullable: true })
  codmun: number | null;

  @Column('smallint', { name: 'NATESTAB', nullable: true })
  natestab: number | null;

  @Column('smallint', { name: 'NATJUR', nullable: true })
  natjur: number | null;

  @Column('char', { name: 'RAMOATIV', nullable: true, length: 40 })
  ramoativ: string | null;

  @Column('int', { name: 'ATIVECON', nullable: true })
  ativecon: number | null;

  @Column('char', { name: 'REGJUNTACOM', nullable: true, length: 12 })
  regjuntacom: string | null;

  @Column('datetime', { name: 'DTREGJUNTA', nullable: true })
  dtregjunta: Date | null;

  @Column('image', { name: 'LOGOMARCA', nullable: true })
  logomarca: Buffer | null;

  @Column('char', { name: 'FINANCEIRO', length: 1, default: () => "'N'" })
  financeiro: string;

  @Column('char', { name: 'ESTOQUE', length: 1, default: () => "'N'" })
  estoque: string;

  @Column('char', { name: 'CARGAS', length: 1, default: () => "'N'" })
  cargas: string;

  @Column('char', { name: 'COMISSOES', length: 1, default: () => "'N'" })
  comissoes: string;

  @Column('char', { name: 'PRODUCAO', length: 1, default: () => "'N'" })
  producao: string;

  @Column('char', { name: 'SUPDECISAO', length: 1, default: () => "'N'" })
  supdecisao: string;

  @Column('char', { name: 'LIVROSFISCAIS', length: 1, default: () => "'N'" })
  livrosfiscais: string;

  @Column('datetime', { name: 'CONTABILIDADE', nullable: true })
  contabilidade: Date | null;

  @Column('char', { name: 'FOLHAPAGTO', length: 1, default: () => "'N'" })
  folhapagto: string;

  @Column('char', { name: 'CODCNL', nullable: true, length: 10 })
  codcnl: string | null;

  @Column('char', {
    name: 'SIMPLES',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  simples: string | null;

  @Column('float', { name: 'LIMCURVA_B', nullable: true, precision: 53 })
  limcurvaB: number | null;

  @Column('float', { name: 'LIMCURVA_C', nullable: true, precision: 53 })
  limcurvaC: number | null;

  @Column('smallint', { name: 'EMPAGRUPARGOL', nullable: true })
  empagrupargol: number | null;

  @Column('varchar', { name: 'SERIENFDES', nullable: true, length: 4 })
  serienfdes: string | null;

  @Column('varchar', { name: 'MODELONFDES', nullable: true, length: 2 })
  modelonfdes: string | null;

  @Column('char', { name: 'COOPERATIVA', length: 1, default: () => "'N'" })
  cooperativa: string;

  @Column('datetime', { name: 'DTCONVSOC', nullable: true })
  dtconvsoc: Date | null;

  @Column('varchar', { name: 'DUPLIV', length: 1, default: () => "'N'" })
  dupliv: string;

  @Column('varchar', { name: 'CPFRESP', nullable: true, length: 11 })
  cpfresp: string | null;

  @Column('smallint', { name: 'CODREGTRIB', nullable: true })
  codregtrib: number | null;

  @Column('int', { name: 'TIPOSN', nullable: true })
  tiposn: number | null;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @Column('varchar', {
    name: 'RAZAOSOCIALCOMPLETA',
    nullable: true,
    length: 250,
  })
  razaosocialcompleta: string | null;

  @Column('varchar', { name: 'SERVIDORSMTP', nullable: true, length: 80 })
  servidorsmtp: string | null;

  @Column('char', { name: 'TIPOSMTP', length: 1, default: () => "'N'" })
  tiposmtp: string;

  @Column('varchar', { name: 'USUARIOSMTP', nullable: true, length: 80 })
  usuariosmtp: string | null;

  @Column('varchar', { name: 'SENHASMTP', nullable: true, length: 80 })
  senhasmtp: string | null;

  @Column('smallint', { name: 'PORTASMTP', default: () => '(25)' })
  portasmtp: number;

  @Column('char', { name: 'SEGURANCASMTP', length: 1, default: () => "'N'" })
  segurancasmtp: string;

  @Column('char', { name: 'SIMPLESNACNAUF', length: 1, default: () => "'S'" })
  simplesnacnauf: string;

  @Column('varchar', { name: 'DMACODINSP', nullable: true, length: 2 })
  dmacodinsp: string | null;

  @Column('char', { name: 'DMAESPECIAL', length: 1, default: () => "'N'" })
  dmaespecial: string;

  @Column('datetime', { name: 'DTENCERBALAN', nullable: true })
  dtencerbalan: Date | null;

  @Column('varchar', { name: 'CODQUALASSIN', nullable: true, length: 3 })
  codqualassin: string | null;

  @Column('varchar', { name: 'LATITUDE', nullable: true, length: 255 })
  latitude: string | null;

  @Column('varchar', { name: 'LONGITUDE', nullable: true, length: 255 })
  longitude: string | null;

  @Column('varchar', { name: 'SITESPECIALRESP', nullable: true, length: 2 })
  sitespecialresp: string | null;

  @Column('varchar', { name: 'EXIGEISSQN', nullable: true, length: 2 })
  exigeissqn: string | null;

  @Column('varchar', { name: 'REGESPTRIBUT', nullable: true, length: 2 })
  regesptribut: string | null;

  @Column('varchar', { name: 'RNTRC', nullable: true, length: 8 })
  rntrc: string | null;

  @Column('smallint', { name: 'CLASSTRIB', nullable: true })
  classtrib: number | null;

  @Column('int', { name: 'CNAEPREPON', nullable: true })
  cnaeprepon: number | null;

  @Column('smallint', { name: 'INDCOOP', default: () => '(0)' })
  indcoop: number;

  @Column('smallint', { name: 'INDCONSTR', default: () => '(0)' })
  indconstr: number;

  @Column('smallint', { name: 'INFOOBRA', nullable: true })
  infoobra: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', {
    name: 'ACDINTISENMULTA',
    nullable: true,
    default: () => '(0)',
  })
  acdintisenmulta: number | null;

  @Column('smallint', { name: 'INDSITESP', default: () => '(0)' })
  indsitesp: number;

  @Column('int', {
    name: 'COREMPRESA',
    nullable: true,
    default: () => '(16777215)',
  })
  corempresa: number | null;

  @Column('int', { name: 'QTDACESSOS', nullable: true })
  qtdacessos: number | null;

  @Column('char', { name: 'ENVESOCIAL', length: 1, default: () => "'N'" })
  envesocial: string;

  @Column('varchar', { name: 'RECIBOESOCIAL', nullable: true, length: 40 })
  reciboesocial: string | null;

  @Column('datetime', { name: 'INIVALESOCIAL', nullable: true })
  inivalesocial: Date | null;

  @Column('datetime', { name: 'FIMVALESOCIAL', nullable: true })
  fimvalesocial: Date | null;

  @Column('smallint', { name: 'INDOPCCP', nullable: true })
  indopccp: number | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', { name: 'USARAZAOSOCIAL', nullable: true, length: 1 })
  usarazaosocial: string | null;

  @Column('datetime', { name: 'DTABERTURA', nullable: true })
  dtabertura: Date | null;

  @Column('varchar', { name: 'EMPIDENOTAS', nullable: true, length: 50 })
  empidenotas: string | null;

  @Column('varchar', { name: 'PRODUTORRURAL', nullable: true, length: 1 })
  produtorrural: string | null;

  @Column('varchar', { name: 'COTM', nullable: true, length: 20 })
  cotm: string | null;

  @Column('int', { name: 'CODPARCSEG', nullable: true })
  codparcseg: number | null;

  @Column('varchar', { name: 'RESPONSAVELSEGURO', nullable: true, length: 100 })
  responsavelseguro: string | null;

  @Column('varchar', { name: 'APOLICE', nullable: true, length: 100 })
  apolice: string | null;

  @Column('int', { name: 'CODLOCVEI', nullable: true })
  codlocvei: number | null;

  @Column('int', { name: 'CODTOPTRANSF', nullable: true })
  codtoptransf: number | null;

  @Column('float', { name: 'VLRADIANTSEM', nullable: true, precision: 53 })
  vlradiantsem: number | null;

  @Column('varchar', { name: 'CODEMPREPOM', nullable: true, length: 100 })
  codemprepom: string | null;

  @Column('int', { name: 'CODCENCUSTRANSF', nullable: true })
  codcencustransf: number | null;

  @Column('datetime', { name: 'DHCONSITIMEND', nullable: true })
  dhconsitimend: Date | null;

  @Column('varchar', { name: 'AD_EMAILPEDCOMPRA', nullable: true, length: 100 })
  adEmailpedcompra: string | null;

  @Column('int', { name: 'AD_EMPRESAPIPERUN', nullable: true })
  adEmpresapiperun: number | null;

  @Column('varchar', { name: 'NUREST', nullable: true, length: 25 })
  nurest: string | null;

  @Column('varchar', { name: 'NUMTAF', nullable: true, length: 12 })
  numtaf: string | null;

  @Column('varchar', { name: 'CNPJPREFEITURA', nullable: true, length: 14 })
  cnpjprefeitura: string | null;

  @OneToMany(() => AdTfpavaEntity, (adTfpavaEntity) => adTfpavaEntity.codemp)
  adTfpavas: AdTfpavaEntity[];

  @OneToMany(() => AdTsicndEntity, (adTsicndEntity) => adTsicndEntity.codemp)
  adTsicnds: AdTsicndEntity[];

  @OneToMany(() => AstreqEntity, (astreqEntity) => astreqEntity.codemp)
  astreqs: AstreqEntity[];

  @OneToMany(() => TcaconEntity, (tcaconEntity) => tcaconEntity.codemp)
  tcacons: TcaconEntity[];

  @OneToMany(() => TcadiaEntity, (tcadiaEntity) => tcadiaEntity.codemp)
  tcadias: TcadiaEntity[];

  @OneToMany(() => TcadseEntity, (tcadseEntity) => tcadseEntity.codemp)
  tcadses: TcadseEntity[];

  @OneToOne(() => TcaempEntity, (tcaempEntity) => tcaempEntity.codemp2)
  tcaemp: TcaempEntity;

  @OneToMany(() => TcamatEntity, (tcamatEntity) => tcamatEntity.codemp)
  tcamats: TcamatEntity[];

  @OneToMany(() => TcaparEntity, (tcaparEntity) => tcaparEntity.codemp2)
  tcapars: TcaparEntity[];

  @OneToMany(() => TcaperEntity, (tcaperEntity) => tcaperEntity.codemp)
  tcapers: TcaperEntity[];

  @OneToMany(() => TcapreEntity, (tcapreEntity) => tcapreEntity.codemp2)
  tcapres: TcapreEntity[];

  @OneToMany(() => TcaremEntity, (tcaremEntity) => tcaremEntity.codemp)
  tcarems: TcaremEntity[];

  @OneToMany(() => TcaturEntity, (tcaturEntity) => tcaturEntity.codemp)
  tcaturs: TcaturEntity[];

  @OneToMany(() => TcbefbEntity, (tcbefbEntity) => tcbefbEntity.codemp2)
  tcbefbs: TcbefbEntity[];

  @OneToMany(() => TcbefrEntity, (tcbefrEntity) => tcbefrEntity.codemp2)
  tcbefrs: TcbefrEntity[];

  @OneToMany(() => TcbempEntity, (tcbempEntity) => tcbempEntity.codempplacta)
  tcbemps: TcbempEntity[];

  @OneToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.codemp2)
  tcbemp: TcbempEntity;

  @OneToMany(() => TcbfctEntity, (tcbfctEntity) => tcbfctEntity.codemp2)
  tcbfcts: TcbfctEntity[];

  @OneToMany(() => TcbftrEntity, (tcbftrEntity) => tcbftrEntity.codemp2)
  tcbftrs: TcbftrEntity[];

  @OneToMany(() => TcbhltEntity, (tcbhltEntity) => tcbhltEntity.codemp2)
  tcbhlts: TcbhltEntity[];

  @OneToMany(() => TcbimodEntity, (tcbimodEntity) => tcbimodEntity.codemp2)
  tcbimods: TcbimodEntity[];

  @OneToMany(() => TcbimorEntity, (tcbimorEntity) => tcbimorEntity.codemp2)
  tcbimors: TcbimorEntity[];

  @OneToMany(() => TcbmetEntity, (tcbmetEntity) => tcbmetEntity.codemp2)
  tcbmets: TcbmetEntity[];

  @OneToMany(() => TcbpciEntity, (tcbpciEntity) => tcbpciEntity.codempmov2)
  tcbpcis: TcbpciEntity[];

  @OneToMany(() => TcbpciEntity, (tcbpciEntity) => tcbpciEntity.codempctb)
  tcbpcis2: TcbpciEntity[];

  @OneToMany(() => TcbspeEntity, (tcbspeEntity) => tcbspeEntity.codemp2)
  tcbspes: TcbspeEntity[];

  @OneToMany(() => TccconEntity, (tccconEntity) => tccconEntity.codemp)
  tcccons: TccconEntity[];

  @OneToMany(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.codemp)
  tcfcpts: TcfcptEntity[];

  @OneToMany(() => TcfdocEntity, (tcfdocEntity) => tcfdocEntity.codemp)
  tcfdocs: TcfdocEntity[];

  @OneToMany(() => TcfoscabEntity, (tcfoscabEntity) => tcfoscabEntity.codemp)
  tcfoscabs: TcfoscabEntity[];

  @OneToMany(() => TcfpnuEntity, (tcfpnuEntity) => tcfpnuEntity.codemp)
  tcfpnus: TcfpnuEntity[];

  @OneToMany(() => TcibemEntity, (tcibemEntity) => tcibemEntity.codemp)
  tcibems: TcibemEntity[];

  @OneToMany(
    () => TcicabcteEntity,
    (tcicabcteEntity) => tcicabcteEntity.codemp2,
  )
  tcicabctes: TcicabcteEntity[];

  @OneToMany(() => TcicteEntity, (tcicteEntity) => tcicteEntity.codempsis)
  tcictes: TcicteEntity[];

  @OneToMany(() => TcicteEntity, (tcicteEntity) => tcicteEntity.codemp2)
  tcictes2: TcicteEntity[];

  @OneToMany(() => TcilocEntity, (tcilocEntity) => tcilocEntity.codemp)
  tcilocs: TcilocEntity[];

  @OneToMany(() => TcseqpEntity, (tcseqpEntity) => tcseqpEntity.codempfun)
  tcseqps: TcseqpEntity[];

  @OneToMany(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.timparcproj)
  tcsprjs: TcsprjEntity[];

  @OneToMany(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.codemp)
  tcsprjs2: TcsprjEntity[];

  @OneToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.codemp)
  tfpbens: TfpbenEntity[];

  @OneToMany(() => TfpcpuEntity, (tfpcpuEntity) => tfpcpuEntity.codemp2)
  tfpcpus: TfpcpuEntity[];

  @OneToMany(() => TfpctiEntity, (tfpctiEntity) => tfpctiEntity.codemp)
  tfpctis: TfpctiEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codemporg)
  tfpemps: TfpempEntity[];

  @OneToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codemp2)
  tfpemp: TfpempEntity;

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.empdestinoctb)
  tfpemps2: TfpempEntity[];

  @OneToMany(() => TfppgeEntity, (tfppgeEntity) => tfppgeEntity.codemp2)
  tfppges: TfppgeEntity[];

  @OneToMany(
    () => TfpponlautEntity,
    (tfpponlautEntity) => tfpponlautEntity.codemp2,
  )
  tfpponlauts: TfpponlautEntity[];

  @OneToMany(
    () => TfppontcfEntity,
    (tfppontcfEntity) => tfppontcfEntity.codemp2,
  )
  tfppontcfs: TfppontcfEntity[];

  @OneToMany(() => TfpreqadmEntity, (tfpreqadmEntity) => tfpreqadmEntity.codemp)
  tfpreqadms: TfpreqadmEntity[];

  @OneToMany(() => TfxadfEntity, (tfxadfEntity) => tfxadfEntity.codemp)
  tfxadfs: TfxadfEntity[];

  @OneToMany(() => TgaahEntity, (tgaahEntity) => tgaahEntity.codemp)
  tgaahs: TgaahEntity[];

  @OneToMany(() => TgaahEntity, (tgaahEntity) => tgaahEntity.codempfunc)
  tgaahs2: TgaahEntity[];

  @OneToMany(() => TgampaEntity, (tgampaEntity) => tgampaEntity.codempfunc)
  tgampas: TgampaEntity[];

  @OneToMany(() => TgapeaEntity, (tgapeaEntity) => tgapeaEntity.codemp)
  tgapeas: TgapeaEntity[];

  @OneToMany(() => TgfcajaEntity, (tgfcajaEntity) => tgfcajaEntity.codemp)
  tgfcajas: TgfcajaEntity[];

  @OneToMany(() => TgfcajaEntity, (tgfcajaEntity) => tgfcajaEntity.filcodemp)
  tgfcajas2: TgfcajaEntity[];

  @OneToOne(() => TgfcitbEntity, (tgfcitbEntity) => tgfcitbEntity.codemp2)
  tgfcitb: TgfcitbEntity;

  @OneToMany(() => TgfclxEntity, (tgfclxEntity) => tgfclxEntity.codemp2)
  tgfclxes: TgfclxEntity[];

  @OneToMany(() => TgfcnaeEntity, (tgfcnaeEntity) => tgfcnaeEntity.codemp2)
  tgfcnaes: TgfcnaeEntity[];

  @OneToMany(() => TgfefbEntity, (tgfefbEntity) => tgfefbEntity.codemp2)
  tgfefbs: TgfefbEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.empdestinowms)
  tgfemps: TgfempEntity[];

  @OneToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codemp2)
  tgfemp: TgfempEntity;

  @OneToMany(() => TgfepsEntity, (tgfepsEntity) => tgfepsEntity.codemp2)
  tgfeps: TgfepsEntity[];

  @OneToMany(() => TgfepsdEntity, (tgfepsdEntity) => tgfepsdEntity.codemp)
  tgfepsds: TgfepsdEntity[];

  @OneToMany(() => TgfeqfEntity, (tgfeqfEntity) => tgfeqfEntity.codemp)
  tgfeqfs: TgfeqfEntity[];

  @OneToMany(() => TgffciEntity, (tgffciEntity) => tgffciEntity.codemp2)
  tgffcis: TgffciEntity[];

  @OneToMany(() => TgffemEntity, (tgffemEntity) => tgffemEntity.codemp2)
  tgffems: TgffemEntity[];

  @OneToMany(() => Tgfgir1Entity, (tgfgir1Entity) => tgfgir1Entity.codemp2)
  tgfgirs: Tgfgir1Entity[];

  @OneToMany(() => TgfgvpEntity, (tgfgvpEntity) => tgfgvpEntity.codemp)
  tgfgvps: TgfgvpEntity[];

  @OneToMany(() => TgflcrEntity, (tgflcrEntity) => tgflcrEntity.codemp2)
  tgflcrs: TgflcrEntity[];

  @OneToMany(() => TgfmaqEntity, (tgfmaqEntity) => tgfmaqEntity.codemp)
  tgfmaqs: TgfmaqEntity[];

  @OneToMany(() => TgfnesEntity, (tgfnesEntity) => tgfnesEntity.codemp)
  tgfnes: TgfnesEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codempnegoc)
  tgfords: TgfordEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codemppref)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codemp)
  tgfpars2: TgfparEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codempparc)
  tgfpars3: TgfparEntity[];

  @OneToMany(() => TgfpplEntity, (tgfpplEntity) => tgfpplEntity.codemp)
  tgfppls: TgfpplEntity[];

  @OneToMany(() => TgfrocEntity, (tgfrocEntity) => tgfrocEntity.codemp2)
  tgfrocs: TgfrocEntity[];

  @OneToMany(() => TgfsemEntity, (tgfsemEntity) => tgfsemEntity.codemp2)
  tgfsems: TgfsemEntity[];

  @OneToMany(() => TgfuseEntity, (tgfuseEntity) => tgfuseEntity.codemp2)
  tgfuses: TgfuseEntity[];

  @OneToMany(() => TgfviagEntity, (tgfviagEntity) => tgfviagEntity.codemp)
  tgfviags: TgfviagEntity[];

  @OneToMany(() => TgwragEntity, (tgwragEntity) => tgwragEntity.codemp2)
  tgwrags: TgwragEntity[];

  @OneToMany(() => TimadmEntity, (timadmEntity) => timadmEntity.admempresanf)
  timadms: TimadmEntity[];

  @OneToMany(() => TimimbEntity, (timimbEntity) => timimbEntity.imbcodemp)
  timimbs: TimimbEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotempresa)
  timlots: TimlotEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotempparceria)
  timlots2: TimlotEntity[];

  @OneToMany(() => TimtxcEntity, (timtxcEntity) => timtxcEntity.txccodemp)
  timtxcs: TimtxcEntity[];

  @OneToMany(
    () => TmsaverbhistEntity,
    (tmsaverbhistEntity) => tmsaverbhistEntity.codemp,
  )
  tmsaverbhists: TmsaverbhistEntity[];

  @OneToMany(
    () => TmscalocoEntity,
    (tmscalocoEntity) => tmscalocoEntity.codempfechamento,
  )
  tmscalocos: TmscalocoEntity[];

  @OneToMany(
    () => TmsconfempEntity,
    (tmsconfempEntity) => tmsconfempEntity.codemp2,
  )
  tmsconfemps: TmsconfempEntity[];

  @OneToMany(
    () => TmsconfuniEntity,
    (tmsconfuniEntity) => tmsconfuniEntity.codemp2,
  )
  tmsconfunis: TmsconfuniEntity[];

  @OneToMany(() => TmsfvgEntity, (tmsfvgEntity) => tmsfvgEntity.codempnegoc)
  tmsfvgs: TmsfvgEntity[];

  @OneToMany(() => TmsfvgEntity, (tmsfvgEntity) => tmsfvgEntity.codemp)
  tmsfvgs2: TmsfvgEntity[];

  @OneToMany(() => TmsfvmEntity, (tmsfvmEntity) => tmsfvmEntity.codemp)
  tmsfvms: TmsfvmEntity[];

  @OneToMany(() => TmsfvmEntity, (tmsfvmEntity) => tmsfvmEntity.codempnegoc)
  tmsfvms2: TmsfvmEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codempnegoc,
  )
  tmsordcarregs: TmsordcarregEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codemp,
  )
  tmsordcarregs2: TmsordcarregEntity[];

  @OneToMany(() => TmspedEntity, (tmspedEntity) => tmspedEntity.codempnegoc)
  tmspeds: TmspedEntity[];

  @OneToMany(() => TmspedrotEntity, (tmspedrotEntity) => tmspedrotEntity.codemp)
  tmspedrots: TmspedrotEntity[];

  @OneToMany(() => TrsvneEntity, (trsvneEntity) => trsvneEntity.codemp)
  trsvnes: TrsvneEntity[];

  @OneToMany(() => TsiataEntity, (tsiataEntity) => tsiataEntity.codemp)
  tsiatas: TsiataEntity[];

  @OneToOne(() => TsicdfeEntity, (tsicdfeEntity) => tsicdfeEntity.codemp2)
  tsicdfe: TsicdfeEntity;

  @OneToMany(() => TsiceuEntity, (tsiceuEntity) => tsiceuEntity.codemp2)
  tsiceus: TsiceuEntity[];

  @OneToMany(() => TsicmdEntity, (tsicmdEntity) => tsicmdEntity.codemp)
  tsicmds: TsicmdEntity[];

  @OneToMany(() => TsicpoEntity, (tsicpoEntity) => tsicpoEntity.codemp)
  tsicpos: TsicpoEntity[];

  @OneToMany(() => TsictaEntity, (tsictaEntity) => tsictaEntity.codemp)
  tsictas: TsictaEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tsiemps)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.tsiemps)
  @JoinColumn([
    { name: 'CODPARCEMPSOFT', referencedColumnName: 'codparc' },
    { name: 'CODCTTPARCEMPSOFT', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tsiemps)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai: TsibaiEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tsiemps)
  @JoinColumn([{ name: 'CODNATTRANSF', referencedColumnName: 'codnat' }])
  codnattransf: TgfnatEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tsiemps)
  @JoinColumn([{ name: 'CODLOCREC', referencedColumnName: 'codlocal' }])
  codlocrec: TgflocEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tsiemps2)
  @JoinColumn([{ name: 'CODLOCSUC', referencedColumnName: 'codlocal' }])
  codlocsuc: TgflocEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tsiemps3)
  @JoinColumn([{ name: 'CODLOCDES', referencedColumnName: 'codlocal' }])
  codlocdes: TgflocEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiemps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsiemps)
  @JoinColumn([{ name: 'CODPARCRESP', referencedColumnName: 'codparc' }])
  codparcresp: TgfparEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tsiemps)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tsiemps4)
  @JoinColumn([{ name: 'CODLOCEST', referencedColumnName: 'codlocal' }])
  codlocest: TgflocEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsiemps2)
  @JoinColumn([{ name: 'CODPARCEMPSOFT', referencedColumnName: 'codparc' }])
  codparcempsoft: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsiemps3)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsiemps4)
  @JoinColumn([{ name: 'CODPARCDIV', referencedColumnName: 'codparc' }])
  codparcdiv: TgfparEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tsiemps)
  @JoinColumn([{ name: 'CODEMPMATRIZ', referencedColumnName: 'codemp' }])
  codempmatriz2: TsiempEntity;

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codempmatriz2)
  tsiemps: TsiempEntity[];

  @OneToMany(() => TsiiufEntity, (tsiiufEntity) => tsiiufEntity.codemp2)
  tsiiufs: TsiiufEntity[];

  @OneToMany(() => TsiterEntity, (tsiterEntity) => tsiterEntity.codemp)
  tsiters: TsiterEntity[];

  @OneToMany(() => TsiuctEntity, (tsiuctEntity) => tsiuctEntity.codemp2)
  tsiucts: TsiuctEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.codemp)
  tsiusus: TsiusuEntity[];

  @OneToMany(() => TfpreqEntity, (tfpreqEntity) => tfpreqEntity.empresa)
  tfpreqs: TfpreqEntity[];
}
