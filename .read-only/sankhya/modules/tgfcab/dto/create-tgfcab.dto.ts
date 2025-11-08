import { ApiProperty } from '@nestjs/swagger';

export class CreateTgfcabDto {
  @ApiProperty()
  nunota: number;

  @ApiProperty()
  codemp: number;

  @ApiProperty()
  numnota: number;

  @ApiProperty()
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

  @ApiProperty()
  codcontato: number | null;

  @ApiProperty()
  rateado: string;

  @ApiProperty()
  codtipoper: number;

  @ApiProperty()
  dhtipoper: Date;

  @ApiProperty()
  tipmov: string;

  @ApiProperty()
  numcotacao: number | null;

  @ApiProperty()
  comissao: number;

  @ApiProperty()
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
  tipipiemb: string;

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
  tipfrete: string;

  @ApiProperty()
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
  pendente: string;

  @ApiProperty()
  baseicms: number | null;

  @ApiProperty()
  vlricms: number | null;

  @ApiProperty()
  baseipi: number | null;

  @ApiProperty()
  vlripi: number | null;

  @ApiProperty()
  issretido: string;

  @ApiProperty()
  baseiss: number | null;

  @ApiProperty()
  vlriss: number | null;

  @ApiProperty()
  codusu: number;

  @ApiProperty()
  aprovado: string;

  @ApiProperty()
  vlrirf: number | null;

  @ApiProperty()
  irfretido: string;

  @ApiProperty()
  statusnota: string;

  @ApiProperty()
  comger: number | null;

  @ApiProperty()
  dtalter: Date;

  @ApiProperty()
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
  localcoleta: string | null;

  @ApiProperty()
  localentrega: string | null;

  @ApiProperty()
  vlrmercadoria: number | null;

  @ApiProperty()
  peso: number | null;

  @ApiProperty()
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
  naturezaoperdes: string | null;

  @ApiProperty()
  serienfdes: string | null;

  @ApiProperty()
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
  placa: string | null;

  @ApiProperty()
  pesobruto: number | null;

  @ApiProperty()
  hrentsai: Date | null;

  @ApiProperty()
  antt: string | null;

  @ApiProperty()
  lacres: string | null;

  @ApiProperty()
  danfe: number | null;

  @ApiProperty()
  chavenfe: string | null;

  @ApiProperty()
  numeracaovolumes: string | null;

  @ApiProperty()
  dtenviopmb: Date | null;

  @ApiProperty()
  tipnotapmb: string | null;

  @ApiProperty()
  numaleatorio: number | null;

  @ApiProperty()
  numprotoc: string | null;

  @ApiProperty()
  dhprotoc: Date | null;

  @ApiProperty()
  dtenvsuf: Date | null;

  @ApiProperty()
  statusnfe: string | null;

  @ApiProperty()
  tpemisnfe: number | null;

  @ApiProperty()
  dtadiam: Date | null;

  @ApiProperty()
  hradiam: number | null;

  @ApiProperty()
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
  numregdpec: string | null;

  @ApiProperty()
  dhregdpec: Date | null;

  @ApiProperty()
  tpligacao: number | null;

  @ApiProperty()
  codgrupotensao: string | null;

  @ApiProperty()
  tpassinante: number | null;

  @ApiProperty()
  vlrindeniz: number | null;

  @ApiProperty()
  marca: string | null;

  @ApiProperty()
  tipoptagjnfe: number | null;

  @ApiProperty()
  tpemisnfse: number | null;

  @ApiProperty()
  numnfse: string | null;

  @ApiProperty()
  statusnfse: string | null;

  @ApiProperty()
  ufembarq: string | null;

  @ApiProperty()
  locembarq: string | null;

  @ApiProperty()
  nurem: number | null;

  @ApiProperty()
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
  numpedido2: string | null;

  @ApiProperty()
  dtref: Date | null;

  @ApiProperty()
  agrupbol: string | null;

  @ApiProperty()
  fretevlrnegoc: number | null;

  @ApiProperty()
  codprodpermuta: number | null;

  @ApiProperty()
  nrogar: number | null;

  @ApiProperty()
  md5Paf: string | null;

  @ApiProperty()
  codmoddocnota: number | null;

  @ApiProperty()
  cpfcnpjadquirente: string | null;

  @ApiProperty()
  nomeadquirente: string | null;

  @ApiProperty()
  vlrsacadolar: number | null;

  @ApiProperty()
  numcoo: number | null;

  @ApiProperty()
  ordemcargaant: number | null;

  @ApiProperty()
  tpambnfe: string | null;

  @ApiProperty()
  przmed: number | null;

  @ApiProperty()
  dtref2: Date | null;

  @ApiProperty()
  vlrliqitemnfe: string | null;

  @ApiProperty()
  clascons: string | null;

  @ApiProperty()
  numform: number | null;

