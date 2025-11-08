import { ApiProperty } from '@nestjs/swagger';

export class TfplgrResponseDto {
  @ApiProperty()
  codlogradouro: string;

  @ApiProperty()
  descrlogradouro?: string | null;
}
