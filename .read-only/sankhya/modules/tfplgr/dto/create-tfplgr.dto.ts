import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateTfplgrDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  codlogradouro: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  descrlogradouro: string;

  @ApiProperty({ type: Date })
  @IsOptional()
  dhalter?: Date;

  @ApiProperty()
  @IsOptional()
  codusu?: number;
}
