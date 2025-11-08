import { AdChamadosCorridas } from './ad-chamados-corridas.entity';
import { QueryAdChamadosCorridasDto } from '../dto/query-ad-chamados-corridas.dto';

export abstract class AdChamadosCorridasRepository {
  abstract findAll(
    query: QueryAdChamadosCorridasDto,
  ): Promise<AdChamadosCorridas[]>;
  abstract findById(id: number): Promise<AdChamadosCorridas | null>;
  abstract create(entity: AdChamadosCorridas): Promise<AdChamadosCorridas>;
  abstract update(
    id: number,
    entity: Partial<AdChamadosCorridas>,
  ): Promise<AdChamadosCorridas>;
  abstract delete(id: number): Promise<void>;
}
