import { Injectable } from '@nestjs/common';
import { TfplgrRepository } from '../domain/tfplgr.repository';
import { CreateTfplgrDto } from '../dto/create-tfplgr.dto';
import { TfplgrMapper } from '../domain/tfplgr.mapper';
import { TfplgrResponseDto } from '../dto/tfplgr.response.dto';

@Injectable()
export class CreateTfplgrUseCase {
  constructor(private readonly repo: TfplgrRepository) {}

  async execute(createDto: CreateTfplgrDto): Promise<TfplgrResponseDto> {
    const domainEntity = await this.repo.create(createDto);
    return TfplgrMapper.toResponse(domainEntity);
  }
}
