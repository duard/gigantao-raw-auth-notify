import { ApiProperty } from '@nestjs/swagger';
import { TsiusuResponseDto } from '../../../shared/dto/tsiusu.response.dto';
import { TgftopResponseDto } from './tgftop-response.dto';
import { TsicidResponseDto } from '../../tsicid/dto/tsicid-response.dto';
import { TgfparResponseDto } from '../../tgfpar/dto/tgfpar-response.dto';
import { TgfiteResponseDto } from '../../tgfite/dto/tgfite-response.dto';
import { Transform } from 'class-transformer';
import { trimEnd } from 'src/utils/string.utils';

export class TgfcabResponseDto {
  @ApiProperty()
  nunota: number;

  @ApiProperty()
  codemp: number;

  @ApiProperty()
  numnota: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  serienota: string | null;

  @ApiProperty()
  dtneg: Date;

  @ApiProperty()
  dtfatur: Date | null;

  @ApiProperty()
  dtentsai: Date | null;

  @ApiProperty()
  dtval: Date | null;

  @ApiProperty()
  dtmov: Date | null;

  @ApiProperty()
  dtcontab: Date | null;

  @ApiProperty()
  hrmov: number | null;

  @ApiProperty()
  codparc: number;

  @ApiProperty({ type: () => TgfparResponseDto, nullable: true })
  tgfpar: TgfparResponseDto | null;

  @ApiProperty()
  codcontato: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  rateado: string | null;

  @ApiProperty()
  codtipoper: number;

  @ApiProperty({ type: () => TgftopResponseDto, nullable: true })
  tgftop: TgftopResponseDto | null;

  @ApiProperty()
  dhtipoper: Date;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipmov: string | null;

  @ApiProperty()
  numcotacao: number | null;

  @ApiProperty()
  comissao: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  observacao: string | null;

  @ApiProperty()
  vlrseg: number | null;

  @ApiProperty()
  vlricmsseg: number | null;

  @ApiProperty()
  vlrdestaque: number | null;

  @ApiProperty()
  vlrjuro: number | null;

  @ApiProperty()
  vlrvendor: number | null;

  @ApiProperty()
  vlroutros: number | null;

  @ApiProperty()
  vlremb: number | null;

  @ApiProperty()
  vlricmsemb: number | null;

  @ApiProperty()
  vlrdescserv: number | null;

  @ApiProperty()
  ipiemb: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipipiemb: string | null;

  @ApiProperty()
  vlrdesctot: number | null;

  @ApiProperty()
  vlrdesctotitem: number | null;

  @ApiProperty()
  vlrfrete: number | null;

  @ApiProperty()
  icmsfrete: number | null;

  @ApiProperty()
  baseicmsfrete: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipfrete: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  cifFob: string | null;

  @ApiProperty()
  vencfrete: Date | null;

  @ApiProperty()
  vlrnota: number | null;

  @ApiProperty()
  vencipi: Date | null;

  @ApiProperty()
  ordemcarga: number;

  @ApiProperty()
  seqcarga: number | null;

  @ApiProperty()
  kmveiculo: number | null;

  @ApiProperty()
  codparctransp: number;

  @ApiProperty()
  qtdvol: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  pendente: string | null;

  @ApiProperty()
  baseicms: number | null;

  @ApiProperty()
  vlricms: number | null;

  @ApiProperty()
  baseipi: number | null;

  @ApiProperty()
  vlripi: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  issretido: string | null;

  @ApiProperty()
  baseiss: number | null;

  @ApiProperty()
  vlriss: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  aprovado: string | null;

  @ApiProperty()
  vlrirf: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  irfretido: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  statusnota: string | null;

  @ApiProperty()
  comger: number | null;

  @ApiProperty()
  dtalter: Date;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  volume: string | null;

  @ApiProperty()
  vlrsubst: number;

  @ApiProperty()
  basesubstit: number;

  @ApiProperty()
  codproj: number;

  @ApiProperty()
  numcontrato: number;

  @ApiProperty()
  baseinss: number;

  @ApiProperty()
  vlrinss: number;

  @ApiProperty()
  vlrrepredtot: number;

  @ApiProperty()
  percdesc: number;

  @ApiProperty()
  codparcremetente: number;

  @ApiProperty()
  codparcconsignatario: number;

  @ApiProperty()
  codparcredespacho: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  localcoleta: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  localentrega: string | null;

  @ApiProperty()
  vlrmercadoria: number | null;

  @ApiProperty()
  peso: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  notascf: string | null;

  @ApiProperty()
  codmoddoc: number;

