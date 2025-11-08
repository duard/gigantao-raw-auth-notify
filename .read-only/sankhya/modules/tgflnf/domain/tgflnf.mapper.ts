import { TgflnfEntity } from '../../../entities/tGFLNF.entity';
import { Tgflnf } from './tgflnf.domain';
import { TgflnfResponseDto } from '../dto/tgflnf-response.dto';

export class TgflnfMapper {
  static toDomain(repoEntity: TgflnfEntity): Tgflnf {
    const domainEntity = new Tgflnf();
    domainEntity.nulote = repoEntity.nulote;
    domainEntity.numreceb = repoEntity.numreceb;
    domainEntity.dhreceb = repoEntity.dhreceb;
    domainEntity.observacao = repoEntity.observacao;
    domainEntity.guid = repoEntity.guid;
    domainEntity.numloteprovedor = repoEntity.numloteprovedor;
    return domainEntity;
  }

  static toPersistence(domainEntity: Tgflnf): TgflnfEntity {
    const repoEntity = new TgflnfEntity();
    repoEntity.nulote = domainEntity.nulote;
    repoEntity.numreceb = domainEntity.numreceb;
    repoEntity.dhreceb = domainEntity.dhreceb;
    repoEntity.observacao = domainEntity.observacao;
    repoEntity.guid = domainEntity.guid;
    repoEntity.numloteprovedor = domainEntity.numloteprovedor;
    return repoEntity;
  }

  static toResponse(domainEntity: Tgflnf): TgflnfResponseDto {
    const responseDto = new TgflnfResponseDto();
    responseDto.nulote = domainEntity.nulote;
    responseDto.numreceb = domainEntity.numreceb;
    responseDto.dhreceb = domainEntity.dhreceb;
    responseDto.observacao = domainEntity.observacao;
    responseDto.guid = domainEntity.guid;
    responseDto.numloteprovedor = domainEntity.numloteprovedor;
    return responseDto;
  }
}
