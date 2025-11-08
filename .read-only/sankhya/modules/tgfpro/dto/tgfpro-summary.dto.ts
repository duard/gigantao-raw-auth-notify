import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { trimEnd } from 'src/utils/string.utils';

export class TgfproSummaryDto {
  @ApiProperty()
  codprod: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  descrprod: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  referencia: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  compldesc: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  caracteristicas: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  marca: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  ativo: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  liscontest: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  titcontest: string | null;

  @ApiProperty()
  codgrupoprod: number;

  @ApiProperty({ nullable: true })
  descrgrupoprod: string | null;

  @ApiProperty({ nullable: true })
  estoque: number | null;

  @ApiProperty()
  pesobruto: number;

  @ApiProperty()
  pesoliq: number;

  @ApiProperty({ nullable: true })
  estmin: number | null;

  @ApiProperty({ nullable: true })
  estmax: number | null;

  @ApiProperty()
  dtalter: Date;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  unidade: string | null;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  ncm: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  controlado: string;

  @ApiProperty({ nullable: true })
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  controlmedic: string | null;

  @ApiProperty({ nullable: true })
  cnae: number | null;
}