  @ApiProperty()
  numcf: number | null;

  @ApiProperty()
  vlrfretecpl: number | null;

  @ApiProperty()
  troco: number;

  @ApiProperty()
  nroredz: number | null;

  @ApiProperty()
  vlrmoeda: number | null;

  @ApiProperty()
  occn48: number | null;

  @ApiProperty()
  nutransf: number | null;

  @ApiProperty()
  nurd8: number | null;

  @ApiProperty()
  codsite: number | null;

  @ApiProperty()
  totalcustoprod: number | null;

  @ApiProperty()
  totalcustoserv: number | null;

  @ApiProperty()
  basesubstsemred: number | null;

  @ApiProperty()
  codmotorista: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  naturezaoperdes: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  serienfdes: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  modelonfdes: string | null;

  @ApiProperty()
  dtprevent: Date | null;

  @ApiProperty()
  nunotapedfret: number | null;

  @ApiProperty()
  baseirf: number | null;

  @ApiProperty()
  aliqirf: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  placa: string | null;

  @ApiProperty()
  pesobruto: number | null;

  @ApiProperty()
  hrentsai: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  antt: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  lacres: string | null;

  @ApiProperty()
  danfe: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  chavenfe: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numeracaovolumes: string | null;

  @ApiProperty()
  dtenviopmb: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipnotapmb: string | null;

  @ApiProperty()
  numaleatorio: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numprotoc: string | null;

  @ApiProperty()
  dhprotoc: Date | null;

  @ApiProperty()
  dtenvsuf: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  statusnfe: string | null;

  @ApiProperty()
  tpemisnfe: number | null;

  @ApiProperty()
  dtadiam: Date | null;

  @ApiProperty()
  hradiam: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  digital: string | null;

  @ApiProperty()
  totdispdesc: number | null;

  @ApiProperty()
  basepis: number | null;

  @ApiProperty()
  vlrpis: number | null;

  @ApiProperty()
  basepisst: number | null;

  @ApiProperty()
  vlrpisst: number | null;

  @ApiProperty()
  basecofins: number | null;

  @ApiProperty()
  vlrcofins: number | null;

  @ApiProperty()
  basecofinsst: number | null;

  @ApiProperty()
  vlrcofinsst: number | null;

  @ApiProperty()
  vlrroyalt: number | null;

  @ApiProperty()
  nrocaixa: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numregdpec: string | null;

  @ApiProperty()
  dhregdpec: Date | null;

  @ApiProperty()
  tpligacao: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codgrupotensao: string | null;

  @ApiProperty()
  tpassinante: number | null;

  @ApiProperty()
  vlrindeniz: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  marca: string | null;

  @ApiProperty()
  tipoptagjnfe: number | null;

  @ApiProperty()
  tpemisnfse: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numnfse: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  statusnfse: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  ufembarq: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  locembarq: string | null;

  @ApiProperty()
  nurem: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  retdatacritica: string | null;

  @ApiProperty()
  qtdbatidas: number | null;

  @ApiProperty()
  percpureza: number | null;

  @ApiProperty()
  percgermin: number | null;

  @ApiProperty()
  fretevlrbruto: number | null;

  @ApiProperty()
  fretevlrdesc: number | null;

  @ApiProperty()
  fretepercdesc: number | null;

  @ApiProperty()
  fretevlrimp: number | null;

  @ApiProperty()
  fretevlrjur: number | null;

  @ApiProperty()
  fretevlrpago: number | null;

  @ApiProperty()
  numpedido: number | null;

  @ApiProperty()
  vlrindenizdist: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numpedido2: string | null;

  @ApiProperty()
  dtref: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  agrupbol: string | null;

  @ApiProperty()
  fretevlrnegoc: number | null;

  @ApiProperty()
  codprodpermuta: number | null;

  @ApiProperty()
  nrogar: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  md5Paf: string | null;

  @ApiProperty()
  codmoddocnota: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  cpfcnpjadquirente: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  nomeadquirente: string | null;

  @ApiProperty()
  vlrsacadolar: number | null;

  @ApiProperty()
  numcoo: number | null;

  @ApiProperty()
  ordemcargaant: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tpambnfe: string | null;

  @ApiProperty()
  przmed: number | null;

  @ApiProperty()
  dtref2: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  vlrliqitemnfe: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  clascons: string | null;

  @ApiProperty()
  numform: number | null;

  @ApiProperty()
  dtref3: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  produetloc: string | null;

  @ApiProperty()
  vlrstextranotatot: number | null;

  @ApiProperty()
  nutranemp: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  sitespecialresp: string | null;

