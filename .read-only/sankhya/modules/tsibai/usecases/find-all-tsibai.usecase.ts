import { Injectable } from '@nestjs/common';
import { TsibaiRepository } from 'src/sankhya/modules/tsibai/domain/tsibai.repository';
import { TsibaiResponseDto } from 'src/sankhya/modules/tsibai/dto/tsibai.response.dto';
import { TsibaiMapper } from 'src/sankhya/modules/tsibai/domain/tsibai.mapper';

@Injectable()
export class FindAllTsibaiUseCase {
  constructor(private readonly repo: TsibaiRepository) {}

  async execute(query: any): Promise<TsibaiResponseDto[]> {
    const domainEntities = await this.repo.findAll(query);
    return domainEntities.map(TsibaiMapper.toResponse);
  }
}
