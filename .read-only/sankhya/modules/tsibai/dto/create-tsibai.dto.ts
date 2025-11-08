import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateTsibaiDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  codbai: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nomebai: string;

  @ApiProperty({ type: Date })
  dtalter: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  descricaocorreio?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  codreg?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  nuversao?: number | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  atunuversao?: string | null;
}
