import { ApiProperty } from '@nestjs/swagger';

export class TgfnatResponseDto {
  @ApiProperty()
  codnat: number;

  @ApiProperty()
  descrnat: string;
}
