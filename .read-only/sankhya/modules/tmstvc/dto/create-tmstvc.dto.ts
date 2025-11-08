import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTmstvcDto {
  @ApiProperty({
    example: 'Descrição do tipo de veículo',
    description: 'A descrição para o tipo de veículo.',
  })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({
    example: 1010101,
    description: 'O ID da natureza (TGFNAT) associada.',
  })
  @IsNumber()
  @IsNotEmpty()
  codnatId: number;
}
