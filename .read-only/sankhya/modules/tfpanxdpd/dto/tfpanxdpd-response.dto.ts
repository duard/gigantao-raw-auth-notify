import { ApiProperty } from '@nestjs/swagger';

export class TfpanxdpdResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  filetype: string | null;

  @ApiProperty()
  filename: string | null;

  @ApiProperty()
  iddpd: number;

  @ApiProperty()
  docorigem: string | null;
}
