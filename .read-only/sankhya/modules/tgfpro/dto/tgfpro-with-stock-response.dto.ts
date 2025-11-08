import { ApiProperty } from '@nestjs/swagger';

export class TgfproWithStockResponseDto {
  @ApiProperty()
  RN: number;

  @ApiProperty()
  CODPROD: number;

  @ApiProperty()
  DESCRPROD: string;

  @ApiProperty({ nullable: true })
  MARCA: string | null;

  @ApiProperty({ nullable: true })
  REFERENCIA: string | null;

  @ApiProperty({ nullable: true })
  CARACTERISTICAS: string | null;

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
  CODUSU: number;

  @ApiProperty({ nullable: true })
  NOMEUSU: string | null;
}
