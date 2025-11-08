import { Injectable } from '@nestjs/common';
import { AdChamadosCorridasRepository } from '../domain/ad-chamados-corridas.repository';
import { AdChamadosCorridas } from '../domain/ad-chamados-corridas.entity';

@Injectable()
export class FindAdChamadosCorridasByUseCase {
  constructor(private readonly repo: AdChamadosCorridasRepository) {}

  async execute(id: number): Promise<AdChamadosCorridas | null> {
    return this.repo.findById(id);
  }
}
