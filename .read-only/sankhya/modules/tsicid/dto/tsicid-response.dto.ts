import { ApiProperty } from '@nestjs/swagger';
import { TsiufsResponseDto } from '../../tsiufs/dto/tsiufs-response.dto';

export class TsicidResponseDto {
  @ApiProperty()
  codcid: number;

  @ApiProperty({ nullable: true })
  uf: number | null;

  @ApiProperty()
  nomecid: string;

  @ApiProperty()
  ddd: string | null;

  @ApiProperty()
  distancia: number | null;

  @ApiProperty()
  dtalter: Date;

  @ApiProperty()
  descricaocorreio: string | null;

  @ApiProperty()
  seqentrega: number | null;

  @ApiProperty()
  populacao: number | null;

  @ApiProperty()
  codmunfis: number | null;

  @ApiProperty()
  vlrfretemin: number | null;

  @ApiProperty()
  vlrfreteton: number | null;

  @ApiProperty()
  tipofrete: string;

  @ApiProperty()
  vlrfretekm: number | null;

  @ApiProperty()
  vlrtaxaent: number | null;

  @ApiProperty()
  codmunsiafi: number | null;

  @ApiProperty()
  codmundms: number | null;

  @ApiProperty()
  vendamin: number | null;

  @ApiProperty()
  latitude: string | null;

  @ApiProperty()
  longitude: string | null;

  @ApiProperty()
  codmundief: number | null;

  @ApiProperty()
  qtddiassub: number;

  @ApiProperty()
  qtdsub: number;

  @ApiProperty()
  temsubstitnfse: string;

  @ApiProperty()
  tipcancnfse: string;

  @ApiProperty()
  vlrlimcancnfse: number | null;

  @ApiProperty()
  motcancsubnfse: string | null;

  @ApiProperty()
  metarredvlriss: string | null;

  @ApiProperty()
  maxnotalotenfse: number | null;

  @ApiProperty()
  nfsetemplatesubst: string;

  @ApiProperty()
  tipocnae: number | null;

  @ApiProperty()
  nuversao: number | null;

  @ApiProperty()
  linkagua: string | null;

  @ApiProperty()
  linkenergia: string | null;

  @ApiProperty()
  linkiptu: string | null;

  @ApiProperty()
  noformatlc116: string | null;

  @ApiProperty()
  cnaefullnfse: string | null;

  @ApiProperty()
  noinscmunpar: string | null;

  @ApiProperty()
  gercodnatissjson: string | null;

  @ApiProperty()
  envitenssepjson: string | null;

  @ApiProperty()
  qtdmaxenvitensjson: number | null;

  @ApiProperty()
  obsjsonenotas: string | null;

  @ApiProperty()
  permcancnfsesubstit: string | null;

  @ApiProperty()
  jsonsemalidenmun: string | null;

  @ApiProperty()
  vminretencaoiss: number | null;

  @ApiProperty()
  actcanexnt: string | null;

  @ApiProperty()
  remzeroesquerdlc116: string | null;

  @ApiProperty()
  envfpjson: string | null;

  @ApiProperty()
  infqtdvlrunijson: string | null;

  @ApiProperty()
  envmulemailjson: string | null;

  @ApiProperty()
  atunuversao: string | null;

  @ApiProperty()
  envtagdesconjson: string | null;

  @ApiProperty()
  gernunfseinfcpm: string | null;

  @ApiProperty()
  mascaralc116: string | null;

  @ApiProperty()
  gercnaemultjson: string | null;

  @ApiProperty()
  regesptrib: string | null;

  @ApiProperty()
  envcodigonbsjson: string | null;
}
