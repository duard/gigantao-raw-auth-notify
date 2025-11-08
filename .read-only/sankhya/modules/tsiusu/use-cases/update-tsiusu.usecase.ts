import { Injectable, Inject } from '@nestjs/common';
import { TsiusuRepository } from '../repositories/tsiusu.repository.abstract';
import { UpdateTsiusuDto } from '../dto/update-tsiusu.dto';
import { Tsiusu } from '../domain/tsiusu.domain';

@Injectable()
export class UpdateTsiusuUseCase {
  constructor(
    @Inject('TsiusuRepository')
    private readonly tsiusuRepository: TsiusuRepository,
  ) {}

  execute(
    id: Tsiusu['codusu'],
    payload: UpdateTsiusuDto,
  ): Promise<Tsiusu | null> {
    return this.tsiusuRepository.update(id, payload);
  }
}
