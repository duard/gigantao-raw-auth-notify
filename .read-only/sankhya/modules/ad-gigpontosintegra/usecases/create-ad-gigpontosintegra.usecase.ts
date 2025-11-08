import { Injectable } from '@nestjs/common';
import { AdGigpontosintegraRepository } from '../domain/ad-gigpontosintegra.repository';
import { CreateAdGigpontosintegraDto } from '../dto/create-ad-gigpontosintegra.dto';

@Injectable()
export class CreateAdGigpontosintegraUseCase {
  constructor(private readonly repository: AdGigpontosintegraRepository) {}

  async execute(createAdGigpontosintegraDto: CreateAdGigpontosintegraDto) {
    return this.repository.create(createAdGigpontosintegraDto);
  }
}
