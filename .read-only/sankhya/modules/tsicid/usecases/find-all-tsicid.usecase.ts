import { Injectable } from '@nestjs/common';
import { TsicidRepository } from '../domain/tsicid.repository';
import { TsicidResponseDto } from '../dto/tsicid.response.dto';
import { TsicidMapper } from '../domain/tsicid.mapper';

@Injectable()
export class FindAllTsicidUseCase {
  constructor(private readonly repo: TsicidRepository) {}

  async execute(query: any): Promise<TsicidResponseDto[]> {
    const domainEntities = await this.repo.findAll(query);
    return domainEntities.map(TsicidMapper.toResponse);
  }
}
