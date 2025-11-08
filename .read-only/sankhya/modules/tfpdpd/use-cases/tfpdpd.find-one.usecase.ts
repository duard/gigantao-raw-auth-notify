import { Injectable } from '@nestjs/common';
import { TfpdpdEntity } from '../../../entities/tFPDPD.entity';
import { QueryTfpdpFindOneDto } from '../dtos/tfpdpd.find-one.dto';
import { TfpdpdRepository } from '../infra/tfpdpd.repository.abstract';

@Injectable()
export class TfpdpdFindOneUseCase {
  constructor(private readonly repository: TfpdpdRepository) {}

  async execute(query: QueryTfpdpFindOneDto): Promise<TfpdpdEntity | null> {
    return await this.repository.findOne(query);
  }
}
