import { Tfpfun } from './tfpfun.domain';

export abstract class TfpfunByCpfRepositoryAbstract {
  abstract findOneByCpf(cpf: string): Promise<Tfpfun | null>;
}
