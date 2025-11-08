import { ApiProperty } from '@nestjs/swagger';

export class AdReqdpResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  dtCreated: Date | null;

  @ApiProperty()
  codfunc: number | null;

  @ApiProperty()
  codemp: number | null;

  @ApiProperty()
  status: string | null;

  @ApiProperty()
  observacao: string | null;

  @ApiProperty()
  usuSol: number | null;

  @ApiProperty()
  dtUpdated: Date | null;

  @ApiProperty()
  dtDeleted: Date | null;

  @ApiProperty()
  tipoReq: string | null;
}
