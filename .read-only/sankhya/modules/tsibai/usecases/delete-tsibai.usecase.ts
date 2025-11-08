import { Injectable } from '@nestjs/common';
import { TsibaiRepository } from 'src/sankhya/modules/tsibai/domain/tsibai.repository';

@Injectable()
export class DeleteTsibaiUseCase {
  constructor(private readonly repo: TsibaiRepository) {}

  async execute(codbai: number): Promise<void> {
    await this.repo.delete(codbai);
  }
}
