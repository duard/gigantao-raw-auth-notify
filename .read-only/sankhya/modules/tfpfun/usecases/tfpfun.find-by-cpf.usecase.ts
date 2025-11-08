import { Injectable } from '@nestjs/common';
import { TfpfunByCpfRepositoryAbstract } from '../domain/tfpfun-by-cpf.repository.abstract';
import { Tfpfun } from '../domain/tfpfun.domain';

@Injectable()
export class FindTfpfunByCpfUseCase {
  constructor(private readonly repository: TfpfunByCpfRepositoryAbstract) {}

  async execute(cpf: string): Promise<Tfpfun | null> {
    return this.repository.findOneByCpf(cpf);
  }
}
