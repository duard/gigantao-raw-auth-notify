import { Injectable, Inject } from '@nestjs/common';
import { TgflnfRepository } from '../repositories/tgflnf.repository.abstract';
import { UpdateTgflnfDto } from '../dto/update-tgflnf.dto';
import { Tgflnf } from '../domain/tgflnf.domain';

@Injectable()
export class UpdateTgflnfUseCase {
  constructor(
    @Inject('TgflnfRepository')
    private readonly tgflnfRepository: TgflnfRepository,
  ) {}

  execute(
    id: Tgflnf['nulote'],
    payload: UpdateTgflnfDto,
  ): Promise<Tgflnf | null> {
    return this.tgflnfRepository.update(id, payload);
  }
}
