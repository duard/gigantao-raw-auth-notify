import { ApiProperty } from '@nestjs/swagger';
import { TsiendResponseDto } from './tsiend.response.dto';
import { TsicidResponseDto } from './tsicid.response.dto';
import { TsibaiResponseDto } from './tsibai.response.dto';

export class TgfparResponseDto {
  @ApiProperty()
  codparc: number;

  @ApiProperty()
  nomeparc?: string | null;

  @ApiProperty()
  razaosocial?: string | null;

  @ApiProperty()
  tippessoa?: string | null;

  @ApiProperty()
  codparcmatriz?: number | null;

  @ApiProperty()
  numend?: string | null;

  @ApiProperty()
  complemento?: string | null;

  @ApiProperty()
  telefone?: string | null;

  @ApiProperty()
  email?: string | null;

  @ApiProperty()
  cgcCpf?: string | null;

  @ApiProperty()
  cep?: string | null;

  @ApiProperty({ type: () => TsiendResponseDto })
  codend?: TsiendResponseDto;

  @ApiProperty({ type: () => TsicidResponseDto })
  codc?: TsicidResponseDto;

  @ApiProperty({ type: () => TsibaiResponseDto })
  codbai?: TsibaiResponseDto;
}
