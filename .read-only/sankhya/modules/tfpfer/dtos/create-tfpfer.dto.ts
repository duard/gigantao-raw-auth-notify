import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { TfpferEntity } from '../../../entities/tFPFER.entity';

export class CreateTfpferDto extends TfpferEntity {
  @ApiProperty()
  codemp: number;
  @ApiProperty()
  codfunc: number;
  @ApiProperty()
  dtiniaqui: Date;
  @ApiProperty()
  dtfinaqui: Date;
  @ApiProperty()
  @IsOptional()
  dtprevista: Date;
  @ApiProperty()
  @IsOptional()
  dtsaida: Date;
  @ApiProperty()
  @IsOptional()
  faltper: number;
  @ApiProperty()
  @IsOptional()
  abonopec: number;
  @ApiProperty()
  @IsOptional()
  numdiasfer: number;
  @ApiProperty()
  @IsOptional()
  adianta13Sal: string;
  @ApiProperty()
  @IsOptional()
  atualfergoz: string;
  @ApiProperty()
  @IsOptional()
  abonoinicio: string;
  @ApiProperty()
  dtalter: Date;
  @ApiProperty()
  qtdparcelas: number;
  @ApiProperty()
  sequencia: number;
  @ApiProperty()
  digitado: string;
  @ApiProperty()
  @IsOptional()
  aprovado: string;
  @ApiProperty()
  referencia: Date;
}
