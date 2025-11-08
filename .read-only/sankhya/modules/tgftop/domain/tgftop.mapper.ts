import { TgftopEntity } from '../../../entities/tGFTOP.entity';
import { TgftopResponseDto } from '../dto/tgftop-response.dto';
import { Tgftop } from './tgftop.domain';

export class TgftopMapper {
  static toDomain(raw: TgftopEntity): Tgftop {
    const domain = new Tgftop();
    domain.codtipoper = raw.codtipoper;
    domain.descroper = raw.descroper;
    domain.tipmov = raw.tipmov;
    domain.ativo = raw.ativo;
    return domain;
  }

  static toResponse(domain: Tgftop): TgftopResponseDto {
    const response = new TgftopResponseDto();
    response.codtipoper = domain.codtipoper;
    response.descroper = domain.descroper;
    response.tipmov = domain.tipmov;
    response.ativo = domain.ativo;
    return response;
  }
}
