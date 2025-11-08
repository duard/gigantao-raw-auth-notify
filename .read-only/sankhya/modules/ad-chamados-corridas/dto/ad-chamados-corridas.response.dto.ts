import { ApiProperty } from '@nestjs/swagger';
import { TgfparResponseDto } from './tgfpar.response.dto';
import { TsiusuResponseDto } from '../../../shared/dto/tsiusu.response.dto';
import { Transform } from 'class-transformer';
import { trimEnd } from 'src/utils/string.utils';

export class AdChamadosCorridasResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  destino: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  status: string | null;

  @ApiProperty()
  dtUpdated: Date | null;

  @ApiProperty()
  dtFinished: Date | null;

  @ApiProperty()
  dtCreated: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  prioridade: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  buscarlevar: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  obs: string | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  passageirosmercadoria: string | null;

  @ApiProperty()
  dtAcionamento: Date | null;

  @ApiProperty()
  @Transform(({ value }) => (value ? trimEnd(value) : value))
  enviawpp: string | null;

  @ApiProperty({ type: () => TgfparResponseDto })
  tgfpar?: TgfparResponseDto;

  @ApiProperty({ type: () => TsiusuResponseDto })
  tsiusuUsuario?: TsiusuResponseDto;

  @ApiProperty({ type: () => TsiusuResponseDto })
  tsiusuUsuMotorista?: TsiusuResponseDto;

  @ApiProperty({ type: () => TsiusuResponseDto })
  tsiusuUsuSolicitante?: TsiusuResponseDto;
}
