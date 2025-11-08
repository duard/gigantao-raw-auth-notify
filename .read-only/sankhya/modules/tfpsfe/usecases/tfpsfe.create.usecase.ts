import { Injectable } from '@nestjs/common';
import { TfpsfeEntity } from 'src/sankhya/entities/tFPSFE.entity';
import { CreateTfpsfeDto } from '../dto/create-tfpsfe.dto';
import { TfpsfeRepository } from '../infrastructure/tfpsfe.repository.abstract';

@Injectable()
export class CreateTfpsfeUseCase {
  constructor(private readonly tfpsfeRepository: TfpsfeRepository) {}

  async execute(
    createTfpsfeDto: CreateTfpsfeDto,
  ): Promise<TfpsfeEntity | null> {
    return this.tfpsfeRepository.create(createTfpsfeDto);
  }
}
