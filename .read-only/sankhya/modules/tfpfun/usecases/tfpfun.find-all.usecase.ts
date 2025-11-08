import { Injectable } from '@nestjs/common';
import { TfpfunRepositoryAbstract } from '../domain/tfpfun.repository.abstract';
import { Tfpfun } from '../domain/tfpfun.domain';

@Injectable()
export class FindAllTfpfunUseCase {
  constructor(private readonly repository: TfpfunRepositoryAbstract) {}

  async execute(query: any): Promise<{ data: Tfpfun[]; total: number }> {
    return this.repository.findAll(query);
  }
}
