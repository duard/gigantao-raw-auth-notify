import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TfpreqEntity } from '../../../entities/tFPREQ.entity';
import { CreateTfpreqDto } from '../dto/create-tfpreq.dto';
import { QueryTfpreqDto } from '../dto/query-tfpreq.dto';
import { UpdateTfpreqDto } from '../dto/update-tfpreq.dto';
import { TfpreqRepository } from './tfpreq.repository.abstract';

@Injectable()
export class TfpreqRepositoryImpl implements TfpreqRepository {
  constructor(
    @InjectRepository(TfpreqEntity)
    private readonly tfpreqRepository: Repository<TfpreqEntity>,
  ) {}

  async findAll(query: QueryTfpreqDto): Promise<TfpreqEntity[]> {
    const queryBuilder = this.tfpreqRepository.createQueryBuilder('tfpreq');

    if (query.nomefunc) {
      queryBuilder.innerJoin(
        'tfpreq.tfpfun',
        'tfpfun',
        'tfpfun.nomefunc LIKE :nomefunc',
        {
          nomefunc: `%${query.nomefunc}%`,
        },
      );
    }

    queryBuilder.limit(query.limit || 10);
    queryBuilder.offset((query.page || 0) * (query.limit || 10));

    queryBuilder
      .leftJoin('tfpreq.empresa', 'empresa')
      .addSelect(['empresa.nomefantasia', 'empresa.cgc'])
      .leftJoin('tfpreq.usuario', 'usuario')
      .addSelect(['usuario.codusu', 'usuario.nomeusu'])
      .leftJoin('tfpreq.tfpfun', 'tfpfun')
      .addSelect(['tfpfun.codfunc', 'tfpfun.nomefunc', 'tfpfun.codemp'])
      .leftJoin('tfpreq.ferias', 'ferias')
      .addSelect(['ferias.codemp', 'ferias.codfunc', 'ferias.dtsaida'])
      .orderBy('tfpreq.id', 'DESC');

    const result = await queryBuilder.getMany();

    return result;
  }

  async create(createTfpreqDto: CreateTfpreqDto): Promise<TfpreqEntity> {
    const lastId = await this.tfpreqRepository
      .find({
        order: { id: 'DESC' },
        take: 1,
      })
      .then((result) => result[0]?.id);

    const entytyLike = {
      id: lastId + 1,
      ...createTfpreqDto,
    };

    console.log(entytyLike.codusu);

    const newTfpreq = this.tfpreqRepository.create(entytyLike);

    return this.tfpreqRepository.save(newTfpreq);
  }

  async findOne(id: number): Promise<TfpreqEntity | null> {
    return await this.tfpreqRepository.findOne({
      where: { id },
      relations: [
        'adReqdps',
        'tfpanxes',
        'tfpanxdpds',
        'usuario',
        'tfpfun',
        'empresa',
      ],
      order: { id: 'DESC' },
    });
  }

  async update(
    id: number,
    updateTfpreqDto: UpdateTfpreqDto,
  ): Promise<TfpreqEntity | null> {
    console.log(TfpreqEntity);

    const updatedEntity = await this.tfpreqRepository.update(
      id,
      updateTfpreqDto,
    );

    console.log(JSON.stringify(updatedEntity));

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tfpreqRepository.delete(id);
  }
}
