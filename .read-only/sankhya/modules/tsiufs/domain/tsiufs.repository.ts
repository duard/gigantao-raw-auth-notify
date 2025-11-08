import { TsiufsEntity } from '../../../entities/tSIUFS.entity';
import { CreateTsiufsDto } from '../dto/create-tsiufs.dto';
import { UpdateTsiufsDto } from '../dto/update-tsiufs.dto';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { SortDto } from 'src/utils/dto/query.dto';

export abstract class TsiufsRepository {
  abstract create(createDto: CreateTsiufsDto): Promise<TsiufsEntity>;
  abstract findAll(options: {
    paginationOptions?: IPaginationOptions;
    sortOptions?: SortDto<TsiufsEntity>[];
  }): Promise<TsiufsEntity[]>;
  abstract findById(coduf: number): Promise<TsiufsEntity | null>;
  abstract update(
    coduf: number,
    updateDto: UpdateTsiufsDto,
  ): Promise<TsiufsEntity>;
  abstract delete(coduf: number): Promise<void>;
}
