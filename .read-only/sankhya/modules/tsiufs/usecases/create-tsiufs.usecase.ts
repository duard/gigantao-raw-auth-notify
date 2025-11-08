import { Injectable } from '@nestjs/common';
import { TsiufsRepository } from '../domain/tsiufs.repository';
import { CreateTsiufsDto } from '../dto/create-tsiufs.dto';
import { TsiufsMapper } from '../domain/tsiufs.mapper';
import { TsiufsResponseDto } from '../dto/tsiufs-response.dto';

@Injectable()
export class CreateTsiufsUseCase {
  constructor(private readonly repo: TsiufsRepository) {}

  async execute(createDto: CreateTsiufsDto): Promise<TsiufsResponseDto> {
    const entity = await this.repo.create(createDto);
    return TsiufsMapper.toResponse(entity);
  }
}
