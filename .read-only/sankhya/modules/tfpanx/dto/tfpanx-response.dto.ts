import { ApiProperty } from '@nestjs/swagger';

export class TfpanxResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  filetype: string | null;

  @ApiProperty()
  filename: string | null;

  @ApiProperty()
  tipoorigem: string | null;

  @ApiProperty()
  docorigem: string | null;
}
