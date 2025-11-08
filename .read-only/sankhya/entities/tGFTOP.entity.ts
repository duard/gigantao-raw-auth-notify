import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AstreqEntity } from './aSTREQ.entity';
import { TfpfinEntity } from './tFPFIN.entity';
import { TgfagdEntity } from './tGFAGD.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfclxEntity } from './tGFCLX.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfisuEntity } from './tGFISU.entity';
import { TgfmbcEntity } from './tGFMBC.entity';
import { TgfstmvtEntity } from './tGFSTMVT.entity';
import { TgfccoEntity } from './tGFCCO.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TgfcfoEntity } from './tGFCFO.entity';
import { TgfmonEntity } from './tGFMON.entity';
import { TgffopEntity } from './tGFFOP.entity';
import { TsiimpEntity } from './tSIIMP.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TgfconfcredEntity } from './tGFCONFCRED.entity';
import { TgflayEntity } from './tGFLAY.entity';

@Index('PK_TGFTOP', ['codtipoper', 'dhalter'], { unique: true })
@Index('TGFTOP_I_FAT_OS', ['tipfatserv', 'tipmov', 'codtipoper', 'dhalter'], {})
@Index('TGFTOP_I01', ['tipmov', 'descroper', 'codtipoper'], {})
@Index('TGFTOP_I02', ['atualest', 'atualestmp'], {})
@Index('TGFTOP_I03', ['atualultimacomp', 'atualultimavend'], {})
@Index('TGFTOP_I04', ['atualultimacomp'], {})
@Index('TGFTOP_I05', ['atualultimavend'], {})
@Index('TGFTOP_IPER', ['nunotamodelo'], {})
@Entity('TGFTOP', { schema: 'SANKHYA' })
export class TgftopEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;

  @Column('char', { name: 'DESCROPER', length: 40 })
  descroper: string;

  @Column('char', { name: 'TIPMOV', length: 1, default: () => "'P'" })
  tipmov: string;

  @Column('smallint', {
    name: 'ATUALFIN',
    nullable: true,
    default: () => '(0)',
  })
  atualfin: number | null;

  @Column('char', {
    name: 'TIPATUALFIN',
    nullable: true,
    length: 1,
    default: () => "'I'",
  })
  tipatualfin: string | null;

  @Column('char', { name: 'ATUALCOM', length: 1, default: () => "'N'" })
  atualcom: string;

  @Column('char', {
    name: 'ATUALEST',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  atualest: string | null;

  @Column('char', {
    name: 'PRECIFICA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  precifica: string | null;

  @Column('char', { name: 'CALCICMS', length: 1, default: () => "'D'" })
  calcicms: string;

  @Column('char', { name: 'BASENUMERACAO', length: 1, default: () => "'E'" })
  basenumeracao: string;

  @Column('char', { name: 'TIPONUMERACAO', length: 1, default: () => "'U'" })
  tiponumeracao: string;

  @Column('char', { name: 'TRAVAFIMIMP', length: 1, default: () => "'N'" })
  travafimimp: string;

  @Column('char', {
    name: 'EMITENOTA',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  emitenota: string | null;

  @Column('char', { name: 'VALIDADATA', length: 1, default: () => "'N'" })
  validadata: string;

  @Column('char', { name: 'NUMSOMAUT', length: 1, default: () => "'S'" })
  numsomaut: string;

  @Column('char', {
    name: 'DENTROESTADO',
    nullable: true,
    length: 1,
    default: () => "'D'",
  })
  dentroestado: string | null;

  @Column('char', {
    name: 'ATUALLIVFIS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  atuallivfis: string | null;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('char', {
    name: 'TIPICMS',
    nullable: true,
    length: 1,
    default: () => "'3'",
  })
  tipicms: string | null;

  @Column('char', {
    name: 'TIPIPI',
    nullable: true,
    length: 1,
    default: () => "'3'",
  })
  tipipi: string | null;

  @Column('char', { name: 'ARMAZENAGEM', nullable: true, length: 1 })
  armazenagem: string | null;

  @Column('char', { name: 'ATUALCTB', length: 1, default: () => "'N'" })
  atualctb: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', {
    name: 'ATUALIZARATEIO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  atualizarateio: string | null;

  @Column('char', { name: 'PENDENTE', length: 1, default: () => "'N'" })
  pendente: string;

  @Column('char', { name: 'IMPNOTAADICIONAL', length: 1, default: () => "'N'" })
  impnotaadicional: string;

  @Column('char', { name: 'EMITEBOLETA', length: 1, default: () => "'S'" })
  emiteboleta: string;

  @Column('char', { name: 'EXIGETRANSP', length: 1, default: () => "'N'" })
  exigetransp: string;

  @Column('char', { name: 'VALNUM', length: 1, default: () => "'N'" })
  valnum: string;

  @Column('char', { name: 'ALTNFCONF', length: 1, default: () => "'N'" })
  altnfconf: string;

  @Column('char', {
    name: 'USARPRECOCUSTO',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  usarprecocusto: string | null;

  @Column('char', { name: 'EXECITE', length: 1, default: () => "'N'" })
  execite: string;

  @Column('char', { name: 'VENDITE', length: 1, default: () => "'N'" })
  vendite: string;

  @Column('char', { name: 'ATUALLIVISS', length: 1, default: () => "'N'" })
  atualliviss: string;

  @Column('char', { name: 'EXPTES', length: 1, default: () => "'N'" })
  exptes: string;

  @Column('smallint', { name: 'EXPGRS', default: () => '(0)' })
  expgrs: number;

  @Column('char', {
    name: 'EXIGECOTACAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  exigecotacao: string | null;

  @Column('char', {
    name: 'EXPORTA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  exporta: string | null;

  @Column('char', {
    name: 'CUPOMFISCAL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  cupomfiscal: string | null;

  @Column('char', {
    name: 'SOMASUBST',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  somasubst: string | null;

  @Column('char', {
    name: 'CALCDIFICMS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  calcdificms: string | null;

  @Column('smallint', { name: 'CODTIPOPERDESTINO', default: () => '(0)' })
  codtipoperdestino: number;

  @Column('char', { name: 'TEMIPI', length: 1, default: () => "'S'" })
  temipi: string;

  @Column('char', { name: 'TEMICMS', length: 1, default: () => "'S'" })
  temicms: string;

  @Column('char', { name: 'TEMPIS', length: 1, default: () => "'S'" })
  tempis: string;

  @Column('char', { name: 'TEMCOFINS', length: 1, default: () => "'S'" })
  temcofins: string;

  @Column('char', { name: 'EXIGECONF', length: 1, default: () => "'N'" })
  exigeconf: string;

  @Column('smallint', { name: 'ATUALESTMP', nullable: true })
  atualestmp: number | null;

  @Column('char', { name: 'ATUALPRECOFAT', length: 1, default: () => "'N'" })
  atualprecofat: string;

  @Column('char', { name: 'VALIDAATRASO', length: 1, default: () => "'V'" })
  validaatraso: string;

  @Column('char', { name: 'VALIDAAGRUPMIN', length: 1, default: () => "'S'" })
  validaagrupmin: string;

  @Column('smallint', { name: 'CODUSU', nullable: true, default: () => '(0)' })
  codusu: number | null;

  @Column('char', { name: 'COMPLEMENTO', length: 1, default: () => "'N'" })
  complemento: string;

  @Column('int', { name: 'CODMODDOC', default: () => '(1)' })
  codmoddoc: number;

  @Column('char', { name: 'TEMCSL', length: 1, default: () => "'N'" })
  temcsl: string;

  @Column('char', {
    name: 'EXIGELIB',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  exigelib: string | null;

  @Column('char', { name: 'ATUALBEM', length: 1, default: () => "'N'" })
  atualbem: string;

  @Column('char', { name: 'INFCONTRATO', length: 1, default: () => "'O'" })
  infcontrato: string;

  @Column('char', { name: 'USOPRODSEPARACAO', length: 1, default: () => "' '" })
  usoprodseparacao: string;

  @Column('char', {
    name: 'ADIARATUALEST',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adiaratualest: string | null;

  @Column('smallint', {
    name: 'CODTIPOPERSEPARACAO',
    nullable: true,
    default: () => '(0)',
  })
  codtipoperseparacao: number | null;

  @Column('char', {
    name: 'IPIPROPFRETE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ipipropfrete: string | null;

  @Column('char', {
    name: 'IPIPROPSEG',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ipipropseg: string | null;

  @Column('char', {
    name: 'IPIPROPDESTAQUE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ipipropdestaque: string | null;

  @Column('char', {
    name: 'IPIPROPEMBALAGEM',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ipipropembalagem: string | null;

  @Column('char', {
    name: 'IPIPROPJURO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ipipropjuro: string | null;

  @Column('char', {
    name: 'ICMSPROPFRETE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  icmspropfrete: string | null;

  @Column('char', {
    name: 'ICMSPROPSEG',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  icmspropseg: string | null;

  @Column('char', {
    name: 'ICMSPROPDESTAQUE',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  icmspropdestaque: string | null;

  @Column('char', {
    name: 'ICMSPROPEMBALAGEM',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  icmspropembalagem: string | null;

  @Column('char', {
    name: 'ICMSPROPJURO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  icmspropjuro: string | null;

  @Column('char', {
    name: 'STPROPFRETE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  stpropfrete: string | null;

  @Column('char', {
    name: 'STPROPSEG',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  stpropseg: string | null;

  @Column('char', {
    name: 'STPROPDESTAQUE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  stpropdestaque: string | null;

  @Column('char', {
    name: 'STPROPEMBALAGEM',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  stpropembalagem: string | null;

  @Column('char', {
    name: 'STPROPJURO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  stpropjuro: string | null;

  @Column('char', { name: 'RATAUTPROD', length: 1, default: () => "'N'" })
  ratautprod: string;

  @Column('char', { name: 'TIPIVASUBST', nullable: true, length: 1 })
  tipivasubst: string | null;

  @Column('smallint', { name: 'GOLSINAL', default: () => '(0)' })
  golsinal: number;

  @Column('char', { name: 'CONSIGNACAO', length: 1, default: () => "'N'" })
  consignacao: string;

  @Column('char', { name: 'BONIFICACAO', length: 1, default: () => "'N'" })
  bonificacao: string;

  @Column('char', { name: 'STPROPFRETEEXT', length: 1, default: () => "'N'" })
  stpropfreteext: string;

  @Column('money', { name: 'VLRMINAP', default: () => '(0)' })
  vlrminap: number;

  @Column('char', { name: 'PRODREP', nullable: true, length: 1 })
  prodrep: string | null;

  @Column('smallint', { name: 'GOLMPSINAL', default: () => '(0)' })
  golmpsinal: number;

  @Column('smallint', { name: 'GOLDEV', default: () => '(1)' })
  goldev: number;

  @Column('char', { name: 'SOMARIPI', length: 1, default: () => "'S'" })
  somaripi: string;

  @Column('char', { name: 'EXIGELAUDO', length: 1, default: () => "'N'" })
  exigelaudo: string;

  @Column('char', { name: 'VALIDAMEDIANEGOC', length: 1, default: () => "'N'" })
  validamedianegoc: string;

  @Column('char', { name: 'TEMFUNRURAL', length: 1, default: () => "'S'" })
  temfunrural: string;

  @Column('char', { name: 'IMPNAOCONF', length: 1, default: () => "'N'" })
  impnaoconf: string;

  @Column('char', { name: 'IPIINCICMS', length: 1, default: () => "'A'" })
  ipiincicms: string;

  @Column('char', { name: 'CLASSIFICMS', length: 1, default: () => "'A'" })
  classificms: string;

  @Column('char', { name: 'OC', length: 1, default: () => "'A'" })
  oc: string;

  @Column('char', { name: 'FATESTCONF', length: 1, default: () => "'N'" })
  fatestconf: string;

  @Column('char', { name: 'SOLCOMPRA', length: 1, default: () => "'N'" })
  solcompra: string;

  @Column('char', {
    name: 'EDITANALISERENTAB',
    length: 1,
    default: () => "'N'",
  })
  editanaliserentab: string;

  @Column('char', { name: 'EXIGEGAR', length: 1, default: () => "'N'" })
  exigegar: string;

  @Column('char', { name: 'TIPFATSERV', length: 1, default: () => "'U'" })
  tipfatserv: string;

  @Column('char', { name: 'TEMIRF', length: 1, default: () => "'S'" })
  temirf: string;

  @Column('char', {
    name: 'BASEICMSFRETECALCST',
    length: 1,
    default: () => "'N'",
  })
  baseicmsfretecalcst: string;

  @Column('char', { name: 'USARCONFCEGA', length: 1, default: () => "'N'" })
  usarconfcega: string;

  @Column('char', { name: 'EXIGEDTVAL', length: 1, default: () => "'N'" })
  exigedtval: string;

  @Column('char', { name: 'EXIGEPEDFRET', length: 1, default: () => "'N'" })
  exigepedfret: string;

  @Column('char', { name: 'PEDFRETE', length: 1, default: () => "'N'" })
  pedfrete: string;

  @Column('char', { name: 'ATUALCOMOS', length: 1, default: () => "'N'" })
  atualcomos: string;

  @Column('char', { name: 'CODMODDOCISS', nullable: true, length: 2 })
  codmoddociss: string | null;

  @Column('int', { name: 'CODCFPS', default: () => '(0)' })
  codcfps: number;

  @Column('char', { name: 'OBTERVLRMOEDAFAT', length: 1, default: () => "'N'" })
  obtervlrmoedafat: string;

  @Column('char', { name: 'EXIGANALITENS', length: 1, default: () => "'N'" })
  exiganalitens: string;

  @Column('char', { name: 'ATUALESTTERC', length: 1, default: () => "'N'" })
  atualestterc: string;

  @Column('char', { name: 'TEMISS', length: 1, default: () => "'S'" })
  temiss: string;

  @Column('char', { name: 'BUSCMPTERC', length: 1, default: () => "'N'" })
  buscmpterc: string;

  @Column('char', { name: 'ATUALFINTERC', length: 1, default: () => "'S'" })
  atualfinterc: string;

  @Column('char', { name: 'ATUALULTIMACOMP', length: 1, default: () => "'N'" })
  atualultimacomp: string;

  @Column('char', { name: 'ATUALULTIMAVEND', length: 1, default: () => "'N'" })
  atualultimavend: string;

  @Column('smallint', { name: 'ANALISEGIRO', default: () => '(0)' })
  analisegiro: number;

  @Column('char', { name: 'GERAGNRE', length: 1, default: () => "'N'" })
  geragnre: string;

  @Column('char', { name: 'ATUALACDC', length: 1, default: () => "'N'" })
  atualacdc: string;

  @Column('char', { name: 'IPIEMBUT', length: 1, default: () => "'N'" })
  ipiembut: string;

  @Column('char', { name: 'UTILIZAWMS', length: 1, default: () => "'N'" })
  utilizawms: string;

  @Column('char', { name: 'NFE', nullable: true, length: 1 })
  nfe: string | null;

  @Column('smallint', { name: 'CSTIPIENT', nullable: true })
  cstipient: number | null;

  @Column('smallint', { name: 'CSTIPISAI', nullable: true })
  cstipisai: number | null;

  @Column('char', { name: 'PODEFIXAR', length: 1, default: () => "'N'" })
  podefixar: string;

  @Column('char', { name: 'PODETRANSFENT', length: 1, default: () => "'N'" })
  podetransfent: string;

  @Column('char', { name: 'REFNFE', length: 1, default: () => "'N'" })
  refnfe: string;

  @Column('char', {
    name: 'VALEST',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  valest: string | null;

  @Column('char', { name: 'INTEGSERCON', length: 1, default: () => "'N'" })
  integsercon: string;

  @Column('char', { name: 'EXIGELIBSEMPRE', length: 1, default: () => "'N'" })
  exigelibsempre: string;

  @Column('char', { name: 'ENVIARWMSCONF', length: 1, default: () => "'N'" })
  enviarwmsconf: string;

  @Column('char', { name: 'TIPATUALWMS', length: 1, default: () => "'E'" })
  tipatualwms: string;

  @Column('char', { name: 'EXIGEAGENDAWMS', length: 1, default: () => "'N'" })
  exigeagendawms: string;

  @Column('char', { name: 'ATUALDATRECWMS', length: 1, default: () => "'N'" })
  atualdatrecwms: string;

  @Column('char', { name: 'TEMFINORIGEM', length: 1, default: () => "'N'" })
  temfinorigem: string;

  @Column('char', { name: 'AUTDIGITAL', length: 1, default: () => "'N'" })
  autdigital: string;

  @Column('char', { name: 'MPNUMAUTLOTE', length: 1, default: () => "'N'" })
  mpnumautlote: string;

  @Column('char', { name: 'SOMARPISST', length: 1, default: () => "'S'" })
  somarpisst: string;

  @Column('char', { name: 'SOMARCOFINSST', length: 1, default: () => "'S'" })
  somarcofinsst: string;

  @Column('char', { name: 'PISPROPFRETE', length: 1, default: () => "'N'" })
  pispropfrete: string;

  @Column('char', { name: 'PISPROPSEG', length: 1, default: () => "'N'" })
  pispropseg: string;

  @Column('char', { name: 'PISPROPDESTAQUE', length: 1, default: () => "'N'" })
  pispropdestaque: string;

  @Column('char', { name: 'PISPROPEMBALAGEM', length: 1, default: () => "'N'" })
  pispropembalagem: string;

  @Column('char', { name: 'PISPROPJURO', length: 1, default: () => "'S'" })
  pispropjuro: string;

  @Column('char', { name: 'PISSTPROPFRETE', length: 1, default: () => "'N'" })
  pisstpropfrete: string;

  @Column('char', { name: 'PISSTPROPSEG', length: 1, default: () => "'N'" })
  pisstpropseg: string;

  @Column('char', {
    name: 'PISSTPROPDESTAQUE',
    length: 1,
    default: () => "'N'",
  })
  pisstpropdestaque: string;

  @Column('char', {
    name: 'PISSTPROPEMBALAGEM',
    length: 1,
    default: () => "'N'",
  })
  pisstpropembalagem: string;

  @Column('char', { name: 'PISSTPROPJURO', length: 1, default: () => "'S'" })
  pisstpropjuro: string;

  @Column('char', { name: 'COFINSPROPFRETE', length: 1, default: () => "'N'" })
  cofinspropfrete: string;

  @Column('char', { name: 'COFINSPROPSEG', length: 1, default: () => "'N'" })
  cofinspropseg: string;

  @Column('char', {
    name: 'COFINSPROPDESTAQUE',
    length: 1,
    default: () => "'N'",
  })
  cofinspropdestaque: string;

  @Column('char', {
    name: 'COFINSPROPEMBALAGEM',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  cofinspropembalagem: string | null;

  @Column('char', {
    name: 'COFINSPROPJURO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  cofinspropjuro: string | null;

  @Column('char', {
    name: 'COFINSSTPROPFRETE',
    length: 1,
    default: () => "'N'",
  })
  cofinsstpropfrete: string;

  @Column('char', { name: 'COFINSSTPROPSEG', length: 1, default: () => "'N'" })
  cofinsstpropseg: string;

  @Column('char', {
    name: 'COFINSSTPROPDESTAQUE',
    length: 1,
    default: () => "'N'",
  })
  cofinsstpropdestaque: string;

  @Column('char', {
    name: 'COFINSSTPROPEMBALAGEM',
    length: 1,
    default: () => "'N'",
  })
  cofinsstpropembalagem: string;

  @Column('char', { name: 'COFINSSTPROPJURO', length: 1, default: () => "'S'" })
  cofinsstpropjuro: string;

  @Column('smallint', { name: 'ATUALTRANSG', default: () => '(0)' })
  atualtransg: number;

  @Column('char', { name: 'VDADIRCONSUM', nullable: true, length: 1 })
  vdadirconsum: string | null;

  @Column('float', { name: 'VLRBASEPGTO', precision: 53, default: () => '(0)' })
  vlrbasepgto: number;

  @Column('char', { name: 'PODEPESAGEM', length: 1, default: () => "'N'" })
  podepesagem: string;

  @Column('char', { name: 'EMPFUNCDIF', length: 1, default: () => "'N'" })
  empfuncdif: string;

  @Column('varchar', { name: 'FATENTPROD', length: 1, default: () => "'N'" })
  fatentprod: string;

  @Column('varchar', { name: 'DIGINFIMPORTA', length: 1, default: () => "'N'" })
  diginfimporta: string;

  @Column('varchar', {
    name: 'NFESEMDTENTSAI',
    length: 1,
    default: () => "'N'",
  })
  nfesemdtentsai: string;

  @Column('smallint', { name: 'ATUALINDENIZ', default: () => '(0)' })
  atualindeniz: number;

  @Column('varchar', { name: 'TEMREAICMS', length: 1, default: () => "'N'" })
  temreaicms: string;

  @Column('varchar', { name: 'AVISARCOMP', length: 2, default: () => "'N'" })
  avisarcomp: string;

  @Column('varchar', { name: 'GERARTAGJNFE', length: 1, default: () => "'N'" })
  gerartagjnfe: string;

  @Column('varchar', { name: 'CONTLAUDOSINT', length: 1, default: () => "'N'" })
  contlaudosint: string;

  @Column('varchar', { name: 'NFSE', nullable: true, length: 1 })
  nfse: string | null;

  @Column('varchar', { name: 'CODNATOPERISS', nullable: true, length: 2 })
  codnatoperiss: string | null;

  @Column('varchar', { name: 'CONFIMPOSTO', length: 1, default: () => "'N'" })
  confimposto: string;

  @Column('varchar', { name: 'CONFCFOP', length: 1, default: () => "'N'" })
  confcfop: string;

  @Column('varchar', { name: 'NFSEPORNAT', length: 1, default: () => "'N'" })
  nfsepornat: string;

  @Column('smallint', { name: 'CODTIPOPERPENRET', default: () => '(0)' })
  codtipoperpenret: number;

  @Column('smallint', { name: 'CODTIPOPERDENEG', default: () => '(0)' })
  codtipoperdeneg: number;

  @Column('varchar', { name: 'COPIARLIBER', length: 1, default: () => "'S'" })
  copiarliber: string;

  @Column('varchar', { name: 'NAOINCCONF', length: 1, default: () => "'N'" })
  naoincconf: string;

  @Column('varchar', { name: 'PESAITEM', length: 1, default: () => "'N'" })
  pesaitem: string;

  @Column('varchar', { name: 'CAMINHOEDI', nullable: true, length: 255 })
  caminhoedi: string | null;

  @Column('int', { name: 'CODREMEDI', nullable: true })
  codremedi: number | null;

  @Column('smallint', { name: 'CODTIPOPERREM', default: () => '(0)' })
  codtipoperrem: number;

  @Column('varchar', { name: 'GERARPARCDEST', length: 1, default: () => "'N'" })
  gerarparcdest: string;

  @Column('int', { name: 'NUNOTAMODELO', nullable: true })
  nunotamodelo: number | null;

  @Column('varchar', { name: 'PROVISENTREGA', length: 1, default: () => "'N'" })
  provisentrega: string;

  @Column('varchar', { name: 'TEMII', length: 1, default: () => "'N'" })
  temii: string;

  @Column('varchar', { name: 'DIGPUREZA', length: 1, default: () => "'N'" })
  digpureza: string;

  @Column('varchar', { name: 'LAUDOITEM', length: 1, default: () => "'N'" })
  laudoitem: string;

  @Column('varchar', { name: 'TIPOIMPKIT', nullable: true, length: 1 })
  tipoimpkit: string | null;

  @Column('varchar', { name: 'TRANSFWMS', length: 1, default: () => "'O'" })
  transfwms: string;

  @Column('varchar', { name: 'TIPMOVBEMSPED', nullable: true, length: 2 })
  tipmovbemsped: string | null;

  @Column('varchar', {
    name: 'PODEAJUSTARORIGPRODWMS',
    length: 1,
    default: () => "'N'",
  })
  podeajustarorigprodwms: string;

  @Column('varchar', { name: 'TEMVAVTCON', length: 1, default: () => "'N'" })
  temvavtcon: string;

  @Column('varchar', { name: 'STATUSLOTE', length: 1, default: () => "'N'" })
  statuslote: string;

  @Column('varchar', {
    name: 'STATUSBAIXAEST',
    length: 1,
    default: () => "'N'",
  })
  statusbaixaest: string;

  @Column('varchar', { name: 'BLOQESTVENC', length: 1, default: () => "'N'" })
  bloqestvenc: string;

  @Column('varchar', {
    name: 'VALVCTLAUDOEST',
    length: 1,
    default: () => "'N'",
  })
  valvctlaudoest: string;

  @Column('varchar', {
    name: 'GRUPO',
    nullable: true,
    length: 15,
    default: () => "'SEM GRUPO'",
  })
  grupo: string | null;

  @Column('varchar', { name: 'GERABONPRE', length: 1, default: () => "'N'" })
  gerabonpre: string;

  @Column('varchar', {
    name: 'FATCONTPORPESO',
    length: 1,
    default: () => "'N'",
  })
  fatcontporpeso: string;

  @Column('varchar', { name: 'TEMINDEX', length: 1, default: () => "'N'" })
  temindex: string;

  @Column('varchar', { name: 'NATOPERSPED', nullable: true, length: 60 })
  natopersped: string | null;

  @Column('char', { name: 'VALTOTNOTAGERLIV', length: 1, default: () => "'S'" })
  valtotnotagerliv: string;

  @Column('char', { name: 'IMPETIQCONFIR', length: 1, default: () => "'N'" })
  impetiqconfir: string;

  @Column('varchar', { name: 'TIPCALCEAN13', length: 1, default: () => "'N'" })
  tipcalcean13: string;

  @Column('varchar', {
    name: 'VALTIPNEGOCCONF',
    length: 1,
    default: () => "'N'",
  })
  valtipnegocconf: string;

  @Column('varchar', { name: 'NATBCCRED', nullable: true, length: 2 })
  natbccred: string | null;

  @Column('varchar', { name: 'INDNATFRT', nullable: true, length: 1 })
  indnatfrt: string | null;

  @Column('char', { name: 'LIGORIGORIG', length: 1, default: () => "'N'" })
  ligorigorig: string;

  @Column('varchar', { name: 'VALTBCOMPCR', length: 1, default: () => "'N'" })
  valtbcompcr: string;

  @Column('char', { name: 'VALCST', length: 1, default: () => "'N'" })
  valcst: string;

  @Column('char', { name: 'VALPRZMEDCPA', length: 1, default: () => "'N'" })
  valprzmedcpa: string;

  @Column('smallint', { name: 'DIASTOLPRZMED', nullable: true })
  diastolprzmed: number | null;

  @Column('char', { name: 'QTDPENDCALC', length: 1, default: () => "'N'" })
  qtdpendcalc: string;

  @Column('char', { name: 'QTDPENDVAL', length: 1, default: () => "'N'" })
  qtdpendval: string;

  @Column('float', { name: 'PERCTOLVARQTD', nullable: true, precision: 53 })
  perctolvarqtd: number | null;

  @Column('char', { name: 'USACUSMEDBASEST', length: 1, default: () => "'N'" })
  usacusmedbasest: string;

  @Column('char', { name: 'SUGERELOCALPARC', length: 1, default: () => "'N'" })
  sugerelocalparc: string;

  @Column('char', { name: 'EMITELAUDOLOTE', length: 1, default: () => "'N'" })
  emitelaudolote: string;

  @Column('char', { name: 'ENVGARANTIA', length: 1, default: () => "'N'" })
  envgarantia: string;

  @Column('char', { name: 'SEPBALCAO', length: 1, default: () => "'N'" })
  sepbalcao: string;

  @Column('char', { name: 'ATUALTRANSPNFOC', length: 1, default: () => "'N'" })
  atualtranspnfoc: string;

  @Column('char', {
    name: 'VALORICMSFRETECALCST',
    length: 1,
    default: () => "'S'",
  })
  valoricmsfretecalcst: string;

  @Column('char', {
    name: 'USAALIQNATRATF100',
    length: 1,
    default: () => "'N'",
  })
  usaaliqnatratf100: string;

  @Column('char', { name: 'GERAPLANPROD', length: 1, default: () => "'N'" })
  geraplanprod: string;

  @Column('char', { name: 'COPIADTPREVORIG', length: 1, default: () => "'N'" })
  copiadtprevorig: string;

  @Column('char', {
    name: 'AGRUPASERVFAT',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  agrupaservfat: string | null;

  @Column('char', { name: 'GERARTRANSF', length: 1, default: () => "'N'" })
  gerartransf: string;

  @Column('char', { name: 'RESERVASEMLOTE', length: 1, default: () => "'N'" })
  reservasemlote: string;

  @Column('char', { name: 'AGRUPAPRODNFE', length: 1, default: () => "'N'" })
  agrupaprodnfe: string;

  @Column('char', {
    name: 'MARCARNAOPENDENTE',
    length: 1,
    default: () => "'N'",
  })
  marcarnaopendente: string;

  @Column('char', { name: 'GERAAMOSTRALAUDO', length: 1, default: () => "'N'" })
  geraamostralaudo: string;

  @Column('char', { name: 'EMITEREGVOL', length: 1, default: () => "'N'" })
  emiteregvol: string;

  @Column('char', {
    name: 'PARTICIPACALCFRETE',
    length: 1,
    default: () => "'S'",
  })
  participacalcfrete: string;

  @Column('char', { name: 'INTEGRAEVENTO', length: 1, default: () => "'N'" })
  integraevento: string;

  @Column('char', { name: 'TRANSFCBGLOBAL', length: 1, default: () => "'N'" })
  transfcbglobal: string;

  @Column('char', { name: 'REMESSAFUTURA', length: 1, default: () => "'N'" })
  remessafutura: string;

  @Column('char', { name: 'PRODUETLOC', length: 1, default: () => "'N'" })
  produetloc: string;

  @Column('int', { name: 'CODCFO_COMBUST_LUBRIF', default: () => '(0)' })
  codcfoCombustLubrif: number;

  @Column('char', { name: 'ACEITAFATACIMA', length: 1, default: () => "'N'" })
  aceitafatacima: string;

  @Column('char', { name: 'DESCPROMQTDGDP', length: 1, default: () => "'N'" })
  descpromqtdgdp: string;

  @Column('char', { name: 'REGLOGIMPRESSAO', length: 1, default: () => "'N'" })
  reglogimpressao: string;

  @Column('char', { name: 'EXIGRECAGRO', length: 1, default: () => "'N'" })
  exigrecagro: string;

  @Column('smallint', { name: 'CODTIPOPERPRODUZAUT', nullable: true })
  codtipoperproduzaut: number | null;

  @Column('char', { name: 'VALESTMAXIMO', length: 1, default: () => "'N'" })
  valestmaximo: string;

  @Column('char', { name: 'GERAR1400SPED', length: 1, default: () => "'N'" })
  gerar1400Sped: string;

  @Column('char', { name: 'NFEESTORNO', length: 1, default: () => "'N'" })
  nfeestorno: string;

  @Column('char', { name: 'VALVARIACVLRUNIT', length: 1, default: () => "'N'" })
  valvariacvlrunit: string;

  @Column('char', { name: 'PARTAUTEMBARQ', length: 1, default: () => "'N'" })
  partautembarq: string;

  @Column('char', { name: 'EXIGECALCFRETE', length: 1, default: () => "'N'" })
  exigecalcfrete: string;

  @Column('char', { name: 'GRAHISALTPED', length: 1, default: () => "'N'" })
  grahisaltped: string;

  @Column('char', { name: 'ALTITEMPARCFAT', length: 1, default: () => "'N'" })
  altitemparcfat: string;

  @Column('char', { name: 'GERAENDENTRNFE', length: 1, default: () => "'N'" })
  geraendentrnfe: string;

  @Column('char', { name: 'TIPALTDTVENC', length: 1, default: () => "'R'" })
  tipaltdtvenc: string;

  @Column('char', {
    name: 'DESCQTDGRUDESCPRO',
    length: 1,
    default: () => "'N'",
  })
  descqtdgrudescpro: string;

  @Column('varchar', { name: 'CAMGEREDICONF', nullable: true, length: 80 })
  camgerediconf: string | null;

  @Column('smallint', { name: 'CAT1799SPCCO', default: () => '(-1)' })
  cat1799Spcco: number;

  @Column('char', { name: 'VALSITCADSEFAZ', length: 1, default: () => "'N'" })
  valsitcadsefaz: string;

  @Column('float', { name: 'PERCMINBASEINSS', nullable: true, precision: 53 })
  percminbaseinss: number | null;

  @Column('char', {
    name: 'PERMCONFPARCIALWMS',
    length: 1,
    default: () => "'N'",
  })
  permconfparcialwms: string;

  @Column('char', { name: 'ENVWMSCONFIRMADA', length: 1, default: () => "'P'" })
  envwmsconfirmada: string;

  @Column('char', { name: 'INDPRESNFCE', length: 1, default: () => "'0'" })
  indpresnfce: string;

  @Column('char', { name: 'AJUSTAVP', length: 1, default: () => "'N'" })
  ajustavp: string;

  @Column('smallint', { name: 'TOPBACKORDER', nullable: true })
  topbackorder: number | null;

  @Column('smallint', { name: 'TOPATENDIMENTO', nullable: true })
  topatendimento: number | null;

  @Column('smallint', { name: 'CONFVALEVENT58', default: () => '(0)' })
  confvalevent58: number;

  @Column('smallint', { name: 'CONFVALEVENT68', default: () => '(0)' })
  confvalevent68: number;

  @Column('float', { name: 'PERCTOLVARVLRUNIT', nullable: true, precision: 53 })
  perctolvarvlrunit: number | null;

  @Column('char', {
    name: 'HABSUGVEND',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  habsugvend: string | null;

  @Column('char', { name: 'OPERCOMMOEDA', length: 1, default: () => "'N'" })
  opercommoeda: string;

  @Column('char', { name: 'CTE', nullable: true, length: 1 })
  cte: string | null;

  @Column('smallint', { name: 'TIPSERVCTE', nullable: true })
  tipservcte: number | null;

  @Column('smallint', { name: 'CODTOPDENEGCTE', nullable: true })
  codtopdenegcte: number | null;

  @Column('char', { name: 'TIPOCTE', nullable: true, length: 1 })
  tipocte: string | null;

  @Column('char', { name: 'APLICLEITRANSP', length: 1, default: () => "'P'" })
  aplicleitransp: string;

  @Column('char', { name: 'VALIDARUNMIN', length: 1, default: () => "'N'" })
  validarunmin: string;

  @Column('char', { name: 'VALEVENTO71', length: 1, default: () => "'N'" })
  valevento71: string;

  @Column('char', { name: 'ARREDQTDUNALT', length: 1, default: () => "'N'" })
  arredqtdunalt: string;

  @Column('smallint', { name: 'CODENQIPIENT', nullable: true })
  codenqipient: number | null;

  @Column('smallint', { name: 'CODENQIPISAI', nullable: true })
  codenqipisai: number | null;

  @Column('char', { name: 'CALCDIFALPART', length: 1, default: () => "'N'" })
  calcdifalpart: string;

  @Column('char', { name: 'USATABALTEMP', nullable: true, length: 1 })
  usatabaltemp: string | null;

  @Column('char', {
    name: 'PERMFINMENORVLRNOTA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  permfinmenorvlrnota: string | null;

  @Column('char', { name: 'FATFORAPLANENT', length: 1, default: () => "'N'" })
  fatforaplanent: string;

  @Column('smallint', { name: 'NATEFDCONTM410M810', nullable: true })
  natefdcontm410M810: number | null;

  @Column('char', { name: 'CALCICMSCOMPL', length: 1, default: () => "'N'" })
  calcicmscompl: string;

  @Column('char', { name: 'INDTERC', length: 1, default: () => "'N'" })
  indterc: string;

  @Column('varchar', { name: 'EXIGECONFIRMACAOMDE', nullable: true, length: 1 })
  exigeconfirmacaomde: string | null;

  @Column('varchar', { name: 'DESCREMAIL', nullable: true, length: 40 })
  descremail: string | null;

  @Column('char', { name: 'MOVENDFLUTUANTE', length: 1, default: () => "'N'" })
  movendflutuante: string;

  @Column('varchar', { name: 'FORMRECISS', nullable: true, length: 2 })
  formreciss: string | null;

  @Column('char', { name: 'DESCONNFSE', length: 1, default: () => "'N'" })
  desconnfse: string;

  @Column('char', {
    name: 'USASERVTABIRFINSS',
    length: 1,
    default: () => "'N'",
  })
  usaservtabirfinss: string;

  @Column('char', { name: 'APLICTABIRFINSS', length: 1, default: () => "'N'" })
  aplictabirfinss: string;

  @Column('char', { name: 'ORCAMENTO', nullable: true, length: 1 })
  orcamento: string | null;

  @Column('char', { name: 'SIMULACAUTOFRETE', nullable: true, length: 1 })
  simulacautofrete: string | null;

  @Column('varchar', {
    name: 'DISTSTVLRUNITFAT',
    length: 1,
    default: () => "'N'",
  })
  diststvlrunitfat: string;

  @Column('char', {
    name: 'ICMSORIGESTPED',
    nullable: true,
    length: 1,
    default: () => 'NULL',
  })
  icmsorigestped: string | null;

  @Column('char', { name: 'CALCPESOCONFIRM', length: 1, default: () => "'N'" })
  calcpesoconfirm: string;

  @Column('char', { name: 'CALCFCPINT', length: 1, default: () => "'N'" })
  calcfcpint: string;

  @Column('varchar', { name: 'CONSAUXILIAR', nullable: true, length: 250 })
  consauxiliar: string | null;

  @Column('char', { name: 'INDTIPREC', length: 1, default: () => "'0'" })
  indtiprec: string;

  @Column('char', { name: 'EXIGEANALISECRED', nullable: true, length: 1 })
  exigeanalisecred: string | null;

  @Column('char', {
    name: 'IGNORARAGRUPMINDEV',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ignoraragrupmindev: string | null;

  @Column('char', { name: 'TIPMODALCTE', nullable: true, length: 1 })
  tipmodalcte: string | null;

  @Column('char', {
    name: 'USARECPARCIAL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usarecparcial: string | null;

  @Column('varchar', {
    name: 'GERADEMANDAMPS',
    length: 1,
    default: () => "'N'",
  })
  gerademandamps: string;

  @Column('char', { name: 'VALSITCADRF', length: 1, default: () => "'N'" })
  valsitcadrf: string;

  @Column('varchar', { name: 'SEMMOEDAFIN', length: 1, default: () => "'N'" })
  semmoedafin: string;

  @Column('varchar', { name: 'VLRLIQITEMNFE', nullable: true, length: 1 })
  vlrliqitemnfe: string | null;

  @Column('smallint', { name: 'CONSVLRREMRETIND', nullable: true })
  consvlrremretind: number | null;

  @Column('char', {
    name: 'SALVARCONFSEMPERG',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  salvarconfsemperg: string | null;

  @Column('char', { name: 'GERCORAPON', nullable: true, length: 1 })
  gercorapon: string | null;

  @Column('char', { name: 'SEMCREDIPIST', nullable: true, length: 1 })
  semcredipist: string | null;

  @Column('char', { name: 'REDICMSBCPISCONFINS', nullable: true, length: 1 })
  redicmsbcpisconfins: string | null;

  @Column('varchar', { name: 'DEVSEMDESTAQUEST', nullable: true, length: 1 })
  devsemdestaquest: string | null;

  @Column('varchar', { name: 'DEVSEMDESTAQUEIPI', nullable: true, length: 1 })
  devsemdestaqueipi: string | null;

  @Column('char', { name: 'DATARETROFAT', nullable: true, length: 1 })
  dataretrofat: string | null;

  @Column('char', {
    name: 'ESTOQUEMPTERCEIRO',
    length: 1,
    default: () => "'N'",
  })
  estoquempterceiro: string;

  @Column('char', { name: 'REDPISBCPISCOFINS', nullable: true, length: 1 })
  redpisbcpiscofins: string | null;

  @Column('char', { name: 'IGNORACOMPLITEM', nullable: true, length: 1 })
  ignoracomplitem: string | null;

  @Column('char', { name: 'PERMITECNAEDIFNOTA', nullable: true, length: 1 })
  permitecnaedifnota: string | null;

  @Column('smallint', { name: 'CODMODRO', nullable: true })
  codmodro: number | null;

  @Column('char', { name: 'OUTDESPSTEXTNOTA', nullable: true, length: 1 })
  outdespstextnota: string | null;

  @Column('varchar', { name: 'CODCONTARURAL', nullable: true, length: 3 })
  codcontarural: string | null;

  @Column('char', { name: 'DESCONSLCDPR', nullable: true, length: 1 })
  desconslcdpr: string | null;

  @Column('char', { name: 'IMPXMLMANTDESPACES', nullable: true, length: 1 })
  impxmlmantdespaces: string | null;

  @Column('varchar', { name: 'IGNOBSORIGREM', nullable: true, length: 1 })
  ignobsorigrem: string | null;

  @Column('char', { name: 'OPERACAOAMOSTRA', nullable: true, length: 1 })
  operacaoamostra: string | null;

  @Column('varchar', { name: 'DESCONSIDPEDXML', nullable: true, length: 1 })
  desconsidpedxml: string | null;

  @Column('char', { name: 'DEDFCPBCPISCOFINS', nullable: true, length: 1 })
  dedfcpbcpiscofins: string | null;

  @Column('varchar', {
    name: 'ATUALESTWMSTERC',
    length: 1,
    default: () => "'N'",
  })
  atualestwmsterc: string;

  @Column('varchar', { name: 'ARMTIPAPU', nullable: true, length: 1 })
  armtipapu: string | null;

  @Column('varchar', { name: 'DESCONSIDNFEORIGEM', nullable: true, length: 1 })
  desconsidnfeorigem: string | null;

  @Column('varchar', {
    name: 'TROCADEPOSITANTE',
    length: 1,
    default: () => "'S'",
  })
  trocadepositante: string;

  @Column('char', { name: 'CONFVLREVENT68', nullable: true, length: 1 })
  confvlrevent68: string | null;

  @Column('char', { name: 'CALCPISCFSFIN', nullable: true, length: 1 })
  calcpiscfsfin: string | null;

  @Column('int', { name: 'CODINTERM', nullable: true })
  codinterm: number | null;

  @Column('varchar', { name: 'INTERMED', nullable: true, length: 1 })
  intermed: string | null;

  @Column('char', { name: 'CALCSTFRTXTNOTPROP', nullable: true, length: 1 })
  calcstfrtxtnotprop: string | null;

  @Column('smallint', { name: 'TIPCOMPLCUST', nullable: true })
  tipcomplcust: number | null;

  @Column('char', { name: 'DESTOPADRCST1400', nullable: true, length: 1 })
  destopadrcst1400: string | null;

  @Column('char', { name: 'CALCFUSTTOP', nullable: true, length: 1 })
  calcfusttop: string | null;

  @Column('char', { name: 'CALCFUNTTELTOP', nullable: true, length: 1 })
  calcfuntteltop: string | null;

  @Column('char', { name: 'IGNORAMPPVPA', nullable: true, length: 1 })
  ignoramppvpa: string | null;

  @Column('varchar', { name: 'TIPATUALPNEU', nullable: true, length: 10 })
  tipatualpneu: string | null;

  @Column('varchar', { name: 'AVERBAR', length: 10, default: () => "'S'" })
  averbar: string;

  @Column('varchar', { name: 'GERACALLCENTER', nullable: true, length: 10 })
  geracallcenter: string | null;

  @Column('varchar', { name: 'MODDOCATM', nullable: true, length: 10 })
  moddocatm: string | null;

  @Column('char', { name: 'TOPPISCOFREDAQUIS', nullable: true, length: 1 })
  toppiscofredaquis: string | null;

  @Column('smallint', { name: 'NULAYOUTCVR', nullable: true })
  nulayoutcvr: number | null;

  @Column('char', { name: 'TOPAPI', length: 1, default: () => "'N'" })
  topapi: string;

  @Column('varchar', { name: 'REDSTBCPISCOFINS', nullable: true, length: 1 })
  redstbcpiscofins: string | null;

  @Column('char', { name: 'CONSTOPAPURSIMP', length: 1, default: () => "'N'" })
  constopapursimp: string;

  @Column('char', { name: 'IGNEXPAUTLOT', length: 1, default: () => "'N'" })
  ignexpautlot: string;

  @Column('varchar', { name: 'NUMPROCESSO', nullable: true, length: 50 })
  numprocesso: string | null;

  @Column('varchar', { name: 'AD_ATUALIZAREQ', nullable: true, length: 10 })
  adAtualizareq: string | null;

  @Column('char', {
    name: 'PERMDESTVBATPREBCUS',
    length: 1,
    default: () => "'N'",
  })
  permdestvbatprebcus: string;

  @Column('varchar', { name: 'GERINFOEFDPAG', nullable: true, length: 1 })
  gerinfoefdpag: string | null;

  @Column('char', {
    name: 'CONSNFERELCANCEFD',
    length: 1,
    default: () => "'N'",
  })
  consnferelcancefd: string;

  @Column('varchar', { name: 'CALCICMSREGTTS', nullable: true, length: 1 })
  calcicmsregtts: string | null;

  @Column('char', { name: 'RECBRUTACIAP', nullable: true, length: 1 })
  recbrutaciap: string | null;

  @Column('char', { name: 'VALDISPESTDEV', nullable: true, length: 1 })
  valdispestdev: string | null;

  @Column('char', { name: 'CALCFETHAB', nullable: true, length: 1 })
  calcfethab: string | null;

  @Column('char', { name: 'ATUSALDOCONT', nullable: true, length: 1 })
  atusaldocont: string | null;

  @Column('varchar', { name: 'DESCCSTBCPISCF', nullable: true, length: 50 })
  desccstbcpiscf: string | null;

  @Column('varchar', { name: 'AD_WPP_NUMERO', nullable: true, length: 100 })
  adWppNumero: string | null;

  @Column('char', { name: 'USAVENDAMAIS', nullable: true, length: 1 })
  usavendamais: string | null;

  @Column('varchar', { name: 'PERMTRANSGALPAO', nullable: true, length: 1 })
  permtransgalpao: string | null;

  @Column('varchar', { name: 'NFCOM', nullable: true, length: 1 })
  nfcom: string | null;

  @Column('varchar', { name: 'TIPOEMISSAONFCOM', nullable: true, length: 1 })
  tipoemissaonfcom: string | null;

  @Column('varchar', { name: 'TIPOEMISSAO', nullable: true, length: 1 })
  tipoemissao: string | null;

  @Column('char', { name: 'OPERESSACOMP', nullable: true, length: 1 })
  operessacomp: string | null;

  @OneToMany(() => AstreqEntity, (astreqEntity) => astreqEntity.tgftop)
  astreqs: AstreqEntity[];

  @OneToMany(() => TfpfinEntity, (tfpfinEntity) => tfpfinEntity.tgftop)
  tfpfins: TfpfinEntity[];

  @OneToMany(() => TgfagdEntity, (tgfagdEntity) => tgfagdEntity.tgftop)
  tgfagds: TgfagdEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgftop)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfclxEntity, (tgfclxEntity) => tgfclxEntity.tgftop)
  tgfclxes: TgfclxEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgftop)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgftop2)
  tgffins2: TgffinEntity[];

  @OneToMany(() => TgfisuEntity, (tgfisuEntity) => tgfisuEntity.tgftop)
  tgfisus: TgfisuEntity[];

  @OneToMany(() => TgfmbcEntity, (tgfmbcEntity) => tgfmbcEntity.tgftop)
  tgfmbcs: TgfmbcEntity[];

  @OneToMany(() => TgfstmvtEntity, (tgfstmvtEntity) => tgfstmvtEntity.tgftop)
  tgfstmvts: TgfstmvtEntity[];

  @ManyToOne(() => TgfccoEntity, (tgfccoEntity) => tgfccoEntity.tgftops)
  @JoinColumn([{ name: 'NUCCO', referencedColumnName: 'nucco' }])
  nucco: TgfccoEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgftops)
  @JoinColumn([{ name: 'CODLOCALIMPXML', referencedColumnName: 'codlocal' }])
  codlocalimpxml: TgflocEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgftops)
  @JoinColumn([{ name: 'CODCTACTBEFD', referencedColumnName: 'codctactb' }])
  codctactbefd: TcbplaEntity;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgftops)
  @JoinColumn([{ name: 'CODCFO_ENTRADA', referencedColumnName: 'codcfo' }])
  codcfoEntrada: TgfcfoEntity;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgftops2)
  @JoinColumn([{ name: 'CODCFO_ENTRADA_FORA', referencedColumnName: 'codcfo' }])
  codcfoEntradaFora: TgfcfoEntity;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgftops3)
  @JoinColumn([{ name: 'CODCFO_SAIDA_FORA', referencedColumnName: 'codcfo' }])
  codcfoSaidaFora: TgfcfoEntity;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgftops4)
  @JoinColumn([{ name: 'CODCFO_SAIDA', referencedColumnName: 'codcfo' }])
  codcfoSaida: TgfcfoEntity;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgftops5)
  @JoinColumn([{ name: 'CODCFO_TERC', referencedColumnName: 'codcfo' }])
  codcfoTerc: TgfcfoEntity;

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tgftops)
  @JoinColumn([{ name: 'CODMODCFECANC', referencedColumnName: 'codmodnf' }])
  codmodcfecanc: TgfmonEntity;

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tgftops2)
  @JoinColumn([{ name: 'CODMODNFSE', referencedColumnName: 'codmodnf' }])
  codmodnfse: TgfmonEntity;

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tgftops3)
  @JoinColumn([{ name: 'CODMODRPS', referencedColumnName: 'codmodnf' }])
  codmodrps: TgfmonEntity;

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tgftops4)
  @JoinColumn([{ name: 'CODMODNF', referencedColumnName: 'codmodnf' }])
  codmodnf: TgfmonEntity;

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tgftops5)
  @JoinColumn([{ name: 'CODMODDAD', referencedColumnName: 'codmodnf' }])
  codmoddad: TgfmonEntity;

  @ManyToOne(() => TgffopEntity, (tgffopEntity) => tgffopEntity.tgftops)
  @JoinColumn([{ name: 'NUFOP', referencedColumnName: 'nufop' }])
  nufop: TgffopEntity;

  @ManyToOne(() => TsiimpEntity, (tsiimpEntity) => tsiimpEntity.tgftops)
  @JoinColumn([{ name: 'MODETQIMPCAF', referencedColumnName: 'codrel' }])
  modetqimpcaf: TsiimpEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgftops)
  @JoinColumn([{ name: 'NUNOTAMODELO', referencedColumnName: 'nunota' }])
  nunotamodelo2: TgfcabEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tgftops)
  @JoinColumn([{ name: 'CODMOEDAVP', referencedColumnName: 'codmoeda' }])
  codmoedavp: TsimoeEntity;

  @ManyToOne(
    () => TgfconfcredEntity,
    (tgfconfcredEntity) => tgfconfcredEntity.tgftops,
  )
  @JoinColumn([{ name: 'CONFCOMPCRED', referencedColumnName: 'codconfcred' }])
  confcompcred: TgfconfcredEntity;

  @ManyToOne(() => TgflayEntity, (tgflayEntity) => tgflayEntity.tgftops)
  @JoinColumn([{ name: 'NULAYOUT', referencedColumnName: 'nulayout' }])
  nulayout: TgflayEntity;
}
