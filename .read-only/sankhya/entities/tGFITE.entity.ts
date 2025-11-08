import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TciibeEntity } from './tCIIBE.entity';
import { TcsaceEntity } from './tCSACE.entity';
import { TcsaveEntity } from './tCSAVE.entity';
import { TgagtmEntity } from './tGAGTM.entity';
import { TgfalbEntity } from './tGFALB.entity';
import { TgfareEntity } from './tGFARE.entity';
import { TgfauiEntity } from './tGFAUI.entity';
import { TgfcbcEntity } from './tGFCBC.entity';
import { TgfctdEntity } from './tGFCTD.entity';
import { TgfddcEntity } from './tGFDDC.entity';
import { TgfdinEntity } from './tGFDIN.entity';
import { TgfdrawEntity } from './tGFDRAW.entity';
import { TgfdtpEntity } from './tGFDTP.entity';
import { TgfgvaEntity } from './tGFGVA.entity';
import { TgfhipEntity } from './tGFHIP.entity';
import { TgfibxEntity } from './tGFIBX.entity';
import { TgficoEntity } from './tGFICO.entity';
import { TgfidtEntity } from './tGFIDT.entity';
import { TgfiiiEntity } from './tGFIII.entity';
import { TgfiprEntity } from './tGFIPR.entity';
import { TgfirrEntity } from './tGFIRR.entity';
import { TgftpaEntity } from './tGFTPA.entity';
import { TgfobsEntity } from './tGFOBS.entity';
import { TgagtEntity } from './tGAGT.entity';
import { TgfpromEntity } from './tGFPROM.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfetaEntity } from './tGFETA.entity';
import { TgffopEntity } from './tGFFOP.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgpcabEntity } from './tGPCAB.entity';
import { TgftabEntity } from './tGFTAB.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TgfcfoEntity } from './tGFCFO.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfcavEntity } from './tGFCAV.entity';
import { TgfitsEntity } from './tGFITS.entity';
import { TgflppEntity } from './tGFLPP.entity';
import { TgflseEntity } from './tGFLSE.entity';
import { TgfmcsiEntity } from './tGFMCSI.entity';
import { TgfmepiEntity } from './tGFMEPI.entity';
import { TgfpedEntity } from './tGFPED.entity';
import { TgfperdaEntity } from './tGFPERDA.entity';
import { TgfplaiEntity } from './tGFPLAI.entity';
import { TgpacoEntity } from './tGPACO.entity';
import { TgwdevEntity } from './tGWDEV.entity';
import { TgwenpEntity } from './tGWENP.entity';
import { TgwhctEntity } from './tGWHCT.entity';
import { TgwiteEntity } from './tGWITE.entity';
import { TgwiterEntity } from './tGWITER.entity';
import { TgwpxnEntity } from './tGWPXN.entity';
import { TgwtrfEntity } from './tGWTRF.entity';
import { TpritePerdaEntity } from './tPRITE_PERDA.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFITE', ['nunota', 'sequencia'], { unique: true })
@Index('TGFITE_I01', ['codprod'], {})
@Index('TGFITE_I02', ['nunota', 'codprod', 'controle'], {})
@Index('TGFITE_I03', ['codprod', 'controle', 'nunota'], {})
@Index('TGFITE_I04', ['codprod', 'nunota', 'qtdneg'], {})
@Index('TGFITE_I05', ['nutab'], {})
@Index(
  'TGFITE_I06',
  ['nunota', 'sequencia', 'atualestoque', 'qtdneg', 'pendente', 'statusnota'],
  {
    unique: true,
  },
)
@Index(
  'TGFITE_I07',
  [
    'nunota',
    'sequencia',
    'qtdneg',
    'atualestoque',
    'pendente',
    'statusnota',
    'usoprod',
    'codemp',
  ],
  { unique: true },
)
@Index(
  'TGFITE_I08',
  ['nunota', 'sequencia', 'qtdneg', 'reserva', 'statusnota'],
  { unique: true },
)
@Index(
  'TGFITE_I176',
  ['codemp', 'codprod', 'nunota', 'sequencia', 'qtdneg'],
  {},
)
@Index('TGFITE_IDTINICIO', ['codemp', 'dtinicio', 'statusnota'], {})
@Index('TGFITE_IPROI', ['codpromo', 'codprod'], {})
@Index('TGFITE_S01', ['nrseriereserva'], {})
@Entity('TGFITE', { schema: 'SANKHYA' })
export class TgfiteEntity {
  @Column('int', { name: 'NUTAB', nullable: true })
  nutab: number | null;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @ManyToOne(() => TgfcabEntity, (tgfcab) => tgfcab.tgfites)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  tgfcab: TgfcabEntity;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('char', { name: 'USOPROD', length: 1, default: () => "'V'" })
  usoprod: string;

