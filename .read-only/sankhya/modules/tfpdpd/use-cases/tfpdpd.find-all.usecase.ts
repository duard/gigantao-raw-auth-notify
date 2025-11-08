import { Injectable } from '@nestjs/common';
import { TfpdpdEntity } from '../../../entities/tFPDPD.entity';
import { QueryTfpdpdDto } from '../dtos/tfpdpd.find-all.dto';
import { TfpdpdRepository } from '../infra/tfpdpd.repository.abstract';

@Injectable()
export class TfpdpdFindAllUseCase {
  constructor(private readonly repository: TfpdpdRepository) {}

  async execute(query: QueryTfpdpdDto): Promise<TfpdpdEntity[] | null> {
    return await this.repository.findAll(query);
  }
}
