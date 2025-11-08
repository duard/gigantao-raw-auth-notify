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
import { AdAcertoviagemEntity } from './aD_ACERTOVIAGEM.entity';
import { GfrfindespesaEntity } from './gFRFINDESPESA.entity';
import { GfrfinreceitasEntity } from './gFRFINRECEITAS.entity';
import { TapmapEntity } from './tAPMAP.entity';
import { TcahpaEntity } from './tCAHPA.entity';
import { TccconEntity } from './tCCCON.entity';
import { TccfinEntity } from './tCCFIN.entity';
import { TcedespHisEntity } from './tCEDESP_HIS.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TfpbasEntity } from './tFPBAS.entity';
import { TfpcbeEntity } from './tFPCBE.entity';
import { TfpcomEntity } from './tFPCOM.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpgpsEntity } from './tFPGPS.entity';
import { TfppenEntity } from './tFPPEN.entity';
import { TgfabfEntity } from './tGFABF.entity';
import { TgfadstEntity } from './tGFADST.entity';
import { TgfanbEntity } from './tGFANB.entity';
import { TgfavpEntity } from './tGFAVP.entity';
import { TgfbfdEntity } from './tGFBFD.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcaiEntity } from './tGFCAI.entity';
import { TgfccrEntity } from './tGFCCR.entity';
import { TgfcfoEntity } from './tGFCFO.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgfdfaEntity } from './tGFDFA.entity';
import { TgfecbtpEntity } from './tGFECBTP.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgffdicEntity } from './tGFFDIC.entity';
import { TgffinvmEntity } from './tGFFINVM.entity';
import { TgffinvmocorEntity } from './tGFFINVMOCOR.entity';
import { TgffnfEntity } from './tGFFNF.entity';
import { TgffreEntity } from './tGFFRE.entity';
import { TgffrpEntity } from './tGFFRP.entity';
import { TgfftcEntity } from './tGFFTC.entity';
import { TgfifcEntity } from './tGFIFC.entity';
import { TgfiifEntity } from './tGFIIF.entity';
import { TgfjumEntity } from './tGFJUM.entity';
import { TgfmbcEntity } from './tGFMBC.entity';
import { TgfmdcEntity } from './tGFMDC.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfobsEntity } from './tGFOBS.entity';
import { TgfocoEntity } from './tGFOCO.entity';
import { TgfocrEntity } from './tGFOCR.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfpixtefEntity } from './tGFPIXTEF.entity';
import { TgfprorvmEntity } from './tGFPRORVM.entity';
import { TgfrapEntity } from './tGFRAP.entity';
import { TgfrcEntity } from './tGFRC.entity';
import { TgfrdarfEntity } from './tGFRDARF.entity';
import { TgfrenEntity } from './tGFREN.entity';
import { TgfrnfEntity } from './tGFRNF.entity';
import { TgftefEntity } from './tGFTEF.entity';
import { TgftelEntity } from './tGFTEL.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgftopEntity } from './tGFTOP.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgfvpfEntity } from './tGFVPF.entity';
import { TgmlprEntity } from './tGMLPR.entity';
import { TgpacoEntity } from './tGPACO.entity';
import { TgpregEntity } from './tGPREG.entity';
import { TimaacEntity } from './tIMAAC.entity';
import { TimaclEntity } from './tIMACL.entity';
import { TimacmEntity } from './tIMACM.entity';
import { TimacoEntity } from './tIMACO.entity';
import { TimcipEntity } from './tIMCIP.entity';
import { TimdtlEntity } from './tIMDTL.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TimlvrEntity } from './tIMLVR.entity';
import { TimpipEntity } from './tIMPIP.entity';
import { TimrcmEntity } from './tIMRCM.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('GESTAOCAIXA_TGFFIN_IDX', ['nucaixa', 'nunota', 'origem'], {})
@Index('PK_TGFFIN', ['nufin'], { unique: true })
@Index('TGFFIN_I', ['nunota', 'desdobdupl', 'vlrdesdob'], {})
@Index('TGFFIN_I_FAT_OS', ['dtvenc', 'nunota'], {})
@Index('TGFFIN_I01', ['nunota', 'codemp'], {})
@Index('TGFFIN_I02', ['dhbaixa'], {})
@Index('TGFFIN_I03', ['dtvenc'], {})
@Index('TGFFIN_I04', ['nossonum'], {})
@Index('TGFFIN_I05', ['codparc'], {})
@Index('TGFFIN_I06', ['numnota'], {})
@Index('TGFFIN_I07', ['nubco'], {})
@Index('TGFFIN_I09', ['dhbaixa', 'recdesp'], {})
@Index('TGFFIN_I10', ['dhmov'], {})
@Index('TGFFIN_I11', ['numcontrato'], {})
@Index('TGFFIN_I12', ['codctabcoint'], {})
@Index('TGFFIN_I13', ['vlrdesdob'], {})
@Index('TGFFIN_I14', ['vlrmoedabaixa'], {})
@Index('TGFFIN_I15', ['vlrmoeda'], {})
@Index('TGFFIN_I16', ['vlrvarcambial'], {})
@Index('TGFFIN_I17', ['codmoeda'], {})
@Index('TGFFIN_I18', ['idlotefdic'], {})
@Index('TGFFIN_I19', ['codnat'], {})
@Index('TGFFIN_I20', ['numdupl'], {})
@Index('TGFFIN_I21', ['codregua'], {})
@Index('TGFFIN_I22', ['nudev'], {})
@Index('TGFFIN_I23', ['chavecte'], {})
@Index('TGFFIN_ICTA', ['codctabcoint', 'convenio', 'nossonum'], {})
@Index('TGFFIN_IDTNEG', ['dtneg'], {})
@Index('TGFFIN_UK01', ['nureneg', 'recdesp', 'nufin'], { unique: true })
@Entity('TGFFIN', { schema: 'SANKHYA' })
export class TgffinEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('char', { name: 'SERIENOTA', nullable: true, length: 3 })
  serienota: string | null;

  @Column('datetime', { name: 'DTNEG' })
  dtneg: Date;

  @Column('char', { name: 'DESDOBRAMENTO', nullable: true, length: 2 })
  desdobramento: string | null;

  @Column('datetime', { name: 'DHMOV' })
  dhmov: Date;

  @Column('datetime', { name: 'DTVENCINIC', nullable: true })
  dtvencinic: Date | null;

  @Column('datetime', { name: 'DTVENC', nullable: true })
  dtvenc: Date | null;

  @Column('datetime', { name: 'DHBAIXA', nullable: true })
  dhbaixa: Date | null;

  @Column('datetime', { name: 'DTCONTAB', nullable: true })
  dtcontab: Date | null;

  @Column('datetime', { name: 'DTCONTABBAIXA', nullable: true })
  dtcontabbaixa: Date | null;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { name: 'CODCTABCOINT', nullable: true })
  codctabcoint: number | null;

  @Column('int', { name: 'CODNAT' })
  codnat: number;

  @Column('smallint', { name: 'CODMOEDA', default: () => '(0)' })
  codmoeda: number;

  @Column('int', { name: 'NUMDUPL', nullable: true })
  numdupl: number | null;

  @Column('char', { name: 'DESDOBDUPL', nullable: true, length: 2 })
  desdobdupl: string | null;

  @Column('char', { name: 'NOSSONUM', nullable: true, length: 12 })
  nossonum: string | null;

  @Column('char', { name: 'HISTORICO', nullable: true, length: 255 })
  historico: string | null;

  @Column('money', { name: 'VLRDESDOB', default: () => '(0)' })
  vlrdesdob: number;

  @Column('money', { name: 'VLRVENDOR', default: () => '(0)' })
  vlrvendor: number;

  @Column('money', { name: 'VLRIRF', default: () => '(0)' })
  vlrirf: number;

  @Column('money', { name: 'VLRISS', default: () => '(0)' })
  vlriss: number;

  @Column('money', { name: 'DESPCART', default: () => '(0)' })
  despcart: number;

  @Column('char', { name: 'ISSRETIDO', length: 1, default: () => "'N'" })
  issretido: string;

  @Column('money', { name: 'VLRDESC', default: () => '(0)' })
  vlrdesc: number;

  @Column('money', { name: 'VLRMULTA', default: () => '(0)' })
  vlrmulta: number;

  @Column('money', { name: 'VLRINSS', default: () => '(0)' })
  vlrinss: number;

  @Column('money', { name: 'VLRCHEQUE', nullable: true })
  vlrcheque: number | null;

  @Column('char', {
    name: 'TIPMULTA',
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  tipmulta: string | null;

  @Column('money', { name: 'VLRJURO', default: () => '(0)' })
  vlrjuro: number;

  @Column('char', {
    name: 'TIPJURO',
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  tipjuro: string | null;

  @Column('money', { name: 'BASEICMS', default: () => '(0)' })
  baseicms: number;

  @Column('money', { name: 'ALIQICMS', default: () => '(0)' })
  aliqicms: number;

  @Column('money', { name: 'VLRBAIXA', default: () => '(0)' })
  vlrbaixa: number;

  @Column('int', { name: 'NUMREMESSA', nullable: true })
  numremessa: number | null;

  @Column('char', { name: 'AUTORIZADO', length: 1, default: () => "'N'" })
  autorizado: string;

  @Column('smallint', { name: 'RECDESP', default: () => '(0)' })
  recdesp: number;

  @Column('char', { name: 'PROVISAO', length: 1, default: () => "'N'" })
  provisao: string;

  @Column('char', { name: 'ORIGEM', length: 1, default: () => "'F'" })
  origem: string;

  @Column('char', { name: 'TIPMARCCHEQ', length: 1, default: () => "'A'" })
  tipmarccheq: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUBCO', nullable: true })
  nubco: number | null;

  @Column('int', { name: 'NUDEV', nullable: true })
  nudev: number | null;

  @Column('int', { name: 'NURENEG', nullable: true })
  nureneg: number | null;

  @Column('char', { name: 'RATEADO', length: 1, default: () => "'N'" })
  rateado: string;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('money', { name: 'VLRPROV', nullable: true, default: () => '(0)' })
  vlrprov: number | null;

  @Column('char', {
    name: 'IRFRETIDO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  irfretido: string | null;

  @Column('char', {
    name: 'INSSRETIDO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  inssretido: string | null;

  @Column('smallint', { name: 'CARTA', nullable: true })
  carta: number | null;

  @Column('money', { name: 'CARTAODESC', nullable: true, default: () => '(0)' })
  cartaodesc: number | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('int', { name: 'NUMCONTRATO', default: () => '(0)' })
  numcontrato: number;

  @Column('int', { name: 'ORDEMCARGA', default: () => '(0)' })
  ordemcarga: number;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 50 })
  codbarra: string | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('int', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('money', { name: 'VLRVARCAMBIAL', nullable: true })
  vlrvarcambial: number | null;

  @Column('char', { name: 'CODIGOBARRA', nullable: true, length: 55 })
  codigobarra: string | null;

  @Column('char', { name: 'LINHADIGITAVEL', nullable: true, length: 57 })
  linhadigitavel: string | null;

  @Column('money', {
    name: 'VLRMULTAEMBUT',
    nullable: true,
    default: () => '(0)',
  })
  vlrmultaembut: number | null;

  @Column('money', {
    name: 'VLRJUROEMBUT',
    nullable: true,
    default: () => '(0)',
  })
  vlrjuroembut: number | null;

  @Column('money', {
    name: 'VLRDESCEMBUT',
    nullable: true,
    default: () => '(0)',
  })
  vlrdescembut: number | null;

  @Column('float', {
    name: 'VLRMOEDA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrmoeda: number | null;

  @Column('float', {
    name: 'VLRMOEDABAIXA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrmoedabaixa: number | null;

  @Column('int', { name: 'NUCOMPENS', nullable: true })
  nucompens: number | null;

  @Column('money', {
    name: 'VLRMULTANEGOC',
    nullable: true,
    default: () => '(0)',
  })
  vlrmultanegoc: number | null;

  @Column('money', {
    name: 'VLRJURONEGOC',
    nullable: true,
    default: () => '(0)',
  })
  vlrjuronegoc: number | null;

  @Column('money', {
    name: 'VLRMULTALIB',
    nullable: true,
    default: () => '(0)',
  })
  vlrmultalib: number | null;

  @Column('money', { name: 'VLRJUROLIB', nullable: true, default: () => '(0)' })
  vlrjurolib: number | null;

  @Column('datetime', { name: 'DTBAIXAPREV', nullable: true })
  dtbaixaprev: Date | null;

  @Column('varchar', { name: 'NATUREZAOPERDES', nullable: true, length: 2 })
  naturezaoperdes: string | null;

  @Column('varchar', { name: 'SERIENFDES', nullable: true, length: 4 })
  serienfdes: string | null;

  @Column('varchar', { name: 'MODELONFDES', nullable: true, length: 2 })
  modelonfdes: string | null;

  @Column('int', { name: 'NUMBOR', nullable: true })
  numbor: number | null;

  @Column('float', { name: 'M2', nullable: true, precision: 53 })
  m2: number | null;

  @Column('varchar', { name: 'DIGSAFRA', nullable: true, length: 1 })
  digsafra: string | null;

  @Column('varchar', { name: 'NFENTSEQFIX', nullable: true, length: 15 })
  nfentseqfix: string | null;

  @Column('int', { name: 'NFCOMPLFIX', nullable: true })
  nfcomplfix: number | null;

  @Column('int', { name: 'CODPARCRESP', nullable: true })
  codparcresp: number | null;

  @Column('varchar', { name: 'PDD', nullable: true, length: 1 })
  pdd: string | null;

  @Column('int', { name: 'NUIMP', nullable: true })
  nuimp: number | null;

  @Column('varchar', { name: 'NUMNFSE', nullable: true, length: 20 })
  numnfse: string | null;

  @Column('float', { name: 'VLRALIBERAR', nullable: true, precision: 53 })
  vlraliberar: number | null;

  @Column('float', { name: 'CONVENIO', nullable: true, precision: 53 })
  convenio: number | null;

  @Column('varchar', { name: 'CHAVECTE', nullable: true, length: 44 })
  chavecte: string | null;

  @Column('varchar', { name: 'CHAVECTEREF', nullable: true, length: 44 })
  chavecteref: string | null;

  @Column('varchar', { name: 'NOMEEMITENTE_CMC7', nullable: true, length: 160 })
  nomeemitenteCmc7: string | null;

  @Column('int', { name: 'CODRATEIO', nullable: true })
  codrateio: number | null;

  @Column('float', { name: 'VLRCESSAO', nullable: true, precision: 53 })
  vlrcessao: number | null;

  @Column('int', { name: 'IDLOTEFDIC', nullable: true })
  idlotefdic: number | null;

  @Column('int', { name: 'NRODOCTEF', default: () => '(0)' })
  nrodoctef: number;

  @Column('int', { name: 'NUPED', nullable: true })
  nuped: number | null;

  @Column('smallint', { name: 'CODBCO_CMC7', nullable: true })
  codbcoCmc7: number | null;

  @Column('varchar', { name: 'AGENCIA_CMC7', nullable: true, length: 5 })
  agenciaCmc7: string | null;

  @Column('varchar', { name: 'CONTA_CMC7', nullable: true, length: 14 })
  contaCmc7: string | null;

  @Column('varchar', { name: 'CGC_CPF_CMC7', nullable: true, length: 14 })
  cgcCpfCmc7: string | null;

  @Column('varchar', { name: 'SITESPECIALRESP', nullable: true, length: 2 })
  sitespecialresp: string | null;

  @Column('varchar', { name: 'EXIGEISSQN', nullable: true, length: 2 })
  exigeissqn: string | null;

  @Column('varchar', { name: 'REGESPTRIBUT', nullable: true, length: 2 })
  regesptribut: string | null;

  @Column('varchar', { name: 'MOTNAORETERISSQN', nullable: true, length: 2 })
  motnaoreterissqn: string | null;

  @Column('float', { name: 'VLRFATCARTAO', nullable: true, precision: 53 })
  vlrfatcartao: number | null;

  @Column('int', { name: 'NROLOTEGNRE', nullable: true })
  nrolotegnre: number | null;

  @Column('varchar', { name: 'STATUSGNRE', nullable: true, length: 50 })
  statusgnre: string | null;

  @Column('varchar', { name: 'REJEICAOGNRE', nullable: true, length: 500 })
  rejeicaognre: string | null;

  @Column('varchar', { name: 'PARCRENEG', nullable: true, length: 20 })
  parcreneg: string | null;

  @Column('varchar', { name: 'CODCARTAO', nullable: true, length: 50 })
  codcartao: string | null;

  @Column('varchar', { name: 'TPAGNFCE', nullable: true, length: 2 })
  tpagnfce: string | null;

  @Column('float', { name: 'VALORPRESENTE', nullable: true, precision: 53 })
  valorpresente: number | null;

  @Column('float', { name: 'JUROSAVP', nullable: true, precision: 53 })
  jurosavp: number | null;

  @Column('char', {
    name: 'BLOQVAR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  bloqvar: string | null;

  @Column('float', { name: 'VLRFRETENFS', nullable: true, precision: 53 })
  vlrfretenfs: number | null;

  @Column('float', { name: 'VLRDESCCALC', nullable: true, precision: 53 })
  vlrdesccalc: number | null;

  @Column('varchar', { name: 'NSUECONECT', nullable: true, length: 20 })
  nsueconect: string | null;

  @Column('float', {
    name: 'VLRHONOR',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrhonor: number | null;

  @Column('float', { name: 'BASEIRF', nullable: true, precision: 53 })
  baseirf: number | null;

  @Column('float', { name: 'BASEINSS', nullable: true, precision: 53 })
  baseinss: number | null;

  @Column('char', { name: 'MONIOCOREM', nullable: true, length: 1 })
  moniocorem: string | null;

  @Column('datetime', { name: 'DTPRAZO', nullable: true })
  dtprazo: Date | null;

  @Column('float', { name: 'VLRTROCOECONECT', nullable: true, precision: 53 })
  vlrtrocoeconect: number | null;

  @Column('char', { name: 'TIPOTROCOECONECT', nullable: true, length: 1 })
  tipotrocoeconect: string | null;

  @Column('varchar', { name: 'RECEBCARTAO', nullable: true, length: 1 })
  recebcartao: string | null;

  @Column('float', { name: 'ABATIMENTO', nullable: true, precision: 53 })
  abatimento: number | null;

  @Column('float', { name: 'ABATIMENTOCAN', nullable: true, precision: 53 })
  abatimentocan: number | null;

  @Column('float', { name: 'VLRDESCSSPMB', nullable: true, precision: 53 })
  vlrdescsspmb: number | null;

  @Column('char', { name: 'TIPOABATSSPMB', nullable: true, length: 1 })
  tipoabatsspmb: string | null;

  @Column('char', { name: 'DESPADVOGADO', nullable: true, length: 1 })
  despadvogado: string | null;

  @Column('char', { name: 'CUSTASPROCESSUAIS', nullable: true, length: 1 })
  custasprocessuais: string | null;

  @Column('char', { name: 'DEPOSITOJUDICIAL', nullable: true, length: 1 })
  depositojudicial: string | null;

  @Column('varchar', { name: 'NUMPROCADMJUDIC', nullable: true, length: 21 })
  numprocadmjudic: string | null;

  @Column('smallint', { name: 'OBRACONSTCIVIL', nullable: true })
  obraconstcivil: number | null;

  @Column('int', { name: 'CLASSIFCESSAOOBRA', nullable: true })
  classifcessaoobra: number | null;

  @Column('int', { name: 'CODLST', nullable: true })
  codlst: number | null;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('varchar', { name: 'CODOBRA', nullable: true, length: 15 })
  codobra: string | null;

  @Column('varchar', {
    name: 'CHEQUERASTREADO_CMC7',
    nullable: true,
    length: 1,
  })
  chequerastreadoCmc7: string | null;

  @Column('int', { name: 'NUCHQ', nullable: true })
  nuchq: number | null;

  @Column('int', { name: 'CODREGUA', nullable: true })
  codregua: number | null;

  @Column('smallint', { name: 'SEQCAIXA', nullable: true })
  seqcaixa: number | null;

  @Column('int', { name: 'IDUNICO', nullable: true })
  idunico: number | null;

  @Column('smallint', { name: 'TIMPARCELA', nullable: true })
  timparcela: number | null;

  @Column('int', { name: 'TIMCONTRATOLOC', nullable: true })
  timcontratoloc: number | null;

  @Column('int', { name: 'TIMNEGOCIACAO', nullable: true })
  timnegociacao: number | null;

  @Column('datetime', { name: 'TIMDTIMPBOL', nullable: true })
  timdtimpbol: Date | null;

  @Column('datetime', { name: 'TIMDTREPASSE', nullable: true })
  timdtrepasse: Date | null;

  @Column('datetime', { name: 'TIMDHBAIXA', nullable: true })
  timdhbaixa: Date | null;

  @Column('datetime', { name: 'TIMDATADEJUR', nullable: true })
  timdatadejur: Date | null;

  @Column('int', { name: 'TIMNUMREG', nullable: true })
  timnumreg: number | null;

  @Column('varchar', { name: 'TIMORIGEM', nullable: true, length: 2 })
  timorigem: string | null;

  @Column('int', { name: 'TIMNUFINORIG', nullable: true })
  timnufinorig: number | null;

  @Column('int', { name: 'TIMVENDAIMV', nullable: true })
  timvendaimv: number | null;

  @Column('int', { name: 'TIMRENEGIMV', nullable: true })
  timrenegimv: number | null;

  @Column('int', { name: 'TIMVENDALOTE', nullable: true })
  timvendalote: number | null;

  @Column('int', { name: 'TIMRENEGLOTE', nullable: true })
  timreneglote: number | null;

  @Column('int', { name: 'TIMSAC', nullable: true })
  timsac: number | null;

  @Column('varchar', { name: 'TIMNOMEADVOGADO', nullable: true, length: 200 })
  timnomeadvogado: string | null;

  @Column('datetime', { name: 'TIMDHGERREPASSE', nullable: true })
  timdhgerrepasse: Date | null;

  @Column('int', { name: 'TIMCONTAREP', nullable: true })
  timcontarep: number | null;

  @Column('int', { name: 'TIMIMOVEL', nullable: true })
  timimovel: number | null;

  @Column('smallint', { name: 'TIMCONTRATOADM', nullable: true })
  timcontratoadm: number | null;

  @Column('char', {
    name: 'TIMBLOQUEADA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  timbloqueada: string | null;

  @Column('int', { name: 'TIMFECHAMENTOALU', nullable: true })
  timfechamentoalu: number | null;

  @Column('datetime', { name: 'TIMDTIMPBOLLOCAL', nullable: true })
  timdtimpbollocal: Date | null;

  @Column('int', { name: 'TIMFECHAMENTO', nullable: true })
  timfechamento: number | null;

  @Column('int', { name: 'TIMRENEGCANCLOTE', nullable: true })
  timrenegcanclote: number | null;

  @Column('int', { name: 'TIMCONTRATOLTV', nullable: true })
  timcontratoltv: number | null;

  @Column('float', { name: 'TIMNUNOTA', nullable: true, precision: 53 })
  timnunota: number | null;

  @Column('int', { name: 'TIMRESCISAOLTV', nullable: true })
  timrescisaoltv: number | null;

  @Column('smallint', { name: 'TIMCONTALANC', nullable: true })
  timcontalanc: number | null;

  @Column('char', {
    name: 'TIMTXADMGERALU',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  timtxadmgeralu: string | null;

  @Column('int', { name: 'TIMFINGARANTORIG', nullable: true })
  timfingarantorig: number | null;

  @Column('smallint', { name: 'TIMREPINTELIGENTE', nullable: true })
  timrepinteligente: number | null;

  @Column('datetime', { name: 'TIMDHGERREPPARCIAL', nullable: true })
  timdhgerrepparcial: Date | null;

  @Column('datetime', { name: 'TIMDTREPPARCIAL', nullable: true })
  timdtrepparcial: Date | null;

  @Column('char', { name: 'TIMREPPARCIAL', nullable: true, length: 1 })
  timrepparcial: string | null;

  @Column('float', {
    name: 'TIMVLRJUROCONTRATO',
    nullable: true,
    precision: 53,
  })
  timvlrjurocontrato: number | null;

  @Column('float', {
    name: 'TIMVLRAMORTCONTRATO',
    nullable: true,
    precision: 53,
  })
  timvlramortcontrato: number | null;

  @Column('float', { name: 'TIMVLRCORRMONET', nullable: true, precision: 53 })
  timvlrcorrmonet: number | null;

  @Column('int', { name: 'CODIPTU', nullable: true })
  codiptu: number | null;

  @Column('char', { name: 'TIMORIGRENEG', nullable: true, length: 1 })
  timorigreneg: string | null;

  @Column('int', { name: 'TIMRESCISAOLOC', nullable: true })
  timrescisaoloc: number | null;

  @Column('int', { name: 'TIMTIPOINTERMED', nullable: true })
  timtipointermed: number | null;

  @Column('varchar', {
    name: 'RECADIANTAMENTORURAL',
    nullable: true,
    length: 1,
  })
  recadiantamentorural: string | null;

  @Column('varchar', { name: 'CHAVENFEGNRE', nullable: true, length: 44 })
  chavenfegnre: string | null;

  @Column('int', { name: 'NUCKC', nullable: true })
  nuckc: number | null;

  @Column('int', { name: 'NUANTBANC', nullable: true })
  nuantbanc: number | null;

  @Column('datetime', { name: 'DTENTSAIINFO', nullable: true })
  dtentsaiinfo: Date | null;

  @Column('varchar', { name: 'NUMDOCARRECAD', nullable: true, length: 30 })
  numdocarrecad: string | null;

  @Column('datetime', { name: 'REFATCON', nullable: true })
  refatcon: Date | null;

  @Column('char', { name: 'FINCONFIRMADO', nullable: true, length: 1 })
  finconfirmado: string | null;

  @Column('varchar', { name: 'TIPAPURACAO', nullable: true, length: 1 })
  tipapuracao: string | null;

  @Column('float', { name: 'VLRGNREDOIS', nullable: true, precision: 53 })
  vlrgnredois: number | null;

  @Column('varchar', { name: 'DESCRTPAGNFCE', nullable: true, length: 60 })
  descrtpagnfce: string | null;

  @Column('char', { name: 'RECEBIDO', nullable: true, length: 1 })
  recebido: string | null;

  @Column('varchar', { name: 'EMVPIX', nullable: true, length: 1000 })
  emvpix: string | null;

  @Column('int', { name: 'NUACERTOAVC', nullable: true })
  nuacertoavc: number | null;

  @Column('int', { name: 'CODPGTO', nullable: true })
  codpgto: number | null;

  @Column('varchar', { name: 'MOTIVOCANCHEQ', nullable: true, length: 3103 })
  motivocancheq: string | null;

  @Column('int', { name: 'NUCHAVELIBCANCH', nullable: true })
  nuchavelibcanch: number | null;

  @Column('int', { name: 'NUCHAVELIBREIMPCH', nullable: true })
  nuchavelibreimpch: number | null;

  @Column('float', { name: 'TROCOPDV', nullable: true, precision: 53 })
  trocopdv: number | null;

  @Column('datetime', { name: 'DTINITREFAPURACAO', nullable: true })
  dtinitrefapuracao: Date | null;

  @Column('datetime', { name: 'DHINTEGRACAO', nullable: true })
  dhintegracao: Date | null;

  @Column('varchar', { name: 'INDRECEFDCONT', nullable: true, length: 2 })
  indrecefdcont: string | null;

  @Column('varchar', { name: 'INFCOMPLEFDCONT', nullable: true, length: 255 })
  infcomplefdcont: string | null;

  @Column('datetime', { name: 'DTREFERENCIA', nullable: true })
  dtreferencia: Date | null;

  @Column('datetime', { name: 'DTINTEGRACAOIPI', nullable: true })
  dtintegracaoipi: Date | null;

  @Column('int', { name: 'NUVERBA', nullable: true })
  nuverba: number | null;

  @Column('money', { name: 'VLRDESDOBCALC', nullable: true })
  vlrdesdobcalc: number | null;

  @Column('varchar', { name: 'AD_CONFERIDO', nullable: true, length: 10 })
  adConferido: string | null;

  @Column('varchar', { name: 'AD_PENDNF', nullable: true, length: 10 })
  adPendnf: string | null;

  @Column('varchar', { name: 'AD_FECHAMENTO', nullable: true, length: 10 })
  adFechamento: string | null;

  @Column('varchar', { name: 'AD_AUTORIZACAORH', nullable: true, length: 10 })
  adAutorizacaorh: string | null;

  @Column('varchar', { name: 'AD_RELFORAPRAZO', nullable: true, length: 10 })
  adRelforaprazo: string | null;

  @Column('varchar', {
    name: 'AD_ADIANTAMENTOFORC',
    nullable: true,
    length: 10,
  })
  adAdiantamentoforc: string | null;

  @Column('varchar', {
    name: 'AD_AJCUSTOALIMENTACAO',
    nullable: true,
    length: 10,
  })
  adAjcustoalimentacao: string | null;

  @Column('varchar', { name: 'AD_RDV', nullable: true, length: 10 })
  adRdv: string | null;

  @Column('varchar', { name: 'AD_DIARIAVIAGEM', nullable: true, length: 10 })
  adDiariaviagem: string | null;

  @Column('varchar', { name: 'AD_CHEQUE', nullable: true, length: 10 })
  adCheque: string | null;

  @Column('varchar', { name: 'BAIXAAPI', nullable: true, length: 255 })
  baixaapi: string | null;

  @Column('char', { name: 'VENDAMAIS', nullable: true, length: 1 })
  vendamais: string | null;

  @Column('datetime', { name: 'DH_IMPRESSAO', nullable: true })
  dhImpressao: Date | null;

  @Column('int', { name: 'NUCAIXA', nullable: true })
  nucaixa: number | null;

  @Column('int', { name: 'NROIMPORT', nullable: true })
  nroimport: number | null;

  @Column('char', { name: 'SANGDESPDV', nullable: true, length: 1 })
  sangdespdv: string | null;

  @Column('varchar', { name: 'NUMOCORRENCIAS', nullable: true, length: 255 })
  numocorrencias: string | null;

  @Column('float', { name: 'VLRICMSXMLCTE', nullable: true, precision: 53 })
  vlricmsxmlcte: number | null;

  @Column('varchar', { name: 'METODOCALCIRRF', nullable: true, length: 1 })
  metodocalcirrf: string | null;

  @Column('varchar', { name: 'AD_FIXO_PENDENTE', nullable: true, length: 10 })
  adFixoPendente: string | null;

  @Column('text', { name: 'AD_OBSERVACAO', nullable: true })
  adObservacao: string | null;

  @OneToMany(
    () => AdAcertoviagemEntity,
    (adAcertoviagemEntity) => adAcertoviagemEntity.nufinR,
  )
  adAcertoviagems: AdAcertoviagemEntity[];

  @OneToMany(
    () => AdAcertoviagemEntity,
    (adAcertoviagemEntity) => adAcertoviagemEntity.nufindesp,
  )
  adAcertoviagems2: AdAcertoviagemEntity[];

  @OneToMany(
    () => AdAcertoviagemEntity,
    (adAcertoviagemEntity) => adAcertoviagemEntity.nufinD,
  )
  adAcertoviagems3: AdAcertoviagemEntity[];

  @OneToMany(
    () => GfrfindespesaEntity,
    (gfrfindespesaEntity) => gfrfindespesaEntity.nufin,
  )
  gfrfindespesas: GfrfindespesaEntity[];

  @OneToMany(
    () => GfrfinreceitasEntity,
    (gfrfinreceitasEntity) => gfrfinreceitasEntity.nufin,
  )
  gfrfinreceitas: GfrfinreceitasEntity[];

  @OneToMany(() => TcahpaEntity, (tcahpaEntity) => tcahpaEntity.nufin2)
  tcahpas: TcahpaEntity[];

  @OneToMany(() => TccfinEntity, (tccfinEntity) => tccfinEntity.nufinorig2)
  tccfins: TccfinEntity[];

  @OneToMany(
    () => TcedespHisEntity,
    (tcedespHisEntity) => tcedespHisEntity.nufin,
  )
  tcedespHis: TcedespHisEntity[];

  @OneToMany(() => TfpbasEntity, (tfpbasEntity) => tfpbasEntity.nufinirrfplr)
  tfpbas: TfpbasEntity[];

  @OneToMany(() => TfpcomEntity, (tfpcomEntity) => tfpcomEntity.nufin)
  tfpcoms: TfpcomEntity[];

  @OneToMany(() => TfpgpsEntity, (tfpgpsEntity) => tfpgpsEntity.nufin)
  tfpgps: TfpgpsEntity[];

  @OneToMany(
    () => TfpgpsEntity,
    (tfpgpsEntity) => tfpgpsEntity.nufincomplementar,
  )
  tfpgps2: TfpgpsEntity[];

  @OneToMany(() => TfpgpsEntity, (tfpgpsEntity) => tfpgpsEntity.nufindecterc)
  tfpgps3: TfpgpsEntity[];

  @OneToMany(() => TfppenEntity, (tfppenEntity) => tfppenEntity.nufin)
  tfppens: TfppenEntity[];

  @OneToMany(() => TgfabfEntity, (tgfabfEntity) => tgfabfEntity.nufin2)
  tgfabfs: TgfabfEntity[];

  @OneToMany(() => TgfadstEntity, (tgfadstEntity) => tgfadstEntity.nufin)
  tgfadsts: TgfadstEntity[];

  @OneToMany(() => TgfanbEntity, (tgfanbEntity) => tgfanbEntity.nufintitori)
  tgfanbs: TgfanbEntity[];

  @OneToMany(() => TgfanbEntity, (tgfanbEntity) => tgfanbEntity.nufintitban)
  tgfanbs2: TgfanbEntity[];

  @OneToMany(() => TgfanbEntity, (tgfanbEntity) => tgfanbEntity.nufintitjur)
  tgfanbs3: TgfanbEntity[];

  @OneToMany(() => TgfanbEntity, (tgfanbEntity) => tgfanbEntity.nufintitobr)
  tgfanbs4: TgfanbEntity[];

  @OneToMany(() => TgfavpEntity, (tgfavpEntity) => tgfavpEntity.nufin2)
  tgfavps: TgfavpEntity[];

  @OneToMany(() => TgfbfdEntity, (tgfbfdEntity) => tgfbfdEntity.nufin2)
  tgfbfds: TgfbfdEntity[];

  @OneToMany(() => TgfdfaEntity, (tgfdfaEntity) => tgfdfaEntity.nufin2)
  tgfdfas: TgfdfaEntity[];

  @OneToMany(() => TgfecbtpEntity, (tgfecbtpEntity) => tgfecbtpEntity.nufin2)
  tgfecbtps: TgfecbtpEntity[];

  @ManyToOne(() => TgffdicEntity, (tgffdicEntity) => tgffdicEntity.tgffins)
  @JoinColumn([{ name: 'IDLOTEFDIC', referencedColumnName: 'idlotefdic' }])
  idlotefdic2: TgffdicEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgffins)
  @JoinColumn([{ name: 'CODCIDINICTE', referencedColumnName: 'codcid' }])
  codcidinicte: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgffins2)
  @JoinColumn([{ name: 'CODCIDFIMCTE', referencedColumnName: 'codcid' }])
  codcidfimcte: TsicidEntity;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.tgffins)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODCONTATO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TgftopEntity, (tgftopEntity) => tgftopEntity.tgffins)
  @JoinColumn([
    { name: 'CODTIPOPERBAIXA', referencedColumnName: 'codtipoper' },
    { name: 'DHTIPOPERBAIXA', referencedColumnName: 'dhalter' },
  ])
  tgftop: TgftopEntity;

  @ManyToOne(() => TgftopEntity, (tgftopEntity) => tgftopEntity.tgffins2)
  @JoinColumn([
    { name: 'CODTIPOPER', referencedColumnName: 'codtipoper' },
    { name: 'DHTIPOPER', referencedColumnName: 'dhalter' },
  ])
  tgftop2: TgftopEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tgffins)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda2: TsimoeEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tgffins)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco: TsibcoEntity;

  @ManyToOne(() => TfpcbeEntity, (tfpcbeEntity) => tfpcbeEntity.tgffins)
  @JoinColumn([{ name: 'CODCBE', referencedColumnName: 'codcbe' }])
  codcbe: TfpcbeEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgffins)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tgffins)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgffins)
  @JoinColumn([{ name: 'CODIMOVELRURAL', referencedColumnName: 'codemp' }])
  codimovelrural: TgfempEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgffins2)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgffins3)
  @JoinColumn([{ name: 'CODEMPBAIXA', referencedColumnName: 'codemp' }])
  codempbaixa: TgfempEntity;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgffins)
  @JoinColumn([{ name: 'CODCFO', referencedColumnName: 'codcfo' }])
  codcfo: TgfcfoEntity;

  @ManyToOne(() => TgfmbcEntity, (tgfmbcEntity) => tgfmbcEntity.tgffins)
  @JoinColumn([{ name: 'NUBCO', referencedColumnName: 'nubco' }])
  nubco2: TgfmbcEntity;

  @ManyToOne(() => TgfrdarfEntity, (tgfrdarfEntity) => tgfrdarfEntity.tgffins)
  @JoinColumn([{ name: 'CODRECEITA', referencedColumnName: 'codreceita' }])
  codreceita: TgfrdarfEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgffins)
  @JoinColumn([{ name: 'CODUSUCOBR', referencedColumnName: 'codusu' }])
  codusucobr: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgffins2)
  @JoinColumn([{ name: 'CODUSUBAIXA', referencedColumnName: 'codusu' }])
  codusubaixa: TsiusuEntity;

  @ManyToOne(() => TccconEntity, (tccconEntity) => tccconEntity.tgffins)
  @JoinColumn([{ name: 'CODCC', referencedColumnName: 'codcc' }])
  codcc: TccconEntity;

  @ManyToOne(() => TgfccrEntity, (tgfccrEntity) => tgfccrEntity.tgffins)
  @JoinColumn([{ name: 'NUCCR', referencedColumnName: 'nuccr' }])
  nuccr: TgfccrEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgffins)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgffins)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tgffins)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgffins)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgffins)
  @JoinColumn([{ name: 'AD_CODPARC', referencedColumnName: 'codparc' }])
  adCodparc: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgffins2)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TapmapEntity, (tapmapEntity) => tapmapEntity.tgffins)
  @JoinColumn([{ name: 'NUAPONTA', referencedColumnName: 'nuaponta' }])
  nuaponta: TapmapEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgffins)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint2: TsictaEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgffins)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfcaiEntity, (tgfcaiEntity) => tgfcaiEntity.tgffins)
  @JoinColumn([{ name: 'NUCAIXA', referencedColumnName: 'nucaixa' }])
  nucaixa2: TgfcaiEntity;

  @ManyToOne(() => TgfftcEntity, (tgfftcEntity) => tgfftcEntity.tgffins)
  @JoinColumn([{ name: 'NUFTC', referencedColumnName: 'nuftc' }])
  nuftc: TgfftcEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgffins)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TgfobsEntity, (tgfobsEntity) => tgfobsEntity.tgffins)
  @JoinColumn([{ name: 'CODOBSPADRAO', referencedColumnName: 'codobspadrao' }])
  codobspadrao: TgfobsEntity;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tgffins)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos: TcsoseEntity;

  @ManyToOne(
    () => TgfpixtefEntity,
    (tgfpixtefEntity) => tgfpixtefEntity.tgffins,
  )
  @JoinColumn([{ name: 'PIXTEF', referencedColumnName: 'seqpixtef' }])
  pixtef: TgfpixtefEntity;

  @OneToOne(() => TgffinvmEntity, (tgffinvmEntity) => tgffinvmEntity.nufin2)
  tgffinvm: TgffinvmEntity;

  @OneToMany(
    () => TgffinvmocorEntity,
    (tgffinvmocorEntity) => tgffinvmocorEntity.nufin,
  )
  tgffinvmocors: TgffinvmocorEntity[];

  @OneToMany(() => TgffnfEntity, (tgffnfEntity) => tgffnfEntity.nufin2)
  tgffnfs: TgffnfEntity[];

  @OneToMany(() => TgffreEntity, (tgffreEntity) => tgffreEntity.nufin2)
  tgffres: TgffreEntity[];

  @OneToMany(() => TgffreEntity, (tgffreEntity) => tgffreEntity.nufinorig2)
  tgffres2: TgffreEntity[];

  @OneToMany(() => TgffrpEntity, (tgffrpEntity) => tgffrpEntity.nufinorig2)
  tgffrps: TgffrpEntity[];

  @OneToMany(() => TgfifcEntity, (tgfifcEntity) => tgfifcEntity.nufin2)
  tgfifcs: TgfifcEntity[];

  @OneToMany(() => TgfiifEntity, (tgfiifEntity) => tgfiifEntity.nufin2)
  tgfiifs: TgfiifEntity[];

  @OneToMany(() => TgfjumEntity, (tgfjumEntity) => tgfjumEntity.nufin2)
  tgfjums: TgfjumEntity[];

  @OneToMany(() => TgfmdcEntity, (tgfmdcEntity) => tgfmdcEntity.nufinrec2)
  tgfmdcs: TgfmdcEntity[];

  @OneToMany(() => TgfmdcEntity, (tgfmdcEntity) => tgfmdcEntity.nufindesp2)
  tgfmdcs2: TgfmdcEntity[];

  @OneToMany(() => TgfmdcEntity, (tgfmdcEntity) => tgfmdcEntity.nufinorig2)
  tgfmdcs3: TgfmdcEntity[];

  @ManyToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgffins)
  @JoinTable({
    name: 'TGFNDA',
    joinColumns: [{ name: 'NUFIN', referencedColumnName: 'nufin' }],
    inverseJoinColumns: [{ name: 'NUNOTA', referencedColumnName: 'nunota' }],
    schema: 'SANKHYA',
  })
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfocoEntity, (tgfocoEntity) => tgfocoEntity.nufin2)
  tgfocos: TgfocoEntity[];

  @OneToMany(() => TgfocrEntity, (tgfocrEntity) => tgfocrEntity.nufin)
  tgfocrs: TgfocrEntity[];

  @OneToMany(() => TgfpixtefEntity, (tgfpixtefEntity) => tgfpixtefEntity.nufin)
  tgfpixtefs: TgfpixtefEntity[];

  @OneToMany(() => TgfprorvmEntity, (tgfprorvmEntity) => tgfprorvmEntity.nufin2)
  tgfprorvms: TgfprorvmEntity[];

  @OneToMany(() => TgfrapEntity, (tgfrapEntity) => tgfrapEntity.nufin2)
  tgfraps: TgfrapEntity[];

  @ManyToMany(() => TgfrcEntity, (tgfrcEntity) => tgfrcEntity.tgffins)
  @JoinTable({
    name: 'TGFRCI',
    joinColumns: [{ name: 'NUFIN', referencedColumnName: 'nufin' }],
    inverseJoinColumns: [{ name: 'NUREM', referencedColumnName: 'nurem' }],
    schema: 'SANKHYA',
  })
  tgfrcs: TgfrcEntity[];

  @ManyToMany(() => TgftelEntity, (tgftelEntity) => tgftelEntity.tgffins)
  @JoinTable({
    name: 'TGFREF',
    joinColumns: [{ name: 'NUFIN', referencedColumnName: 'nufin' }],
    inverseJoinColumns: [{ name: 'NUREL', referencedColumnName: 'nurel' }],
    schema: 'SANKHYA',
  })
  tgftels: TgftelEntity[];

  @OneToMany(() => TgfrenEntity, (tgfrenEntity) => tgfrenEntity.nufin2)
  tgfrens: TgfrenEntity[];

  @OneToOne(() => TgfrnfEntity, (tgfrnfEntity) => tgfrnfEntity.nufin2)
  tgfrnf: TgfrnfEntity;

  @OneToOne(() => TgftefEntity, (tgftefEntity) => tgftefEntity.nufin2)
  tgftef: TgftefEntity;

  @OneToMany(() => TgfvpfEntity, (tgfvpfEntity) => tgfvpfEntity.nufin2)
  tgfvpfs: TgfvpfEntity[];

  @OneToMany(() => TgmlprEntity, (tgmlprEntity) => tgmlprEntity.nufinprov2)
  tgmlprs: TgmlprEntity[];

  @OneToMany(() => TgmlprEntity, (tgmlprEntity) => tgmlprEntity.nufinreal2)
  tgmlprs2: TgmlprEntity[];

  @OneToMany(() => TgpacoEntity, (tgpacoEntity) => tgpacoEntity.nufin2)
  tgpacos: TgpacoEntity[];

  @OneToMany(() => TgpregEntity, (tgpregEntity) => tgpregEntity.nufin2)
  tgpregs: TgpregEntity[];

  @OneToMany(() => TimaacEntity, (timaacEntity) => timaacEntity.aacnufin2)
  timaacs: TimaacEntity[];

  @OneToMany(() => TimaclEntity, (timaclEntity) => timaclEntity.aclnufin)
  timacls: TimaclEntity[];

  @OneToMany(() => TimacmEntity, (timacmEntity) => timacmEntity.acmnufin)
  timacms: TimacmEntity[];

  @OneToMany(() => TimacoEntity, (timacoEntity) => timacoEntity.aconufin2)
  timacos: TimacoEntity[];

  @OneToMany(() => TimcipEntity, (timcipEntity) => timcipEntity.cipnufin)
  timcips: TimcipEntity[];

  @OneToMany(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.dtlfindesp2)
  timdtls: TimdtlEntity[];

  @OneToMany(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.dtldesvinculado)
  timdtls2: TimdtlEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotmodfinparc)
  timlots: TimlotEntity[];

  @OneToMany(
    () => TimlotEntity,
    (timlotEntity) => timlotEntity.lotmodfinrenegparc,
  )
  timlots2: TimlotEntity[];

  @OneToMany(
    () => TimlvrEntity,
    (timlvrEntity) => timlvrEntity.lvrfincompensamort,
  )
  timlvrs: TimlvrEntity[];

  @OneToMany(() => TimpipEntity, (timpipEntity) => timpipEntity.pipfindesp)
  timpips: TimpipEntity[];

  @OneToMany(() => TimrcmEntity, (timrcmEntity) => timrcmEntity.rcmfindesp2)
  timrcms: TimrcmEntity[];

  @OneToMany(() => TimrcmEntity, (timrcmEntity) => timrcmEntity.rcmnufinorigem2)
  timrcms2: TimrcmEntity[];
}
