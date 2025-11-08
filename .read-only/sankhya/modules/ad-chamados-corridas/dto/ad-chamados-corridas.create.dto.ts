import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAdChamadosCorridasDto {
  @ApiProperty({ example: 'Destino Exemplo' })
  @IsOptional()
  @IsString()
  destino?: string;

  @ApiProperty({ example: 'Pendente' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dtUpdated?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dtFinished?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dtCreated?: Date;

  @ApiProperty({ example: 'Alta' })
  @IsOptional()
  @IsString()
  prioridade?: string;

  @ApiProperty({ example: 'Buscar' })
  @IsOptional()
  @IsString()
  buscarlevar?: string;

  @ApiProperty({ example: 'Observação importante' })
  @IsOptional()
  @IsString()
  obs?: string;

  @ApiProperty({ example: 'Passageiros e mercadorias' })
  @IsOptional()
  @IsString()
  passageirosmercadoria?: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dtAcionamento?: Date;

  @ApiProperty({ example: 'Sim' })
  @IsOptional()
  @IsString()
  enviawpp?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  codparcId: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  userId: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  usuMotoristaId: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  usuSolicitanteId: number;
}
