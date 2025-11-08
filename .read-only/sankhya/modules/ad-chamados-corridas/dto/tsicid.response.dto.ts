import { ApiProperty } from '@nestjs/swagger';

export class TsicidResponseDto {
  @ApiProperty()
  codcid: number;

  @ApiProperty()
  nomecid: string;

  @ApiProperty()
  uf?: number | null;
}
