import { ApiProperty } from '@nestjs/swagger';

export class TgftopResponseDto {
  @ApiProperty()
  codtipoper: number;

  @ApiProperty()
  descroper: string | null;
}
