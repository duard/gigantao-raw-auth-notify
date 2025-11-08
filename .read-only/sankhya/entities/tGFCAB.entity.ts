import {
    Column,
    Entity,
    Index,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
} from 'typeorm';
import { AdGeraoscomEntity } from './aD_GERAOSCOM.entity';
import { GfratendimentoclienteEntity } from './gFRATENDIMENTOCLIENTE.entity';
import { TcbirpjnfretEntity } from './tCBIRPJNFRET.entity';
import { TccconEntity } from './tCCCON.entity';
import { TcfitepnuEntity } from './tCFITEPNU.entity';
import { TcibemEntity } from './tCIBEM.entity';
import { TcicteEntity } from './tCICTE.entity';
import { TcidibEntity } from './tCIDIB.entity';
import { TcsbmeEntity } from './tCSBME.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TcsfapEntity } from './tCSFAP.entity';
import { TcsfpdEntity } from './tCSFPD.entity';
import { TcslipEntity } from './tCSLIP.entity';
import { TcsmetEntity } from './tCSMET.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TcsvpcEntity } from './tCSVPC.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TgangiEntity } from './tGANGI.entity';
import { TgapcaEntity } from './tGAPCA.entity';
import { TgasafEntity } from './tGASAF.entity';
import { TgfadgEntity } from './tGFADG.entity';
import { TgfadstEntity } from './tGFADST.entity';
import { TgfaemEntity } from './tGFAEM.entity';
import { TgfaevEntity } from './tGFAEV.entity';
import { TgfageEntity } from './tGFAGE.entity';
import { TgfaucEntity } from './tGFAUC.entity';
import { TgfbilEntity } from './tGFBIL.entity';
import { TgfcabligEntity } from './tGFCABLIG.entity';
import { TgfcabvmEntity } from './tGFCABVM.entity';
import { TgfcadEntity } from './tGFCAD.entity';
import { TgfcasEntity } from './tGFCAS.entity';
import { TgfccxEntity } from './tGFCCX.entity';
import { TgfcfmEntity } from './tGFCFM.entity';
import { TgfcgtveEntity } from './tGFCGTVE.entity';
import { TgfcmnEntity } from './tGFCMN.entity';
import { TgfcolEntity } from './tGFCOL.entity';
import { TgfconEntity } from './tGFCON.entity';
import { Tgfcon2Entity } from './tGFCON2.entity';
import { TgfcontEntity } from './tGFCONT.entity';
import { TgfcotEntity } from './tGFCOT.entity';
import { TgfcpeEntity } from './tGFCPE.entity';
import { TgfcredEntity } from './tGFCRED.entity';
import { TgfctdEntity } from './tGFCTD.entity';
import { TgfdantEntity } from './tGFDANT.entity';
import { TgfdgcEntity } from './tGFDGC.entity';
import { TgfdrcstajusteEntity } from './tGFDRCSTAJUSTE.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfenvEntity } from './tGFENV.entity';
import { TgfexiEntity } from './tGFEXI.entity';
import { TgfexpEntity } from './tGFEXP.entity';
import { TgfexpnEntity } from './tGFEXPN.entity';
import { TgffadEntity } from './tGFFAD.entity';
import { TgffaeEntity } from './tGFFAE.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgffnfEntity } from './tGFFNF.entity';
import { TgffopEntity } from './tGFFOP.entity';
import { TgffreEntity } from './tGFFRE.entity';
import { TgffvcEntity } from './tGFFVC.entity';
import { TgfgirEntity } from './tGFGIR.entity';
import { TgfgtvEntity } from './tGFGTV.entity';
import { TgfhcabpajEntity } from './tGFHCABPAJ.entity';
import { TgfidaEntity } from './tGFIDA.entity';
import { TgfigtveEntity } from './tGFIGTVE.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgflcrEntity } from './tGFLCR.entity';
import { TgflibEntity } from './tGFLIB.entity';
import { TgflnfEntity } from './tGFLNF.entity';
import { TgfmaqEntity } from './tGFMAQ.entity';
import { TgfmfoEntity } from './tGFMFO.entity';
import { TgfmixEntity } from './tGFMIX.entity';
import { TgfmstEntity } from './tGFMST.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfnceEntity } from './tGFNCE.entity';
import { TgfnctEntity } from './tGFNCT.entity';
import { TgfndpEntity } from './tGFNDP.entity';
import { TgfnfcEntity } from './tGFNFC.entity';
import { TgfnmaEntity } from './tGFNMA.entity';
import { TgfnmdfeEntity } from './tGFNMDFE.entity';
import { TgfnpaEntity } from './tGFNPA.entity';
import { TgfobsEntity } from './tGFOBS.entity';
import { TgfodpEntity } from './tGFODP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfpecEntity } from './tGFPEC.entity';
import { TgfpedEntity } from './tGFPED.entity';
import { TgfpefcEntity } from './tGFPEFC.entity';
import { TgfpevEntity } from './tGFPEV.entity';
import { TgfplacEntity } from './tGFPLAC.entity';
import { TgfrcaEntity } from './tGFRCA.entity';
import { TgfresiEntity } from './tGFRESI.entity';
import { TgfrftEntity } from './tGFRFT.entity';
import { TgfromEntity } from './tGFROM.entity';
import { TgfsegEntity } from './tGFSEG.entity';
import { TgfsitEntity } from './tGFSIT.entity';
import { TgfstaEntity } from './tGFSTA.entity';
import { TgfsubEntity } from './tGFSUB.entity';
import { TgftopEntity } from './tGFTOP.entity';
import { TgftpdEntity } from './tGFTPD.entity';
import { TgftpvEntity } from './tGFTPV.entity';
import { TgfucaEntity } from './tGFUCA.entity';
import { TgfunmEntity } from './tGFUNM.entity';
import { TgfutrEntity } from './tGFUTR.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgfvorEntity } from './tGFVOR.entity';
import { TgfvpfEntity } from './tGFVPF.entity';
import { TgfvtpEntity } from './tGFVTP.entity';
import { TgmainEntity } from './tGMAIN.entity';
import { TgpacoEntity } from './tGPACO.entity';
import { TgpregEntity } from './tGPREG.entity';
import { TgvravEntity } from './tGVRAV.entity';
import { TgwageEntity } from './tGWAGE.entity';
import { TgwdcaEntity } from './tGWDCA.entity';
import { TgwempeEntity } from './tGWEMPE.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TgwrevEntity } from './tGWREV.entity';
import { TgwsepEntity } from './tGWSEP.entity';
import { TimcnfEntity } from './tIMCNF.entity';
import { TimmfdEntity } from './tIMMFD.entity';
import { TimrclEntity } from './tIMRCL.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TsigufEntity } from './tSIGUF.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TsipomEntity } from './tSIPOM.entity';
import { TsiufsEntity } from './tSIUFS.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('IDX_TGFCAB_TIM1', ['timnufinorig'], {})
@Index('PK_TGFCAB', ['nunota'], { unique: true })
@Index('TGFCAB_AD_NUNOTAREQORIG', ['adNunotareqorig'], {})
@Index(
  'TGFCAB_I_FAT_OS',
  ['codtipoper', 'dhtipoper', 'nunota', 'statusnota'],
  {},
)
@Index('TGFCAB_I_NROGAR', ['nrogar'], {})
@Index('TGFCAB_I01', ['numnota'], {})
@Index('TGFCAB_I02', ['dtneg'], {})
@Index('TGFCAB_I028', ['nupedfrete'], {})
@Index('TGFCAB_I03', ['dtmov', 'codemp'], {})
@Index('TGFCAB_I04', ['numcontrato'], {})
@Index('TGFCAB_I05', ['codparc', 'codcontato'], {})
@Index('TGFCAB_I06', ['codproj'], {})
@Index('TGFCAB_I07', ['nurd8'], {})
@Index('TGFCAB_I08', ['nunotapedfret'], {})
@Index('TGFCAB_I09', ['dtprevent'], {})
@Index('TGFCAB_I10', ['tipmov', 'dtprevent'], {})
@Index('TGFCAB_I11', ['nunota', 'tipmov'], {})
@Index('TGFCAB_I20', ['codsite'], {})
@Index('TGFCAB_I21', ['numcotacao'], {})
@Index('TGFCAB_I22', ['nuconfatual'], {})
@Index('TGFCAB_I24', ['dtentsai'], {})
@Index('TGFCAB_I25', ['ordemcarga', 'codemp'], {})
@Index('TGFCAB_I27', ['chavenfe'], {})
@Index('TGFCAB_I28', ['codcontatoentrega'], {})
@Index('TGFCAB_I29', ['nuodp'], {})
@Index('TGFCAB_I30', ['codparctransp'], {})
@Index('TGFCAB_I31', ['codmotorista'], {})
@Index('TGFCAB_I32', ['idiproc', 'tipmov', 'statusnota', 'dtneg'], {})
@Index('TGFCAB_I33', ['codtipoper', 'codusu', 'dtneg', 'nunota'], {})
@Index('TGFCAB_I34', ['dtneg', 'statusnfe'], {})
@Index('TGFCAB_I35', ['codemp', 'dtneg'], {})
@Index('TGFCAB_I36', ['codemp', 'numnota'], {})
@Index('TGFCAB_I37', ['pendente', 'statusnota', 'tipmov'], {})
@Index('TGFCAB_I38', ['nunotarec'], {})
@Index('TGFCAB_IDTENVIOPMB', ['dtenviopmb'], {})
@Index('TGFCAB_NUREM', ['nurem'], {})
@Entity('TGFCAB', { schema: 'SANKHYA' })
export class TgfcabEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('char', { name: 'SERIENOTA', nullable: true, length: 3 })
  serienota: string | null;

  @Column('datetime', { name: 'DTNEG' })
  dtneg: Date;

  @Column('datetime', { name: 'DTFATUR', nullable: true })
  dtfatur: Date | null;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('datetime', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('datetime', { name: 'DTCONTAB', nullable: true })
  dtcontab: Date | null;

  @Column('int', { name: 'HRMOV', nullable: true })
  hrmov: number | null;

  @Column('int', { name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('int', { name: 'CODCONTATO', nullable: true })
  codcontato: number | null;

  @Column('char', { name: 'RATEADO', length: 1, default: () => "'N'" })
  rateado: string;

  @Column('smallint', { name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('datetime', { name: 'DHTIPOPER' })
  dhtipoper: Date;

  @Column('char', { name: 'TIPMOV', length: 1, default: () => "'P'" })
  tipmov: string;

  @Column('int', { name: 'NUMCOTACAO', nullable: true })
  numcotacao: number | null;

  @Column('float', { name: 'COMISSAO', precision: 53, default: () => '(0)' })
  comissao: number;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('float', {
    name: 'VLRSEG',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrseg: number | null;

  @Column('float', {
    name: 'VLRICMSSEG',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlricmsseg: number | null;

  @Column('float', {
    name: 'VLRDESTAQUE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdestaque: number | null;

  @Column('float', {
    name: 'VLRJURO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrjuro: number | null;

  @Column('float', {
    name: 'VLRVENDOR',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrvendor: number | null;

  @Column('float', {
    name: 'VLROUTROS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlroutros: number | null;

  @Column('float', {
    name: 'VLREMB',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlremb: number | null;

  @Column('float', {
    name: 'VLRICMSEMB',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlricmsemb: number | null;

  @Column('float', {
    name: 'VLRDESCSERV',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdescserv: number | null;

  @Column('float', { name: 'IPIEMB', nullable: true, precision: 53 })
  ipiemb: number | null;

  @Column('char', { name: 'TIPIPIEMB', length: 1, default: () => "'N'" })
  tipipiemb: string;

  @Column('float', {
    name: 'VLRDESCTOT',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdesctot: number | null;

  @Column('float', {
    name: 'VLRDESCTOTITEM',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdesctotitem: number | null;

  @Column('float', {
    name: 'VLRFRETE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrfrete: number | null;

  @Column('float', {
    name: 'ICMSFRETE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  icmsfrete: number | null;

  @Column('float', {
    name: 'BASEICMSFRETE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  baseicmsfrete: number | null;

  @Column('char', { name: 'TIPFRETE', length: 1, default: () => "'S'" })
  tipfrete: string;

  @Column('char', { name: 'CIF_FOB', nullable: true, length: 1 })
  cifFob: string | null;

  @Column('datetime', { name: 'VENCFRETE', nullable: true })
  vencfrete: Date | null;

  @Column('float', {
    name: 'VLRNOTA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrnota: number | null;

  @Column('datetime', { name: 'VENCIPI', nullable: true })
  vencipi: Date | null;

  @Column('int', { name: 'ORDEMCARGA', default: () => '(0)' })
  ordemcarga: number;

  @Column('smallint', { name: 'SEQCARGA', nullable: true })
  seqcarga: number | null;

  @Column('int', { name: 'KMVEICULO', nullable: true })
  kmveiculo: number | null;

  @Column('int', { name: 'CODPARCTRANSP', default: () => '(0)' })
  codparctransp: number;

  @Column('int', { name: 'QTDVOL', nullable: true })
  qtdvol: number | null;

  @Column('char', { name: 'PENDENTE', length: 1, default: () => "'S'" })
  pendente: string;

  @Column('float', {
    name: 'BASEICMS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  baseicms: number | null;

  @Column('float', {
    name: 'VLRICMS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlricms: number | null;

  @Column('float', {
    name: 'BASEIPI',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  baseipi: number | null;

  @Column('float', {
    name: 'VLRIPI',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlripi: number | null;

  @Column('char', { name: 'ISSRETIDO', length: 1, default: () => "'S'" })
  issretido: string;

  @Column('float', {
    name: 'BASEISS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  baseiss: number | null;

  @Column('float', {
    name: 'VLRISS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlriss: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('char', { name: 'APROVADO', length: 1, default: () => "'S'" })
  aprovado: string;

  @Column('float', {
    name: 'VLRIRF',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrirf: number | null;

  @Column('char', { name: 'IRFRETIDO', length: 1, default: () => "'N'" })
  irfretido: string;

  @Column('char', { name: 'STATUSNOTA', length: 1, default: () => "'P'" })
  statusnota: string;

  @Column('float', { name: 'COMGER', nullable: true, precision: 53 })
  comger: number | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('varchar', { name: 'VOLUME', nullable: true, length: 60 })
  volume: string | null;

  @Column('float', { name: 'VLRSUBST', precision: 53, default: () => '(0)' })
  vlrsubst: number;

  @Column('float', { name: 'BASESUBSTIT', precision: 53, default: () => '(0)' })
  basesubstit: number;

  @Column('int', { name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @Column('int', { name: 'NUMCONTRATO', default: () => '(0)' })
  numcontrato: number;

  @Column('float', { name: 'BASEINSS', precision: 53, default: () => '(0)' })
  baseinss: number;

  @Column('float', { name: 'VLRINSS', precision: 53, default: () => '(0)' })
  vlrinss: number;

  @Column('float', {
    name: 'VLRREPREDTOT',
    precision: 53,
    default: () => '(0)',
  })
  vlrrepredtot: number;

  @Column('float', { name: 'PERCDESC', precision: 53, default: () => '(0)' })
  percdesc: number;

  @Column('int', { name: 'CODPARCREMETENTE', default: () => '(0)' })
  codparcremetente: number;

  @ManyToOne(() => TgfparEntity)
  @JoinColumn([{ name: 'CODPARCREMETENTE', referencedColumnName: 'codparc' }])
  tgfparRemetente: TgfparEntity;

  @Column('int', { name: 'CODPARCCONSIGNATARIO', default: () => '(0)' })
  codparcconsignatario: number;

  @Column('int', { name: 'CODPARCREDESPACHO', default: () => '(0)' })
  codparcredespacho: number;

  @Column('varchar', { name: 'LOCALCOLETA', nullable: true, length: 40 })
  localcoleta: string | null;

  @Column('varchar', { name: 'LOCALENTREGA', nullable: true, length: 40 })
  localentrega: string | null;

  @Column('float', { name: 'VLRMERCADORIA', nullable: true, precision: 53 })
  vlrmercadoria: number | null;

  @Column('float', { name: 'PESO', nullable: true, precision: 53 })
  peso: number | null;

  @Column('varchar', { name: 'NOTASCF', nullable: true, length: 35 })
  notascf: string | null;

  @Column('int', { name: 'CODMODDOC', default: () => '(1)' })
  codmoddoc: number;

  @Column('int', { name: 'NUMCF', nullable: true })
  numcf: number | null;

  @Column('float', { name: 'VLRFRETECPL', nullable: true, precision: 53 })
  vlrfretecpl: number | null;

  @Column('float', { name: 'TROCO', precision: 53, default: () => '(0)' })
  troco: number;

  @Column('smallint', { name: 'NROREDZ', nullable: true, default: () => '(0)' })
  nroredz: number | null;

  @Column('float', {
    name: 'VLRMOEDA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrmoeda: number | null;

  @Column('int', { name: 'OCCN48', nullable: true })
  occn48: number | null;

  @Column('int', { name: 'NUTRANSF', nullable: true, default: () => '(0)' })
  nutransf: number | null;

  @Column('int', { name: 'NURD8', nullable: true })
  nurd8: number | null;

  @Column('int', { name: 'CODSITE', nullable: true })
  codsite: number | null;

  @Column('float', { name: 'TOTALCUSTOPROD', nullable: true, precision: 53 })
  totalcustoprod: number | null;

  @Column('float', { name: 'TOTALCUSTOSERV', nullable: true, precision: 53 })
  totalcustoserv: number | null;

  @Column('float', {
    name: 'BASESUBSTSEMRED',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  basesubstsemred: number | null;

  @Column('int', { name: 'CODMOTORISTA', nullable: true, default: () => '(0)' })
  codmotorista: number | null;

  @Column('varchar', { name: 'NATUREZAOPERDES', nullable: true, length: 2 })
  naturezaoperdes: string | null;

  @Column('varchar', { name: 'SERIENFDES', nullable: true, length: 4 })
  serienfdes: string | null;

  @Column('varchar', { name: 'MODELONFDES', nullable: true, length: 2 })
  modelonfdes: string | null;

  @Column('datetime', { name: 'DTPREVENT', nullable: true })
  dtprevent: Date | null;

  @Column('int', { name: 'NUNOTAPEDFRET', nullable: true })
  nunotapedfret: number | null;

  @Column('float', { name: 'BASEIRF', nullable: true, precision: 53 })
  baseirf: number | null;

  @Column('float', { name: 'ALIQIRF', nullable: true, precision: 53 })
  aliqirf: number | null;

  @Column('char', { name: 'PLACA', nullable: true, length: 10 })
  placa: string | null;

  @Column('float', { name: 'PESOBRUTO', nullable: true, precision: 53 })
  pesobruto: number | null;

  @Column('datetime', { name: 'HRENTSAI', nullable: true })
  hrentsai: Date | null;

  @Column('char', { name: 'ANTT', nullable: true, length: 20 })
  antt: string | null;

  @Column('char', { name: 'LACRES', nullable: true, length: 255 })
  lacres: string | null;

  @Column('int', { name: 'DANFE', nullable: true })
  danfe: number | null;

  @Column('char', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @Column('char', { name: 'NUMERACAOVOLUMES', nullable: true, length: 60 })
  numeracaovolumes: string | null;

  @Column('datetime', { name: 'DTENVIOPMB', nullable: true })
  dtenviopmb: Date | null;

  @Column('char', { name: 'TIPNOTAPMB', nullable: true, length: 10 })
  tipnotapmb: string | null;

  @Column('int', { name: 'NUMALEATORIO', nullable: true })
  numaleatorio: number | null;

  @Column('varchar', { name: 'NUMPROTOC', nullable: true, length: 15 })
  numprotoc: string | null;

  @Column('datetime', { name: 'DHPROTOC', nullable: true })
  dhprotoc: Date | null;

  @Column('datetime', { name: 'DTENVSUF', nullable: true })
  dtenvsuf: Date | null;

  @Column('char', { name: 'STATUSNFE', nullable: true, length: 1 })
  statusnfe: string | null;

  @Column('smallint', { name: 'TPEMISNFE', nullable: true })
  tpemisnfe: number | null;

  @Column('datetime', { name: 'DTADIAM', nullable: true })
  dtadiam: Date | null;

  @Column('int', { name: 'HRADIAM', nullable: true })
  hradiam: number | null;

  @Column('text', { name: 'DIGITAL', nullable: true })
  digital: string | null;

  @Column('float', { name: 'TOTDISPDESC', nullable: true, precision: 53 })
  totdispdesc: number | null;

  @Column('float', { name: 'BASEPIS', nullable: true, precision: 53 })
  basepis: number | null;

  @Column('float', { name: 'VLRPIS', nullable: true, precision: 53 })
  vlrpis: number | null;

  @Column('float', { name: 'BASEPISST', nullable: true, precision: 53 })
  basepisst: number | null;

  @Column('float', { name: 'VLRPISST', nullable: true, precision: 53 })
  vlrpisst: number | null;

  @Column('float', { name: 'BASECOFINS', nullable: true, precision: 53 })
  basecofins: number | null;

  @Column('float', { name: 'VLRCOFINS', nullable: true, precision: 53 })
  vlrcofins: number | null;

  @Column('float', { name: 'BASECOFINSST', nullable: true, precision: 53 })
  basecofinsst: number | null;

  @Column('float', { name: 'VLRCOFINSST', nullable: true, precision: 53 })
  vlrcofinsst: number | null;

  @Column('float', { name: 'VLRROYALT', nullable: true, precision: 53 })
  vlrroyalt: number | null;

  @Column('int', { name: 'NROCAIXA', nullable: true })
  nrocaixa: number | null;

  @Column('varchar', { name: 'NUMREGDPEC', nullable: true, length: 15 })
  numregdpec: string | null;

  @Column('datetime', { name: 'DHREGDPEC', nullable: true })
  dhregdpec: Date | null;

  @Column('smallint', { name: 'TPLIGACAO', nullable: true })
  tpligacao: number | null;

  @Column('varchar', { name: 'CODGRUPOTENSAO', nullable: true, length: 2 })
  codgrupotensao: string | null;

  @Column('smallint', { name: 'TPASSINANTE', nullable: true })
  tpassinante: number | null;

  @Column('float', { name: 'VLRINDENIZ', nullable: true, precision: 53 })
  vlrindeniz: number | null;

  @Column('varchar', { name: 'MARCA', nullable: true, length: 60 })
  marca: string | null;

  @Column('int', { name: 'TIPOPTAGJNFE', nullable: true })
  tipoptagjnfe: number | null;

  @Column('smallint', { name: 'TPEMISNFSE', nullable: true })
  tpemisnfse: number | null;

  @Column('varchar', { name: 'NUMNFSE', nullable: true, length: 20 })
  numnfse: string | null;

  @Column('varchar', { name: 'STATUSNFSE', nullable: true, length: 1 })
  statusnfse: string | null;

  @Column('varchar', { name: 'UFEMBARQ', nullable: true, length: 2 })
  ufembarq: string | null;

  @Column('varchar', { name: 'LOCEMBARQ', nullable: true, length: 60 })
  locembarq: string | null;

  @Column('int', { name: 'NUREM', nullable: true })
  nurem: number | null;

  @Column('varchar', { name: 'RETDATACRITICA', nullable: true, length: 1 })
  retdatacritica: string | null;

  @Column('float', { name: 'QTDBATIDAS', nullable: true, precision: 53 })
  qtdbatidas: number | null;

  @Column('float', { name: 'PERCPUREZA', nullable: true, precision: 53 })
  percpureza: number | null;

  @Column('float', { name: 'PERCGERMIN', nullable: true, precision: 53 })
  percgermin: number | null;

  @Column('float', { name: 'FRETEVLRBRUTO', nullable: true, precision: 53 })
  fretevlrbruto: number | null;

  @Column('float', { name: 'FRETEVLRDESC', nullable: true, precision: 53 })
  fretevlrdesc: number | null;

  @Column('float', { name: 'FRETEPERCDESC', nullable: true, precision: 53 })
  fretepercdesc: number | null;

  @Column('float', { name: 'FRETEVLRIMP', nullable: true, precision: 53 })
  fretevlrimp: number | null;

  @Column('float', { name: 'FRETEVLRJUR', nullable: true, precision: 53 })
  fretevlrjur: number | null;

  @Column('float', { name: 'FRETEVLRPAGO', nullable: true, precision: 53 })
  fretevlrpago: number | null;

  @Column('int', { name: 'NUMPEDIDO', nullable: true })
  numpedido: number | null;

  @Column('float', { name: 'VLRINDENIZDIST', nullable: true, precision: 53 })
  vlrindenizdist: number | null;

  @Column('varchar', { name: 'NUMPEDIDO2', nullable: true, length: 15 })
  numpedido2: string | null;

  @Column('datetime', { name: 'DTREF', nullable: true })
  dtref: Date | null;

  @Column('varchar', { name: 'AGRUPBOL', nullable: true, length: 1 })
  agrupbol: string | null;

  @Column('float', { name: 'FRETEVLRNEGOC', nullable: true, precision: 53 })
  fretevlrnegoc: number | null;

  @Column('int', { name: 'CODPRODPERMUTA', nullable: true })
  codprodpermuta: number | null;

  @Column('int', { name: 'NROGAR', nullable: true })
  nrogar: number | null;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @Column('int', { name: 'CODMODDOCNOTA', nullable: true })
  codmoddocnota: number | null;

  @Column('varchar', { name: 'CPFCNPJADQUIRENTE', nullable: true, length: 14 })
  cpfcnpjadquirente: string | null;

  @Column('varchar', { name: 'NOMEADQUIRENTE', nullable: true, length: 40 })
  nomeadquirente: string | null;

  @Column('float', { name: 'VLRSACADOLAR', nullable: true, precision: 53 })
  vlrsacadolar: number | null;

  @Column('int', { name: 'NUMCOO', nullable: true })
  numcoo: number | null;

  @Column('int', { name: 'ORDEMCARGAANT', nullable: true })
  ordemcargaant: number | null;

  @Column('varchar', { name: 'TPAMBNFE', nullable: true, length: 1 })
  tpambnfe: string | null;

  @Column('int', { name: 'PRZMED', nullable: true })
  przmed: number | null;

  @Column('datetime', { name: 'DTREF2', nullable: true })
  dtref2: Date | null;

  @Column('char', { name: 'VLRLIQITEMNFE', nullable: true, length: 1 })
  vlrliqitemnfe: string | null;

  @Column('varchar', { name: 'CLASCONS', nullable: true, length: 2 })
  clascons: string | null;

  @Column('int', { name: 'NUMFORM', nullable: true })
  numform: number | null;

  @Column('datetime', { name: 'DTREF3', nullable: true })
  dtref3: Date | null;

  @Column('char', { name: 'PRODUETLOC', nullable: true, length: 1 })
  produetloc: string | null;

  @Column('float', { name: 'VLRSTEXTRANOTATOT', nullable: true, precision: 53 })
  vlrstextranotatot: number | null;

  @Column('int', { name: 'NUTRANEMP', nullable: true })
  nutranemp: number | null;

  @Column('varchar', { name: 'SITESPECIALRESP', nullable: true, length: 2 })
  sitespecialresp: string | null;

  @Column('datetime', { name: 'DTENTSAIINFO', nullable: true })
  dtentsaiinfo: Date | null;

  @Column('varchar', { name: 'EXIGEISSQN', nullable: true, length: 2 })
  exigeissqn: string | null;

  @Column('varchar', { name: 'REGESPTRIBUT', nullable: true, length: 2 })
  regesptribut: string | null;

  @Column('varchar', { name: 'MOTNAORETERISSQN', nullable: true, length: 2 })
  motnaoreterissqn: string | null;

  @Column('datetime', { name: 'DTREMRET', nullable: true })
  dtremret: Date | null;

  @Column('char', { name: 'LIBCONF', nullable: true, length: 1 })
  libconf: string | null;

  @Column('int', { name: 'NUCONFATUAL', nullable: true })
  nuconfatual: number | null;

  @Column('varchar', { name: 'STATUSXTRATEGIE', nullable: true, length: 1 })
  statusxtrategie: string | null;

  @Column('float', { name: 'VLRFRETECALC', nullable: true, precision: 53 })
  vlrfretecalc: number | null;

  @Column('float', { name: 'VLRJURODIST', nullable: true, precision: 53 })
  vlrjurodist: number | null;

  @Column('varchar', { name: 'NOTAEMPENHO', nullable: true, length: 22 })
  notaempenho: string | null;

  @Column('char', { name: 'PESOBRUTOMANUAL', nullable: true, length: 1 })
  pesobrutomanual: string | null;

  @Column('char', { name: 'PESOLIQUIMANUAL', nullable: true, length: 1 })
  pesoliquimanual: string | null;

  @Column('char', { name: 'CANCELADO', nullable: true, length: 1 })
  cancelado: string | null;

  @Column('int', { name: 'NUPCA', nullable: true })
  nupca: number | null;

  @Column('char', {
    name: 'INDPRESNFCE',
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  indpresnfce: string | null;

  @Column('float', { name: 'M3', nullable: true, precision: 53 })
  m3: number | null;

  @Column('float', {
    name: 'VLRTOTLIQITEMMOE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrtotliqitemmoe: number | null;

  @Column('float', {
    name: 'VLRDESCTOTITEMMOE',
    precision: 53,
    default: () => '(0)',
  })
  vlrdesctotitemmoe: number;

  @Column('varchar', { name: 'CHAVECTE', nullable: true, length: 44 })
  chavecte: string | null;

  @Column('varchar', { name: 'PRODPRED', nullable: true, length: 60 })
  prodpred: string | null;

  @Column('smallint', { name: 'TPEMISCTE', nullable: true })
  tpemiscte: number | null;

  @Column('char', { name: 'TPAMBCTE', nullable: true, length: 1 })
  tpambcte: string | null;

  @Column('char', { name: 'LOTACAO', nullable: true, length: 1 })
  lotacao: string | null;

  @Column('char', { name: 'STATUSCTE', nullable: true, length: 1 })
  statuscte: string | null;

  @Column('int', { name: 'NUMALEATORIOCTE', nullable: true })
  numaleatoriocte: number | null;

  @Column('varchar', { name: 'NUMPROTOCCTE', nullable: true, length: 30 })
  numprotoccte: string | null;

  @Column('datetime', { name: 'DHPROTOCCTE', nullable: true })
  dhprotoccte: Date | null;

  @Column('int', { name: 'NULOTECTE', nullable: true })
  nulotecte: number | null;

  @Column('datetime', { name: 'DTDECLARA', nullable: true })
  dtdeclara: Date | null;

  @Column('char', { name: 'SITUACAOCTE', nullable: true, length: 1 })
  situacaocte: string | null;

  @Column('char', { name: 'CTELOTACAO', nullable: true, length: 1 })
  ctelotacao: string | null;

  @Column('varchar', { name: 'CODOBRA', nullable: true, length: 15 })
  codobra: string | null;

  @Column('varchar', { name: 'CODART', nullable: true, length: 15 })
  codart: string | null;

  @Column('int', { name: 'IDIPROC', nullable: true })
  idiproc: number | null;

  @Column('char', { name: 'VIATRANSP', nullable: true, length: 2 })
  viatransp: string | null;

  @Column('char', { name: 'TIPPROCIMP', nullable: true, length: 1 })
  tipprocimp: string | null;

  @Column('varchar', { name: 'CNPJADQUIRENTE', nullable: true, length: 14 })
  cnpjadquirente: string | null;

  @Column('varchar', { name: 'UFADQUIRENTE', nullable: true, length: 2 })
  ufadquirente: string | null;

  @Column('int', { name: 'NUNOTASUB', nullable: true })
  nunotasub: number | null;

  @Column('varchar', { name: 'CHAVENFSE', nullable: true, length: 52 })
  chavenfse: string | null;

  @Column('datetime', { name: 'DHEMISSEPEC', nullable: true })
  dhemissepec: Date | null;

  @Column('float', { name: 'VLRICMSDIFALDEST', nullable: true, precision: 53 })
  vlricmsdifaldest: number | null;

  @Column('float', { name: 'VLRICMSDIFALREM', nullable: true, precision: 53 })
  vlricmsdifalrem: number | null;

  @Column('float', { name: 'VLRICMSFCP', nullable: true, precision: 53 })
  vlricmsfcp: number | null;

  @Column('char', { name: 'MODENTREGA', nullable: true, length: 1 })
  modentrega: string | null;

  @Column('numeric', { name: 'CIOT', nullable: true, precision: 12, scale: 0 })
  ciot: number | null;

  @Column('float', { name: 'VLRFRETETOTAL', nullable: true, precision: 53 })
  vlrfretetotal: number | null;

  @Column('varchar', { name: 'FUSOEMISSEPEC', nullable: true, length: 6 })
  fusoemissepec: string | null;

  @Column('varchar', { name: 'CHAVENFEREF', nullable: true, length: 44 })
  chavenferef: string | null;

  @Column('float', {
    name: 'VLRDESCRAT',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdescrat: number | null;

  @Column('int', { name: 'SEQCONFIRMA', nullable: true })
  seqconfirma: number | null;

  @Column('int', { name: 'CODCONTATOENTREGA', nullable: true })
  codcontatoentrega: number | null;

  @Column('int', { name: 'CODCIDORIGEM', nullable: true })
  codcidorigem: number | null;

  @Column('int', { name: 'CODCIDDESTINO', nullable: true })
  codciddestino: number | null;

  @Column('int', { name: 'CODCIDENTREGA', nullable: true })
  codcidentrega: number | null;

  @Column('smallint', { name: 'CODUFORIGEM', nullable: true })
  coduforigem: number | null;

  @Column('smallint', { name: 'CODUFDESTINO', nullable: true })
  codufdestino: number | null;

  @Column('smallint', { name: 'CODUFENTREGA', nullable: true })
  codufentrega: number | null;

  @Column('char', { name: 'CLASSIFICMS', nullable: true, length: 1 })
  classificms: string | null;

  @Column('varchar', { name: 'CODRASTREAMENTOECT', nullable: true, length: 30 })
  codrastreamentoect: string | null;

  @Column('int', { name: 'NUODP', nullable: true })
  nuodp: number | null;

  @Column('int', { name: 'NUPEDFRETE', nullable: true })
  nupedfrete: number | null;

  @Column('int', { name: 'CODCIDPREST', nullable: true })
  codcidprest: number | null;

  @Column('char', { name: 'FORMPGTCTE', nullable: true, length: 1 })
  formpgtcte: string | null;

  @Column('char', { name: 'TPAMBNFSE', nullable: true, length: 1 })
  tpambnfse: string | null;

  @Column('float', { name: 'PERCDESCFOB', nullable: true, precision: 53 })
  percdescfob: number | null;

  @Column('char', { name: 'TERMACORDNOTA', nullable: true, length: 1 })
  termacordnota: string | null;

  @Column('float', { name: 'VLRDESCQTD', nullable: true, precision: 53 })
  vlrdescqtd: number | null;

  @Column('float', { name: 'VLRICMSFCPINT', nullable: true, precision: 53 })
  vlricmsfcpint: number | null;

  @Column('float', { name: 'VLRSTFCPINT', nullable: true, precision: 53 })
  vlrstfcpint: number | null;

  @Column('float', { name: 'VLRSTFCPINTANT', nullable: true, precision: 53 })
  vlrstfcpintant: number | null;

  @Column('char', { name: 'CTEGLOBAL', nullable: true, length: 1 })
  cteglobal: string | null;

  @Column('float', { name: 'VLRCARGAAVERB', nullable: true, precision: 53 })
  vlrcargaaverb: number | null;

  @Column('int', { name: 'NUCFR', nullable: true })
  nucfr: number | null;

  @Column('char', { name: 'NFEDEVRECUSA', nullable: true, length: 1 })
  nfedevrecusa: string | null;

  @Column('varchar', { name: 'AGRUPFINNOTA', nullable: true, length: 1 })
  agrupfinnota: string | null;

  @Column('float', { name: 'VLRPRESTAFRMM', nullable: true, precision: 53 })
  vlrprestafrmm: number | null;

  @Column('float', { name: 'VLRAFRMM', nullable: true, precision: 53 })
  vlrafrmm: number | null;

  @Column('varchar', { name: 'IDNAVIO', nullable: true, length: 60 })
  idnavio: string | null;

  @Column('varchar', { name: 'IRINNAVIO', nullable: true, length: 10 })
  irinnavio: string | null;

  @Column('char', { name: 'DIRECAOVIAG', nullable: true, length: 1 })
  direcaoviag: string | null;

  @Column('varchar', { name: 'IDBALSA01', nullable: true, length: 60 })
  idbalsa01: string | null;

  @Column('varchar', { name: 'IDBALSA02', nullable: true, length: 60 })
  idbalsa02: string | null;

  @Column('varchar', { name: 'IDBALSA03', nullable: true, length: 60 })
  idbalsa03: string | null;

  @Column('varchar', { name: 'CONFIRMNOTAFAT', nullable: true, length: 1 })
  confirmnotafat: string | null;

  @Column('varchar', { name: 'PERMALTERCENTRAL', nullable: true, length: 60 })
  permaltercentral: string | null;

  @Column('char', { name: 'FINALIZADOFOX', nullable: true, length: 1 })
  finalizadofox: string | null;

  @Column('float', {
    name: 'VLRREPREDTOTSEMDESC',
    nullable: true,
    precision: 53,
  })
  vlrrepredtotsemdesc: number | null;

  @Column('int', { name: 'NUMCUPOMECONECT', nullable: true })
  numcupomeconect: number | null;

  @Column('int', { name: 'TIMNUFINORIG', nullable: true })
  timnufinorig: number | null;

  @Column('int', { name: 'TIMCONTRATOVENDA', nullable: true })
  timcontratovenda: number | null;

  @Column('char', { name: 'TIMORIGEM', nullable: true, length: 2 })
  timorigem: string | null;

  @Column('int', { name: 'TIMCONTRATOLTV', nullable: true })
  timcontratoltv: number | null;

  @Column('int', { name: 'TIMNUNOTAMOD', nullable: true })
  timnunotamod: number | null;

  @Column('datetime', { name: 'DTEXTEMPK280', nullable: true })
  dtextempk280: Date | null;

  @Column('varchar', { name: 'LATITUDE', nullable: true, length: 255 })
  latitude: string | null;

  @Column('varchar', { name: 'LONGITUDE', nullable: true, length: 255 })
  longitude: string | null;

  @Column('smallint', { name: 'CODDOCARRECAD', nullable: true })
  coddocarrecad: number | null;

  @Column('varchar', { name: 'NUMDOCARRECAD', nullable: true, length: 30 })
  numdocarrecad: string | null;

  @Column('varchar', { name: 'PREMIACAOESTADUAL', nullable: true, length: 255 })
  premiacaoestadual: string | null;

  @Column('varchar', { name: 'NFSEID', nullable: true, length: 50 })
  nfseid: string | null;

  @Column('int', { name: 'CODPARCDEPO', nullable: true })
  codparcdepo: number | null;

  @Column('float', { name: 'VLRFETHAB', nullable: true, precision: 53 })
  vlrfethab: number | null;

  @Column('int', { name: 'CODCHECKOUT', nullable: true })
  codcheckout: number | null;

  @Column('float', { name: 'BASEICMSAT', nullable: true, precision: 53 })
  baseicmsat: number | null;

  @Column('float', { name: 'VLRICMSAT', nullable: true, precision: 53 })
  vlricmsat: number | null;

  @Column('char', { name: 'DISDESAUTIMPEMB', nullable: true, length: 1 })
  disdesautimpemb: string | null;

  @Column('float', {
    name: 'VALORDESONPISCOFINS',
    nullable: true,
    precision: 53,
  })
  valordesonpiscofins: number | null;

  @Column('numeric', {
    name: 'IDDESCPARCERIA',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  iddescparceria: number | null;

  @Column('numeric', {
    name: 'VLRDESCPARCERIA',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  vlrdescparceria: number | null;

  @Column('numeric', {
    name: 'CLIENTEIDPARCERIA',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  clienteidparceria: number | null;

  @Column('numeric', {
    name: 'IDPONTUACAOPARCERIA',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  idpontuacaoparceria: number | null;

  @Column('int', { name: 'NUNOTAORIGCORTE', nullable: true })
  nunotaorigcorte: number | null;

  @Column('float', { name: 'BASEICMSSTFRETE', nullable: true, precision: 53 })
  baseicmsstfrete: number | null;

  @Column('float', { name: 'ICMSSTFRETE', nullable: true, precision: 53 })
  icmsstfrete: number | null;

  @Column('float', { name: 'VLRREPREDST', nullable: true, precision: 53 })
  vlrrepredst: number | null;

  @Column('varchar', { name: 'INTERMED', nullable: true, length: 1 })
  intermed: string | null;

  @Column('varchar', { name: 'FISTEL', nullable: true, length: 11 })
  fistel: string | null;

  @Column('int', { name: 'NUMCSTC', nullable: true })
  numcstc: number | null;

  @Column('int', { name: 'QTDUSU', nullable: true })
  qtdusu: number | null;

  @Column('varchar', { name: 'NUMTERMTEL', nullable: true, length: 13 })
  numtermtel: string | null;

  @Column('smallint', { name: 'TIPCLIENTESERVCOM', nullable: true })
  tipclienteservcom: number | null;

  @Column('varchar', { name: 'MD5MODCOMTEL', nullable: true, length: 32 })
  md5Modcomtel: string | null;

  @Column('char', { name: 'INDNEGMODAL', nullable: true, length: 1 })
  indnegmodal: string | null;

  @Column('int', { name: 'CODPRODPRED', nullable: true })
  codprodpred: number | null;

  @Column('int', { name: 'NUOSCAB', nullable: true })
  nuoscab: number | null;

  @Column('datetime', { name: 'DTHRINFRACAO', nullable: true })
  dthrinfracao: Date | null;

  @Column('varchar', { name: 'AVERBADOTMS', nullable: true, length: 1 })
  averbadotms: string | null;

  @Column('int', { name: 'CODAFT', nullable: true })
  codaft: number | null;

  @Column('datetime', { name: 'DHALTERTMS', nullable: true })
  dhaltertms: Date | null;

  @Column('varchar', { name: 'TIPOVIAGEM', nullable: true, length: 10 })
  tipoviagem: string | null;

  @Column('char', { name: 'NOTAPORPEDIDOPDV', length: 1, default: () => "'N'" })
  notaporpedidopdv: string;

  @Column('varchar', { name: 'AD_DESCONTAFUNC', nullable: true, length: 10 })
  adDescontafunc: string | null;

  @Column('varchar', { name: 'AD_STATUSPROPOSTA', nullable: true, length: 10 })
  adStatusproposta: string | null;

  @Column('varchar', { name: 'AD_MOTIVOPERDA', nullable: true, length: 10 })
  adMotivoperda: string | null;

  @Column('varchar', { name: 'AD_MOTIVOOUTROS', nullable: true, length: 100 })
  adMotivooutros: string | null;

  @Column('varchar', { name: 'AD_ALIMENTACAO', nullable: true, length: 10 })
  adAlimentacao: string | null;

  @Column('varchar', { name: 'AD_COMBUSTIVEL', nullable: true, length: 10 })
  adCombustivel: string | null;

  @Column('varchar', { name: 'AD_TRANSPORTE', nullable: true, length: 10 })
  adTransporte: string | null;

  @Column('varchar', { name: 'AD_HOSPEDAGEM', nullable: true, length: 10 })
  adHospedagem: string | null;

  @Column('varchar', { name: 'AD_SINALEIRO', nullable: true, length: 10 })
  adSinaleiro: string | null;

  @Column('datetime', { name: 'AD_DTLIMITE', nullable: true })
  adDtlimite: Date | null;

  @Column('int', { name: 'SUMVLRIIOUTNOTA', nullable: true })
  sumvlriioutnota: number | null;

  @Column('int', { name: 'SOMICMSNFENAC', nullable: true })
  somicmsnfenac: number | null;

  @Column('int', { name: 'AD_NUNOTAREQORIG', nullable: true })
  adNunotareqorig: number | null;

  @Column('text', { name: 'RETORNOEQUIPFISCAL', nullable: true })
  retornoequipfiscal: string | null;

  @Column('char', { name: 'STATUSCFE', nullable: true, length: 1 })
  statuscfe: string | null;

  @Column('int', { name: 'SOMPISCOFNFENAC', nullable: true })
  sompiscofnfenac: number | null;

  @Column('varchar', { name: 'AD_NUMPEDCOMP', nullable: true, length: 100 })
  adNumpedcomp: string | null;

  @Column('datetime', { name: 'AD_DTPEDCOMP', nullable: true })
  adDtpedcomp: Date | null;

  @Column('float', { name: 'AD_VLRPEDCOMP', nullable: true, precision: 53 })
  adVlrpedcomp: number | null;

  @Column('text', { name: 'AD_OBSFIN', nullable: true })
  adObsfin: string | null;

  @Column('int', { name: 'AD_NROPROPOSTA', nullable: true })
  adNroproposta: number | null;

  @Column('varchar', { name: 'AD_ATUALIZAREQ', nullable: true, length: 10 })
  adAtualizareq: string | null;

  @Column('varchar', { name: 'AD_ORIGINALREQ', nullable: true, length: 10 })
  adOriginalreq: string | null;

  @Column('float', { name: 'AD_VLRKM', nullable: true, precision: 53 })
  adVlrkm: number | null;

  @Column('float', { name: 'AD_VLRFRETESEC', nullable: true, precision: 53 })
  adVlrfretesec: number | null;

  @Column('int', { name: 'AD_PRAZOFRETE', nullable: true })
  adPrazofrete: number | null;

  @Column('varchar', { name: 'AD_FORMAPGTOFRETE', nullable: true, length: 10 })
  adFormapgtofrete: string | null;

  @Column('int', { name: 'NURECEBIMENTO', nullable: true })
  nurecebimento: number | null;

  @Column('char', { name: 'RETGERWMS', nullable: true, length: 1 })
  retgerwms: string | null;

  @Column('int', { name: 'NUNOTAREC', nullable: true })
  nunotarec: number | null;

  @Column('text', { name: 'AD_LOCALEXEC', nullable: true })
  adLocalexec: string | null;

  @Column('datetime', { name: 'DHVIAGEM', nullable: true })
  dhviagem: Date | null;

  @Column('int', { name: 'NUSESSAO', nullable: true })
  nusessao: number | null;

  @Column('smallint', { name: 'TPFRETAMENTO', nullable: true })
  tpfretamento: number | null;

  @Column('datetime', { name: 'DTESCRCONT', nullable: true })
  dtescrcont: Date | null;

  @Column('char', { name: 'MODRECEBPDVWEB', nullable: true, length: 1 })
  modrecebpdvweb: string | null;

  @Column('varchar', { name: 'CHAVECTEREF', nullable: true, length: 44 })
  chavecteref: string | null;

  @Column('varchar', { name: 'AD_PRIORIDADE', nullable: true, length: 10 })
  adPrioridade: string | null;

  @Column('varchar', { name: 'NUMPROTOCINCTE', nullable: true, length: 30 })
  numprotocincte: string | null;

  @Column('varchar', { name: 'SERIENFSE', nullable: true, length: 20 })
  serienfse: string | null;

  @Column('char', { name: 'HISTCONFIG', nullable: true, length: 1 })
  histconfig: string | null;

  @Column('varchar', {
    name: 'AD_RESPONSAVELSETOR',
    nullable: true,
    length: 10,
  })
  adResponsavelsetor: string | null;

  @Column('varchar', { name: 'CHVNFEINEREF', nullable: true, length: 3103 })
  chvnfeineref: string | null;

  @Column('varchar', {
    name: 'AD_EXIBEDASH',
    nullable: true,
    length: 10,
    default: () => "'S'",
  })
  adExibedash: string | null;

  @Column('varchar', { name: 'CARACSER', nullable: true, length: 30 })
  caracser: string | null;

  @Column('varchar', { name: 'CARACAD', nullable: true, length: 15 })
  caracad: string | null;

  @Column('int', { name: 'SOMDESPADUNFENAC', nullable: true })
  somdespadunfenac: number | null;

  @Column('varchar', { name: 'NUMPROTOCINNFE', nullable: true, length: 30 })
  numprotocinnfe: string | null;

  @Column('float', { name: 'VLRREPTERC', precision: 53, default: () => '(0)' })
  vlrrepterc: number;

  @Column('datetime', { name: 'AD_DTFINALIZA', nullable: true })
  adDtfinaliza: Date | null;

  @Column('varchar', { name: 'SERIEGUIA', nullable: true, length: 9 })
  serieguia: string | null;

  @Column('int', { name: 'NUMGUIA', nullable: true })
  numguia: number | null;

  @Column('char', { name: 'UFEMISSAO', nullable: true, length: 2 })
  ufemissao: string | null;

  @Column('varchar', { name: 'CPFRESPTEC', nullable: true, length: 11 })
  cpfresptec: string | null;

  @Column('char', { name: 'TIPOGUIA', nullable: true, length: 1 })
  tipoguia: string | null;

  @Column('varchar', { name: 'NUMRECEITAGRO', nullable: true, length: 20 })
  numreceitagro: string | null;

  @Column('varchar', { name: 'CHAVESINIEF1324', nullable: true, length: 360 })
  chavesinief1324: string | null;

  @Column('varchar', { name: 'CHAVENFCOM', nullable: true, length: 44 })
  chavenfcom: string | null;

  @Column('varchar', { name: 'NUMPROTOCNFCOM', nullable: true, length: 16 })
  numprotocnfcom: string | null;

  @Column('int', { name: 'NULOTENFCOM', nullable: true })
  nulotenfcom: number | null;

  @Column('varchar', { name: 'STATUSNFCOM', nullable: true, length: 1 })
  statusnfcom: string | null;

  @Column('varchar', { name: 'TPAMBNFCOM', nullable: true, length: 1 })
  tpambnfcom: string | null;

  @Column('varchar', { name: 'SITUACAONFCOM', nullable: true, length: 1 })
  situacaonfcom: string | null;

  @Column('int', { name: 'TPEMISNFCOM', nullable: true })
  tpemisnfcom: number | null;

  @Column('char', { name: 'TPRETISS', nullable: true, length: 1 })
  tpretiss: string | null;

  @Column('float', { name: 'AD_HORIMETRO', nullable: true, precision: 53 })
  adHorimetro: number | null;

  @Column('varchar', { name: 'AD_MOTIVOABAST', nullable: true, length: 10 })
  adMotivoabast: string | null;

  @Column('datetime', { name: 'AD_DTINICIOSERV', nullable: true })
  adDtinicioserv: Date | null;

  @Column('smallint', { name: 'UFEMISS', nullable: true })
  ufemiss: number | null;

  @OneToMany(
    () => AdGeraoscomEntity,
    (adGeraoscomEntity) => adGeraoscomEntity.nunota,
  )
  adGeraoscoms: AdGeraoscomEntity[];

  @OneToMany(
    () => GfratendimentoclienteEntity,
    (gfratendimentoclienteEntity) => gfratendimentoclienteEntity.nunota,
  )
  gfratendimentoclientes: GfratendimentoclienteEntity[];

  @ManyToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcabs)
  @JoinTable({
    name: 'GFRMODNOTADAVEMP',
    joinColumns: [{ name: 'NUNOTA', referencedColumnName: 'nunota' }],
    inverseJoinColumns: [{ name: 'CODEMP', referencedColumnName: 'codemp' }],
    schema: 'SANKHYA',
  })
  tgfemps: TgfempEntity[];

  @OneToMany(
    () => TcbirpjnfretEntity,
    (tcbirpjnfretEntity) => tcbirpjnfretEntity.nunota2,
  )
  tcbirpjnfrets: TcbirpjnfretEntity[];

  @OneToMany(
    () => TcfitepnuEntity,
    (tcfitepnuEntity) => tcfitepnuEntity.nunota2,
  )
  tcfitepnus: TcfitepnuEntity[];

  @OneToMany(
    () => TcibemEntity,
    (tcibemEntity) => tcibemEntity.nunotaorigdesmemb,
  )
  tcibems: TcibemEntity[];

  @OneToMany(() => TcicteEntity, (tcicteEntity) => tcicteEntity.nunota)
  tcictes: TcicteEntity[];

  @OneToMany(() => TcidibEntity, (tcidibEntity) => tcidibEntity.nunotadesp)
  tcidibs: TcidibEntity[];

  @OneToMany(() => TcsbmeEntity, (tcsbmeEntity) => tcsbmeEntity.nunotafat)
  tcsbmes: TcsbmeEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.nunotapedloc2)
  tcscons: TcsconEntity[];

  @OneToMany(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.nunota2)
  tcsfaps: TcsfapEntity[];

  @OneToMany(() => TcsfpdEntity, (tcsfpdEntity) => tcsfpdEntity.nunota2)
  tcsfpds: TcsfpdEntity[];

  @OneToOne(() => TcslipEntity, (tcslipEntity) => tcslipEntity.nunota2)
  tcslip: TcslipEntity;

  @OneToMany(() => TcsmetEntity, (tcsmetEntity) => tcsmetEntity.notamodprevenda)
  tcsmets: TcsmetEntity[];

  @OneToMany(() => TcsvpcEntity, (tcsvpcEntity) => tcsvpcEntity.nunota)
  tcsvpcs: TcsvpcEntity[];

  @OneToMany(() => TgangiEntity, (tgangiEntity) => tgangiEntity.nunota2)
  tgangis: TgangiEntity[];

  @OneToMany(() => TgapcaEntity, (tgapcaEntity) => tgapcaEntity.nunotadest2)
  tgapcas: TgapcaEntity[];

  @OneToMany(() => TgfadgEntity, (tgfadgEntity) => tgfadgEntity.nunota2)
  tgfadgs: TgfadgEntity[];

  @OneToOne(() => TgfadstEntity, (tgfadstEntity) => tgfadstEntity.nunota2)
  tgfadst: TgfadstEntity;

  @OneToMany(() => TgfaemEntity, (tgfaemEntity) => tgfaemEntity.nunota2)
  tgfaems: TgfaemEntity[];

  @OneToMany(() => TgfaevEntity, (tgfaevEntity) => tgfaevEntity.nunota2)
  tgfaevs: TgfaevEntity[];

  @ManyToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcabs)
  @JoinTable({
    name: 'TGFATX',
    joinColumns: [{ name: 'NUNOTA', referencedColumnName: 'nunota' }],
    inverseJoinColumns: [{ name: 'CODPARC', referencedColumnName: 'codparc' }],
    schema: 'SANKHYA',
  })
  tgfpars: TgfparEntity[];

  @OneToOne(() => TgfaucEntity, (tgfaucEntity) => tgfaucEntity.nunota2)
  tgfauc: TgfaucEntity;

  @OneToMany(() => TgfbilEntity, (tgfbilEntity) => tgfbilEntity.nunotafatur2)
  tgfbils: TgfbilEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcabs)
  @JoinColumn([{ name: 'AD_CODUSUSOLICIT', referencedColumnName: 'codusu' }])
  adCodususolicit: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcabs2)
  @JoinColumn([{ name: 'CODUSUCOMPRADOR', referencedColumnName: 'codusu' }])
  codusucomprador: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcabs3)
  @JoinColumn([{ name: 'CODUSUINC', referencedColumnName: 'codusu' }])
  codusuinc: TsiusuEntity;

  @ManyToOne(() => TgflnfEntity, (tgflnfEntity) => tgflnfEntity.tgfcabs)
  @JoinColumn([{ name: 'NULOTENFE', referencedColumnName: 'nulote' }])
  nulotenfe: TgflnfEntity;

  @ManyToOne(() => TgflnfEntity, (tgflnfEntity) => tgflnfEntity.tgfcabs2)
  @JoinColumn([{ name: 'NULOTENFSE', referencedColumnName: 'nulote' }])
  nulotenfse: TgflnfEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfcabs)
  @JoinColumn([{ name: 'UFVEICULO', referencedColumnName: 'coduf' }])
  ufveiculo: TsiufsEntity;

  @ManyToOne(() => TccconEntity, (tccconEntity) => tccconEntity.tgfcabs)
  @JoinColumn([{ name: 'CODCC', referencedColumnName: 'codcc' }])
  codcc: TccconEntity;

  @ManyToOne(() => TgfmaqEntity, (tgfmaqEntity) => tgfmaqEntity.tgfcabs)
  @JoinColumn([{ name: 'CODMAQ', referencedColumnName: 'codmaq' }])
  codmaq: TgfmaqEntity;

  @ManyToOne(() => TgasafEntity, (tgasafEntity) => tgasafEntity.tgfcabs)
  @JoinColumn([{ name: 'CODSAF', referencedColumnName: 'codsaf' }])
  codsaf: TgasafEntity;

  @ManyToOne(() => TgwdcaEntity, (tgwdcaEntity) => tgwdcaEntity.tgfcabs)
  @JoinColumn([{ name: 'CODDOCA', referencedColumnName: 'coddoca' }])
  coddoca: TgwdcaEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcabs4)
  @JoinColumn([{ name: 'AD_CODUSUCOMP', referencedColumnName: 'codusu' }])
  adCodusucomp: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcabs5)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcabs6)
  @JoinColumn([{ name: 'AD_CODUSURETMAT', referencedColumnName: 'codusu' }])
  adCodusuretmat: TsiusuEntity;

  @ManyToOne(() => TsigufEntity, (tsigufEntity) => tsigufEntity.tgfcabs)
  @JoinColumn([{ name: 'CODGUF', referencedColumnName: 'codguf' }])
  codguf: TsigufEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfcabs)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfcabs2)
  @JoinColumn([{ name: 'CODVENDTEC', referencedColumnName: 'codvend' }])
  codvendtec: TgfvenEntity;

  @ManyToOne(() => TgfresiEntity, (tgfresiEntity) => tgfresiEntity.tgfcabs)
  @JoinColumn([{ name: 'CODRESIDUO', referencedColumnName: 'codresiduo' }])
  codresiduo: TgfresiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfcabs)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfcabs2)
  @JoinColumn([{ name: 'CODVEITRACAO', referencedColumnName: 'codveiculo' }])
  codveitracao: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfcabs3)
  @JoinColumn([{ name: 'REBOQUE1', referencedColumnName: 'codveiculo' }])
  reboque: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfcabs4)
  @JoinColumn([{ name: 'REBOQUE2', referencedColumnName: 'codveiculo' }])
  reboque2: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfcabs5)
  @JoinColumn([{ name: 'REBOQUE3', referencedColumnName: 'codveiculo' }])
  reboque3: TgfveiEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcabs2)
  @JoinColumn([{ name: 'CODINTERM', referencedColumnName: 'codparc' }])
  codinterm: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcabs3)
  @JoinColumn([{ name: 'CODMOTORISTA', referencedColumnName: 'codparc' }])
  codmotorista2: TgfparEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfcabs)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcabs4)
  @JoinColumn([{ name: 'CODPARCTRANSPFINAL', referencedColumnName: 'codparc' }])
  codparctranspfinal: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcabs5)
  @JoinColumn([
    { name: 'CODPARCDESCARGAMDFE', referencedColumnName: 'codparc' },
  ])
  codparcdescargamdfe: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcabs6)
  @JoinColumn([{ name: 'CODPARCTRANSP', referencedColumnName: 'codparc' }])
  codparctransp2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcabs7)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcabs8)
  @JoinColumn([{ name: 'CODPARCDEST', referencedColumnName: 'codparc' }])
  codparcdest: TgfparEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfcabs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tgfcabs)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TgfodpEntity, (tgfodpEntity) => tgfodpEntity.tgfcabs)
  @JoinColumn([{ name: 'NUODP', referencedColumnName: 'nuodp' }])
  nuodp2: TgfodpEntity;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tgfcabs)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos: TcsoseEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcabs)
  @JoinColumn([{ name: 'AD_NUNOTAPEDCOMPRA', referencedColumnName: 'nunota' }])
  adNunotapedcompra: TgfcabEntity;

  @OneToMany(
    () => TgfcabEntity,
    (tgfcabEntity) => tgfcabEntity.adNunotapedcompra,
  )
  tgfcabs: TgfcabEntity[];

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcabs2)
  @JoinColumn([{ name: 'NUNOTAPEDFRET', referencedColumnName: 'nunota' }])
  nunotapedfret2: TgfcabEntity;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.nunotapedfret2)
  tgfcabs2: TgfcabEntity[];

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcabs3)
  @JoinColumn([{ name: 'NURD8', referencedColumnName: 'nunota' }])
  nurd: TgfcabEntity;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.nurd)
  tgfcabs3: TgfcabEntity[];

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcabs4)
  @JoinColumn([{ name: 'NUREM', referencedColumnName: 'nunota' }])
  nurem2: TgfcabEntity;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.nurem2)
  tgfcabs4: TgfcabEntity[];

  @ManyToOne(() => TgfobsEntity, (tgfobsEntity) => tgfobsEntity.tgfcabs)
  @JoinColumn([{ name: 'CODOBSPADRAO', referencedColumnName: 'codobspadrao' }])
  codobspadrao: TgfobsEntity;

  @ManyToOne(() => TgftpvEntity, (tgftpvEntity) => tgftpvEntity.tgfcabs)
  @JoinColumn([
    { name: 'CODTIPVENDA', referencedColumnName: 'codtipvenda' },
    { name: 'DHTIPVENDA', referencedColumnName: 'dhalter' },
  ])
  tgftpv: TgftpvEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfcabs)
  @JoinColumn([{ name: 'CODCIDINICTE', referencedColumnName: 'codcid' }])
  codcidinicte: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfcabs2)
  @JoinColumn([{ name: 'CODCIDFIMCTE', referencedColumnName: 'codcid' }])
  codcidfimcte: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfcabs3)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TgfvtpEntity, (tgfvtpEntity) => tgfvtpEntity.tgfcabs)
  @JoinColumn([{ name: 'CODVTP', referencedColumnName: 'codvtp' }])
  codvtp: TgfvtpEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tgfcabs)
  @JoinColumn([
    { name: 'CODEMPFUNC', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TgftopEntity, (tgftopEntity) => tgftopEntity.tgfcabs)
  @JoinColumn([
    { name: 'CODTIPOPER', referencedColumnName: 'codtipoper' },
    { name: 'DHTIPOPER', referencedColumnName: 'dhalter' },
  ])
  tgftop: TgftopEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tgfcabs)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TgffopEntity, (tgffopEntity) => tgffopEntity.tgfcabs)
  @JoinColumn([{ name: 'NUFOP', referencedColumnName: 'nufop' }])
  nufop: TgffopEntity;

  @ManyToOne(() => TgfsitEntity, (tgfsitEntity) => tgfsitEntity.tgfcabs)
  @JoinColumn([{ name: 'CODSITE', referencedColumnName: 'codsite' }])
  codsite2: TgfsitEntity;

  @ManyToOne(() => TgflcrEntity, (tgflcrEntity) => tgflcrEntity.tgfcabs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODPARCRETIRADA', referencedColumnName: 'codparcretirada' },
  ])
  tgflcr: TgflcrEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcabs2)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcabs3)
  @JoinColumn([{ name: 'CODEMPNEGOC', referencedColumnName: 'codemp' }])
  codempnegoc: TgfempEntity;

  @ManyToOne(() => TgftpdEntity, (tgftpdEntity) => tgftpdEntity.tgfcabs)
  @JoinColumn([{ name: 'CODTPD', referencedColumnName: 'codtpd' }])
  codtpd: TgftpdEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfcabs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => Tgfcon2Entity, (tgfcon2Entity) => tgfcon2Entity.tgfcabs)
  @JoinColumn([{ name: 'NUCONFATUAL', referencedColumnName: 'nuconf' }])
  nuconfatual2: Tgfcon2Entity;

  @ManyToOne(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.tgfcabs)
  @JoinColumn([{ name: 'NUMCOTACAO', referencedColumnName: 'numcotacao' }])
  numcotacao2: TgfcotEntity;

  @ManyToOne(() => TgfageEntity, (tgfageEntity) => tgfageEntity.tgfcabs)
  @JoinColumn([{ name: 'CODAGENDA', referencedColumnName: 'codagenda' }])
  codagenda: TgfageEntity;

  @OneToMany(
    () => TgfcabligEntity,
    (tgfcabligEntity) => tgfcabligEntity.nunota2,
  )
  tgfcabligs: TgfcabligEntity[];

  @OneToMany(
    () => TgfcabligEntity,
    (tgfcabligEntity) => tgfcabligEntity.nunotaorig2,
  )
  tgfcabligs2: TgfcabligEntity[];

  @OneToOne(() => TgfcabvmEntity, (tgfcabvmEntity) => tgfcabvmEntity.nunota2)
  tgfcabvm: TgfcabvmEntity;

  @OneToMany(() => TgfcadEntity, (tgfcadEntity) => tgfcadEntity.nunota2)
  tgfcads: TgfcadEntity[];

  @OneToMany(() => TgfcasEntity, (tgfcasEntity) => tgfcasEntity.nunotafatura)
  tgfcas: TgfcasEntity[];

  @OneToMany(() => TgfccxEntity, (tgfccxEntity) => tgfccxEntity.nunota2)
  tgfccxes: TgfccxEntity[];

  @OneToMany(() => TgfcfmEntity, (tgfcfmEntity) => tgfcfmEntity.nunotaorig2)
  tgfcfms: TgfcfmEntity[];

  @OneToMany(() => TgfcfmEntity, (tgfcfmEntity) => tgfcfmEntity.nunota2)
  tgfcfms2: TgfcfmEntity[];

  @OneToMany(() => TgfcgtveEntity, (tgfcgtveEntity) => tgfcgtveEntity.nunota2)
  tgfcgtves: TgfcgtveEntity[];

  @OneToMany(() => TgfcmnEntity, (tgfcmnEntity) => tgfcmnEntity.nunota2)
  tgfcmns: TgfcmnEntity[];

  @OneToMany(() => TgfcolEntity, (tgfcolEntity) => tgfcolEntity.nunota)
  tgfcols: TgfcolEntity[];

  @OneToMany(() => TgfconEntity, (tgfconEntity) => tgfconEntity.nunota)
  tgfcons: TgfconEntity[];

  @OneToMany(() => Tgfcon2Entity, (tgfcon2Entity) => tgfcon2Entity.nunotaorig2)
  tgfcons2: Tgfcon2Entity[];

  @OneToMany(() => TgfcontEntity, (tgfcontEntity) => tgfcontEntity.nunota2)
  tgfconts: TgfcontEntity[];

  @OneToMany(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.nunotaorig2)
  tgfcots: TgfcotEntity[];

  @OneToMany(() => TgfcpeEntity, (tgfcpeEntity) => tgfcpeEntity.nunota)
  tgfcpes: TgfcpeEntity[];

  @OneToMany(() => TgfcredEntity, (tgfcredEntity) => tgfcredEntity.nunota)
  tgfcreds: TgfcredEntity[];

  @OneToMany(() => TgfctdEntity, (tgfctdEntity) => tgfctdEntity.nunotacotacao)
  tgfctds: TgfctdEntity[];

  @OneToMany(() => TgfdantEntity, (tgfdantEntity) => tgfdantEntity.nunota2)
  tgfdants: TgfdantEntity[];

  @OneToMany(() => TgfdgcEntity, (tgfdgcEntity) => tgfdgcEntity.nunota2)
  tgfdgcs: TgfdgcEntity[];

  @OneToMany(
    () => TgfdrcstajusteEntity,
    (tgfdrcstajusteEntity) => tgfdrcstajusteEntity.nunota2,
  )
  tgfdrcstajustes: TgfdrcstajusteEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.notaentsobrawms)
  tgfemps2: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.notasaiajustbem)
  tgfemps3: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.notasaiperdawms)
  tgfemps4: TgfempEntity[];

  @OneToMany(
    () => TgfempEntity,
    (tgfempEntity) => tgfempEntity.notamodelodagenda,
  )
  tgfemps5: TgfempEntity[];

  @OneToMany(() => TgfenvEntity, (tgfenvEntity) => tgfenvEntity.nunota2)
  tgfenvs: TgfenvEntity[];

  @OneToMany(() => TgfexiEntity, (tgfexiEntity) => tgfexiEntity.nunotacompra2)
  tgfexis: TgfexiEntity[];

  @OneToMany(() => TgfexiEntity, (tgfexiEntity) => tgfexiEntity.nunotaexp2)
  tgfexis2: TgfexiEntity[];

  @OneToMany(() => TgfexpEntity, (tgfexpEntity) => tgfexpEntity.nunota2)
  tgfexps: TgfexpEntity[];

  @OneToMany(() => TgfexpnEntity, (tgfexpnEntity) => tgfexpnEntity.nunota2)
  tgfexpns: TgfexpnEntity[];

  @OneToMany(() => TgffadEntity, (tgffadEntity) => tgffadEntity.nunota2)
  tgffads: TgffadEntity[];

  @OneToMany(() => TgffaeEntity, (tgffaeEntity) => tgffaeEntity.nunota2)
  tgffaes: TgffaeEntity[];

  @OneToMany(() => TgffnfEntity, (tgffnfEntity) => tgffnfEntity.nunota2)
  tgffnfs: TgffnfEntity[];

  @OneToMany(() => TgffreEntity, (tgffreEntity) => tgffreEntity.nunota2)
  tgffres: TgffreEntity[];

  @OneToMany(() => TgffvcEntity, (tgffvcEntity) => tgffvcEntity.nunota2)
  tgffvcs: TgffvcEntity[];

  @OneToMany(() => TgfgirEntity, (tgfgirEntity) => tgfgirEntity.nunota2)
  tgfgirs: TgfgirEntity[];

  @OneToOne(() => TgfgtvEntity, (tgfgtvEntity) => tgfgtvEntity.nunota2)
  tgfgtv: TgfgtvEntity;

  @OneToMany(
    () => TgfhcabpajEntity,
    (tgfhcabpajEntity) => tgfhcabpajEntity.nunota2,
  )
  tgfhcabpajs: TgfhcabpajEntity[];

  @OneToMany(() => TgfidaEntity, (tgfidaEntity) => tgfidaEntity.nunota2)
  tgfidas: TgfidaEntity[];

  @OneToMany(() => TgfigtveEntity, (tgfigtveEntity) => tgfigtveEntity.nunota2)
  tgfigtves: TgfigtveEntity[];

  @OneToOne(() => TgfmfoEntity, (tgfmfoEntity) => tgfmfoEntity.nunota2)
  tgfmfo: TgfmfoEntity;

  @OneToMany(() => TgfmixEntity, (tgfmixEntity) => tgfmixEntity.nunota)
  tgfmixes: TgfmixEntity[];

  @OneToMany(() => TgfmstEntity, (tgfmstEntity) => tgfmstEntity.nunota2)
  tgfmsts: TgfmstEntity[];

  @OneToMany(() => TgfnceEntity, (tgfnceEntity) => tgfnceEntity.nunota2)
  tgfnces: TgfnceEntity[];

  @OneToMany(() => TgfnctEntity, (tgfnctEntity) => tgfnctEntity.nunota2)
  tgfncts: TgfnctEntity[];

  @ManyToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfcabs)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfndpEntity, (tgfndpEntity) => tgfndpEntity.nunota2)
  tgfndps: TgfndpEntity[];

  @OneToMany(() => TgfnfcEntity, (tgfnfcEntity) => tgfnfcEntity.nunotaorig2)
  tgfnfcs: TgfnfcEntity[];

  @OneToMany(() => TgfnfcEntity, (tgfnfcEntity) => tgfnfcEntity.nudest2)
  tgfnfcs2: TgfnfcEntity[];

  @OneToMany(() => TgfnmaEntity, (tgfnmaEntity) => tgfnmaEntity.nunota2)
  tgfnmas: TgfnmaEntity[];

  @OneToMany(() => TgfnmdfeEntity, (tgfnmdfeEntity) => tgfnmdfeEntity.nunota2)
  tgfnmdfes: TgfnmdfeEntity[];

  @OneToOne(() => TgfnpaEntity, (tgfnpaEntity) => tgfnpaEntity.nunota2)
  tgfnpa: TgfnpaEntity;

  @OneToMany(() => TgfpecEntity, (tgfpecEntity) => tgfpecEntity.nunota2)
  tgfpecs: TgfpecEntity[];

  @OneToMany(() => TgfpedEntity, (tgfpedEntity) => tgfpedEntity.nunota2)
  tgfpeds: TgfpedEntity[];

  @OneToOne(() => TgfpefcEntity, (tgfpefcEntity) => tgfpefcEntity.nunota2)
  tgfpefc: TgfpefcEntity;

  @OneToMany(() => TgfpevEntity, (tgfpevEntity) => tgfpevEntity.nunota)
  tgfpevs: TgfpevEntity[];

  @OneToMany(() => TgfplacEntity, (tgfplacEntity) => tgfplacEntity.nunota)
  tgfplacs: TgfplacEntity[];

  @OneToMany(() => TgfrcaEntity, (tgfrcaEntity) => tgfrcaEntity.nunota2)
  tgfrcas: TgfrcaEntity[];

  @OneToMany(() => TgfrftEntity, (tgfrftEntity) => tgfrftEntity.nunota2)
  tgfrfts: TgfrftEntity[];

  @OneToMany(() => TgfromEntity, (tgfromEntity) => tgfromEntity.nunota)
  tgfroms: TgfromEntity[];

  @OneToMany(() => TgfromEntity, (tgfromEntity) => tgfromEntity.nunotaop)
  tgfroms2: TgfromEntity[];

  @OneToMany(() => TgfsegEntity, (tgfsegEntity) => tgfsegEntity.nunota2)
  tgfsegs: TgfsegEntity[];

  @OneToMany(() => TgfstaEntity, (tgfstaEntity) => tgfstaEntity.nunotaorig2)
  tgfstas: TgfstaEntity[];

  @OneToOne(() => TgfsubEntity, (tgfsubEntity) => tgfsubEntity.nunota2)
  tgfsub: TgfsubEntity;

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.nunotamodelo2)
  tgftops: TgftopEntity[];

  @OneToMany(() => TgfucaEntity, (tgfucaEntity) => tgfucaEntity.nunota2)
  tgfucas: TgfucaEntity[];

  @OneToMany(() => TgfunmEntity, (tgfunmEntity) => tgfunmEntity.nunota2)
  tgfunms: TgfunmEntity[];

  @OneToMany(() => TgfutrEntity, (tgfutrEntity) => tgfutrEntity.nunota2)
  tgfutrs: TgfutrEntity[];

  @OneToMany(() => TgfvorEntity, (tgfvorEntity) => tgfvorEntity.nunota2)
  tgfvors: TgfvorEntity[];

  @OneToMany(() => TgfvpfEntity, (tgfvpfEntity) => tgfvpfEntity.nunota2)
  tgfvpfs: TgfvpfEntity[];

  @OneToMany(() => TgfvtpEntity, (tgfvtpEntity) => tgfvtpEntity.codmodped)
  tgfvtps: TgfvtpEntity[];

  @OneToMany(() => TgmainEntity, (tgmainEntity) => tgmainEntity.nunota2)
  tgmains: TgmainEntity[];

  @OneToMany(() => TgpacoEntity, (tgpacoEntity) => tgpacoEntity.nunota2)
  tgpacos: TgpacoEntity[];

  @OneToMany(() => TgpregEntity, (tgpregEntity) => tgpregEntity.nunota2)
  tgpregs: TgpregEntity[];

  @OneToMany(() => TgvravEntity, (tgvravEntity) => tgvravEntity.nunota2)
  tgvravs: TgvravEntity[];

  @OneToMany(() => TgwempeEntity, (tgwempeEntity) => tgwempeEntity.nunota2)
  tgwempes: TgwempeEntity[];

  @ManyToMany(() => TgwageEntity, (tgwageEntity) => tgwageEntity.tgfcabs)
  @JoinTable({
    name: 'TGWIAG',
    joinColumns: [{ name: 'NUNOTA', referencedColumnName: 'nunota' }],
    inverseJoinColumns: [
      { name: 'NUAGENDA', referencedColumnName: 'nuagenda' },
    ],
    schema: 'SANKHYA',
  })
  tgwages: TgwageEntity[];

  @OneToMany(() => TgwrevEntity, (tgwrevEntity) => tgwrevEntity.nunota2)
  tgwrevs: TgwrevEntity[];

  @OneToMany(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.nunota)
  tgwseps: TgwsepEntity[];

  @ManyToMany(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgfcabs)
  tgwends: TgwendEntity[];

  @OneToOne(() => TimcnfEntity, (timcnfEntity) => timcnfEntity.cnfnunota2)
  timcnf: TimcnfEntity;

  @OneToMany(() => TimmfdEntity, (timmfdEntity) => timmfdEntity.mfdnunota)
  timmfds: TimmfdEntity[];

  @OneToMany(() => TimrclEntity, (timrclEntity) => timrclEntity.rclnotafiscal)
  timrcls: TimrclEntity[];

  @OneToMany(() => TsipomEntity, (tsipomEntity) => tsipomEntity.nunota2)
  tsipoms: TsipomEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfcab, {
    cascade: true,
  })
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgflibEntity, (tgflib) => tgflib.tgfcab)
  tgflibs: TgflibEntity[];
}
