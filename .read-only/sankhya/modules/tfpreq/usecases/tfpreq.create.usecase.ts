import { Injectable } from '@nestjs/common';
import { TfpreqRepository } from '../infrastructure/tfpreq.repository.abstract';
import { CreateTfpreqDto } from '../dto/create-tfpreq.dto';
import { TfpreqEntity } from '../../../entities/tFPREQ.entity';

@Injectable()
export class CreateTfpreqUseCase {
  constructor(private readonly repository: TfpreqRepository) {}

  async execute(
    createTfpreqDto: CreateTfpreqDto,
  ): Promise<TfpreqEntity | null> {
    return this.repository.create(createTfpreqDto);
  }
}
