import { Injectable } from '@nestjs/common';
import { TfplgrRepository } from '../domain/tfplgr.repository';
import { TfplgrResponseDto } from '../dto/tfplgr.response.dto';
import { TfplgrMapper } from '../domain/tfplgr.mapper';

@Injectable()
export class FindAllTfplgrUseCase {
  constructor(private readonly repo: TfplgrRepository) {}

  async execute(query: any): Promise<TfplgrResponseDto[]> {
    const domainEntities = await this.repo.findAll(query);
    return domainEntities.map(TfplgrMapper.toResponse);
  }
}
