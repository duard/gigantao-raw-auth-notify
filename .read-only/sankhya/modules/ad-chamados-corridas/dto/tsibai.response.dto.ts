import { ApiProperty } from '@nestjs/swagger';

export class TsibaiResponseDto {
  @ApiProperty()
  codbai: number;

  @ApiProperty()
  nomebai: string;
}
