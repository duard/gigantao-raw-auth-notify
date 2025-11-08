import { TmstvcEntity } from 'src/sankhya/entities/tMSTVC.entity';
import { TmstvcResponseDto } from '../dto/tmstvc.response.dto';
import { TgfnatResponseDto } from '../dto/tgfnat.response.dto';
import { Tmstvc } from './tmstvc.entity';

export class TmstvcMapper {
  public static toDomain(ormEntity: TmstvcEntity): Tmstvc {
    const domainEntity = new Tmstvc();
    domainEntity.codtip = ormEntity.codtip;
    domainEntity.descricao = ormEntity.descricao;
    domainEntity.codnat = ormEntity.codnat;
    return domainEntity;
  }

  public static fromDomain(domainEntity: Tmstvc): TmstvcEntity {
    const ormEntity = new TmstvcEntity();
    ormEntity.codtip = domainEntity.codtip;
    ormEntity.descricao = domainEntity.descricao;
    ormEntity.codnat = domainEntity.codnat;
    return ormEntity;
  }

  public static toResponse(domainEntity: Tmstvc): TmstvcResponseDto {
    const responseDto = new TmstvcResponseDto();
    responseDto.codtip = domainEntity.codtip;
    responseDto.descricao = domainEntity.descricao;

    if (domainEntity.codnat) {
      const codnatDto = new TgfnatResponseDto();
      codnatDto.codnat = domainEntity.codnat.codnat;
      codnatDto.descrnat = domainEntity.codnat.descrnat;
      responseDto.codnat = codnatDto;
    }

    return responseDto;
  }
}
