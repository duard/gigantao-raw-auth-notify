import { Injectable } from '@nestjs/common';
import { TfpferEntity } from '../../../entities/tFPFER.entity';
import { CreateTfpferDto } from '../dtos/create-tfpfer.dto';
import { TfpferRepository } from '../infra/tfpfer.repository.abstract';

@Injectable()
export class TfpferCreateUseCase {
  constructor(private readonly repository: TfpferRepository) {}

  async execute(data: CreateTfpferDto): Promise<TfpferEntity> {
    return await this.repository.create(data);
  }
}
