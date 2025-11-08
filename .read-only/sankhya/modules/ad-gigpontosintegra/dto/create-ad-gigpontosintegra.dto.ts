import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateAdGigpontosintegraDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  codemp?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  codfunc?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  marcaPonto?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  enviawpp?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  show?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  ip?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  registroOriginal?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  momento?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  dtCreated?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  usuCreated?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  dtUpdt?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  usuUpdt?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  pontManu?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  process?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  fonte?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nsr?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  cpf?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  hashUid?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  coletorId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  coletorNome?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  coletorCategoria?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  codlocal?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  img?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  urlLocaliza?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  momento2?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  enviotel?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  dhexec?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  dhlimite?: Date;
}
