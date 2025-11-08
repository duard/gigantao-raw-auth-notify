import { Injectable, Inject } from '@nestjs/common';
import { TsiufsRepository } from '../repositories/tsiufs.repository.abstract';
import { Tsiufs } from '../domain/tsiufs.domain';
import { IPaginationOptions } from 'src/utils/types/pagination-options';

@Injectable()
export class FindAllTsiufsUseCase {
  constructor(
    @Inject('TsiufsRepository')
    private readonly tsiufsRepository: TsiufsRepository,
  ) {}

  execute(paginationOptions: IPaginationOptions): Promise<Tsiufs[]> {
    return this.tsiufsRepository.findManyWithPagination({
      paginationOptions,
    });
  }
}
