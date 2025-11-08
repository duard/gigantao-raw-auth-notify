import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { trimEnd } from 'src/utils/string.utils';

export class TgflnfResponseDto {
  @ApiProperty()
  nulote: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  numreceb: string | null;

  @ApiProperty()
  dhreceb: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  observacao: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  guid: string | null;

  @ApiProperty()
  numloteprovedor: number | null;
}
