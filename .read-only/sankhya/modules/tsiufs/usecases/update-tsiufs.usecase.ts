import { Injectable } from '@nestjs/common';
import { TsiufsRepository } from '../domain/tsiufs.repository';
import { UpdateTsiufsDto } from '../dto/update-tsiufs.dto';
import { TsiufsResponseDto } from '../dto/tsiufs-response.dto';
import { TsiufsMapper } from '../domain/tsiufs.mapper';

@Injectable()
export class UpdateTsiufsUseCase {
  constructor(private readonly repo: TsiufsRepository) {}

  async execute(
    coduf: number,
    updateDto: UpdateTsiufsDto,
  ): Promise<TsiufsResponseDto> {
    const entity = await this.repo.update(coduf, updateDto);
    return TsiufsMapper.toResponse(entity);
  }
}
