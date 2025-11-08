import { Injectable } from '@nestjs/common';
import { TsiendRepository } from '../domain/tsiend.repository';
import { CreateTsiendDto } from '../dto/create-tsiend.dto';
import { TsiendMapper } from '../domain/tsiend.mapper';
import { TsiendResponseDto } from '../dto/tsiend.response.dto';

@Injectable()
export class CreateTsiendUseCase {
  constructor(private readonly repo: TsiendRepository) {}

  async execute(createDto: CreateTsiendDto): Promise<TsiendResponseDto> {
    const domainEntity = await this.repo.create(createDto);
    return TsiendMapper.toResponse(domainEntity);
  }
}
