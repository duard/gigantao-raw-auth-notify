import { Injectable } from '@nestjs/common';
import { QueryTfpdpFindOneDto } from '../dtos/tfpdpd.find-one.dto';
import { TfpdpdRepository } from '../infra/tfpdpd.repository.abstract';

@Injectable()
export class TfpdpdRemoveUseCase {
  constructor(private readonly repository: TfpdpdRepository) {}

  async execute(id: QueryTfpdpFindOneDto): Promise<void> {
    await this.repository.remove(id);
  }
}
