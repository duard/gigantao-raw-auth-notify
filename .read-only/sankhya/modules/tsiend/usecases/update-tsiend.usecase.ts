import { Injectable } from '@nestjs/common';
import { TsiendRepository } from '../domain/tsiend.repository';
import { UpdateTsiendDto } from '../dto/update-tsiend.dto';
import { TsiendResponseDto } from '../dto/tsiend.response.dto';
import { TsiendMapper } from '../domain/tsiend.mapper';

@Injectable()
export class UpdateTsiendUseCase {
  constructor(private readonly repo: TsiendRepository) {}

  async execute(
    codend: number,
    updateDto: UpdateTsiendDto,
  ): Promise<TsiendResponseDto> {
    const domainEntity = await this.repo.update(codend, updateDto);
    return TsiendMapper.toResponse(domainEntity);
  }
}
