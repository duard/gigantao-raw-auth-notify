import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TmstvcEntity } from 'src/sankhya/entities/tMSTVC.entity';
import { TmstvcRepository } from '../domain/tmstvc.repository';
import { Tmstvc } from '../domain/tmstvc.entity';
import { TmstvcMapper } from '../domain/tmstvc.mapper';
import { CreateTmstvcDto } from '../dto/create-tmstvc.dto';
import { UpdateTmstvcDto } from '../dto/update-tmstvc.dto';
import { QueryTmstvcDto } from '../dto/query-tmstvc.dto';

@Injectable()
export class TmstvcRepositoryImpl implements TmstvcRepository {
  constructor(
    @InjectRepository(TmstvcEntity)
    private readonly typeOrmRepository: Repository<TmstvcEntity>,
  ) {}

  async findAll(query: QueryTmstvcDto): Promise<Tmstvc[]> {
    const { page = 1, limit = 10, sort } = query;

    const findOptions: any = {
      relations: ['codnat'],
      order: {},
      take: limit,
      skip: (page - 1) * limit,
    };

    if (sort && sort.length > 0) {
      sort.forEach((sortItem) => {
        if (sortItem.orderBy) {
          findOptions.order[sortItem.orderBy] = sortItem.order;
        }
      });
    } else {
      findOptions.order['codtip'] = 'DESC';
    }

    const ormEntities = await this.typeOrmRepository.find(findOptions);
    return ormEntities.map(TmstvcMapper.toDomain);
  }

  async findBy(id: number): Promise<Tmstvc | null> {
    const ormEntity = await this.typeOrmRepository.findOne({
      where: { codtip: id },
      relations: ['codnat'],
    });
    return ormEntity ? TmstvcMapper.toDomain(ormEntity) : null;
  }

  async create(data: CreateTmstvcDto): Promise<Tmstvc> {
    const ormEntity = this.typeOrmRepository.create({
      ...data,
      codnat: { codnat: data.codnatId },
    });
    const savedOrmEntity = await this.typeOrmRepository.save(ormEntity);
    const newEntity = await this.findBy(savedOrmEntity.codtip);
    if (!newEntity) {
      throw new InternalServerErrorException(
        'Could not create the TMSTVC entry.',
      );
    }
    return newEntity;
  }

  async update(id: number, data: UpdateTmstvcDto): Promise<Tmstvc> {
    const updateData: any = { ...data };
    if (data.codnatId) {
      updateData.codnat = { codnat: data.codnatId };
      delete updateData.codnatId;
    }
    await this.typeOrmRepository.update(id, updateData);
    const updatedEntity = await this.findBy(id);
    if (!updatedEntity) {
      throw new InternalServerErrorException(
        `Could not find the updated TMSTVC entry with id ${id}.`,
      );
    }
    return updatedEntity;
  }

  async delete(id: number): Promise<void> {
    await this.typeOrmRepository.delete(id);
  }
}
