import { Injectable } from '@nestjs/common';
import { TsiendRepository } from '../domain/tsiend.repository';
import { TsiendResponseDto } from '../dto/tsiend.response.dto';
import { TsiendMapper } from '../domain/tsiend.mapper';

@Injectable()
export class FindAllTsiendUseCase {
  constructor(private readonly repo: TsiendRepository) {}

  async execute(query: any): Promise<TsiendResponseDto[]> {
    const domainEntities = await this.repo.findAll(query);
    return domainEntities.map(TsiendMapper.toResponse);
  }
}
