import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateTgfproDto {
  @ApiProperty()
  codprod: number;

  @ApiProperty()
  descrprod: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  compldesc?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  caracteristicas?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  referencia?: string | null;

  @ApiProperty()
  codgrupoprod: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  marca?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  localizacao?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codipi?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  classubtrib?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  marglucro?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  multipvenda?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  deccusto?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  decvlr?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  decqtd?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  comger?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  comvend?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  descmax?: number | null;

  @ApiProperty()
  pesobruto: number;

  @ApiProperty()
  pesoliq: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  medaux?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  prazoval?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  agrupmin?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  qtdemb?: number | null;

  @ApiProperty()
  alertaestmin: string;

  @ApiProperty()
  promocao: string;

  @ApiProperty()
  temicms: string;

  @ApiProperty()
  temiss: string;

  @ApiProperty()
  temipivenda: string;

  @ApiProperty()
  temipicompra: string;

  @ApiProperty()
  temirf: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  percirf?: number | null;

  @ApiProperty()
  teminss: string;

  @ApiProperty()
  percinss: number;

  @ApiProperty()
  redbaseinss: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  usoprod?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  origprod?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tipsubst?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codicmsfast?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tiplancnota?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tipcontest?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codtab?: number | null;

  // @ApiProperty({ nullable: true })
  // @IsOptional()
  // imagem?: string | null; // Assuming Buffer will be converted to base64 string

  @ApiProperty()
  ativo: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  estmax?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  estmin?: number | null;

  @ApiProperty()
  apresdetalhe: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  selecionado?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  titcontest?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  liscontest?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  grupoicms?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  percaumentcusto?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  local?: string | null;

  @ApiProperty()
  dtalter: Date;

  @ApiProperty({ nullable: true })
  @IsOptional()
  usalocal?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  homepage?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codctactb2?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codctactb3?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  temposerv?: Date | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  endimagem?: string | null;

  @ApiProperty()
  codusu: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codprodroi?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  grupodescprod?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  refforn?: string | null;

  @ApiProperty()
  hrdobrada: string;

  @ApiProperty()
  icmsgerencia: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  m3?: number | null;

  @ApiProperty()
  temciap: string;

  @ApiProperty()
  implaudolote: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codgar?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codctactb4?: number | null;

  @ApiProperty()
  dimensoes: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  percquebratec?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codfiltro?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  endmodrotulo?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codgenero?: number | null;

  @ApiProperty()
  padrao: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  naturezaoperdes?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  cnae?: number | null;

  @ApiProperty()
  solcompra: string;

  @ApiProperty()
  confere: string;

  @ApiProperty()
  remeter: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  motivoincexc?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  arredpreco?: number | null;

  @ApiProperty()
  temcomissao: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  componobrig?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  fattotal?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  nometab?: string | null;

  @ApiProperty()
  ap1Rctego: string;

  @ApiProperty()
  calculogiro: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  redbaseirf?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  altura?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  largura?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  espessura?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  unidade?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codformaponta?: number | null;

  @ApiProperty()
  confcegapeso: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  ordcalccustprod?: number | null;

  @ApiProperty()
  regrawms: string;

  @ApiProperty()
  grupopis: string;

  @ApiProperty()
  grupocofins: string;

  @ApiProperty()
  grupocssl: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  cstipient?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  cstipisai?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  statusincexc?: string | null;

  @ApiProperty()
  utilizawms: string;

  @ApiProperty()
  balanca: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  rendimento?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  obsetiqueta?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codanp?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codautcodif?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codprodagrupapt?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codprodagrupaptenc?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  cultura?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  cientifico?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  formulacao?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  concentracao?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  modoaplic?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  epocaaplic?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  manejoint?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  dosagem?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  voldosagem?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  dosagempor?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  voldosagempor?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  rendimentopr?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  receituario?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  exigebenefic?: string | null;

  @ApiProperty()
  geraplaprod: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  aplicacao?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  intervalo?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  carencia?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  rendimentoha?: number | null;

  @ApiProperty()
  produtonfe: number;

  @ApiProperty()
  tipgtinnfe: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  ncm?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codvolplan?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  descmaxflex?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  acrescmax?: number | null;

  @ApiProperty()
  flex: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  numitemrea?: number | null;

  @ApiProperty()
  imprimir: string;

  @ApiProperty()
  confirmaimp: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  apuraprodepe?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  indespprodepe?: string | null;

  @ApiProperty()
  qtdnflaudosint: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codtribmuniss?: string | null;

  @ApiProperty()
  tipcontestwms: string;

  @ApiProperty()
  listalpm: string;

  @ApiProperty()
  oneroso: string;

  @ApiProperty()
  refmercmed: string;

  @ApiProperty()
  termolabil: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tempminima?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tempmaxima?: number | null;

  @ApiProperty()
  controlado: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  idenportaria?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  idenotc?: string | null;

  @ApiProperty()
  idencorrelato: string;

  @ApiProperty()
  idencosme: string;

  @ApiProperty()
  prodfalta: string;

  @ApiProperty()
  statusmed: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  seqspr?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  seqsca?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  seqste?: number | null;

  @ApiProperty()
  mvaajustado: number;

  @ApiProperty()
  infpureza: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  fabricante?: string | null;

  @ApiProperty()
  usastatuslote: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tamlote?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tamserie?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  unidminarmaz?: string | null;

  @ApiProperty()
  origemfat: string;

  @ApiProperty()
  usacodbarrasqtd: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  md5Paf?: string | null;

  @ApiProperty()
  valcapm3: string;

  @ApiProperty()
  qtdpecafrac: string;

  @ApiProperty()
  utilordcorte: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codprodperda?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  descrutilbem?: string | null;

  @ApiProperty()
  impordemcorte: string;

  @ApiProperty()
  perctroca: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  corfontconspreco?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  corfundoconspreco?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  identimob?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  utilimob?: number | null;

  @ApiProperty()
  temcredpiscofinsdepr: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codprodinnatura?: number | null;

  @ApiProperty()
  utilsmartcard: string;

  @ApiProperty()
  recupavaria: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  convervol?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  lastro?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  camadas?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  ordemmedida?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  aliqicmsintefd?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codregmapa?: string | null;

  @ApiProperty()
  apresform: string;

  @ApiProperty()
  codbarcomp: string;

  @ApiProperty()
  temmedicao: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codfiltroreq?: number | null;

  @ApiProperty()
  natbcpiscofins: string;

  @ApiProperty()
  contarporpeso: string;

  @ApiProperty()
  permcompprod: string;

  @ApiProperty()
  codexncm: number;

  @ApiProperty()
  qtdcst: number;

  @ApiProperty()
  diascst: number;

  @ApiProperty()
  perctolvarcst: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  qtdpedpend?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  leadtime?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  diasexpedicao?: number | null;

  @ApiProperty()
  dtvaldif: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  shelflifemin?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  shelflife?: number | null;

  @ApiProperty()
  codbarbalanca: string;

  @ApiProperty()
  valcbglobal: string;

  @ApiProperty()
  usapontos: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  percroyalty?: number | null;

  @ApiProperty()
  integraeconect: string;

  @ApiProperty()
  enqreintegra: string;

  @ApiProperty()
  perccmtnac: number;

  @ApiProperty()
  perccmtimp: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  notifconf?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  usaseriefab?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tipsernfe?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  vencompindiv?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  excluirconf?: string | null;

  @ApiProperty()
  produzaut: string;

  @ApiProperty()
  usaimpagrupmin: string;

  @ApiProperty()
  rastrestoque: string;

  @ApiProperty()
  impetiqconf: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  vlrcomerc?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  vlrparcimpext?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codfci?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codativreintegra?: string | null;

  @ApiProperty()
  servparaindust: string;

  @ApiProperty()
  cat1799Spres: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  aliqnac?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  aliqimp?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  descrprodnfe?: string | null;

  @ApiProperty()
  geracustcompseg: string;

  @ApiProperty()
  estsegqtd: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  estsegdias?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  dtalteresq?: Date | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  lotecompras?: number | null;

  @ApiProperty()
  estmaxqtd: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  estmaxdias?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  dtalteremq?: Date | null;

  @ApiProperty()
  desviomax: number;

  @ApiProperty()
  arredagrup: number;

  @ApiProperty()
  aplicasazo: string;

  @ApiProperty()
  lotecompminimo: number;

  @ApiProperty()
  agrupcompminimo: number;

  @ApiProperty()
  usaseriesepwms: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  topfaturcon?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  serfaturcon?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  exigelastrocamadas?: string | null;

  @ApiProperty()
  fixoagenda: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  usalotedtval?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  usalotedtfab?: string | null;

  @ApiProperty()
  exibcompexpkit: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tiporeceitamod21?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codprodsubst?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  dtsubst?: Date | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codcomp?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  natefdcontm410M810?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  perctolpesomaior?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  perctolpesomenor?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codvolpesovar?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  usacontpesovar?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  perctolpesomaiorsep?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  perctolpesomenorsep?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  pctBf?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  przBf?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  controlmedic?: string | null;

  @ApiProperty()
  perccmtfed: number;

  @ApiProperty()
  perccmtest: number;

  @ApiProperty()
  perccmtmun: number;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codenqipient?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codenqipisai?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  decvlrent?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codespecst?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  descvenconsul?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  grupoicms2?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  mvapadrao?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  aliqgeral?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codprodsubkit?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tipokit?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  visivelappos?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  utilizaendflut?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  maxmulteconect?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  qtdidentif?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tipoidentif?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codvtp?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  impetiqsepwms?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  nroprocesso?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tiposn?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  armazelote?: string | null;

  @ApiProperty()
  temrastrolote: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codanvisa?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  descranp?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  percmistglp?: number | null;

  @ApiProperty()
  tipocontagem: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  percmistgnn?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  percmistgni?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  vlrpartidaglp?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  comercializacaoagri?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  obraconstcivil?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  classifcessaoobra?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tipoinssespecial?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  percinssespecial?: number | null;

  @ApiProperty()
  calcdifal: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  indescala?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  cnpjfabricante?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codbenefnauf?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codagregacao?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  qtdagrupamentomtz?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codidcnae?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codfiltrocta?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  forcaexpeconect?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  registrarpeso?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  desviomaxtolconfsep?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  desviomintolconfsep?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  servprestter?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  fragmentalote?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  percredbaseicmsefet?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  nuversaoimg?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  integrafox?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  nuversao?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  motisencaoanvisa?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codnbs?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  consprodcat42?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tipoitemsped?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  incpesobruto?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  incpesoliquido?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  nurfe?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  mvaoriginaldrcst?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tamanhomediopeca?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  percentseppul?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  atunuversao?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  gradepadrao?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  aliqfethab?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  obtstantmedent?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  descproddrcst?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  participaadrcst?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  mvaoriginaladrcst?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  aliqfecop?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  prodsujfecop?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  desdesccalcpis?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  aliqinternacat42?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  conestorigprod?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  gerimpnretreinfaq?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  prodaliadrcst?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tiputilcom?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  prodinterno?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  calcfustpro?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  calcfunttelpro?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codbardifgtin?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codbartribdifgtin?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codnatpamcard?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  usanrofogo?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  nufop?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tipcargarepom?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tipcargapamcard?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tipcargaefrete?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tpcargamdfe?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tipcargapb?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  adObscesta?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  wmsprodrastsermed?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  statusncm?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  adCapacidade?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  adDescrcomplemento?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  bloqvendafrac?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  adPercpipe?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  adDtvalca?: Date | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  adLimiteusu?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  tpirrfext?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codnatrend?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  adQtdfixo?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  indtiprefbcicmsst?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codvolkanban?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  calrupturaestoque?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  percindmistura?: number | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  opeexpfethab?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  opeintestfethab?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  opeintfethab?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  servdespntrib?: string | null;

  @ApiProperty({ nullable: true })
  @IsOptional()
  codigonfcom?: string | null;

  @ApiProperty()
  inddevolucaonfcom: string;
}
