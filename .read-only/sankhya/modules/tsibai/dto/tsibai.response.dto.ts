import { ApiProperty } from '@nestjs/swagger';

export class TsibaiResponseDto {
  @ApiProperty()
  codbai: number;

  @ApiProperty()
  nomebai: string;

  @ApiProperty({ type: Date })
  dtalter: Date;

  @ApiProperty()
  descricaocorreio?: string | null;

  @ApiProperty()
  nuversao?: number | null;

  @ApiProperty()
  atunuversao?: string | null;

  @ApiProperty()
  codreg?: number;
}
