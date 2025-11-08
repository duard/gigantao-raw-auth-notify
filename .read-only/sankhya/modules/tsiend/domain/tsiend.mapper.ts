import { TsiendEntity as TsiendRepoEntity } from 'src/sankhya/entities/tSIEND.entity';
import { TfplgrEntity } from 'src/sankhya/entities/tFPLGR.entity';
import { Tsiend } from './tsiend.entity';
import { CreateTsiendDto } from '../dto/create-tsiend.dto';
import { UpdateTsiendDto } from '../dto/update-tsiend.dto';
import { TsiendResponseDto } from '../dto/tsiend.response.dto';
import { Tfplgr } from 'src/sankhya/interfaces/tfplgr.interface';

export class TsiendMapper {
  static toDomain(repoEntity: TsiendRepoEntity): Tsiend {
    const domainEntity = new Tsiend();
    domainEntity.codend = repoEntity.codend;
    domainEntity.nomeend = repoEntity.nomeend;
    domainEntity.tipo = repoEntity.tipo;
    domainEntity.dtalter = repoEntity.dtalter;
    domainEntity.descricaocorreio = repoEntity.descricaocorreio;
    domainEntity.nuversao = repoEntity.nuversao;
    domainEntity.atunuversao = repoEntity.atunuversao;
    domainEntity.codlogradouro = repoEntity.codlogradouro
      ? ({
          codlogradouro: repoEntity.codlogradouro.codlogradouro,
          descrlogradouro: repoEntity.codlogradouro.descrlogradouro,
        } as Tfplgr)
      : undefined;
    return domainEntity;
  }

  static toPersistence(domainEntity: CreateTsiendDto): TsiendRepoEntity {
    const repoEntity = new TsiendRepoEntity();
    repoEntity.codend = domainEntity.codend;
    repoEntity.nomeend = domainEntity.nomeend;
    repoEntity.tipo = domainEntity.tipo ?? null;
    repoEntity.dtalter = domainEntity.dtalter ?? new Date();
    repoEntity.descricaocorreio = domainEntity.descricaocorreio ?? null;
    repoEntity.nuversao = domainEntity.nuversao ?? null;
    repoEntity.atunuversao = domainEntity.atunuversao ?? null;
    repoEntity.codlogradouro = {
      codlogradouro: domainEntity.codlogradouro,
    } as TfplgrEntity;
    return repoEntity;
  }

  static toPersistencePartial(
    domainEntity: UpdateTsiendDto,
  ): Partial<TsiendRepoEntity> {
    const persistenceEntity: Partial<TsiendRepoEntity> = {};
    if (domainEntity.nomeend !== undefined)
      persistenceEntity.nomeend = domainEntity.nomeend;
    if (domainEntity.tipo !== undefined)
      persistenceEntity.tipo = domainEntity.tipo;
    if (domainEntity.dtalter !== undefined)
      persistenceEntity.dtalter = domainEntity.dtalter;
    if (domainEntity.descricaocorreio !== undefined)
      persistenceEntity.descricaocorreio = domainEntity.descricaocorreio;
    if (domainEntity.nuversao !== undefined)
      persistenceEntity.nuversao = domainEntity.nuversao;
    if (domainEntity.atunuversao !== undefined)
      persistenceEntity.atunuversao = domainEntity.atunuversao;
    if (domainEntity.codlogradouro !== undefined)
      persistenceEntity.codlogradouro = {
        codlogradouro: domainEntity.codlogradouro,
      } as TfplgrEntity;
    return persistenceEntity;
  }

  static toResponse(domainEntity: Tsiend): TsiendResponseDto {
    const responseDto = new TsiendResponseDto();
    responseDto.codend = domainEntity.codend;
    responseDto.nomeend = domainEntity.nomeend;
    responseDto.tipo = domainEntity.tipo;
    responseDto.dtalter = domainEntity.dtalter;
    responseDto.descricaocorreio = domainEntity.descricaocorreio;
    responseDto.nuversao = domainEntity.nuversao;
    responseDto.atunuversao = domainEntity.atunuversao;
    responseDto.codlogradouro = domainEntity.codlogradouro
      ? {
          codlogradouro: domainEntity.codlogradouro.codlogradouro,
          descrlogradouro: domainEntity.codlogradouro.descrlogradouro ?? null,
          dhalter: domainEntity.codlogradouro.dhalter,
        }
      : undefined;
    return responseDto;
  }
}
