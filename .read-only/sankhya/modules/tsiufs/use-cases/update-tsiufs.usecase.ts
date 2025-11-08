import { Injectable, Inject } from '@nestjs/common';
import { TsiufsRepository } from '../repositories/tsiufs.repository.abstract';
import { UpdateTsiufsDto } from '../dto/update-tsiufs.dto';
import { Tsiufs } from '../domain/tsiufs.domain';

@Injectable()
export class UpdateTsiufsUseCase {
  constructor(
    @Inject('TsiufsRepository')
    private readonly tsiufsRepository: TsiufsRepository,
  ) {}

  execute(
    id: Tsiufs['coduf'],
    payload: UpdateTsiufsDto,
  ): Promise<Tsiufs | null> {
    return this.tsiufsRepository.update(id, payload);
  }
}
