import { TsiregEntity } from 'src/sankhya/entities/tSIREG.entity';
import { TsibaiEntity as TsibaiRepoEntity } from 'src/sankhya/entities/tSIBAI.entity';
import { Tsibai } from './tsibai.entity';
import { TsibaiResponseDto } from '../dto/tsibai.response.dto';
import { Tsireg } from 'src/sankhya/interfaces/tsireg.interface';

export class TsibaiMapper {
  static toDomain(repoEntity: TsibaiRepoEntity): Tsibai {
    const domainEntity = new Tsibai();
    domainEntity.codbai = repoEntity.codbai;
    domainEntity.nomebai = repoEntity.nomebai;
    domainEntity.dtalter = repoEntity.dtalter;
    domainEntity.descricaocorreio = repoEntity.descricaocorreio;
    domainEntity.nuversao = repoEntity.nuversao;
    domainEntity.atunuversao = repoEntity.atunuversao;
    domainEntity.codreg = repoEntity.codreg
      ? ({
          codreg: repoEntity.codreg.codreg,
          nomereg: repoEntity.codreg.nomereg,
        } as Tsireg)
      : undefined;
    return domainEntity;
  }

  static toPersistence(domainEntity: Tsibai): TsibaiRepoEntity {
    const repoEntity = new TsibaiRepoEntity();
    repoEntity.codbai = domainEntity.codbai;
    repoEntity.nomebai = domainEntity.nomebai;
    repoEntity.dtalter = domainEntity.dtalter ?? new Date();
    repoEntity.descricaocorreio = domainEntity.descricaocorreio ?? null;
    repoEntity.nuversao = domainEntity.nuversao ?? null;
    repoEntity.atunuversao = domainEntity.atunuversao ?? null;
    repoEntity.codreg = {
      codreg: domainEntity.codreg!.codreg,
      nomereg: domainEntity.codreg!.nomereg,
    } as TsiregEntity;
    return repoEntity;
  }

  static toPersistencePartial(
    domainEntity: Partial<Tsibai>,
  ): Partial<TsibaiRepoEntity> {
    const persistenceEntity: Partial<TsibaiRepoEntity> = {};
    if (domainEntity.nomebai !== undefined)
      persistenceEntity.nomebai = domainEntity.nomebai;
    if (domainEntity.dtalter !== undefined)
      persistenceEntity.dtalter = domainEntity.dtalter;
    if (domainEntity.descricaocorreio !== undefined)
      persistenceEntity.descricaocorreio = domainEntity.descricaocorreio;
    if (domainEntity.nuversao !== undefined)
      persistenceEntity.nuversao = domainEntity.nuversao;
    if (domainEntity.atunuversao !== undefined)
      persistenceEntity.atunuversao = domainEntity.atunuversao;
    if (domainEntity.codreg !== undefined)
      persistenceEntity.codreg = {
        codreg: domainEntity.codreg!.codreg,
        nomereg: domainEntity.codreg!.nomereg,
      } as TsiregEntity;
    return persistenceEntity;
  }

  static toResponse(domainEntity: Tsibai): TsibaiResponseDto {
    const responseDto = new TsibaiResponseDto();
    responseDto.codbai = domainEntity.codbai;
    responseDto.nomebai = domainEntity.nomebai;
    responseDto.dtalter = domainEntity.dtalter;
    responseDto.descricaocorreio = domainEntity.descricaocorreio;
    responseDto.nuversao = domainEntity.nuversao;
    responseDto.atunuversao = domainEntity.atunuversao;
    responseDto.codreg = domainEntity.codreg?.codreg;
    return responseDto;
  }
}
