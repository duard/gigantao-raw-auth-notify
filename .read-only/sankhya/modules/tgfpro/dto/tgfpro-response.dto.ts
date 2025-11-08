import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { trimEnd } from 'src/utils/string.utils';

export class TgfproResponseDto {
  @ApiProperty()
  codprod: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  descrprod: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  compldesc: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  caracteristicas: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  referencia: string | null;

  @ApiProperty()
  codgrupoprod: number;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  marca: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  localizacao: string | null;

  @ApiProperty({ nullable: true })
  codipi: number | null;

  @ApiProperty({ nullable: true })
  classubtrib: number | null;

  @ApiProperty({ nullable: true })
  marglucro: number | null;

  @ApiProperty({ nullable: true })
  multipvenda: number | null;

  @ApiProperty({ nullable: true })
  deccusto: number | null;

  @ApiProperty({ nullable: true })
  decvlr: number | null;

  @ApiProperty({ nullable: true })
  decqtd: number | null;

  @ApiProperty({ nullable: true })
  comger: number | null;

  @ApiProperty({ nullable: true })
  comvend: number | null;

  @ApiProperty({ nullable: true })
  descmax: number | null;

  @ApiProperty()
  pesobruto: number;

  @ApiProperty()
  pesoliq: number;

  @ApiProperty({ nullable: true })
  medaux: number | null;

  @ApiProperty({ nullable: true })
  prazoval: number | null;

  @ApiProperty({ nullable: true })
  agrupmin: number | null;

  @ApiProperty({ nullable: true })
  qtdemb: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  alertaestmin: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  promocao: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  temicms: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  temiss: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  temipivenda: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  temipicompra: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  temirf: string;

  @ApiProperty({ nullable: true })
  percirf: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  teminss: string;

  @ApiProperty()
  percinss: number;

  @ApiProperty()
  redbaseinss: number;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usoprod: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  origprod: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipsubst: string | null;

  @ApiProperty({ nullable: true })
  codicmsfast: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tiplancnota: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipcontest: string | null;

  @ApiProperty({ nullable: true })
  codtab: number | null;

  // @ApiProperty({ nullable: true })
  // imagem: string | null; // Assuming Buffer will be converted to base64 string

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  ativo: string;

  @ApiProperty({ nullable: true })
  estmax: number | null;

  @ApiProperty({ nullable: true })
  estmin: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  apresdetalhe: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  selecionado: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  titcontest: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  liscontest: string | null;

  @ApiProperty({ nullable: true })
  grupoicms: number | null;

  @ApiProperty({ nullable: true })
  percaumentcusto: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  local: string | null;

  @ApiProperty()
  dtalter: Date;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usalocal: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  homepage: string | null;

  @ApiProperty({ nullable: true })
  codctactb2: number | null;

  @ApiProperty({ nullable: true })
  codctactb3: number | null;

  @ApiProperty({ nullable: true })
  temposerv: Date | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  endimagem: string | null;

  @ApiProperty()
  codusu: number;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codprodroi: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  grupodescprod: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  refforn: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  hrdobrada: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  icmsgerencia: string;

  @ApiProperty({ nullable: true })
  m3: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  temciap: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  implaudolote: string;

  @ApiProperty({ nullable: true })
  codgar: number | null;

  @ApiProperty({ nullable: true })
  codctactb4: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  dimensoes: string;

  @ApiProperty({ nullable: true })
  percquebratec: number | null;

  @ApiProperty({ nullable: true })
  codfiltro: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  endmodrotulo: string | null;

  @ApiProperty({ nullable: true })
  codgenero: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  padrao: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  naturezaoperdes: string | null;

  @ApiProperty({ nullable: true })
  cnae: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  solcompra: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  confere: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  remeter: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  motivoincexc: string | null;

  @ApiProperty({ nullable: true })
  arredpreco: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  temcomissao: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  componobrig: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  fattotal: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  nometab: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  ap1Rctego: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  calculogiro: string;

  @ApiProperty({ nullable: true })
  redbaseirf: number | null;

  @ApiProperty({ nullable: true })
  altura: number | null;

  @ApiProperty({ nullable: true })
  largura: number | null;

