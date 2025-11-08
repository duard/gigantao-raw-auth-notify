import { Injectable } from '@nestjs/common';
import { TsiufsRepository } from '../domain/tsiufs.repository';
import { TsiufsResponseDto } from '../dto/tsiufs-response.dto';
import { TsiufsMapper } from '../domain/tsiufs.mapper';

@Injectable()
export class FindByTsiufsUseCase {
  constructor(private readonly repo: TsiufsRepository) {}

  async execute(coduf: number): Promise<TsiufsResponseDto | null> {
    const entity = await this.repo.findById(coduf);
    return entity ? TsiufsMapper.toResponse(entity) : null;
  }
}
