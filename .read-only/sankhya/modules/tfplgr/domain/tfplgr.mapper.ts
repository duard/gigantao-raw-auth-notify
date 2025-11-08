import { TfplgrEntity as TfplgrRepoEntity } from 'src/sankhya/entities/tFPLGR.entity';
import { Tfplgr } from './tfplgr.entity';
import { CreateTfplgrDto } from '../dto/create-tfplgr.dto';
import { UpdateTfplgrDto } from '../dto/update-tfplgr.dto';
import { TfplgrResponseDto } from '../dto/tfplgr.response.dto';
import { Tsiusu } from 'src/sankhya/interfaces/tsiusu.interface';

export class TfplgrMapper {
  static toDomain(repoEntity: TfplgrRepoEntity): Tfplgr {
    const domainEntity = new Tfplgr();
    domainEntity.codlogradouro = repoEntity.codlogradouro;
    domainEntity.descrlogradouro = repoEntity.descrlogradouro;
    domainEntity.dhalter = repoEntity.dhalter;
    domainEntity.codusu = repoEntity.codusu
      ? ({
          codusu: repoEntity.codusu.codusu,
          nomeusu: repoEntity.codusu.nomeusu,
        } as Tsiusu)
      : undefined;
    return domainEntity;
  }

  static toPersistence(domainEntity: CreateTfplgrDto): TfplgrRepoEntity {
    const repoEntity = new TfplgrRepoEntity();
    repoEntity.codlogradouro = domainEntity.codlogradouro;
    repoEntity.descrlogradouro = domainEntity.descrlogradouro;
    repoEntity.dhalter = domainEntity.dhalter ?? new Date();
    repoEntity.codusu = domainEntity.codusu
      ? ({ codusu: domainEntity.codusu } as any)
      : undefined;
    return repoEntity;
  }

  static toPersistencePartial(
    domainEntity: UpdateTfplgrDto,
  ): Partial<TfplgrRepoEntity> {
    const persistenceEntity: Partial<TfplgrRepoEntity> = {};
    if (domainEntity.descrlogradouro !== undefined)
      persistenceEntity.descrlogradouro = domainEntity.descrlogradouro;
    if (domainEntity.dhalter !== undefined)
      persistenceEntity.dhalter = domainEntity.dhalter;
    if (domainEntity.codusu !== undefined)
      persistenceEntity.codusu = { codusu: domainEntity.codusu } as any;
    return persistenceEntity;
  }

  static toResponse(domainEntity: Tfplgr): TfplgrResponseDto {
    const responseDto = new TfplgrResponseDto();
    responseDto.codlogradouro = domainEntity.codlogradouro;
    responseDto.descrlogradouro = domainEntity.descrlogradouro;
    responseDto.dhalter = domainEntity.dhalter;
    responseDto.codusu = domainEntity.codusu?.codusu;
    return responseDto;
  }
}