  @ApiProperty({ nullable: true })
  espessura: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  unidade: string | null;

  @ApiProperty({ nullable: true })
  codformaponta: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  confcegapeso: string;

  @ApiProperty({ nullable: true })
  ordcalccustprod: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  regrawms: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  grupopis: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  grupocofins: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  grupocssl: string;

  @ApiProperty({ nullable: true })
  cstipient: number | null;

  @ApiProperty({ nullable: true })
  cstipisai: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  statusincexc: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  utilizawms: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  balanca: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  rendimento: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  obsetiqueta: string | null;

  @ApiProperty({ nullable: true })
  codanp: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codautcodif: string | null;

  @ApiProperty({ nullable: true })
  codprodagrupapt: number | null;

  @ApiProperty({ nullable: true })
  codprodagrupaptenc: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  cultura: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  cientifico: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  formulacao: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  concentracao: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  modoaplic: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  epocaaplic: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  manejoint: string | null;

  @ApiProperty({ nullable: true })
  dosagem: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  voldosagem: string | null;

  @ApiProperty({ nullable: true })
  dosagempor: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  voldosagempor: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  rendimentopr: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  receituario: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  exigebenefic: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  geraplaprod: string;

  @ApiProperty({ nullable: true })
  aplicacao: number | null;

  @ApiProperty({ nullable: true })
  intervalo: number | null;

  @ApiProperty({ nullable: true })
  carencia: number | null;

  @ApiProperty({ nullable: true })
  rendimentoha: number | null;

  @ApiProperty()
  produtonfe: number;

  @ApiProperty()
  tipgtinnfe: number;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  ncm: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codvolplan: string | null;

  @ApiProperty({ nullable: true })
  descmaxflex: number | null;

  @ApiProperty({ nullable: true })
  acrescmax: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  flex: string;

  @ApiProperty({ nullable: true })
  numitemrea: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  imprimir: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  confirmaimp: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  apuraprodepe: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  indespprodepe: string | null;

  @ApiProperty()
  qtdnflaudosint: number;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codtribmuniss: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipcontestwms: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  listalpm: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  oneroso: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  refmercmed: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  termolabil: string;

  @ApiProperty({ nullable: true })
  tempminima: number | null;

  @ApiProperty({ nullable: true })
  tempmaxima: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  controlado: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  idenportaria: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  idenotc: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  idencorrelato: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  idencosme: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  prodfalta: string;

  @ApiProperty()
  statusmed: number;

  @ApiProperty({ nullable: true })
  seqspr: number | null;

  @ApiProperty({ nullable: true })
  seqsca: number | null;

  @ApiProperty({ nullable: true })
  seqste: number | null;

  @ApiProperty()
  mvaajustado: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  infpureza: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  fabricante: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usastatuslote: string;

  @ApiProperty({ nullable: true })
  tamlote: number | null;

  @ApiProperty({ nullable: true })
  tamserie: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  unidminarmaz: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  origemfat: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usacodbarrasqtd: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  md5Paf: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  valcapm3: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  qtdpecafrac: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  utilordcorte: string;

  @ApiProperty({ nullable: true })
  codprodperda: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  descrutilbem: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  impordemcorte: string;

  @ApiProperty()
  perctroca: number;

  @ApiProperty({ nullable: true })
  corfontconspreco: number | null;

  @ApiProperty({ nullable: true })
  corfundoconspreco: number | null;

  @ApiProperty({ nullable: true })
  identimob: number | null;

  @ApiProperty({ nullable: true })
  utilimob: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  temcredpiscofinsdepr: string;

  @ApiProperty({ nullable: true })
  codprodinnatura: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  utilsmartcard: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  recupavaria: string;

  @ApiProperty({ nullable: true })
  convervol: number | null;

  @ApiProperty({ nullable: true })
  lastro: number | null;

  @ApiProperty({ nullable: true })
  camadas: number | null;

  @ApiProperty({ nullable: true })
  ordemmedida: number | null;

  @ApiProperty({ nullable: true })
  aliqicmsintefd: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codregmapa: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  apresform: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codbarcomp: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  temmedicao: string;

  @ApiProperty({ nullable: true })
  codfiltroreq: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  natbcpiscofins: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  contarporpeso: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
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
  qtdpedpend: number | null;

