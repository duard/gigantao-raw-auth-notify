import { ApiProperty } from '@nestjs/swagger';
import { TgfproResponseDto } from '../../tgfpro/dto/tgfpro-response.dto';
import { Transform } from 'class-transformer';
import { trimEnd } from 'src/utils/string.utils';

export class TgfiteResponseDto {
  @ApiProperty({ nullable: true })
  nutab: number | null;

  @ApiProperty()
  nunota: number;

  @ApiProperty()
  sequencia: number;

  @ApiProperty()
  codemp: number;

  @ApiProperty()
  codprod: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  controle: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  usoprod: string;

  @ApiProperty()
  qtdneg: number;

  @ApiProperty()
  qtdentregue: number;

  @ApiProperty()
  qtdconferida: number;

  @ApiProperty({ nullable: true })
  vlrunit: number | null;

  @ApiProperty({ nullable: true })
  vlrtot: number | null;

  @ApiProperty({ nullable: true })
  vlrcus: number | null;

  @ApiProperty()
  baseipi: number;

  @ApiProperty()
  vlripi: number;

  @ApiProperty({ nullable: true })
  aliqipi: number | null;

  @ApiProperty()
  baseicms: number;

  @ApiProperty({ nullable: true })
  aliqicms: number | null;

  @ApiProperty()
  vlricms: number;

  @ApiProperty()
  vlrdesc: number;

  @ApiProperty()
  basesubstit: number;

  @ApiProperty()
  vlrsubst: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  pendente: string;

  @ApiProperty({ nullable: true })
  codtrib: number | null;

  @ApiProperty()
  atualestoque: number;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  observacao: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  reserva: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  statusnota: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  faturar: string | null;

  @ApiProperty()
  vlrrepred: number;

  @ApiProperty()
  vlrdescbonif: number;

  @ApiProperty()
  percdesc: number;

  @ApiProperty({ nullable: true })
  m3: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adMotBonifica: string | null;

  @ApiProperty({ nullable: true })
  adDescmax: number | null;

  @ApiProperty({ nullable: true })
  aliqicmsred: number | null;

  @ApiProperty({ nullable: true })
  dtalter: Date | null;

  @ApiProperty({ nullable: true })
  custo: number | null;

  @ApiProperty({ nullable: true })
  basesubstsemred: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  solcompra: string | null;

  @ApiProperty({ nullable: true })
  codtribiss: number | null;

  @ApiProperty({ nullable: true })
  codcfps: number | null;

  @ApiProperty({ nullable: true })
  aliqiss: number | null;

  @ApiProperty({ nullable: true })
  qtdformula: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  atualestterc: string | null;

  @ApiProperty({ nullable: true })
  percdescbonif: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  terceiros: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  endimagem: string | null;

  @ApiProperty({ nullable: true })
  altura: number | null;

  @ApiProperty({ nullable: true })
  largura: number | null;

  @ApiProperty({ nullable: true })
  espessura: number | null;

  @ApiProperty({ nullable: true })
  qtdpeca: number | null;

  @ApiProperty({ nullable: true })
  precobase: number | null;

  @ApiProperty({ nullable: true })
  vlracrescdesc: number | null;

  @ApiProperty({ nullable: true })
  vlrretencao: number | null;

  @ApiProperty({ nullable: true })
  cstipi: number | null;

  @ApiProperty({ nullable: true })
  perccom: number | null;

  @ApiProperty({ nullable: true })
  vlrcom: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  altpreco: string | null;

  @ApiProperty({ nullable: true })
  qtdfixada: number | null;

  @ApiProperty({ nullable: true })
  perccomger: number | null;

  @ApiProperty({ nullable: true })
  vlrcomger: number | null;

  @ApiProperty({ nullable: true })
  qtdwms: number | null;

  @ApiProperty({ nullable: true })
  basicmmod: number | null;

  @ApiProperty({ nullable: true })
  basicmstmod: number | null;

  @ApiProperty({ nullable: true })
  qtdfat: number | null;

  @ApiProperty({ nullable: true })
  basestufdest: number | null;

  @ApiProperty({ nullable: true })
  vlricmsufdest: number | null;

