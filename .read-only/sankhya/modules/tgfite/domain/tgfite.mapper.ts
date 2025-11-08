import { TgfiteEntity } from '../../../entities/tGFITE.entity';
import { TgfiteResponseDto } from '../dto/tgfite-response.dto';
import { Tgfite } from './tgfite.domain';
import { TgfproMapper } from '../../tgfpro/domain/tgfpro.mapper';

export class TgfiteMapper {
  static toDomain(raw: TgfiteEntity): Tgfite {
    const domain = new Tgfite();
    for (const key in raw) {
      if (Object.prototype.hasOwnProperty.call(raw, key)) {
        if (key === 'codprod2' && raw[key]) {
          // Assuming codprod2 is the relation to TgfproEntity
          domain.produto = TgfproMapper.toDomain(raw[key]);
        } else {
          domain[key] = raw[key];
        }
      }
    }
    return domain;
  }

  static toResponse(domain: Tgfite): TgfiteResponseDto {
    const response = new TgfiteResponseDto();
    for (const key in domain) {
      if (Object.prototype.hasOwnProperty.call(domain, key)) {
        if (key === 'produto' && domain[key]) {
          response.produto = TgfproMapper.toResponse(domain[key]);
        } else {
          response[key] = domain[key];
        }
      }
    }
    return response;
  }
}
