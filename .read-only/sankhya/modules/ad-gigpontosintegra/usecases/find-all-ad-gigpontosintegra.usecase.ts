import { Injectable } from '@nestjs/common';
import { AdGigpontosintegraRepository } from '../domain/ad-gigpontosintegra.repository';

@Injectable()
export class FindAllAdGigpontosintegraUseCase {
  constructor(private readonly repository: AdGigpontosintegraRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
