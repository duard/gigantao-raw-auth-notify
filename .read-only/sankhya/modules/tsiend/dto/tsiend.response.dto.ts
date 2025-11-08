import { ApiProperty } from '@nestjs/swagger';

import { TfplgrResponseDto } from '../../tfplgr/dto/tfplgr.response.dto';

export class TsiendResponseDto {
  @ApiProperty()
  codend: number;

  @ApiProperty()
  nomeend: string;

  @ApiProperty()
  tipo?: string | null;

  @ApiProperty({ type: Date })
  dtalter: Date;

  @ApiProperty()
  descricaocorreio?: string | null;

  @ApiProperty()
  nuversao?: number | null;

  @ApiProperty()
  atunuversao?: string | null;

  @ApiProperty({ type: () => TfplgrResponseDto })
  codlogradouro?: TfplgrResponseDto;
}