  @ApiProperty()
  dtref3: Date | null;

  @ApiProperty()
  produetloc: string | null;

  @ApiProperty()
  vlrstextranotatot: number | null;

  @ApiProperty()
  nutranemp: number | null;

  @ApiProperty()
  sitespecialresp: string | null;

  @ApiProperty()
  dtentsaiinfo: Date | null;

  @ApiProperty()
  exigeissqn: string | null;

  @ApiProperty()
  regesptribut: string | null;

  @ApiProperty()
  motnaoreterissqn: string | null;

  @ApiProperty()
  dtremret: Date | null;

  @ApiProperty()
  libconf: string | null;

  @ApiProperty()
  nuconfatual: number | null;

  @ApiProperty()
  statusxtrategie: string | null;

  @ApiProperty()
  vlrfretecalc: number | null;

  @ApiProperty()
  vlrjurodist: number | null;

  @ApiProperty()
  notaempenho: string | null;

  @ApiProperty()
  pesobrutomanual: string | null;

  @ApiProperty()
  pesoliquimanual: string | null;

  @ApiProperty()
  cancelado: string | null;

  @ApiProperty()
  nupca: number | null;

  @ApiProperty()
  indpresnfce: string | null;

  @ApiProperty()
  m3: number | null;

  @ApiProperty()
  vlrtotliqitemmoe: number | null;

  @ApiProperty()
  vlrdesctotitemmoe: number;

  @ApiProperty()
  chavecte: string | null;

  @ApiProperty()
  prodpred: string | null;

  @ApiProperty()
  tpemiscte: number | null;

  @ApiProperty()
  tpambcte: string | null;

  @ApiProperty()
  lotacao: string | null;

  @ApiProperty()
  statuscte: string | null;

  @ApiProperty()
  numaleatoriocte: number | null;

  @ApiProperty()
  numprotoccte: string | null;

  @ApiProperty()
  dhprotoccte: Date | null;

  @ApiProperty()
  nulotecte: number | null;

  @ApiProperty()
  dtdeclara: Date | null;

  @ApiProperty()
  situacaocte: string | null;

  @ApiProperty()
  ctelotacao: string | null;

  @ApiProperty()
  codobra: string | null;

  @ApiProperty()
  codart: string | null;

  @ApiProperty()
  idiproc: number | null;

  @ApiProperty()
  viatransp: string | null;

  @ApiProperty()
  tipprocimp: string | null;

  @ApiProperty()
  cnpjadquirente: string | null;

  @ApiProperty()
  ufadquirente: string | null;

  @ApiProperty()
  nunotasub: number | null;

  @ApiProperty()
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
  modentrega: string | null;

  @ApiProperty()
  ciot: number | null;

  @ApiProperty()
  vlrfretetotal: number | null;

  @ApiProperty()
  fusoemissepec: string | null;

  @ApiProperty()
  chavenferef: string | null;

  @ApiProperty()
  vlrdescrat: number | null;

  @ApiProperty()
  seqconfirma: number | null;

  @ApiProperty()
  codcontatoentrega: number | null;

  @ApiProperty()
  codcidorigem: number | null;

  @ApiProperty()
  codciddestino: number | null;

  @ApiProperty()
  codcidentrega: number | null;

  @ApiProperty()
  coduforigem: number | null;

  @ApiProperty()
  codufdestino: number | null;

  @ApiProperty()
  codufentrega: number | null;

  @ApiProperty()
  classificms: string | null;

  @ApiProperty()
  codrastreamentoect: string | null;

  @ApiProperty()
  nuodp: number | null;

  @ApiProperty()
  nupedfrete: number | null;

  @ApiProperty()
  codcidprest: number | null;

  @ApiProperty()
  formpgtcte: string | null;

  @ApiProperty()
  tpambnfse: string | null;

  @ApiProperty()
  percdescfob: number | null;

  @ApiProperty()
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
  cteglobal: string | null;

  @ApiProperty()
  vlrcargaaverb: number | null;

  @ApiProperty()
  nucfr: number | null;

  @ApiProperty()
  nfedevrecusa: string | null;

  @ApiProperty()
  agrupfinnota: string | null;

  @ApiProperty()
  vlrprestafrmm: number | null;

  @ApiProperty()
  vlrafrmm: number | null;

  @ApiProperty()
  idnavio: string | null;

  @ApiProperty()
  irinnavio: string | null;

  @ApiProperty()
  direcaoviag: string | null;

  @ApiProperty()
  idbalsa01: string | null;

  @ApiProperty()
  idbalsa02: string | null;

  @ApiProperty()
  idbalsa03: string | null;

  @ApiProperty()
  confirmnotafat: string | null;

  @ApiProperty()
  permaltercentral: string | null;

  @ApiProperty()
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
  timorigem: string | null;

  @ApiProperty()
  timcontratoltv: number | null;

