import { ApiProperty } from '@nestjs/swagger';
import { TsiusuResponseDto } from '../../../shared/dto/tsiusu.response.dto';

export class TgflibResponseDto {
  @ApiProperty()
  nunota: number;

  @ApiProperty()
  codusu: number;

  @ApiProperty()
  dt: Date;

  @ApiProperty()
  liberacoes: string | null;

  @ApiProperty()
  obs: string | null;

  @ApiProperty()
  vlrtotal: number | null;

  @ApiProperty({ type: () => TsiusuResponseDto, nullable: true })
  codusu2: TsiusuResponseDto | null;
}