  @Column('float', { name: 'QTDNEG', precision: 53, default: () => '(0)' })
  qtdneg: number;

  @Column('float', { name: 'QTDENTREGUE', precision: 53, default: () => '(0)' })
  qtdentregue: number;

  @Column('float', {
    name: 'QTDCONFERIDA',
    precision: 53,
    default: () => '(0)',
  })
  qtdconferida: number;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('float', { name: 'VLRCUS', nullable: true, precision: 53 })
  vlrcus: number | null;

  @Column('float', { name: 'BASEIPI', precision: 53, default: () => '(0)' })
  baseipi: number;

  @Column('float', { name: 'VLRIPI', precision: 53, default: () => '(0)' })
  vlripi: number;

  @Column('float', { name: 'ALIQIPI', nullable: true, precision: 53 })
  aliqipi: number | null;

  @Column('float', { name: 'BASEICMS', precision: 53, default: () => '(0)' })
  baseicms: number;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('float', { name: 'VLRICMS', precision: 53, default: () => '(0)' })
  vlricms: number;

  @Column('float', { name: 'VLRDESC', precision: 53, default: () => '(0)' })
  vlrdesc: number;

  @Column('float', { name: 'BASESUBSTIT', precision: 53, default: () => '(0)' })
  basesubstit: number;

  @Column('float', { name: 'VLRSUBST', precision: 53, default: () => '(0)' })
  vlrsubst: number;

  @Column('char', { name: 'PENDENTE', length: 1, default: () => "'S'" })
  pendente: string;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('smallint', { name: 'ATUALESTOQUE', default: () => '(-1)' })
  atualestoque: number;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('char', { name: 'RESERVA', length: 1, default: () => "'N'" })
  reserva: string;

  @Column('char', { name: 'STATUSNOTA', length: 1, default: () => "'P'" })
  statusnota: string;

