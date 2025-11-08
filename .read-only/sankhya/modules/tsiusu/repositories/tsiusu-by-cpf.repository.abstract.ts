import { Tsiusu } from '../domain/tsiusu.domain';

export abstract class TsiusuByCpfRepositoryAbstract {
  abstract findOneByCpf(cpf: string): Promise<Tsiusu | null>;
}
