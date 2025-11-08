import { Injectable } from '@nestjs/common';
import { TsiendRepository } from '../domain/tsiend.repository';
import { TsiendResponseDto } from '../dto/tsiend.response.dto';
import { TsiendMapper } from '../domain/tsiend.mapper';

@Injectable()
export class FindByTsiendUseCase {
  constructor(private readonly repo: TsiendRepository) {}

  async execute(codend: number): Promise<TsiendResponseDto | null> {
    const domainEntity = await this.repo.findById(codend);
    return domainEntity ? TsiendMapper.toResponse(domainEntity) : null;
  }
}