  @ApiProperty()
  dtentsaiinfo: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  exigeissqn: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  regesptribut: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  motnaoreterissqn: string | null;

  @ApiProperty()
  dtremret: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  libconf: string | null;

  @ApiProperty()
  nuconfatual: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  statusxtrategie: string | null;

  @ApiProperty()
  vlrfretecalc: number | null;

  @ApiProperty()
  vlrjurodist: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  notaempenho: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  pesobrutomanual: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  pesoliquimanual: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  cancelado: string | null;

  @ApiProperty()
  nupca: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  indpresnfce: string | null;

  @ApiProperty()
  m3: number | null;

  @ApiProperty()
  vlrtotliqitemmoe: number | null;

  @ApiProperty()
  vlrdesctotitemmoe: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  chavecte: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  prodpred: string | null;

  @ApiProperty()
  tpemiscte: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tpambcte: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  lotacao: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  statuscte: string | null;

  @ApiProperty()
  numaleatoriocte: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numprotoccte: string | null;

  @ApiProperty()
  dhprotoccte: Date | null;

  @ApiProperty()
  nulotecte: number | null;

  @ApiProperty()
  dtdeclara: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  situacaocte: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  ctelotacao: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codobra: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codart: string | null;

  @ApiProperty()
  idiproc: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  viatransp: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipprocimp: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  cnpjadquirente: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  ufadquirente: string | null;

  @ApiProperty()
  nunotasub: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  chavenfse: string | null;

  @ApiProperty()
  dhemissepec: Date | null;

  @ApiProperty()
  vlricmsdifaldest: number | null;

  @ApiProperty()
  vlricmsdifalrem: number | null;

  @ApiProperty()
  vlricmsfcp: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  modentrega: string | null;

  @ApiProperty()
  ciot: number | null;

  @ApiProperty()
  vlrfretetotal: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  fusoemissepec: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  chavenferef: string | null;

  @ApiProperty()
  vlrdescrat: number | null;

  @ApiProperty()
  seqconfirma: number | null;

  @ApiProperty()
  codcontatoentrega: number | null;

  @ApiProperty()
  codcidorigem: number | null;

  @ApiProperty({ type: () => TsicidResponseDto, nullable: true })
  cidadeOrigem: TsicidResponseDto | null;

  @ApiProperty()
  codciddestino: number | null;

  @ApiProperty({ type: () => TsicidResponseDto, nullable: true })
  cidadeDestino: TsicidResponseDto | null;

  @ApiProperty()
  codcidentrega: number | null;

  @ApiProperty()
  coduforigem: number | null;

  @ApiProperty()
  codufdestino: number | null;

  @ApiProperty()
  codufentrega: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  classificms: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codrastreamentoect: string | null;

  @ApiProperty()
  nuodp: number | null;

  @ApiProperty()
  nupedfrete: number | null;

  @ApiProperty()
  codcidprest: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  formpgtcte: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tpambnfse: string | null;

  @ApiProperty()
  percdescfob: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  termacordnota: string | null;

  @ApiProperty()
  vlrdescqtd: number | null;

  @ApiProperty()
  vlricmsfcpint: number | null;

  @ApiProperty()
  vlrstfcpint: number | null;

  @ApiProperty()
  vlrstfcpintant: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  cteglobal: string | null;

  @ApiProperty()
  vlrcargaaverb: number | null;

  @ApiProperty()
  nucfr: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  nfedevrecusa: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  agrupfinnota: string | null;

  @ApiProperty()
  vlrprestafrmm: number | null;

  @ApiProperty()
  vlrafrmm: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  idnavio: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  irinnavio: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  direcaoviag: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  idbalsa01: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  idbalsa02: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  idbalsa03: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  confirmnotafat: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  permaltercentral: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  finalizadofox: string | null;

  @ApiProperty()
  vlrrepredtotsemdesc: number | null;

  @ApiProperty()
  numcupomeconect: number | null;

  @ApiProperty()
  timnufinorig: number | null;

  @ApiProperty()
  timcontratovenda: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  timorigem: string | null;

  @ApiProperty()
  timcontratoltv: number | null;

  @ApiProperty()
  timnunotamod: number | null;

  @ApiProperty()
  dtextempk280: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  latitude: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  longitude: string | null;

  @ApiProperty()
  coddocarrecad: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numdocarrecad: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  premiacaoestadual: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  nfseid: string | null;

  @ApiProperty()
  codparcdepo: number | null;

  @ApiProperty()
  vlrfethab: number | null;

  @ApiProperty()
  codcheckout: number | null;

  @ApiProperty()
  baseicmsat: number | null;

