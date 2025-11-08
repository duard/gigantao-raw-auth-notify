import { Injectable, Inject } from '@nestjs/common';
import { TgflnfRepository } from '../repositories/tgflnf.repository.abstract';
import { Tgflnf } from '../domain/tgflnf.domain';
import { IPaginationOptions } from 'src/utils/types/pagination-options';

@Injectable()
export class FindAllTgflnfUseCase {
  constructor(
    @Inject('TgflnfRepository')
    private readonly tgflnfRepository: TgflnfRepository,
  ) {}

  execute(paginationOptions: IPaginationOptions): Promise<Tgflnf[]> {
    return this.tgflnfRepository.findManyWithPagination({
      paginationOptions,
    });
  }
}
