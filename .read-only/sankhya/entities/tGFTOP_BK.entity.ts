import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFTOP_bk', ['codtipoper', 'dhalter'], { unique: true })
@Entity('TGFTOP_BK', { schema: 'SANKHYA' })
export class TgftopBkEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;

  @Column('char', { name: 'DESCROPER', length: 40 })
  descroper: string;

  @Column('char', { name: 'TIPMOV', length: 1 })
  tipmov: string;

  @Column('smallint', { name: 'ATUALFIN', nullable: true })
  atualfin: number | null;

  @Column('char', { name: 'TIPATUALFIN', nullable: true, length: 1 })
  tipatualfin: string | null;

  @Column('char', { name: 'ATUALCOM', length: 1 })
  atualcom: string;

  @Column('char', { name: 'ATUALEST', nullable: true, length: 1 })
  atualest: string | null;

  @Column('char', { name: 'PRECIFICA', nullable: true, length: 1 })
  precifica: string | null;

  @Column('char', { name: 'CALCICMS', length: 1 })
  calcicms: string;

  @Column('char', { name: 'BASENUMERACAO', length: 1 })
  basenumeracao: string;

  @Column('char', { name: 'TIPONUMERACAO', length: 1 })
  tiponumeracao: string;

  @Column('char', { name: 'TRAVAFIMIMP', length: 1 })
  travafimimp: string;

  @Column('char', { name: 'EMITENOTA', nullable: true, length: 1 })
  emitenota: string | null;

  @Column('char', { name: 'VALIDADATA', length: 1 })
  validadata: string;

  @Column('char', { name: 'NUMSOMAUT', length: 1 })
  numsomaut: string;

  @Column('char', { name: 'DENTROESTADO', nullable: true, length: 1 })
  dentroestado: string | null;

  @Column('char', { name: 'ATUALLIVFIS', nullable: true, length: 1 })
  atuallivfis: string | null;

  @Column('int', { name: 'CODCFO_ENTRADA' })
  codcfoEntrada: number;

  @Column('int', { name: 'CODCFO_SAIDA' })
  codcfoSaida: number;

  @Column('int', { name: 'CODCFO_ENTRADA_FORA', nullable: true })
  codcfoEntradaFora: number | null;

  @Column('int', { name: 'CODCFO_SAIDA_FORA', nullable: true })
  codcfoSaidaFora: number | null;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('char', { name: 'TIPICMS', nullable: true, length: 1 })
  tipicms: string | null;

  @Column('char', { name: 'TIPIPI', nullable: true, length: 1 })
  tipipi: string | null;

  @Column('char', { name: 'ARMAZENAGEM', nullable: true, length: 1 })
  armazenagem: string | null;

  @Column('char', { name: 'ATUALCTB', length: 1 })
  atualctb: string;

  @Column('char', { name: 'ATIVO', length: 1 })
  ativo: string;

  @Column('char', { name: 'ATUALIZARATEIO', nullable: true, length: 1 })
  atualizarateio: string | null;

  @Column('char', { name: 'PENDENTE', length: 1 })
  pendente: string;

  @Column('char', { name: 'IMPNOTAADICIONAL', length: 1 })
  impnotaadicional: string;

  @Column('char', { name: 'EMITEBOLETA', length: 1 })
  emiteboleta: string;

  @Column('char', { name: 'EXIGETRANSP', length: 1 })
  exigetransp: string;

  @Column('char', { name: 'VALNUM', length: 1 })
  valnum: string;

  @Column('char', { name: 'ALTNFCONF', length: 1 })
  altnfconf: string;

  @Column('char', { name: 'USARPRECOCUSTO', nullable: true, length: 1 })
  usarprecocusto: string | null;

  @Column('char', { name: 'EXECITE', length: 1 })
  execite: string;

  @Column('char', { name: 'VENDITE', length: 1 })
  vendite: string;

  @Column('char', { name: 'ATUALLIVISS', length: 1 })
  atualliviss: string;

  @Column('char', { name: 'EXPTES', length: 1 })
  exptes: string;

  @Column('smallint', { name: 'EXPGRS' })
  expgrs: number;

  @Column('char', { name: 'EXIGECOTACAO', nullable: true, length: 1 })
  exigecotacao: string | null;

  @Column('smallint', { name: 'CODMODNF', nullable: true })
  codmodnf: number | null;

  @Column('char', { name: 'EXPORTA', nullable: true, length: 1 })
  exporta: string | null;

  @Column('char', { name: 'CUPOMFISCAL', nullable: true, length: 1 })
  cupomfiscal: string | null;

  @Column('char', { name: 'SOMASUBST', nullable: true, length: 1 })
  somasubst: string | null;

  @Column('char', { name: 'CALCDIFICMS', nullable: true, length: 1 })
  calcdificms: string | null;

  @Column('smallint', { name: 'CODTIPOPERDESTINO' })
  codtipoperdestino: number;

  @Column('char', { name: 'TEMIPI', length: 1 })
  temipi: string;

  @Column('char', { name: 'TEMICMS', length: 1 })
  temicms: string;

  @Column('char', { name: 'TEMPIS', length: 1 })
  tempis: string;

  @Column('char', { name: 'TEMCOFINS', length: 1 })
  temcofins: string;

  @Column('char', { name: 'EXIGECONF', length: 1 })
  exigeconf: string;

  @Column('smallint', { name: 'ATUALESTMP', nullable: true })
  atualestmp: number | null;

  @Column('char', { name: 'ATUALPRECOFAT', length: 1 })
  atualprecofat: string;

  @Column('char', { name: 'VALIDAATRASO', length: 1 })
  validaatraso: string;

  @Column('char', { name: 'VALIDAAGRUPMIN', length: 1 })
  validaagrupmin: string;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('char', { name: 'COMPLEMENTO', length: 1 })
  complemento: string;

  @Column('int', { name: 'CODMODDOC' })
  codmoddoc: number;

  @Column('char', { name: 'TEMCSL', length: 1 })
  temcsl: string;

  @Column('char', { name: 'EXIGELIB', nullable: true, length: 1 })
  exigelib: string | null;

  @Column('char', { name: 'ATUALBEM', length: 1 })
  atualbem: string;

  @Column('char', { name: 'INFCONTRATO', length: 1 })
  infcontrato: string;

  @Column('char', { name: 'USOPRODSEPARACAO', length: 1 })
  usoprodseparacao: string;

  @Column('char', { name: 'ADIARATUALEST', nullable: true, length: 1 })
  adiaratualest: string | null;

  @Column('smallint', { name: 'CODTIPOPERSEPARACAO', nullable: true })
  codtipoperseparacao: number | null;

  @Column('char', { name: 'IPIPROPFRETE', nullable: true, length: 1 })
  ipipropfrete: string | null;

  @Column('char', { name: 'IPIPROPSEG', nullable: true, length: 1 })
  ipipropseg: string | null;

  @Column('char', { name: 'IPIPROPDESTAQUE', nullable: true, length: 1 })
  ipipropdestaque: string | null;

  @Column('char', { name: 'IPIPROPEMBALAGEM', nullable: true, length: 1 })
  ipipropembalagem: string | null;

  @Column('char', { name: 'IPIPROPJURO', nullable: true, length: 1 })
  ipipropjuro: string | null;

  @Column('char', { name: 'ICMSPROPFRETE', nullable: true, length: 1 })
  icmspropfrete: string | null;

  @Column('char', { name: 'ICMSPROPSEG', nullable: true, length: 1 })
  icmspropseg: string | null;

  @Column('char', { name: 'ICMSPROPDESTAQUE', nullable: true, length: 1 })
  icmspropdestaque: string | null;

  @Column('char', { name: 'ICMSPROPEMBALAGEM', nullable: true, length: 1 })
  icmspropembalagem: string | null;

  @Column('char', { name: 'ICMSPROPJURO', nullable: true, length: 1 })
  icmspropjuro: string | null;

  @Column('char', { name: 'STPROPFRETE', nullable: true, length: 1 })
  stpropfrete: string | null;

  @Column('char', { name: 'STPROPSEG', nullable: true, length: 1 })
  stpropseg: string | null;

  @Column('char', { name: 'STPROPDESTAQUE', nullable: true, length: 1 })
  stpropdestaque: string | null;

  @Column('char', { name: 'STPROPEMBALAGEM', nullable: true, length: 1 })
  stpropembalagem: string | null;

  @Column('char', { name: 'STPROPJURO', nullable: true, length: 1 })
  stpropjuro: string | null;

  @Column('char', { name: 'RATAUTPROD', length: 1 })
  ratautprod: string;

  @Column('char', { name: 'TIPIVASUBST', nullable: true, length: 1 })
  tipivasubst: string | null;

  @Column('smallint', { name: 'GOLSINAL' })
  golsinal: number;

  @Column('char', { name: 'CONSIGNACAO', length: 1 })
  consignacao: string;

  @Column('char', { name: 'BONIFICACAO', length: 1 })
  bonificacao: string;

  @Column('char', { name: 'STPROPFRETEEXT', length: 1 })
  stpropfreteext: string;

  @Column('money', { name: 'VLRMINAP' })
  vlrminap: number;

  @Column('char', { name: 'PRODREP', nullable: true, length: 1 })
  prodrep: string | null;

  @Column('smallint', { name: 'GOLMPSINAL' })
  golmpsinal: number;

  @Column('smallint', { name: 'GOLDEV' })
  goldev: number;

  @Column('char', { name: 'SOMARIPI', length: 1 })
  somaripi: string;

  @Column('char', { name: 'EXIGELAUDO', length: 1 })
  exigelaudo: string;

  @Column('char', { name: 'VALIDAMEDIANEGOC', length: 1 })
  validamedianegoc: string;

  @Column('char', { name: 'TEMFUNRURAL', length: 1 })
  temfunrural: string;

  @Column('char', { name: 'IMPNAOCONF', length: 1 })
  impnaoconf: string;

  @Column('char', { name: 'IPIINCICMS', length: 1 })
  ipiincicms: string;

  @Column('char', { name: 'CLASSIFICMS', length: 1 })
  classificms: string;

  @Column('char', { name: 'OC', length: 1 })
  oc: string;

  @Column('char', { name: 'FATESTCONF', length: 1 })
  fatestconf: string;

  @Column('char', { name: 'SOLCOMPRA', length: 1 })
  solcompra: string;

  @Column('char', { name: 'EDITANALISERENTAB', length: 1 })
  editanaliserentab: string;

  @Column('char', { name: 'EXIGEGAR', length: 1 })
  exigegar: string;

  @Column('char', { name: 'TIPFATSERV', length: 1 })
  tipfatserv: string;

  @Column('char', { name: 'TEMIRF', length: 1 })
  temirf: string;

  @Column('char', { name: 'BASEICMSFRETECALCST', length: 1 })
  baseicmsfretecalcst: string;

  @Column('char', { name: 'USARCONFCEGA', length: 1 })
  usarconfcega: string;

  @Column('char', { name: 'EXIGEDTVAL', length: 1 })
  exigedtval: string;

  @Column('char', { name: 'EXIGEPEDFRET', length: 1 })
  exigepedfret: string;

  @Column('char', { name: 'PEDFRETE', length: 1 })
  pedfrete: string;

  @Column('char', { name: 'ATUALCOMOS', length: 1 })
  atualcomos: string;

  @Column('char', { name: 'CODMODDOCISS', nullable: true, length: 2 })
  codmoddociss: string | null;

  @Column('int', { name: 'CODCFPS' })
  codcfps: number;

  @Column('char', { name: 'OBTERVLRMOEDAFAT', length: 1 })
  obtervlrmoedafat: string;

  @Column('char', { name: 'EXIGANALITENS', length: 1 })
  exiganalitens: string;

  @Column('char', { name: 'ATUALESTTERC', length: 1 })
  atualestterc: string;

  @Column('char', { name: 'TEMISS', length: 1 })
  temiss: string;

  @Column('char', { name: 'BUSCMPTERC', length: 1 })
  buscmpterc: string;

  @Column('int', { name: 'CODCFO_TERC' })
  codcfoTerc: number;

  @Column('char', { name: 'ATUALFINTERC', length: 1 })
  atualfinterc: string;

  @Column('char', { name: 'ATUALULTIMACOMP', length: 1 })
  atualultimacomp: string;

  @Column('char', { name: 'ATUALULTIMAVEND', length: 1 })
  atualultimavend: string;

  @Column('smallint', { name: 'ANALISEGIRO' })
  analisegiro: number;

  @Column('char', { name: 'GERAGNRE', length: 1 })
  geragnre: string;

  @Column('char', { name: 'ATUALACDC', length: 1 })
  atualacdc: string;

  @Column('char', { name: 'IPIEMBUT', length: 1 })
  ipiembut: string;

  @Column('char', { name: 'UTILIZAWMS', length: 1 })
  utilizawms: string;

  @Column('char', { name: 'NFE', nullable: true, length: 1 })
  nfe: string | null;

  @Column('smallint', { name: 'CSTIPIENT', nullable: true })
  cstipient: number | null;

  @Column('smallint', { name: 'CSTIPISAI', nullable: true })
  cstipisai: number | null;

  @Column('char', { name: 'PODEFIXAR', length: 1 })
  podefixar: string;

  @Column('char', { name: 'PODETRANSFENT', length: 1 })
  podetransfent: string;

  @Column('char', { name: 'REFNFE', length: 1 })
  refnfe: string;

  @Column('char', { name: 'VALEST', nullable: true, length: 1 })
  valest: string | null;

  @Column('char', { name: 'INTEGSERCON', length: 1 })
  integsercon: string;

  @Column('char', { name: 'EXIGELIBSEMPRE', length: 1 })
  exigelibsempre: string;

  @Column('char', { name: 'ENVIARWMSCONF', length: 1 })
  enviarwmsconf: string;

  @Column('char', { name: 'TIPATUALWMS', length: 1 })
  tipatualwms: string;

  @Column('char', { name: 'EXIGEAGENDAWMS', length: 1 })
  exigeagendawms: string;

  @Column('char', { name: 'ATUALDATRECWMS', length: 1 })
  atualdatrecwms: string;

  @Column('char', { name: 'TEMFINORIGEM', length: 1 })
  temfinorigem: string;

  @Column('char', { name: 'AUTDIGITAL', length: 1 })
  autdigital: string;

  @Column('smallint', { name: 'CODMODDAD', nullable: true })
  codmoddad: number | null;

  @Column('char', { name: 'MPNUMAUTLOTE', length: 1 })
  mpnumautlote: string;

  @Column('smallint', { name: 'NULAYOUT', nullable: true })
  nulayout: number | null;

  @Column('char', { name: 'SOMARPISST', length: 1 })
  somarpisst: string;

  @Column('char', { name: 'SOMARCOFINSST', length: 1 })
  somarcofinsst: string;

  @Column('char', { name: 'PISPROPFRETE', length: 1 })
  pispropfrete: string;

  @Column('char', { name: 'PISPROPSEG', length: 1 })
  pispropseg: string;

  @Column('char', { name: 'PISPROPDESTAQUE', length: 1 })
  pispropdestaque: string;

  @Column('char', { name: 'PISPROPEMBALAGEM', length: 1 })
  pispropembalagem: string;

  @Column('char', { name: 'PISPROPJURO', length: 1 })
  pispropjuro: string;

  @Column('char', { name: 'PISSTPROPFRETE', length: 1 })
  pisstpropfrete: string;

  @Column('char', { name: 'PISSTPROPSEG', length: 1 })
  pisstpropseg: string;

  @Column('char', { name: 'PISSTPROPDESTAQUE', length: 1 })
  pisstpropdestaque: string;

  @Column('char', { name: 'PISSTPROPEMBALAGEM', length: 1 })
  pisstpropembalagem: string;

  @Column('char', { name: 'PISSTPROPJURO', length: 1 })
  pisstpropjuro: string;

  @Column('char', { name: 'COFINSPROPFRETE', length: 1 })
  cofinspropfrete: string;

  @Column('char', { name: 'COFINSPROPSEG', length: 1 })
  cofinspropseg: string;

  @Column('char', { name: 'COFINSPROPDESTAQUE', length: 1 })
  cofinspropdestaque: string;

  @Column('char', { name: 'COFINSPROPEMBALAGEM', nullable: true, length: 1 })
  cofinspropembalagem: string | null;

  @Column('char', { name: 'COFINSPROPJURO', nullable: true, length: 1 })
  cofinspropjuro: string | null;

  @Column('char', { name: 'COFINSSTPROPFRETE', length: 1 })
  cofinsstpropfrete: string;

  @Column('char', { name: 'COFINSSTPROPSEG', length: 1 })
  cofinsstpropseg: string;

  @Column('char', { name: 'COFINSSTPROPDESTAQUE', length: 1 })
  cofinsstpropdestaque: string;

  @Column('char', { name: 'COFINSSTPROPEMBALAGEM', length: 1 })
  cofinsstpropembalagem: string;

  @Column('char', { name: 'COFINSSTPROPJURO', length: 1 })
  cofinsstpropjuro: string;

  @Column('smallint', { name: 'ATUALTRANSG' })
  atualtransg: number;

  @Column('char', { name: 'VDADIRCONSUM', nullable: true, length: 1 })
  vdadirconsum: string | null;

  @Column('float', { name: 'VLRBASEPGTO', precision: 53 })
  vlrbasepgto: number;

  @Column('char', { name: 'PODEPESAGEM', length: 1 })
  podepesagem: string;

  @Column('char', { name: 'EMPFUNCDIF', length: 1 })
  empfuncdif: string;

  @Column('varchar', { name: 'FATENTPROD', length: 1 })
  fatentprod: string;

  @Column('varchar', { name: 'DIGINFIMPORTA', length: 1 })
  diginfimporta: string;

  @Column('varchar', { name: 'NFESEMDTENTSAI', length: 1 })
  nfesemdtentsai: string;

  @Column('smallint', { name: 'ATUALINDENIZ' })
  atualindeniz: number;

  @Column('varchar', { name: 'TEMREAICMS', length: 1 })
  temreaicms: string;

  @Column('varchar', { name: 'AVISARCOMP', length: 2 })
  avisarcomp: string;

  @Column('varchar', { name: 'GERARTAGJNFE', length: 1 })
  gerartagjnfe: string;

  @Column('varchar', { name: 'CONTLAUDOSINT', length: 1 })
  contlaudosint: string;

  @Column('smallint', { name: 'CODMODNFSE', nullable: true })
  codmodnfse: number | null;

  @Column('smallint', { name: 'CODMODRPS', nullable: true })
  codmodrps: number | null;

  @Column('varchar', { name: 'NFSE', nullable: true, length: 1 })
  nfse: string | null;

  @Column('char', { name: 'CODNATOPERISS', nullable: true, length: 1 })
  codnatoperiss: string | null;

  @Column('varchar', { name: 'CONFIMPOSTO', length: 1 })
  confimposto: string;

  @Column('varchar', { name: 'CONFCFOP', length: 1 })
  confcfop: string;

  @Column('varchar', { name: 'NFSEPORNAT', length: 1 })
  nfsepornat: string;

  @Column('smallint', { name: 'CODTIPOPERPENRET' })
  codtipoperpenret: number;

  @Column('smallint', { name: 'CODTIPOPERDENEG' })
  codtipoperdeneg: number;

  @Column('varchar', { name: 'COPIARLIBER', length: 1 })
  copiarliber: string;

  @Column('varchar', { name: 'NAOINCCONF', length: 1 })
  naoincconf: string;

  @Column('varchar', { name: 'PESAITEM', length: 1 })
  pesaitem: string;

  @Column('varchar', { name: 'CAMINHOEDI', nullable: true, length: 255 })
  caminhoedi: string | null;

  @Column('int', { name: 'CODREMEDI', nullable: true })
  codremedi: number | null;

  @Column('smallint', { name: 'CODTIPOPERREM' })
  codtipoperrem: number;

  @Column('varchar', { name: 'GERARPARCDEST', length: 1 })
  gerarparcdest: string;

  @Column('int', { name: 'NUNOTAMODELO', nullable: true })
  nunotamodelo: number | null;

  @Column('varchar', { name: 'PROVISENTREGA', length: 1 })
  provisentrega: string;

  @Column('varchar', { name: 'TEMII', length: 1 })
  temii: string;

  @Column('varchar', { name: 'DIGPUREZA', length: 1 })
  digpureza: string;

  @Column('varchar', { name: 'LAUDOITEM', length: 1 })
  laudoitem: string;

  @Column('varchar', { name: 'TIPOIMPKIT', length: 1 })
  tipoimpkit: string;

  @Column('varchar', { name: 'TRANSFWMS', length: 1 })
  transfwms: string;

  @Column('varchar', { name: 'TIPMOVBEMSPED', nullable: true, length: 2 })
  tipmovbemsped: string | null;

  @Column('varchar', { name: 'PODEAJUSTARORIGPRODWMS', length: 1 })
  podeajustarorigprodwms: string;

  @Column('varchar', { name: 'TEMVAVTCON', length: 1 })
  temvavtcon: string;

  @Column('varchar', { name: 'STATUSLOTE', length: 1 })
  statuslote: string;

  @Column('varchar', { name: 'STATUSBAIXAEST', length: 1 })
  statusbaixaest: string;

  @Column('varchar', { name: 'BLOQESTVENC', length: 1 })
  bloqestvenc: string;

  @Column('varchar', { name: 'VALVCTLAUDOEST', length: 1 })
  valvctlaudoest: string;

  @Column('varchar', { name: 'GRUPO', nullable: true, length: 15 })
  grupo: string | null;

  @Column('varchar', { name: 'GERABONPRE', length: 1 })
  gerabonpre: string;

  @Column('varchar', { name: 'FATCONTPORPESO', length: 1 })
  fatcontporpeso: string;

  @Column('varchar', { name: 'TEMINDEX', length: 1 })
  temindex: string;

  @Column('varchar', { name: 'NATOPERSPED', nullable: true, length: 60 })
  natopersped: string | null;

  @Column('char', { name: 'VALTOTNOTAGERLIV', length: 1 })
  valtotnotagerliv: string;

  @Column('char', { name: 'IMPETIQCONFIR', length: 1 })
  impetiqconfir: string;

  @Column('varchar', { name: 'TIPCALCEAN13', length: 1 })
  tipcalcean13: string;

  @Column('int', { name: 'MODETQIMPCAF', nullable: true })
  modetqimpcaf: number | null;

  @Column('varchar', { name: 'VALTIPNEGOCCONF', length: 1 })
  valtipnegocconf: string;

  @Column('varchar', { name: 'NATBCCRED', nullable: true, length: 2 })
  natbccred: string | null;

  @Column('varchar', { name: 'INDNATFRT', nullable: true, length: 1 })
  indnatfrt: string | null;

  @Column('char', { name: 'LIGORIGORIG', length: 1 })
  ligorigorig: string;

  @Column('varchar', { name: 'VALTBCOMPCR', length: 1 })
  valtbcompcr: string;

  @Column('char', { name: 'VALCST', length: 1 })
  valcst: string;

  @Column('char', { name: 'VALPRZMEDCPA', length: 1 })
  valprzmedcpa: string;

  @Column('smallint', { name: 'DIASTOLPRZMED', nullable: true })
  diastolprzmed: number | null;

  @Column('char', { name: 'QTDPENDCALC', length: 1 })
  qtdpendcalc: string;

  @Column('char', { name: 'QTDPENDVAL', length: 1 })
  qtdpendval: string;

  @Column('float', { name: 'PERCTOLVARQTD', nullable: true, precision: 53 })
  perctolvarqtd: number | null;

  @Column('char', { name: 'USACUSMEDBASEST', length: 1 })
  usacusmedbasest: string;

  @Column('char', { name: 'SUGERELOCALPARC', length: 1 })
  sugerelocalparc: string;

  @Column('char', { name: 'EMITELAUDOLOTE', length: 1 })
  emitelaudolote: string;

  @Column('char', { name: 'ENVGARANTIA', length: 1 })
  envgarantia: string;

  @Column('char', { name: 'SEPBALCAO', length: 1 })
  sepbalcao: string;

  @Column('char', { name: 'ATUALTRANSPNFOC', length: 1 })
  atualtranspnfoc: string;

  @Column('char', { name: 'VALORICMSFRETECALCST', length: 1 })
  valoricmsfretecalcst: string;

  @Column('char', { name: 'USAALIQNATRATF100', length: 1 })
  usaaliqnatratf100: string;

  @Column('char', { name: 'GERAPLANPROD', length: 1 })
  geraplanprod: string;

  @Column('char', { name: 'COPIADTPREVORIG', length: 1 })
  copiadtprevorig: string;

  @Column('char', { name: 'AGRUPASERVFAT', nullable: true, length: 1 })
  agrupaservfat: string | null;

  @Column('char', { name: 'GERARTRANSF', length: 1 })
  gerartransf: string;

  @Column('char', { name: 'RESERVASEMLOTE', length: 1 })
  reservasemlote: string;

  @Column('char', { name: 'AGRUPAPRODNFE', length: 1 })
  agrupaprodnfe: string;

  @Column('char', { name: 'MARCARNAOPENDENTE', length: 1 })
  marcarnaopendente: string;

  @Column('char', { name: 'GERAAMOSTRALAUDO', length: 1 })
  geraamostralaudo: string;

  @Column('char', { name: 'EMITEREGVOL', length: 1 })
  emiteregvol: string;
}
