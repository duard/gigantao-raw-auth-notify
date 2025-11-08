import { Injectable } from '@nestjs/common';
import { TsicidRepository } from '../domain/tsicid.repository';
import { UpdateTsicidDto } from '../dto/update-tsicid.dto';
import { TsicidResponseDto } from '../dto/tsicid.response.dto';
import { TsicidMapper } from '../domain/tsicid.mapper';

@Injectable()
export class UpdateTsicidUseCase {
  constructor(private readonly repo: TsicidRepository) {}

  async execute(
    codcid: number,
    updateDto: UpdateTsicidDto,
  ): Promise<TsicidResponseDto> {
    const domainEntity = await this.repo.update(codcid, updateDto);
    return TsicidMapper.toResponse(domainEntity);
  }
}
