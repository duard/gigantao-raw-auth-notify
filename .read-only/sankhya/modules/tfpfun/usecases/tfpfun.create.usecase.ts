import { Injectable } from '@nestjs/common';
import { TfpfunRepositoryAbstract } from '../domain/tfpfun.repository.abstract';
import { CreateTfpfunDto } from '../dto/dto.create-tfpfun';
import { Tfpfun } from '../domain/tfpfun.domain';

@Injectable()
export class CreateTfpfunUseCase {
  constructor(private readonly repository: TfpfunRepositoryAbstract) {}

  async execute(createDto: CreateTfpfunDto): Promise<Tfpfun> {
    const created = await this.repository.create(createDto as any);
    if (!created) {
      throw new Error('Failed to create Tfpfun');
    }
    return created;
  }
}