  @ApiProperty()
  timnunotamod: number | null;

  @ApiProperty()
  dtextempk280: Date | null;

  @ApiProperty()
  latitude: string | null;

  @ApiProperty()
  longitude: string | null;

  @ApiProperty()
  coddocarrecad: number | null;

  @ApiProperty()
  numdocarrecad: string | null;

  @ApiProperty()
  premiacaoestadual: string | null;

  @ApiProperty()
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
  intermed: string | null;

  @ApiProperty()
  fistel: string | null;

  @ApiProperty()
  numcstc: number | null;

  @ApiProperty()
  qtdusu: number | null;

  @ApiProperty()
  numtermtel: string | null;

  @ApiProperty()
  tipclienteservcom: number | null;

  @ApiProperty()
  md5Modcomtel: string | null;

  @ApiProperty()
  indnegmodal: string | null;

  @ApiProperty()
  codprodpred: number | null;

  @ApiProperty()
  nuoscab: number | null;

  @ApiProperty()
  dthrinfracao: Date | null;

  @ApiProperty()
  averbadotms: string | null;

  @ApiProperty()
  codaft: number | null;

  @ApiProperty()
  dhaltertms: Date | null;

  @ApiProperty()
  tipoviagem: string | null;

  @ApiProperty()
  notaporpedidopdv: string;

  @ApiProperty()
  adDescontafunc: string | null;

  @ApiProperty()
  adStatusproposta: string | null;

  @ApiProperty()
  adMotivoperda: string | null;

  @ApiProperty()
  adMotivooutros: string | null;

  @ApiProperty()
  adAlimentacao: string | null;

  @ApiProperty()
  adCombustivel: string | null;

  @ApiProperty()
  adTransporte: string | null;

  @ApiProperty()
  adHospedagem: string | null;

  @ApiProperty()
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
  retornoequipfiscal: string | null;

  @ApiProperty()
  statuscfe: string | null;

  @ApiProperty()
  sompiscofnfenac: number | null;

  @ApiProperty()
  adNumpedcomp: string | null;

  @ApiProperty()
  adDtpedcomp: Date | null;

  @ApiProperty()
  adVlrpedcomp: number | null;

  @ApiProperty()
  adObsfin: string | null;

  @ApiProperty()
  adNroproposta: number | null;

  @ApiProperty()
  adAtualizareq: string | null;

  @ApiProperty()
  adOriginalreq: string | null;

  @ApiProperty()
  adVlrkm: number | null;

  @ApiProperty()
  adVlrfretesec: number | null;

  @ApiProperty()
  adPrazofrete: number | null;

  @ApiProperty()
  adFormapgtofrete: string | null;

  @ApiProperty()
  nurecebimento: number | null;

  @ApiProperty()
  retgerwms: string | null;

  @ApiProperty()
  nunotarec: number | null;

  @ApiProperty()
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
  modrecebpdvweb: string | null;

  @ApiProperty()
  chavecteref: string | null;

  @ApiProperty()
  adPrioridade: string | null;

  @ApiProperty()
  numprotocincte: string | null;

  @ApiProperty()
  serienfse: string | null;

  @ApiProperty()
  histconfig: string | null;

  @ApiProperty()
  adResponsavelsetor: string | null;

  @ApiProperty()
  chvnfeineref: string | null;

  @ApiProperty()
  adExibedash: string | null;

  @ApiProperty()
  caracser: string | null;

  @ApiProperty()
  caracad: string | null;

  @ApiProperty()
  somdespadunfenac: number | null;

  @ApiProperty()
  numprotocinnfe: string | null;

  @ApiProperty()
  vlrrepterc: number;

  @ApiProperty()
  adDtfinaliza: Date | null;

  @ApiProperty()
  serieguia: string | null;

  @ApiProperty()
  numguia: number | null;

  @ApiProperty()
  ufemissao: string | null;

  @ApiProperty()
  cpfresptec: string | null;

  @ApiProperty()
  tipoguia: string | null;

  @ApiProperty()
  numreceitagro: string | null;

  @ApiProperty()
  chavesinief1324: string | null;

  @ApiProperty()
  chavenfcom: string | null;

  @ApiProperty()
  numprotocnfcom: string | null;

  @ApiProperty()
  nulotenfcom: number | null;

  @ApiProperty()
  statusnfcom: string | null;

  @ApiProperty()
  tpambnfcom: string | null;

  @ApiProperty()
  situacaonfcom: string | null;

  @ApiProperty()
  tpemisnfcom: number | null;

  @ApiProperty()
  tpretiss: string | null;

  @ApiProperty()
  adHorimetro: number | null;

  @ApiProperty()
  adMotivoabast: string | null;

  @ApiProperty()
  adDtinicioserv: Date | null;

  @ApiProperty()
  ufemiss: number | null;
}