  @ApiProperty({ nullable: true })
  basestant: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  produtonfe: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  gtinnfe: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  gtintribnfe: string | null;

  @ApiProperty({ nullable: true })
  codpromo: number | null;

  @ApiProperty({ nullable: true })
  vlrpromo: number | null;

  @ApiProperty({ nullable: true })
  vlrliqprom: number | null;

  @ApiProperty({ nullable: true })
  precobaseqtd: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  retdatacritica: string | null;

  @ApiProperty({ nullable: true })
  percpureza: number | null;

  @ApiProperty({ nullable: true })
  percgermin: number | null;

  @ApiProperty({ nullable: true })
  nupromocao: number | null;

  @ApiProperty({ nullable: true })
  percdescprom: number | null;

  @ApiProperty({ nullable: true })
  vlrptopureza: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codantecipst: string | null;

  @ApiProperty({ nullable: true })
  numpedido: number | null;

  @ApiProperty({ nullable: true })
  seqpedido: number | null;

  @ApiProperty({ nullable: true })
  csosn: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numpedido2: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  seqpedido2: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  statuslote: string | null;

  @ApiProperty({ nullable: true })
  qtdvol: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  serieinicial: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  seriefinal: string | null;

  @ApiProperty({ nullable: true })
  dtinicio: Date | null;

  @ApiProperty({ nullable: true })
  hrinicio: number | null;

  @ApiProperty({ nullable: true })
  hrfim: number | null;

  @ApiProperty({ nullable: true })
  vlrunitdolar: number | null;

  @ApiProperty({ nullable: true })
  peso: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  md5Paf: string | null;

  @ApiProperty({ nullable: true })
  baseiss: number | null;

  @ApiProperty({ nullable: true })
  vlriss: number | null;

  @ApiProperty({ nullable: true })
  vlrtroca: number | null;

  @ApiProperty({ nullable: true })
  variacaofcp: number | null;

  @ApiProperty({ nullable: true })
  dtfim: Date | null;

  @ApiProperty({ nullable: true })
  tempogasto: number | null;

  @ApiProperty({ nullable: true })
  desviopadrao: number | null;

  @ApiProperty({ nullable: true })
  perctroca: number | null;

  @ApiProperty({ nullable: true })
  percdescdigitado: number | null;

  @ApiProperty({ nullable: true })
  percdesctgfdes: number | null;

  @ApiProperty({ nullable: true })
  sequenciafiscal: number | null;

  @ApiProperty({ nullable: true })
  vlrdescdigitado: number | null;

  @ApiProperty({ nullable: true })
  percvc: number | null;

  @ApiProperty({ nullable: true })
  codmotdesoneraicms: number | null;

  @ApiProperty({ nullable: true })
  variacao: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  atualestindividual: string | null;

  @ApiProperty({ nullable: true })
  vlrstextranota: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  ulocetpaestind: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  origprod: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  nrseriereserva: string | null;

  @ApiProperty({ nullable: true })
  vlrunitloc: number | null;

  @ApiProperty({ nullable: true })
  vlricmsant: number | null;

  @ApiProperty({ nullable: true })
  basesubstitant: number | null;

  @ApiProperty({ nullable: true })
  vlrsubstant: number | null;

  @ApiProperty({ nullable: true })
  numeroos: number | null;

  @ApiProperty({ nullable: true })
  percdescbase: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  cancelado: string | null;

  @ApiProperty({ nullable: true })
  grupofat: number | null;

  @ApiProperty({ nullable: true })
  numcontrato: number | null;

  @ApiProperty({ nullable: true })
  idaliqicms: number | null;

  @ApiProperty()
  vlrunitmoe: number;

  @ApiProperty()
  vlrdescmoe: number;

  @ApiProperty()
  vlrtotmoe: number;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codvolparc: string | null;

  @ApiProperty({ nullable: true })
  codenqipi: number | null;

  @ApiProperty({ nullable: true })
  codespecst: number | null;

  @ApiProperty({ nullable: true })
  vlrdescrat: number | null;

  @ApiProperty({ nullable: true })
  basesubstitunitorig: number | null;

  @ApiProperty({ nullable: true })
  vlrsubstunitorig: number | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  geraproducao: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codagregacao: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  indescala: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  cnpjfabricante: string | null;

