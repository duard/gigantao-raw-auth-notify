import { Injectable } from '@nestjs/common';
import { TsibaiRepository } from 'src/sankhya/modules/tsibai/domain/tsibai.repository';
import { TsibaiResponseDto } from 'src/sankhya/modules/tsibai/dto/tsibai.response.dto';
import { TsibaiMapper } from 'src/sankhya/modules/tsibai/domain/tsibai.mapper';

@Injectable()
export class FindByTsibaiUseCase {
  constructor(private readonly repo: TsibaiRepository) {}

  async execute(codbai: number): Promise<TsibaiResponseDto | null> {
    const domainEntity = await this.repo.findById(codbai);
    return domainEntity ? TsibaiMapper.toResponse(domainEntity) : null;
  }
}
