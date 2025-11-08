import { ApiProperty } from '@nestjs/swagger';

export class TsiufsResponseDto {
  @ApiProperty()
  coduf: number;

  @ApiProperty()
  uf: string;

  @ApiProperty()
  descricao?: string | null;

  @ApiProperty()
  codibge?: number | null;

  @ApiProperty()
  codstgnre?: string | null;

  @ApiProperty()
  coddetgnre?: number | null;

  @ApiProperty()
  codprodgnre?: number | null;

  @ApiProperty()
  protocoloconvenio?: string | null;

  @ApiProperty()
  valsitcadsefaz: string;

  @ApiProperty()
  estornonfe: string;

  @ApiProperty()
  gerinfcampadicgnre?: string | null;

  @ApiProperty()
  codcampoextragnre?: number | null;

  @ApiProperty()
  valorcampoextra?: string | null;

  @ApiProperty()
  versaognre?: string | null;

  @ApiProperty()
  codfcpstgnre?: number | null;

  @ApiProperty()
  usawebservicegnre?: string | null;

  @ApiProperty()
  tipoinfo?: string | null;

  @ApiProperty()
  tipodoc?: number | null;

  @ApiProperty()
  codcampoextragnre2?: number | null;

  @ApiProperty()
  codrecdime?: string | null;

  @ApiProperty()
  codclsvencdime?: string | null;

  @ApiProperty()
  codrecdimfcpst?: string | null;

  @ApiProperty()
  codclsvencdimefcpst?: string | null;

  @ApiProperty()
  vlrpersgnre?: string | null;

  @ApiProperty()
  tabprecpmc?: number | null;

  @ApiProperty()
  tabprecopf?: number | null;

  @ApiProperty()
  codpais?: number;

  @ApiProperty()
  tiptitgnrefcpst?: number;

  @ApiProperty()
  codparcsecrecest?: number;

  @ApiProperty()
  coduf2?: number;
}
