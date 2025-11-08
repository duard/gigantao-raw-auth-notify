import { Injectable } from '@nestjs/common';
import { TsicidRepository } from '../domain/tsicid.repository';
import { TsicidResponseDto } from '../dto/tsicid.response.dto';
import { TsicidMapper } from '../domain/tsicid.mapper';

@Injectable()
export class FindByTsicidUseCase {
  constructor(private readonly repo: TsicidRepository) {}

  async execute(codcid: number): Promise<TsicidResponseDto | null> {
    const domainEntity = await this.repo.findById(codcid);
    return domainEntity ? TsicidMapper.toResponse(domainEntity) : null;
  }
}
