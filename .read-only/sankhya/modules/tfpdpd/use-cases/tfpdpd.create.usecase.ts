import { Injectable } from '@nestjs/common';
import { TfpdpdEntity } from '../../../entities/tFPDPD.entity';
import { TfpdpdCreateDto } from '../dtos/tfpdpd.create.dto';
import { TfpdpdRepository } from '../infra/tfpdpd.repository.abstract';

@Injectable()
export class TfpdpdCreateUseCase {
  constructor(private readonly repository: TfpdpdRepository) {}

  async execute(query: TfpdpdCreateDto): Promise<TfpdpdEntity> {
    return await this.repository.create(query);
  }
}
