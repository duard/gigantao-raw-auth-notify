import { Injectable, Inject } from '@nestjs/common';
import { TsiusuRepository } from '../repositories/tsiusu.repository.abstract';
import { Tsiusu } from '../domain/tsiusu.domain';
import { IPaginationOptions } from 'src/utils/types/pagination-options';

@Injectable()
export class FindAllTsiusuUseCase {
  constructor(
    @Inject('TsiusuRepository')
    private readonly tsiusuRepository: TsiusuRepository,
  ) {}

  execute(paginationOptions: IPaginationOptions): Promise<Tsiusu[]> {
    return this.tsiusuRepository.findManyWithPagination({
      paginationOptions,
    });
  }
}
