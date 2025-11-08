import { TgfparEntity } from '../../../entities/tGFPAR.entity';
import { TgfparResponseDto } from '../dto/tgfpar-response.dto';
import { Tgfpar } from './tgfpar.domain';

export class TgfparMapper {
  static toDomain(raw: TgfparEntity): Tgfpar {
    const domain = new Tgfpar();
    domain.codparc = raw.codparc;
    domain.nomeparc = raw.nomeparc;
    domain.razaosocial = raw.razaosocial;
    domain.cgcCpf = raw.cgcCpf;
    domain.telefone = raw.telefone;
    domain.email = raw.email;
    return domain;
  }

  static toResponse(domain: Tgfpar): TgfparResponseDto {
    const response = new TgfparResponseDto();
    response.codparc = domain.codparc;
    response.nomeparc = domain.nomeparc;
    response.razaosocial = domain.razaosocial;
    response.cgcCpf = domain.cgcCpf;
    response.telefone = domain.telefone;
    response.email = domain.email;
    return response;
  }
}
