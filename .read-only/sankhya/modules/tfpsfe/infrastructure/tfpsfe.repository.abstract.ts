import { TfpsfeEntity } from 'src/sankhya/entities/tFPSFE.entity';
import { CreateTfpsfeDto } from '../dto/create-tfpsfe.dto';
import { UpdateTfpsfeDto } from '../dto/update-tfpsfe.dto';
import { QueryTfpsfeDto } from '../dto/query-tfpsfe.dto';

export abstract class TfpsfeRepository {
  abstract create(
    createTfpsfeDto: CreateTfpsfeDto,
  ): Promise<TfpsfeEntity | null>;
  abstract findAll(query: QueryTfpsfeDto): Promise<[TfpsfeEntity[], number]>;
  abstract findOne(
    codemp: number,
    codfunc: number,
    nusolicit: number,
    dtiniaqui: Date,
  ): Promise<TfpsfeEntity | null>;
  abstract update(
    codemp: number,
    codfunc: number,
    nusolicit: number,
    dtiniaqui: Date,
    updateTfpsfeDto: UpdateTfpsfeDto,
  ): Promise<TfpsfeEntity | null>;
  abstract remove(
    codemp: number,
    codfunc: number,
    nusolicit: number,
    dtiniaqui: Date,
  ): Promise<void>;
}
