import { Injectable } from '@nestjs/common';
import { AdGigpontosintegraRepository } from '../domain/ad-gigpontosintegra.repository';

@Injectable()
export class DeleteAdGigpontosintegraUseCase {
  constructor(private readonly repository: AdGigpontosintegraRepository) {}

  async execute(id: number) {
    return this.repository.remove(id);
  }
}