  @Column('char', {
    name: 'FATURAR',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  faturar: string | null;

  @Column('float', { name: 'VLRREPRED', precision: 53, default: () => '(0)' })
  vlrrepred: number;

  @Column('float', {
    name: 'VLRDESCBONIF',
    precision: 53,
    default: () => '(0)',
  })
  vlrdescbonif: number;

  @Column('float', { name: 'PERCDESC', precision: 53, default: () => '(0)' })
  percdesc: number;

  @Column('float', { name: 'M3', nullable: true, precision: 53 })
  m3: number | null;

  @Column('char', { name: 'AD_MOT_BONIFICA', nullable: true, length: 50 })
  adMotBonifica: string | null;

  @Column('int', { name: 'AD_DESCMAX', nullable: true })
  adDescmax: number | null;

  @Column('float', {
    name: 'ALIQICMSRED',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  aliqicmsred: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('float', { name: 'CUSTO', nullable: true, precision: 53 })
  custo: number | null;

  @Column('float', {
    name: 'BASESUBSTSEMRED',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  basesubstsemred: number | null;

  @Column('char', { name: 'SOLCOMPRA', nullable: true, length: 1 })
  solcompra: string | null;

  @Column('smallint', { name: 'CODTRIBISS', nullable: true })
  codtribiss: number | null;

  @Column('int', { name: 'CODCFPS', nullable: true })
  codcfps: number | null;

  @Column('float', { name: 'ALIQISS', nullable: true, precision: 53 })
  aliqiss: number | null;

  @Column('float', { name: 'QTDFORMULA', nullable: true, precision: 53 })
  qtdformula: number | null;

  @Column('char', { name: 'ATUALESTTERC', nullable: true, length: 1 })
  atualestterc: string | null;

  @Column('float', { name: 'PERCDESCBONIF', nullable: true, precision: 53 })
  percdescbonif: number | null;

  @Column('char', { name: 'TERCEIROS', nullable: true, length: 1 })
  terceiros: string | null;

  @Column('char', { name: 'ENDIMAGEM', nullable: true, length: 100 })
  endimagem: string | null;

  @Column('float', { name: 'ALTURA', nullable: true, precision: 53 })
  altura: number | null;

  @Column('float', { name: 'LARGURA', nullable: true, precision: 53 })
  largura: number | null;

  @Column('float', { name: 'ESPESSURA', nullable: true, precision: 53 })
  espessura: number | null;

  @Column('float', { name: 'QTDPECA', nullable: true, precision: 53 })
  qtdpeca: number | null;

  @Column('float', { name: 'PRECOBASE', nullable: true, precision: 53 })
  precobase: number | null;

  @Column('float', { name: 'VLRACRESCDESC', nullable: true, precision: 53 })
  vlracrescdesc: number | null;

  @Column('float', { name: 'VLRRETENCAO', nullable: true, precision: 53 })
  vlrretencao: number | null;

  @Column('smallint', { name: 'CSTIPI', nullable: true })
  cstipi: number | null;

  @Column('float', { name: 'PERCCOM', nullable: true, precision: 53 })
  perccom: number | null;

  @Column('float', { name: 'VLRCOM', nullable: true, precision: 53 })
  vlrcom: number | null;

  @Column('char', { name: 'ALTPRECO', nullable: true, length: 1 })
  altpreco: string | null;

  @Column('float', { name: 'QTDFIXADA', nullable: true, precision: 53 })
  qtdfixada: number | null;

  @Column('float', { name: 'PERCCOMGER', nullable: true, precision: 53 })
  perccomger: number | null;

  @Column('float', { name: 'VLRCOMGER', nullable: true, precision: 53 })
  vlrcomger: number | null;

  @Column('float', { name: 'QTDWMS', nullable: true, precision: 53 })
  qtdwms: number | null;

  @Column('int', { name: 'BASICMMOD', nullable: true })
  basicmmod: number | null;

  @Column('int', { name: 'BASICMSTMOD', nullable: true })
  basicmstmod: number | null;

  @Column('float', { name: 'QTDFAT', nullable: true, precision: 53 })
  qtdfat: number | null;

  @Column('float', { name: 'BASESTUFDEST', nullable: true, precision: 53 })
  basestufdest: number | null;

  @Column('float', { name: 'VLRICMSUFDEST', nullable: true, precision: 53 })
  vlricmsufdest: number | null;

  @Column('float', { name: 'BASESTANT', nullable: true, precision: 53 })
  basestant: number | null;

  @Column('varchar', { name: 'PRODUTONFE', nullable: true, length: 60 })
  produtonfe: string | null;

  @Column('varchar', { name: 'GTINNFE', nullable: true, length: 14 })
  gtinnfe: string | null;

  @Column('varchar', { name: 'GTINTRIBNFE', nullable: true, length: 14 })
  gtintribnfe: string | null;

  @Column('int', { name: 'CODPROMO', nullable: true })
  codpromo: number | null;

  @Column('float', { name: 'VLRPROMO', nullable: true, precision: 53 })
  vlrpromo: number | null;

  @Column('float', { name: 'VLRLIQPROM', nullable: true, precision: 53 })
  vlrliqprom: number | null;

  @Column('float', { name: 'PRECOBASEQTD', nullable: true, precision: 53 })
  precobaseqtd: number | null;

  @Column('varchar', { name: 'RETDATACRITICA', nullable: true, length: 1 })
  retdatacritica: string | null;

  @Column('float', { name: 'PERCPUREZA', nullable: true, precision: 53 })
  percpureza: number | null;

  @Column('float', { name: 'PERCGERMIN', nullable: true, precision: 53 })
  percgermin: number | null;

  @Column('int', { name: 'NUPROMOCAO', nullable: true })
  nupromocao: number | null;

  @Column('float', { name: 'PERCDESCPROM', nullable: true, precision: 53 })
  percdescprom: number | null;

  @Column('float', { name: 'VLRPTOPUREZA', nullable: true, precision: 53 })
  vlrptopureza: number | null;

  @Column('varchar', { name: 'CODANTECIPST', nullable: true, length: 1 })
  codantecipst: string | null;

  @Column('int', { name: 'NUMPEDIDO', nullable: true })
  numpedido: number | null;

  @Column('smallint', { name: 'SEQPEDIDO', nullable: true })
  seqpedido: number | null;

  @Column('smallint', { name: 'CSOSN', nullable: true })
  csosn: number | null;

  @Column('varchar', { name: 'NUMPEDIDO2', nullable: true, length: 15 })
  numpedido2: string | null;

  @Column('varchar', { name: 'SEQPEDIDO2', nullable: true, length: 6 })
  seqpedido2: string | null;

  @Column('varchar', { name: 'STATUSLOTE', nullable: true, length: 1 })
  statuslote: string | null;

  @Column('int', { name: 'QTDVOL', nullable: true })
  qtdvol: number | null;

  @Column('varchar', { name: 'SERIEINICIAL', nullable: true, length: 30 })
  serieinicial: string | null;

  @Column('varchar', { name: 'SERIEFINAL', nullable: true, length: 30 })
  seriefinal: string | null;

  @Column('datetime', { name: 'DTINICIO', nullable: true })
  dtinicio: Date | null;

  @Column('int', { name: 'HRINICIO', nullable: true })
  hrinicio: number | null;

  @Column('int', { name: 'HRFIM', nullable: true })
  hrfim: number | null;

  @Column('float', { name: 'VLRUNITDOLAR', nullable: true, precision: 53 })
  vlrunitdolar: number | null;

  @Column('float', { name: 'PESO', nullable: true, precision: 53 })
  peso: number | null;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @Column('float', { name: 'BASEISS', nullable: true, precision: 53 })
  baseiss: number | null;

  @Column('float', { name: 'VLRISS', nullable: true, precision: 53 })
  vlriss: number | null;

  @Column('float', { name: 'VLRTROCA', nullable: true, precision: 53 })
  vlrtroca: number | null;

  @Column('smallint', { name: 'VARIACAOFCP', nullable: true })
  variacaofcp: number | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('int', { name: 'TEMPOGASTO', nullable: true })
  tempogasto: number | null;

  @Column('float', { name: 'DESVIOPADRAO', nullable: true, precision: 53 })
  desviopadrao: number | null;

  @Column('float', { name: 'PERCTROCA', nullable: true, precision: 53 })
  perctroca: number | null;

  @Column('float', { name: 'PERCDESCDIGITADO', nullable: true, precision: 53 })
  percdescdigitado: number | null;

  @Column('float', { name: 'PERCDESCTGFDES', nullable: true, precision: 53 })
  percdesctgfdes: number | null;

  @Column('smallint', { name: 'SEQUENCIAFISCAL', nullable: true })
  sequenciafiscal: number | null;

  @Column('float', { name: 'VLRDESCDIGITADO', nullable: true, precision: 53 })
  vlrdescdigitado: number | null;

  @Column('float', { name: 'PERCVC', nullable: true, precision: 53 })
  percvc: number | null;

  @Column('smallint', { name: 'CODMOTDESONERAICMS', nullable: true })
  codmotdesoneraicms: number | null;

  @Column('smallint', { name: 'VARIACAO', nullable: true })
  variacao: number | null;

  @Column('char', { name: 'ATUALESTINDIVIDUAL', nullable: true, length: 1 })
  atualestindividual: string | null;

  @Column('float', { name: 'VLRSTEXTRANOTA', nullable: true, precision: 53 })
  vlrstextranota: number | null;

  @Column('char', { name: 'ULOCETPAESTIND', nullable: true, length: 1 })
  ulocetpaestind: string | null;

  @Column('varchar', { name: 'ORIGPROD', nullable: true, length: 1 })
  origprod: string | null;

  @Column('varchar', { name: 'NRSERIERESERVA', nullable: true, length: 60 })
  nrseriereserva: string | null;

  @Column('float', { name: 'VLRUNITLOC', nullable: true, precision: 53 })
  vlrunitloc: number | null;

  @Column('float', { name: 'VLRICMSANT', nullable: true, precision: 53 })
  vlricmsant: number | null;

  @Column('float', { name: 'BASESUBSTITANT', nullable: true, precision: 53 })
  basesubstitant: number | null;

  @Column('float', { name: 'VLRSUBSTANT', nullable: true, precision: 53 })
  vlrsubstant: number | null;

  @Column('int', { name: 'NUMEROOS', nullable: true })
  numeroos: number | null;

  @Column('float', { name: 'PERCDESCBASE', nullable: true, precision: 53 })
  percdescbase: number | null;

  @Column('char', { name: 'CANCELADO', nullable: true, length: 1 })
  cancelado: string | null;

  @Column('smallint', { name: 'GRUPOFAT', nullable: true })
  grupofat: number | null;

  @Column('int', { name: 'NUMCONTRATO', nullable: true })
  numcontrato: number | null;

  @Column('int', { name: 'IDALIQICMS', nullable: true })
  idaliqicms: number | null;

  @Column('float', { name: 'VLRUNITMOE', precision: 53, default: () => '(0)' })
  vlrunitmoe: number;

  @Column('float', { name: 'VLRDESCMOE', precision: 53, default: () => '(0)' })
  vlrdescmoe: number;

  @Column('float', { name: 'VLRTOTMOE', precision: 53, default: () => '(0)' })
  vlrtotmoe: number;

  @Column('varchar', { name: 'CODVOLPARC', nullable: true, length: 6 })
  codvolparc: string | null;

  @Column('smallint', { name: 'CODENQIPI', nullable: true })
  codenqipi: number | null;

  @Column('int', { name: 'CODESPECST', nullable: true })
  codespecst: number | null;

  @Column('float', {
    name: 'VLRDESCRAT',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdescrat: number | null;

  @Column('float', {
    name: 'BASESUBSTITUNITORIG',
    nullable: true,
    precision: 53,
  })
  basesubstitunitorig: number | null;

  @Column('float', { name: 'VLRSUBSTUNITORIG', nullable: true, precision: 53 })
  vlrsubstunitorig: number | null;

  @Column('char', { name: 'GERAPRODUCAO', length: 1, default: () => "'S'" })
  geraproducao: string;

  @Column('varchar', { name: 'CODAGREGACAO', nullable: true, length: 20 })
  codagregacao: string | null;

  @Column('char', { name: 'INDESCALA', nullable: true, length: 1 })
  indescala: string | null;

  @Column('varchar', { name: 'CNPJFABRICANTE', nullable: true, length: 14 })
  cnpjfabricante: string | null;

  @Column('float', { name: 'BASESTFCPINTANT', nullable: true, precision: 53 })
  basestfcpintant: number | null;

  @Column('float', { name: 'VLRSTFCPINTANT', nullable: true, precision: 53 })
  vlrstfcpintant: number | null;

  @Column('float', { name: 'PERCSTFCPINTANT', nullable: true, precision: 53 })
  percstfcpintant: number | null;

  @Column('varchar', { name: 'CODBENEFNAUF', nullable: true, length: 10 })
  codbenefnauf: string | null;

  @Column('float', {
    name: 'PERCDESCFORNECEDOR',
    nullable: true,
    precision: 53,
  })
  percdescfornecedor: number | null;

  @Column('varchar', { name: 'ORIGEMBUSCA', nullable: true, length: 18 })
  origembusca: string | null;

  @Column('int', { name: 'PRODUTOPESQUISADO', nullable: true })
  produtopesquisado: number | null;

  @Column('float', { name: 'ALIQSTEXTRANOTA', nullable: true, precision: 53 })
  aliqstextranota: number | null;

  @Column('float', { name: 'BASESTEXTRANOTA', nullable: true, precision: 53 })
  basestextranota: number | null;

  @Column('float', { name: 'QTDTRIBEXPORT', nullable: true, precision: 53 })
  qtdtribexport: number | null;

  @Column('varchar', { name: 'CODPROINFO', nullable: true, length: 32 })
  codproinfo: string | null;

  @Column('float', { name: 'ALIQSTFCPSTANT', nullable: true, precision: 53 })
  aliqstfcpstant: number | null;

  @Column('float', { name: 'VLRVENDAPROMO', nullable: true, precision: 53 })
  vlrvendapromo: number | null;

  @Column('float', { name: 'VLRREPREDSEMDESC', nullable: true, precision: 53 })
  vlrrepredsemdesc: number | null;

  @Column('smallint', { name: 'CODDOCARRECAD', nullable: true })
  coddocarrecad: number | null;

  @Column('varchar', { name: 'NUMDOCARRECAD', nullable: true, length: 30 })
  numdocarrecad: string | null;

  @Column('float', { name: 'VLRICMSDIFERIDO', nullable: true, precision: 53 })
  vlricmsdiferido: number | null;

  @Column('varchar', { name: 'TIPOSEPARACAO', nullable: true, length: 1 })
  tiposeparacao: string | null;

  @Column('float', {
    name: 'BASECALCSTEXTRANOTA',
    nullable: true,
    precision: 53,
  })
  basecalcstextranota: number | null;

  @Column('float', { name: 'REDBASEST', nullable: true, precision: 53 })
  redbasest: number | null;

  @Column('float', { name: 'MARGLUCRO', nullable: true, precision: 53 })
  marglucro: number | null;

  @Column('float', { name: 'PERCREDVLRIPI', nullable: true, precision: 53 })
  percredvlripi: number | null;

  @Column('int', { name: 'IDALIQICMSDIFICMS', nullable: true })
  idaliqicmsdificms: number | null;

  @Column('varchar', { name: 'TIPENTREGA', nullable: true, length: 1 })
  tipentrega: string | null;

  @Column('float', { name: 'ALIQFETHAB', nullable: true, precision: 53 })
  aliqfethab: number | null;

  @Column('float', { name: 'VLRFETHAB', nullable: true, precision: 53 })
  vlrfethab: number | null;

  @Column('int', { name: 'IDALIQICMSAT', nullable: true })
  idaliqicmsat: number | null;

  @Column('float', { name: 'BASEICMSAT', nullable: true, precision: 53 })
  baseicmsat: number | null;

  @Column('float', { name: 'ALIQICMSAT', nullable: true, precision: 53 })
  aliqicmsat: number | null;

  @Column('float', { name: 'ALIQINTERICMSAT', nullable: true, precision: 53 })
  aliqintericmsat: number | null;

  @Column('float', { name: 'VLRICMSAT', nullable: true, precision: 53 })
  vlricmsat: number | null;

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

  @Column('float', { name: 'PERCUSAQUDECPE', nullable: true, precision: 53 })
  percusaqudecpe: number | null;

  @Column('float', { name: 'VLRCUSAQUDECPE', nullable: true, precision: 53 })
  vlrcusaqudecpe: number | null;

  @Column('float', { name: 'BASEICMSSTFRETE', nullable: true, precision: 53 })
  baseicmsstfrete: number | null;

  @Column('float', { name: 'ICMSSTFRETE', nullable: true, precision: 53 })
  icmsstfrete: number | null;

  @Column('float', { name: 'VLRREPREDST', nullable: true, precision: 53 })
  vlrrepredst: number | null;

  @Column('char', { name: 'CODSIT08EFD', nullable: true, length: 1 })
  codsit08Efd: string | null;

  @Column('smallint', { name: 'TIPUTILCOM', nullable: true })
  tiputilcom: number | null;

  @Column('varchar', { name: 'UNIDADE', nullable: true, length: 6 })
  unidade: string | null;

  @Column('float', { name: 'ALIQFUST', nullable: true, precision: 53 })
  aliqfust: number | null;

  @Column('float', { name: 'BASEFUST', nullable: true, precision: 53 })
  basefust: number | null;

  @Column('float', { name: 'VLRFUST', nullable: true, precision: 53 })
  vlrfust: number | null;

  @Column('float', { name: 'ALIQFUNTTEL', nullable: true, precision: 53 })
  aliqfunttel: number | null;

  @Column('float', { name: 'BASEFUNTTEL', nullable: true, precision: 53 })
  basefunttel: number | null;

  @Column('float', { name: 'VLRFUNTTEL', nullable: true, precision: 53 })
  vlrfunttel: number | null;

  @Column('smallint', { name: 'CODMOTDESONERAST', nullable: true })
  codmotdesonerast: number | null;

  @Column('varchar', { name: 'CONTROLEDESTTMS', nullable: true, length: 255 })
  controledesttms: string | null;

  @Column('float', { name: 'AD_VLRKM', nullable: true, precision: 53 })
  adVlrkm: number | null;

  @Column('varchar', { name: 'AD_APLICACAO', nullable: true, length: 10 })
  adAplicacao: string | null;

  @Column('varchar', { name: 'CODBARRAPDV', nullable: true, length: 25 })
  codbarrapdv: string | null;

  @Column('varchar', { name: 'AD_EMPREITO', nullable: true, length: 10 })
  adEmpreito: string | null;

  @Column('varchar', {
    name: 'AD_SITUACAOPRODCOT',
    nullable: true,
    length: 10,
    default: () => "'O'",
  })
  adSituacaoprodcot: string | null;

  @Column('float', { name: 'PERCUSAQUDECPEEST', nullable: true, precision: 53 })
  percusaqudecpeest: number | null;

  @Column('varchar', { name: 'CODFCI', nullable: true, length: 36 })
  codfci: string | null;

  @Column('int', { name: 'AD_TAG', nullable: true })
  adTag: number | null;

  @Column('datetime', { name: 'AD_DTFABRICACAO', nullable: true })
  adDtfabricacao: Date | null;

  @Column('varchar', { name: 'AD_NUCERTIFICADO', nullable: true, length: 100 })
  adNucertificado: string | null;

  @Column('int', { name: 'CODIPI', nullable: true })
  codipi: number | null;

  @Column('int', { name: 'IDALIQISS', nullable: true })
  idaliqiss: number | null;

  @Column('varchar', { name: 'INDREPDES', nullable: true, length: 1 })
  indrepdes: string | null;

  @Column('int', { name: 'CODNATREND', nullable: true })
  codnatrend: number | null;

  @Column('varchar', { name: 'AD_RATREABILIDADE', nullable: true, length: 100 })
  adRatreabilidade: string | null;

  @Column('varchar', { name: 'AD_MEDIDAS', nullable: true, length: 30 })
  adMedidas: string | null;

  @Column('varchar', { name: 'CODIGONFCOM', nullable: true, length: 10 })
  codigonfcom: string | null;

  @Column('varchar', {
    name: 'INDDEVOLUCAONFCOM',
    length: 1,
    default: () => "'N'",
  })
  inddevolucaonfcom: string;

  @OneToMany(() => TciibeEntity, (tciibeEntity) => tciibeEntity.tgfite)
  tciibes: TciibeEntity[];

  @OneToMany(() => TcsaceEntity, (tcsaceEntity) => tcsaceEntity.tgfite)
  tcsaces: TcsaceEntity[];

  @OneToMany(() => TcsaveEntity, (tcsaveEntity) => tcsaveEntity.tgfite)
  tcsaves: TcsaveEntity[];

  @OneToMany(() => TgagtmEntity, (tgagtmEntity) => tgagtmEntity.tgfite)
  tgagtms: TgagtmEntity[];

  @OneToMany(() => TgfalbEntity, (tgfalbEntity) => tgfalbEntity.tgfite)
  tgfalbs: TgfalbEntity[];

  @OneToOne(() => TgfareEntity, (tgfareEntity) => tgfareEntity.tgfite)
  tgfare: TgfareEntity;

  @OneToOne(() => TgfauiEntity, (tgfauiEntity) => tgfauiEntity.tgfite)
  tgfaui: TgfauiEntity;

  @OneToMany(() => TgfcbcEntity, (tgfcbcEntity) => tgfcbcEntity.tgfite)
  tgfcbcs: TgfcbcEntity[];

  @OneToMany(() => TgfctdEntity, (tgfctdEntity) => tgfctdEntity.tgfite)
  tgfctds: TgfctdEntity[];

  @OneToOne(() => TgfddcEntity, (tgfddcEntity) => tgfddcEntity.tgfite)
  tgfddc: TgfddcEntity;

  @OneToMany(() => TgfdinEntity, (tgfdinEntity) => tgfdinEntity.tgfite)
  tgfdins: TgfdinEntity[];

  @OneToMany(() => TgfdrawEntity, (tgfdrawEntity) => tgfdrawEntity.tgfite)
  tgfdraws: TgfdrawEntity[];

  @OneToMany(() => TgfdtpEntity, (tgfdtpEntity) => tgfdtpEntity.tgfite)
  tgfdtps: TgfdtpEntity[];

  @OneToMany(() => TgfgvaEntity, (tgfgvaEntity) => tgfgvaEntity.tgfite)
  tgfgvas: TgfgvaEntity[];

  @OneToMany(() => TgfhipEntity, (tgfhipEntity) => tgfhipEntity.tgfite)
  tgfhips: TgfhipEntity[];

  @OneToMany(() => TgfibxEntity, (tgfibxEntity) => tgfibxEntity.tgfite)
  tgfibxes: TgfibxEntity[];

  @OneToOne(() => TgficoEntity, (tgficoEntity) => tgficoEntity.tgfite)
  tgfico: TgficoEntity;

  @OneToMany(() => TgfidtEntity, (tgfidtEntity) => tgfidtEntity.tgfite)
  tgfidts: TgfidtEntity[];

  @OneToOne(() => TgfiiiEntity, (tgfiiiEntity) => tgfiiiEntity.tgfite)
  tgfiii: TgfiiiEntity;

  @OneToMany(() => TgfiprEntity, (tgfiprEntity) => tgfiprEntity.tgfite)
  tgfiprs: TgfiprEntity[];

  @OneToMany(() => TgfirrEntity, (tgfirrEntity) => tgfirrEntity.tgfite)
  tgfirrs: TgfirrEntity[];

  @OneToMany(() => TgfirrEntity, (tgfirrEntity) => tgfirrEntity.tgfite2)
  tgfirrs2: TgfirrEntity[];

  @OneToOne(() => TgfirrEntity, (tgfirrEntity) => tgfirrEntity.tgfite3)
  tgfirr: TgfirrEntity;

  @OneToMany(() => TgfirrEntity, (tgfirrEntity) => tgfirrEntity.tgfite4)
  tgfirrs3: TgfirrEntity[];

  @ManyToOne(() => TgftpaEntity, (tgftpaEntity) => tgftpaEntity.tgfites)
  @JoinColumn([{ name: 'CODTPA', referencedColumnName: 'codtpa' }])
  codtpa: TgftpaEntity;

  @ManyToOne(() => TgfobsEntity, (tgfobsEntity) => tgfobsEntity.tgfites)
  @JoinColumn([{ name: 'CODOBSPADRAO', referencedColumnName: 'codobspadrao' }])
  codobspadrao: TgfobsEntity;

  @ManyToOne(() => TgagtEntity, (tgagtEntity) => tgagtEntity.tgfites)
  @JoinColumn([{ name: 'GRUPOTRANSG', referencedColumnName: 'grupotransg' }])
  grupotransg: TgagtEntity;

  @ManyToOne(() => TgfpromEntity, (tgfpromEntity) => tgfpromEntity.tgfites)
  @JoinColumn([{ name: 'CODPROMO', referencedColumnName: 'codpromo' }])
  codpromo2: TgfpromEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfites)
  @JoinColumn([{ name: 'AD_CODPRODALT3', referencedColumnName: 'codprod' }])
  adCodprodalt: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfites2)
  @JoinColumn([{ name: 'AD_CODPRODALT4', referencedColumnName: 'codprod' }])
  adCodprodalt2: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfites3)
  @JoinColumn([{ name: 'AD_CODPRODALT5', referencedColumnName: 'codprod' }])
  adCodprodalt3: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfites4)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.tgfites)
  @JoinColumn([{ name: 'CODETAPA', referencedColumnName: 'codetapa' }])
  codetapa: TgfetaEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfites5)
  @JoinColumn([{ name: 'AD_CODPRODALT1', referencedColumnName: 'codprod' }])
  adCodprodalt4: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfites6)
  @JoinColumn([{ name: 'AD_CODPRODALT2', referencedColumnName: 'codprod' }])
  adCodprodalt5: TgfproEntity;

  @ManyToOne(() => TgffopEntity, (tgffopEntity) => tgffopEntity.tgfites)
  @JoinColumn([{ name: 'NUFOP', referencedColumnName: 'nufop' }])
  nufop: TgffopEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfites)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgpcabEntity, (tgpcabEntity) => tgpcabEntity.tgfites)
  @JoinColumn([{ name: 'CODPROC', referencedColumnName: 'codproc' }])
  codproc: TgpcabEntity;

  @ManyToOne(() => TgftabEntity, (tgftabEntity) => tgftabEntity.tgfites)
  @JoinColumn([{ name: 'NUTAB', referencedColumnName: 'nutab' }])
  nutab2: TgftabEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfites)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgfites)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TgwendEntity;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgfites)
  @JoinColumn([{ name: 'CODCFO', referencedColumnName: 'codcfo' }])
  codcfo: TgfcfoEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfites)
  @JoinColumn([{ name: 'CODLOCALTERC', referencedColumnName: 'codlocal' }])
  codlocalterc: TgflocEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfites2)
  @JoinColumn([{ name: 'CODLOCALORIG', referencedColumnName: 'codlocal' }])
  codlocalorig: TgflocEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfites)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfites2)
  @JoinColumn([{ name: 'CODEXEC', referencedColumnName: 'codvend' }])
  codexec: TgfvenEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfites)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfites)
  @JoinColumn([{ name: 'CODPARCEXEC', referencedColumnName: 'codparc' }])
  codparcexec: TgfparEntity;

  @ManyToOne(() => TgfcavEntity, (tgfcavEntity) => tgfcavEntity.tgfites)
  @JoinColumn([{ name: 'CODCAV', referencedColumnName: 'codcav' }])
  codcav: TgfcavEntity;

  @OneToOne(() => TgfitsEntity, (tgfitsEntity) => tgfitsEntity.tgfite)
  tgfits: TgfitsEntity;

  @OneToMany(() => TgflppEntity, (tgflppEntity) => tgflppEntity.tgfite)
  tgflpps: TgflppEntity[];

  @OneToMany(() => TgflseEntity, (tgflseEntity) => tgflseEntity.tgfite)
  tgflses: TgflseEntity[];

  @OneToMany(() => TgfmcsiEntity, (tgfmcsiEntity) => tgfmcsiEntity.tgfite)
  tgfmcsis: TgfmcsiEntity[];

  @OneToMany(() => TgfmepiEntity, (tgfmepiEntity) => tgfmepiEntity.tgfite)
  tgfmepis: TgfmepiEntity[];

  @OneToMany(() => TgfpedEntity, (tgfpedEntity) => tgfpedEntity.tgfite)
  tgfpeds: TgfpedEntity[];

  @OneToMany(() => TgfperdaEntity, (tgfperdaEntity) => tgfperdaEntity.tgfite)
  tgfperdas: TgfperdaEntity[];

  @OneToMany(() => TgfplaiEntity, (tgfplaiEntity) => tgfplaiEntity.tgfite)
  tgfplais: TgfplaiEntity[];

  @OneToMany(() => TgpacoEntity, (tgpacoEntity) => tgpacoEntity.tgfite)
  tgpacos: TgpacoEntity[];

  @OneToMany(() => TgwdevEntity, (tgwdevEntity) => tgwdevEntity.tgfite)
  tgwdevs: TgwdevEntity[];

  @OneToOne(() => TgwenpEntity, (tgwenpEntity) => tgwenpEntity.tgfite)
  tgwenp: TgwenpEntity;

  @OneToMany(() => TgwhctEntity, (tgwhctEntity) => tgwhctEntity.tgfite)
  tgwhcts: TgwhctEntity[];

  @OneToMany(() => TgwiteEntity, (tgwiteEntity) => tgwiteEntity.tgfite)
  tgwites: TgwiteEntity[];

  @OneToMany(() => TgwiterEntity, (tgwiterEntity) => tgwiterEntity.tgfite)
  tgwiters: TgwiterEntity[];

  @OneToMany(() => TgwpxnEntity, (tgwpxnEntity) => tgwpxnEntity.tgfite)
  tgwpxns: TgwpxnEntity[];

  @OneToMany(() => TgwtrfEntity, (tgwtrfEntity) => tgwtrfEntity.tgfite)
  tgwtrfs: TgwtrfEntity[];

  @OneToOne(
    () => TpritePerdaEntity,
    (tpritePerdaEntity) => tpritePerdaEntity.tgfite,
  )
  tpritePerda: TpritePerdaEntity;
}
