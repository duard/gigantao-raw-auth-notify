import { Injectable } from '@nestjs/common';
import { TfpdpdEntity } from '../../../entities/tFPDPD.entity';
import { QueryTfpdpFindOneDto } from '../dtos/tfpdpd.find-one.dto';
import { TfpdpdUpdateDto } from '../dtos/tfpdpd.update.dto';
import { TfpdpdRepository } from '../infra/tfpdpd.repository.abstract';

@Injectable()
export class TfpdpdUpdateUseCase {
  constructor(private readonly repository: TfpdpdRepository) {}

  async execute(
    id: QueryTfpdpFindOneDto,
    updateTfpdpdDto: TfpdpdUpdateDto,
  ): Promise<TfpdpdEntity | null> {
    return await this.repository.update(id, updateTfpdpdDto);
  }
}
