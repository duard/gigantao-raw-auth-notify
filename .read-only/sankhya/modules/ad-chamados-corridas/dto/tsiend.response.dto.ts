import { ApiProperty } from '@nestjs/swagger';
import { TfplgrResponseDto } from './tfplgr.response.dto';

export class TsiendResponseDto {
  @ApiProperty()
  codend: number;

  @ApiProperty()
  nomeend?: string | null;

  @ApiProperty()
  tipo?: string | null;

  @ApiProperty()
  descricaocorreio?: string | null;

  @ApiProperty({ type: () => TfplgrResponseDto })
  codlogradouro?: TfplgrResponseDto;
}
