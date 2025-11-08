import { Injectable } from '@nestjs/common';
import { AdChamadosCorridasRepository } from '../domain/ad-chamados-corridas.repository';
import { AdChamadosCorridas } from '../domain/ad-chamados-corridas.entity';

@Injectable()
export class FindAllAdChamadosCorridasUseCase {
  constructor(private readonly repo: AdChamadosCorridasRepository) {}

  async execute(query: any): Promise<AdChamadosCorridas[]> {
    return this.repo.findAll(query);
  }
}
