import { ApiProperty } from '@nestjs/swagger';

export class TgfparResponseDto {
  @ApiProperty()
  codparc: number;

  @ApiProperty()
  nomeparc: string | null;

  @ApiProperty()
  razaosocial: string | null;

  @ApiProperty()
  cgcCpf: string | null;

  @ApiProperty()
  telefone: string | null;

  @ApiProperty()
  email: string | null;
}
