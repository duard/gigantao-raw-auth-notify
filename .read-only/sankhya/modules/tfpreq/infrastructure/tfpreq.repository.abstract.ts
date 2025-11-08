import { TfpreqEntity } from 'src/sankhya/entities/tFPREQ.entity';
import { CreateTfpreqDto } from '../dto/create-tfpreq.dto';
import { UpdateTfpreqDto } from '../dto/update-tfpreq.dto';
import { QueryTfpreqDto } from '../dto/query-tfpreq.dto';

export abstract class TfpreqRepository {
  abstract create(
    createTfpreqDto: CreateTfpreqDto,
  ): Promise<TfpreqEntity | null>;
  abstract findAll(query: QueryTfpreqDto): Promise<TfpreqEntity[] | null>;
  abstract findOne(id: number): Promise<TfpreqEntity | null>;
  abstract update(
    id: number,
    updateTfpreqDto: UpdateTfpreqDto,
  ): Promise<TfpreqEntity | null>;
  abstract remove(id: number): Promise<void>;
}
