import { Tfpfun } from './tfpfun.domain';
import { QueryTfpfunDto } from '../dto/query-tfpfun.dto';

export abstract class TfpfunRepositoryAbstract {
  abstract findById(id: number, codemp: number): Promise<Tfpfun | undefined>;
  abstract findAll(
    query: QueryTfpfunDto,
  ): Promise<{ data: Tfpfun[]; total: number }>;
  abstract create(item: Tfpfun): Promise<Tfpfun | undefined>;
  abstract update(id: number, item: Tfpfun): Promise<Tfpfun | undefined>;
  abstract delete(id: number): Promise<void>;
}
