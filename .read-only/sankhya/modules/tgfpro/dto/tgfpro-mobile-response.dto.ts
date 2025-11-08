import { ApiProperty } from '@nestjs/swagger';

export class TgfproMobileResponseDto {
  @ApiProperty()
  RN: number;

  @ApiProperty()
  CODPROD: number;

  @ApiProperty()
  DESCRPROD: string;

  @ApiProperty()
  CODGRUPOPROD: number;

  @ApiProperty()
  DESCRGRUPOPROD: string;

  @ApiProperty({ nullable: true })
  LOCALIZACAO: string | null;

  @ApiProperty({ nullable: true })
  ESTMIN: number | null;

  @ApiProperty({ nullable: true })
  ESTMAX: number | null;

  @ApiProperty({ nullable: true })
  CODEMP: number | null;

  @ApiProperty({ nullable: true })
  CODLOCAL: number | null;

  @ApiProperty({ nullable: true })
  DESCRLOCAL: string | null;

  @ApiProperty({ nullable: true })
  CONTROLE: string | null;

  @ApiProperty()
  ESTOQUE: number;

  @ApiProperty()
  RESERVADO: number;

  @ApiProperty()
  DISPONIVEL: number;

  @ApiProperty()
  Necessidade_de_compra: number;

  @ApiProperty()
  STATUS_ESTOQUE: string;

  @ApiProperty()
  codusu: number;
}
