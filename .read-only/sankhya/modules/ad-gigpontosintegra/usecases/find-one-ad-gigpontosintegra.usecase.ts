import { Injectable } from '@nestjs/common';
import { AdGigpontosintegraRepository } from '../domain/ad-gigpontosintegra.repository';

@Injectable()
export class FindOneAdGigpontosintegraUseCase {
  constructor(private readonly repository: AdGigpontosintegraRepository) {}

  async execute(id: number) {
    return this.repository.findOne(id);
  }
}
