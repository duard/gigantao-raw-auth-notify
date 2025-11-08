import { Tmstvc } from './tmstvc.entity';
import { CreateTmstvcDto } from '../dto/create-tmstvc.dto';
import { UpdateTmstvcDto } from '../dto/update-tmstvc.dto';
import { QueryTmstvcDto } from '../dto/query-tmstvc.dto';

export abstract class TmstvcRepository {
  abstract findAll(query: QueryTmstvcDto): Promise<Tmstvc[]>;
  abstract findBy(id: number): Promise<Tmstvc | null>;
  abstract create(data: CreateTmstvcDto): Promise<Tmstvc>;
  abstract update(id: number, data: UpdateTmstvcDto): Promise<Tmstvc>;
  abstract delete(id: number): Promise<void>;
}
