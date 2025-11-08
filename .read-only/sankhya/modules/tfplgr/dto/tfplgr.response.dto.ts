import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { trimEnd } from 'src/utils/string.utils';

export class TfplgrResponseDto {
  @ApiProperty()
  codlogradouro: string;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  descrlogradouro: string | null;

  @ApiProperty({ type: Date })
  dhalter: Date;

  @ApiProperty()
  codusu?: number;
}