  @ApiProperty({ nullable: true })
  leadtime: number | null;

  @ApiProperty({ nullable: true })
  diasexpedicao: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  dtvaldif: string;

  @ApiProperty({ nullable: true })
  shelflifemin: number | null;

  @ApiProperty({ nullable: true })
  shelflife: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codbarbalanca: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  valcbglobal: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usapontos: string;

  @ApiProperty({ nullable: true })
  percroyalty: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  integraeconect: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  enqreintegra: string;

  @ApiProperty()
  perccmtnac: number;

  @ApiProperty()
  perccmtimp: number;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  notifconf: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usaseriefab: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipsernfe: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  vencompindiv: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  excluirconf: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  produzaut: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usaimpagrupmin: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  rastrestoque: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  impetiqconf: string;

  @ApiProperty({ nullable: true })
  vlrcomerc: number | null;

  @ApiProperty({ nullable: true })
  vlrparcimpext: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codfci: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codativreintegra: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  servparaindust: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  cat1799Spres: string;

  @ApiProperty({ nullable: true })
  aliqnac: number | null;

  @ApiProperty({ nullable: true })
  aliqimp: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  descrprodnfe: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  geracustcompseg: string;

  @ApiProperty()
  estsegqtd: number;

  @ApiProperty({ nullable: true })
  estsegdias: number | null;

  @ApiProperty({ nullable: true })
  dtalteresq: Date | null;

  @ApiProperty({ nullable: true })
  lotecompras: number | null;

  @ApiProperty()
  estmaxqtd: number;

  @ApiProperty({ nullable: true })
  estmaxdias: number | null;

  @ApiProperty({ nullable: true })
  dtalteremq: Date | null;

  @ApiProperty()
  desviomax: number;

  @ApiProperty()
  arredagrup: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  aplicasazo: string;

  @ApiProperty()
  lotecompminimo: number;

  @ApiProperty()
  agrupcompminimo: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usaseriesepwms: string;

  @ApiProperty({ nullable: true })
  topfaturcon: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  serfaturcon: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  exigelastrocamadas: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  fixoagenda: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usalotedtval: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usalotedtfab: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  exibcompexpkit: string;

  @ApiProperty({ nullable: true })
  tiporeceitamod21: number | null;

  @ApiProperty({ nullable: true })
  codprodsubst: number | null;

  @ApiProperty({ nullable: true })
  dtsubst: Date | null;

  @ApiProperty({ nullable: true })
  codcomp: number | null;

  @ApiProperty({ nullable: true })
  natefdcontm410M810: number | null;

  @ApiProperty({ nullable: true })
  perctolpesomaior: number | null;

  @ApiProperty({ nullable: true })
  perctolpesomenor: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codvolpesovar: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usacontpesovar: string | null;

  @ApiProperty({ nullable: true })
  perctolpesomaiorsep: number | null;

  @ApiProperty({ nullable: true })
  perctolpesomenorsep: number | null;

  @ApiProperty({ nullable: true })
  pctBf: number | null;

  @ApiProperty({ nullable: true })
  przBf: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  controlmedic: string | null;

  @ApiProperty()
  perccmtfed: number;

  @ApiProperty()
  perccmtest: number;

  @ApiProperty()
  perccmtmun: number;

  @ApiProperty({ nullable: true })
  codenqipient: number | null;

  @ApiProperty({ nullable: true })
  codenqipisai: number | null;

  @ApiProperty({ nullable: true })
  decvlrent: number | null;

  @ApiProperty({ nullable: true })
  codespecst: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  descvenconsul: string | null;

  @ApiProperty({ nullable: true })
  grupoicms2: number | null;

  @ApiProperty({ nullable: true })
  mvapadrao: number | null;

  @ApiProperty({ nullable: true })
  aliqgeral: number | null;

  @ApiProperty({ nullable: true })
  codprodsubkit: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipokit: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  visivelappos: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  utilizaendflut: string | null;

  @ApiProperty({ nullable: true })
  maxmulteconect: number | null;

  @ApiProperty({ nullable: true })
  qtdidentif: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipoidentif: string | null;

