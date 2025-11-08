import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TfpfunRepositoryAbstract } from '../domain/tfpfun.repository.abstract';
import { Tfpfun } from '../domain/tfpfun.domain';
import { TfpfunEntity } from 'src/sankhya/entities/tFPFUN.entity';
import { QueryTfpfunDto } from '../dto/query-tfpfun.dto';
import { buildTypeOrmQuery } from 'src/utils/typeorm-query';

@Injectable()
export class TfpfunRepositoryImpl implements TfpfunRepositoryAbstract {
  constructor(
    @InjectRepository(TfpfunEntity)
    private readonly repository: Repository<TfpfunEntity>,
  ) {}

  private mapEntityToDomain(entity: TfpfunEntity): Tfpfun {
    return entity;
  }

  private mapDomainToEntity(domain: Tfpfun): TfpfunEntity {
    const entity = new TfpfunEntity();
    Object.assign(entity, domain);
    return entity;
  }

  async findById(id: number, codemp: number): Promise<Tfpfun | undefined> {
    const result = await this.repository.findOne({
      where: { codfunc: id, codemp: codemp },
      relations: [
        'codc',
        'codbai',
        'codusu',
        'codcargo',
        'codemp2.codemp2',
        'codend',
      ],
    });
    return result ? this.mapEntityToDomain(result) : undefined;
  }

  async findAll(
    query: QueryTfpfunDto,
  ): Promise<{ data: Tfpfun[]; total: number }> {
    if (!query.sort || query.sort.length === 0) {
      query.sort = [{ orderBy: 'dtalter', order: 'DESC' }];
    }
    const findOptions = buildTypeOrmQuery<TfpfunEntity>(query);
    findOptions.relations = [
      'codc',
      'codbai',
      'codusu',
      'codcargo',
      'codemp2.codemp2',
      'codend',
    ];

    const [entities, total] = await this.repository.findAndCount(findOptions);

    const data = entities.map((entity) => this.mapEntityToDomain(entity));

    return { data, total };
  }

  async create(item: Tfpfun): Promise<Tfpfun | undefined> {
    const entity = this.mapDomainToEntity(item);
    const savedEntity = await this.repository.save(entity);
    return this.mapEntityToDomain(savedEntity);
  }

  async update(id: number, item: Tfpfun): Promise<Tfpfun | undefined> {
    const entity = this.mapDomainToEntity(item);
    await this.repository.update({ codfunc: id, codemp: item.codemp }, entity);
    return this.findById(id, item.codemp);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
