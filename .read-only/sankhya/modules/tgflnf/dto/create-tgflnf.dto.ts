import { ApiProperty } from '@nestjs/swagger';

export class CreateTgflnfDto {
  @ApiProperty()
  nulote: number;

  @ApiProperty()
  numreceb: string | null;

  @ApiProperty()
  dhreceb: Date | null;

  @ApiProperty()
  observacao: string | null;

  @ApiProperty()
  guid: string | null;

  @ApiProperty()
  numloteprovedor: number | null;
}
