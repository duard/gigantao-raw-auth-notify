import { Injectable } from '@nestjs/common';
import { Tgfpar } from 'src/sankhya/interfaces/tgfpar.interface';
import { Tsiusu } from 'src/sankhya/interfaces/tsiusu.interface';
import { AdChamadosCorridas } from '../domain/ad-chamados-corridas.entity';
import { AdChamadosCorridasRepository } from '../domain/ad-chamados-corridas.repository';
import { CreateAdChamadosCorridasDto } from '../dto/ad-chamados-corridas.create.dto';

@Injectable()
export class CreateAdChamadosCorridasUseCase {
  constructor(private readonly repo: AdChamadosCorridasRepository) {}

  async execute(dto: CreateAdChamadosCorridasDto): Promise<AdChamadosCorridas> {
    const entity = new AdChamadosCorridas();
    entity.destino = dto.destino ?? null;
    entity.status = dto.status ?? null;
    entity.dtUpdated = dto.dtUpdated ?? null;
    entity.dtFinished = dto.dtFinished ?? null;
    entity.dtCreated = dto.dtCreated ?? null;
    entity.prioridade = dto.prioridade ?? null;
    entity.buscarlevar = dto.buscarlevar ?? null;
    entity.obs = dto.obs ?? null;
    entity.passageirosmercadoria = dto.passageirosmercadoria ?? null;
    entity.dtAcionamento = dto.dtAcionamento ?? null;
    entity.enviawpp = dto.enviawpp ?? null;
    entity.tgfpar = { codparc: dto.codparcId } as Tgfpar;
    entity.tsiusuUsuario = { codusu: dto.userId } as Tsiusu;
    entity.tsiusuUsuMotorista = { codusu: dto.usuMotoristaId } as Tsiusu;
    entity.tsiusuUsuSolicitante = { codusu: dto.usuSolicitanteId } as Tsiusu;

    return this.repo.create(entity);
  }
}
