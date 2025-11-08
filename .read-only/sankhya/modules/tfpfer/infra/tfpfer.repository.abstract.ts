import { TfpferEntity } from '../../../entities/tFPFER.entity';
import { CreateTfpferDto } from '../dtos/create-tfpfer.dto';
import {
  QueryTfpferDto,
  QueryTfpferFindOneDto,
} from '../dtos/query-tfpfer.dto';
import { UpdateTfpferDto } from '../dtos/update-tfpfer.dto';

export abstract class TfpferRepository {
  abstract findAll(query: QueryTfpferDto): Promise<TfpferEntity[] | null>;
  abstract findOne(query: QueryTfpferFindOneDto): Promise<TfpferEntity | null>;
  abstract create(query: CreateTfpferDto): Promise<TfpferEntity>;
  abstract update(
    id: QueryTfpferFindOneDto,
    query: UpdateTfpferDto,
  ): Promise<TfpferEntity | null>;
  abstract remove(id: QueryTfpferFindOneDto): Promise<void>;
}
