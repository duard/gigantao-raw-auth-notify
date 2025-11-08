import { Injectable } from '@nestjs/common';
import { TsiusuByCpfRepositoryAbstract } from '../repositories/tsiusu-by-cpf.repository.abstract';
import { Tsiusu } from '../domain/tsiusu.domain';

@Injectable()
export class FindTsiusuByCpfUseCase {
  constructor(private readonly repository: TsiusuByCpfRepositoryAbstract) {}

  async execute(cpf: string): Promise<Tsiusu | null> {
    return this.repository.findOneByCpf(cpf);
  }
}
