import { Tfplgr } from './tfplgr.entity';
import { CreateTfplgrDto } from '../dto/create-tfplgr.dto';
import { UpdateTfplgrDto } from '../dto/update-tfplgr.dto';

import { QueryTfplgrDto } from '../dto/query-tfplgr.dto';

export abstract class TfplgrRepository {
  abstract create(createDto: CreateTfplgrDto): Promise<Tfplgr>;
  abstract findAll(query: QueryTfplgrDto): Promise<Tfplgr[]>;
  abstract findById(codlogradouro: string): Promise<Tfplgr | null>;
  abstract update(
    codlogradouro: string,
    updateDto: UpdateTfplgrDto,
  ): Promise<Tfplgr>;
  abstract delete(codlogradouro: string): Promise<void>;
}
