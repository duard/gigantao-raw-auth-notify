import { Injectable } from '@nestjs/common';
import { TfplgrRepository } from '../domain/tfplgr.repository';
import { TfplgrResponseDto } from '../dto/tfplgr.response.dto';
import { TfplgrMapper } from '../domain/tfplgr.mapper';

@Injectable()
export class FindByTfplgrUseCase {
  constructor(private readonly repo: TfplgrRepository) {}

  async execute(codlogradouro: string): Promise<TfplgrResponseDto | null> {
    const domainEntity = await this.repo.findById(codlogradouro);
    return domainEntity ? TfplgrMapper.toResponse(domainEntity) : null;
  }
}
