import { Injectable } from '@nestjs/common';
import { TfpfunRepositoryAbstract } from '../domain/tfpfun.repository.abstract';
import { Tfpfun } from '../domain/tfpfun.domain';

@Injectable()
export class FindTfpfunByUseCase {
  constructor(private readonly repository: TfpfunRepositoryAbstract) {}

  async execute(id: number, codemp: number): Promise<Tfpfun | undefined> {
    return this.repository.findById(id, codemp);
  }
}
