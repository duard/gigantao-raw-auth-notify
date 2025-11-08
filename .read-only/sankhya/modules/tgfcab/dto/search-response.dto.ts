import { PaginatedOutputDto } from 'src/utils/dto/paginated-output.dto';
import { TgfcabResponseDto } from './tgfcab-response.dto';

import { ApiPropertyOptional } from '@nestjs/swagger';

class FiltrosAplicados {
  @ApiPropertyOptional()
  q?: string;

  @ApiPropertyOptional()
  status?: string;

  @ApiPropertyOptional()
  prioridade?: string;

  @ApiPropertyOptional()
  destino?: string;
}

export class SearchTgfcabResponse extends PaginatedOutputDto<TgfcabResponseDto> {
  @ApiPropertyOptional({ type: FiltrosAplicados })
  filtrosAplicados?: FiltrosAplicados;
}
