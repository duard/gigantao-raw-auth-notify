import { ApiProperty } from '@nestjs/swagger';

export class AdGigpontosintegraResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  codemp: number;

  @ApiProperty()
  codfunc: number;

  @ApiProperty()
  marcaPonto: Date;

  @ApiProperty()
  cpf: string;
}
