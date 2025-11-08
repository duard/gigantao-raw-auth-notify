import { TgflibEntity } from '../../../entities/tGFLIB.entity';
import { TgflibResponseDto } from '../dto/tgflib-response.dto';
import { Tgflib } from './tgflib.domain';
import { TsiusuMapper } from '../../tsiusu/domain/tsiusu.mapper';

export class TgflibMapper {
  static toDomain(raw: TgflibEntity): Tgflib {
    const domain = new Tgflib();
    domain.nunota = raw.nunota;
    domain.codusu = raw.codusu;
    domain.dt = raw.dt;
    domain.liberacoes = raw.liberacoes;
    domain.obs = raw.obs;
    domain.vlrtotal = raw.vlrtotal;
    if (raw.codusu2) {
      domain.codusu2 = TsiusuMapper.toDomain(raw.codusu2);
    }
    return domain;
  }

  static toResponse(domain: Tgflib): TgflibResponseDto {
    const response = new TgflibResponseDto();
    response.nunota = domain.nunota;
    response.codusu = domain.codusu;
    response.dt = domain.dt;
    response.liberacoes = domain.liberacoes;
    response.obs = domain.obs;
    response.vlrtotal = domain.vlrtotal;
    if (domain.codusu2) {
      response.codusu2 = TsiusuMapper.toResponse(domain.codusu2);
    }
    return response;
  }
}
