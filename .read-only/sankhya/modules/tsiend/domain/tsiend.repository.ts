import { Tsiend } from './tsiend.entity';
import { CreateTsiendDto } from '../dto/create-tsiend.dto';
import { UpdateTsiendDto } from '../dto/update-tsiend.dto';
import { QueryTsiendDto } from '../dto/query-tsiend.dto';

export abstract class TsiendRepository {
  abstract create(createDto: CreateTsiendDto): Promise<Tsiend>;
  abstract findAll(query: QueryTsiendDto): Promise<Tsiend[]>;
  abstract findById(codend: number): Promise<Tsiend | null>;
  abstract update(codend: number, updateDto: UpdateTsiendDto): Promise<Tsiend>;
  abstract delete(codend: number): Promise<void>;
}