  @ApiProperty({ nullable: true })
  basestfcpintant: number | null;

  @ApiProperty({ nullable: true })
  vlrstfcpintant: number | null;

  @ApiProperty({ nullable: true })
  percstfcpintant: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codbenefnauf: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  origembusca: string | null;

  @ApiProperty({ nullable: true })
  produtopesquisado: number | null;

  @ApiProperty({ nullable: true })
  aliqstextranota: number | null;

  @ApiProperty({ nullable: true })
  basestextranota: number | null;

  @ApiProperty({ nullable: true })
  qtdtribexport: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codproinfo: string | null;

  @ApiProperty({ nullable: true })
  aliqstfcpstant: number | null;

  @ApiProperty({ nullable: true })
  vlrvendapromo: number | null;

  @ApiProperty({ nullable: true })
  vlrrepredsemdesc: number | null;

  @ApiProperty({ nullable: true })
  coddocarrecad: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numdocarrecad: string | null;

  @ApiProperty({ nullable: true })
  vlricmsdiferido: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tiposeparacao: string | null;

  @ApiProperty({ nullable: true })
  basecalcstextranota: number | null;

  @ApiProperty({ nullable: true })
  redbasest: number | null;

  @ApiProperty({ nullable: true })
  marglucro: number | null;

  @ApiProperty({ nullable: true })
  percredvlripi: number | null;

  @ApiProperty({ nullable: true })
  idaliqicmsdificms: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  tipentrega: string | null;

  @ApiProperty({ nullable: true })
  aliqfethab: number | null;

  @ApiProperty({ nullable: true })
  vlrfethab: number | null;

  @ApiProperty({ nullable: true })
  idaliqicmsat: number | null;

  @ApiProperty({ nullable: true })
  baseicmsat: number | null;

  @ApiProperty({ nullable: true })
  aliqicmsat: number | null;

  @ApiProperty({ nullable: true })
  aliqintericmsat: number | null;

  @ApiProperty({ nullable: true })
  vlricmsat: number | null;

  @ApiProperty({ nullable: true })
  iddescparceria: number | null;

  @ApiProperty({ nullable: true })
  vlrdescparceria: number | null;

  @ApiProperty({ nullable: true })
  percusaqudecpe: number | null;

  @ApiProperty({ nullable: true })
  vlrcusaqudecpe: number | null;

  @ApiProperty({ nullable: true })
  baseicmsstfrete: number | null;

  @ApiProperty({ nullable: true })
  icmsstfrete: number | null;

  @ApiProperty({ nullable: true })
  vlrrepredst: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codsit08Efd: string | null;

  @ApiProperty({ nullable: true })
  tiputilcom: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  unidade: string | null;

  @ApiProperty({ nullable: true })
  aliqfust: number | null;

  @ApiProperty({ nullable: true })
  basefust: number | null;

  @ApiProperty({ nullable: true })
  vlrfust: number | null;

  @ApiProperty({ nullable: true })
  aliqfunttel: number | null;

  @ApiProperty({ nullable: true })
  basefunttel: number | null;

  @ApiProperty({ nullable: true })
  vlrfunttel: number | null;

  @ApiProperty({ nullable: true })
  codmotdesonerast: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  controledesttms: string | null;

  @ApiProperty({ nullable: true })
  adVlrkm: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adAplicacao: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codbarrapdv: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adEmpreito: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adSituacaoprodcot: string | null;

  @ApiProperty({ nullable: true })
  percusaqudecpeest: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codfci: string | null;

  @ApiProperty({ nullable: true })
  adTag: number | null;

  @ApiProperty({ nullable: true })
  adDtfabricacao: Date | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adNucertificado: string | null;

  @ApiProperty({ nullable: true })
  codipi: number | null;

  @ApiProperty({ nullable: true })
  idaliqiss: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  indrepdes: string | null;

  @ApiProperty({ nullable: true })
  codnatrend: number | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adRatreabilidade: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  adMedidas: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  codigonfcom: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  inddevolucaonfcom: string;

  @ApiProperty({ type: () => TgfproResponseDto, nullable: true })
  produto: TgfproResponseDto | null;
}