  @ApiProperty({ nullable: true })
  codvtp: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  impetiqsepwms: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  nroprocesso: string | null;

  @ApiProperty({ nullable: true })
  tiposn: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  armazelote: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  temrastrolote: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codanvisa: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  descranp: string | null;

  @ApiProperty({ nullable: true })
  percmistglp: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipocontagem: string;

  @ApiProperty({ nullable: true })
  percmistgnn: number | null;

  @ApiProperty({ nullable: true })
  percmistgni: number | null;

  @ApiProperty({ nullable: true })
  vlrpartidaglp: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  comercializacaoagri: string | null;

  @ApiProperty({ nullable: true })
  obraconstcivil: number | null;

  @ApiProperty({ nullable: true })
  classifcessaoobra: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipoinssespecial: string | null;

  @ApiProperty({ nullable: true })
  percinssespecial: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  calcdifal: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  indescala: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  cnpjfabricante: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codbenefnauf: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codagregacao: string | null;

  @ApiProperty({ nullable: true })
  qtdagrupamentomtz: number | null;

  @ApiProperty({ nullable: true })
  codidcnae: number | null;

  @ApiProperty({ nullable: true })
  codfiltrocta: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  forcaexpeconect: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  registrarpeso: string | null;

  @ApiProperty({ nullable: true })
  desviomaxtolconfsep: number | null;

  @ApiProperty({ nullable: true })
  desviomintolconfsep: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  servprestter: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  fragmentalote: string | null;

  @ApiProperty({ nullable: true })
  percredbaseicmsefet: number | null;

  @ApiProperty({ nullable: true })
  nuversaoimg: number | null;

  @ApiProperty({ nullable: true })
  integrafox: number | null;

  @ApiProperty({ nullable: true })
  nuversao: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  motisencaoanvisa: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codnbs: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  consprodcat42: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipoitemsped: string | null;

  @ApiProperty({ nullable: true })
  incpesobruto: number | null;

  @ApiProperty({ nullable: true })
  incpesoliquido: number | null;

  @ApiProperty({ nullable: true })
  nurfe: number | null;

  @ApiProperty({ nullable: true })
  mvaoriginaldrcst: number | null;

  @ApiProperty({ nullable: true })
  tamanhomediopeca: number | null;

  @ApiProperty({ nullable: true })
  percentseppul: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  atunuversao: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  gradepadrao: string | null;

  @ApiProperty({ nullable: true })
  aliqfethab: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  obtstantmedent: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  descproddrcst: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  participaadrcst: string | null;

  @ApiProperty({ nullable: true })
  mvaoriginaladrcst: number | null;

  @ApiProperty({ nullable: true })
  aliqfecop: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  prodsujfecop: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  desdesccalcpis: string | null;

  @ApiProperty({ nullable: true })
  aliqinternacat42: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  conestorigprod: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  gerimpnretreinfaq: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  prodaliadrcst: string | null;

  @ApiProperty({ nullable: true })
  tiputilcom: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  prodinterno: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  calcfustpro: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  calcfunttelpro: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codbardifgtin: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codbartribdifgtin: string | null;

  @ApiProperty({ nullable: true })
  codnatpamcard: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usanrofogo: string | null;

  @ApiProperty({ nullable: true })
  nufop: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipcargarepom: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipcargapamcard: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipcargaefrete: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tpcargamdfe: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipcargapb: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adObscesta: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  wmsprodrastsermed: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  statusncm: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adCapacidade: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adDescrcomplemento: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  bloqvendafrac: string | null;

  @ApiProperty({ nullable: true })
  adPercpipe: number | null;

  @ApiProperty({ nullable: true })
  adDtvalca: Date | null;

  @ApiProperty({ nullable: true })
  adLimiteusu: number | null;

  @ApiProperty({ nullable: true })
  tpirrfext: number | null;

  @ApiProperty({ nullable: true })
  codnatrend: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adQtdfixo: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  indtiprefbcicmsst: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codvolkanban: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  calrupturaestoque: string | null;

  @ApiProperty({ nullable: true })
  percindmistura: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  opeexpfethab: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  opeintestfethab: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  opeintfethab: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  servdespntrib: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codigonfcom: string | null;
}
