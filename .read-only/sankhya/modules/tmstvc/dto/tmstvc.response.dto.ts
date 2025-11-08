import { ApiProperty } from '@nestjs/swagger';
import { TgfnatResponseDto } from './tgfnat.response.dto';

export class TmstvcResponseDto {
  @ApiProperty()
  codtip: number;

  @ApiProperty()
  descricao: string;

  @ApiProperty({ type: () => TgfnatResponseDto })
  codnat: TgfnatResponseDto;
}
