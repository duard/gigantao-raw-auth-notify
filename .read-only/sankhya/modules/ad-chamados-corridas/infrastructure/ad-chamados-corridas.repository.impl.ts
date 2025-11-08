import { QueryAdChamadosCorridasDto } from '../dto/query-ad-chamados-corridas.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdChamadoscorridasEntity } from 'src/sankhya/entities/aD_CHAMADOSCORRIDAS.entity';
import { AdChamadosCorridasRepository } from '../domain/ad-chamados-corridas.repository';
import { AdChamadosCorridas } from '../domain/ad-chamados-corridas.entity';
import { AdChamadosCorridasMapper } from '../domain/ad-chamados-corridas.mapper';

import { buildTypeOrmQuery } from 'src/utils/typeorm-query';

@Injectable()
export class AdChamadosCorridasRepositoryImpl extends AdChamadosCorridasRepository {
  constructor(
    @InjectRepository(AdChamadoscorridasEntity)
    private readonly repository: Repository<AdChamadoscorridasEntity>,
  ) {
    super();
  }

  async findAll(
    query: QueryAdChamadosCorridasDto,
  ): Promise<AdChamadosCorridas[]> {
    if (!query.sort || query.sort.length === 0) {
      query.sort = [
        {
          orderBy: 'id',
          order: 'DESC',
        },
      ];
    }
    const findOptions = buildTypeOrmQuery<AdChamadoscorridasEntity>(query);
    findOptions.relations = [
      'user',
      'usuMotorista',
      'usuSolicitante',
      'codparc',
      'codparc.codend',
      'codparc.codc',
      'codparc.codbai',
    ];

    const entities = await this.repository.find(findOptions);
    return entities.map(AdChamadosCorridasMapper.toDomain);
  }

  async findById(id: number): Promise<AdChamadosCorridas | null> {
    const entity = await this.repository.findOne({
      where: { id },
      relations: [
        'user',
        'usuMotorista',
        'usuSolicitante',
        'codparc',
        'codparc.codend',
        'codparc.codc',
        'codparc.codbai',
      ],
    });
    console.log('entity', entity);
    return entity ? AdChamadosCorridasMapper.toDomain(entity) : null;
  }

  async create(entity: AdChamadosCorridas): Promise<AdChamadosCorridas> {
    const persistenceEntity = AdChamadosCorridasMapper.toPersistence(entity);
    const createdEntity = await this.repository.save(persistenceEntity);
    return AdChamadosCorridasMapper.toDomain(createdEntity);
  }

  async update(
    id: number,
    entity: Partial<AdChamadosCorridas>,
  ): Promise<AdChamadosCorridas> {
    const persistencePartialEntity =
      AdChamadosCorridasMapper.toPersistencePartial(entity);
    await this.repository.update(id, persistencePartialEntity);
    const updatedEntity = await this.repository.findOneBy({ id });
    if (!updatedEntity) {
      throw new Error(
        `AdChamadosCorridas with ID ${id} not found after update.`,
      );
    }
    return AdChamadosCorridasMapper.toDomain(updatedEntity);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