  @ApiProperty()
  vlricmsat: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  disdesautimpemb: string | null;

  @ApiProperty()
  valordesonpiscofins: number | null;

  @ApiProperty()
  iddescparceria: number | null;

  @ApiProperty()
  vlrdescparceria: number | null;

  @ApiProperty()
  clienteidparceria: number | null;

  @ApiProperty()
  idpontuacaoparceria: number | null;

  @ApiProperty()
  nunotaorigcorte: number | null;

  @ApiProperty()
  baseicmsstfrete: number | null;

  @ApiProperty()
  icmsstfrete: number | null;

  @ApiProperty()
  vlrrepredst: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  intermed: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  fistel: string | null;

  @ApiProperty()
  numcstc: number | null;

  @ApiProperty()
  qtdusu: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numtermtel: string | null;

  @ApiProperty()
  tipclienteservcom: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  md5Modcomtel: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  indnegmodal: string | null;

  @ApiProperty()
  codprodpred: number | null;

  @ApiProperty()
  nuoscab: number | null;

  @ApiProperty()
  dthrinfracao: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  averbadotms: string | null;

  @ApiProperty()
  codaft: number | null;

  @ApiProperty()
  dhaltertms: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipoviagem: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  notaporpedidopdv: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adDescontafunc: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adStatusproposta: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adMotivoperda: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adMotivooutros: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adAlimentacao: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adCombustivel: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adTransporte: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adHospedagem: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adSinaleiro: string | null;

  @ApiProperty()
  adDtlimite: Date | null;

  @ApiProperty()
  sumvlriioutnota: number | null;

  @ApiProperty()
  somicmsnfenac: number | null;

  @ApiProperty()
  adNunotareqorig: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  retornoequipfiscal: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  statuscfe: string | null;

  @ApiProperty()
  sompiscofnfenac: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adNumpedcomp: string | null;

  @ApiProperty()
  adDtpedcomp: Date | null;

  @ApiProperty()
  adVlrpedcomp: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adObsfin: string | null;

  @ApiProperty()
  adNroproposta: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adAtualizareq: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adOriginalreq: string | null;

  @ApiProperty()
  adVlrkm: number | null;

  @ApiProperty()
  adVlrfretesec: number | null;

  @ApiProperty()
  adPrazofrete: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adFormapgtofrete: string | null;

  @ApiProperty()
  nurecebimento: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  retgerwms: string | null;

  @ApiProperty()
  nunotarec: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adLocalexec: string | null;

  @ApiProperty()
  dhviagem: Date | null;

  @ApiProperty()
  nusessao: number | null;

  @ApiProperty()
  tpfretamento: number | null;

  @ApiProperty()
  dtescrcont: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  modrecebpdvweb: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  chavecteref: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adPrioridade: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numprotocincte: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  serienfse: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  histconfig: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adResponsavelsetor: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  chvnfeineref: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adExibedash: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  caracser: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  caracad: string | null;

  @ApiProperty()
  somdespadunfenac: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numprotocinnfe: string | null;

  @ApiProperty()
  vlrrepterc: number;

  @ApiProperty()
  adDtfinaliza: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  serieguia: string | null;

  @ApiProperty()
  numguia: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  ufemissao: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  cpfresptec: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipoguia: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numreceitagro: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  chavesinief1324: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  chavenfcom: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numprotocnfcom: string | null;

  @ApiProperty()
  nulotenfcom: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  statusnfcom: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tpambnfcom: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  situacaonfcom: string | null;

  @ApiProperty()
  tpemisnfcom: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tpretiss: string | null;

  @ApiProperty()
  adHorimetro: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adMotivoabast: string | null;

  @ApiProperty()
  adDtinicioserv: Date | null;

  @ApiProperty()
  ufemiss: number | null;

  @ApiProperty({ type: () => TsiusuResponseDto, nullable: true })
  adCodususolicit: TsiusuResponseDto | null;

  @ApiProperty({ type: () => TsiusuResponseDto, nullable: true })
  codusucomprador: TsiusuResponseDto | null;

  @ApiProperty({ type: () => TsiusuResponseDto, nullable: true })
  codusuinc: TsiusuResponseDto | null;

  @ApiProperty({ type: () => TsiusuResponseDto, nullable: true })
  adCodusucomp: TsiusuResponseDto | null;

  @ApiProperty({ type: () => TsiusuResponseDto, nullable: true })
  codusu2: TsiusuResponseDto | null;

  @ApiProperty({ type: () => [TgfiteResponseDto] })
  tgfites: TgfiteResponseDto[];
}
