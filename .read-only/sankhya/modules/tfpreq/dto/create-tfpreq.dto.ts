import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateTfpreqDto {
  @ApiProperty()
  @IsNumber()
  codfunc: number;

  @ApiProperty()
  @IsNumber()
  codemp: number;

  @ApiProperty()
  @IsNumber()
  status: number;

  @ApiProperty()
  @IsNumber()
  prioridade: number;

  @ApiProperty()
  @IsDateString()
  dtlimite: Date;

  @ApiProperty()
  @IsString()
  observacao: string;

  @ApiProperty()
  @IsString()
  origemtipo: string;

  @ApiProperty()
  @IsNumber()
  origemid: number;

  @ApiProperty()
  @IsNumber()
  impacto: number;

  @ApiProperty()
  @IsString()
  eintegracao: string;

  @ApiProperty()
  @IsNumber()
  codusu: number;
}
