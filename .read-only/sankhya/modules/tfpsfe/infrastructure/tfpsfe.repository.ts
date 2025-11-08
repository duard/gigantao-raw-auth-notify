import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import { TfpsfeEntity } from '../../../entities/tFPSFE.entity';
import { CreateTfpsfeDto } from '../dto/create-tfpsfe.dto';
import { QueryTfpsfeDto } from '../dto/query-tfpsfe.dto';
import { TfpsfeRepository } from './tfpsfe.repository.abstract';
import { UpdateTfpsfeDto } from '../dto/update-tfpsfe.dto';
import { buildTypeOrmQuery } from 'src/utils/typeorm-query';

@Injectable()
export class TfpsfeRepositoryImpl implements TfpsfeRepository {
  constructor(
    @InjectRepository(TfpsfeEntity)
    private readonly tfpsfeRepository: Repository<TfpsfeEntity>,
  ) {}

  async findAll(query: QueryTfpsfeDto): Promise<[TfpsfeEntity[], number]> {
    const { codfunc, codemp, nomefunc, ...rest } = query;

    const findOptions = buildTypeOrmQuery<TfpsfeEntity>(rest);

    if (!findOptions.where) {
      findOptions.where = {};
    }

    if (codfunc) {
      findOptions.where['codfunc'] = codfunc;
    }

    if (codemp) {
      findOptions.where['codemp'] = codemp;
    }

    if (nomefunc) {
      findOptions.where = {
        ...findOptions.where,
        tfpfun: {
          nomefunc: ILike(`%${nomefunc}%`),
        },
      };
    }

    findOptions.relations = [
      'tfpfun',
      'empresa',
      'tfpreq',
      'tfpreq.codusu',
      'tfpreq.tfpfun',
      'tfpreq.empresa',
    ];

    return await this.tfpsfeRepository.findAndCount(findOptions);
  }

  async create(createTfpsfeDto: CreateTfpsfeDto): Promise<TfpsfeEntity> {
    const newTfpsfe = this.tfpsfeRepository.create(createTfpsfeDto);
    return this.tfpsfeRepository.save(newTfpsfe);
  }

  async findOne(
    codemp: number,
    codfunc: number,
    nusolicit: number,
    dtiniaqui: Date,
  ): Promise<TfpsfeEntity | null> {
    return await this.tfpsfeRepository.findOne({
      where: { codemp, codfunc, nusolicit, dtiniaqui },
      relations: [
        'tfpfun',
        'empresa',
        'tfpreq',
        'tfpreq.codusu',
        'tfpreq.tfpfun',
        'tfpreq.empresa',
      ],
    });
  }

  async update(
    codemp: number,
    codfunc: number,
    nusolicit: number,
    dtiniaqui: Date,
    updateTfpsfeDto: UpdateTfpsfeDto,
  ): Promise<TfpsfeEntity | null> {
    await this.tfpsfeRepository.update(
      { codemp, codfunc, nusolicit, dtiniaqui },
      updateTfpsfeDto,
    );
    return this.findOne(codemp, codfunc, nusolicit, dtiniaqui);
  }

  async remove(
    codemp: number,
    codfunc: number,
    nusolicit: number,
    dtiniaqui: Date,
  ): Promise<void> {
    await this.tfpsfeRepository.delete({
      codemp,
      codfunc,
      nusolicit,
      dtiniaqui,
    });
  }
}
