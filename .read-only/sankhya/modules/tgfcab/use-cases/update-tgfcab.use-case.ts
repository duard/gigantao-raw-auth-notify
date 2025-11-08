import { Injectable, Inject } from '@nestjs/common';
import { TgfcabRepository } from '../repositories/tgfcab.repository.abstract';
import { UpdateTgfcabDto } from '../dto/update-tgfcab.dto';
import { Tgfcab } from '../domain/tgfcab.domain';
import { TsiusuService } from '../../tsiusu/tsiusu.service';
import { TsiusuMapper } from '../../tsiusu/domain/tsiusu.mapper';

@Injectable()
export class UpdateTgfcabUseCase {
  constructor(
    @Inject('TgfcabRepository')
    private readonly tgfcabRepository: TgfcabRepository,
    private readonly tsiusuService: TsiusuService,
  ) {}

  async execute(
    id: Tgfcab['nunota'],
    payload: UpdateTgfcabDto,
  ): Promise<Tgfcab | null> {
    const tgfcab = await this.tgfcabRepository.findById(id);
    if (!tgfcab) {
      return null;
    }

    if (payload.codusu) {
      const tsiusu = await this.tsiusuService.findOne(payload.codusu);
      if (!tsiusu) {
        throw new Error('Tsiusu not found');
      }
      tgfcab.codusu = TsiusuMapper.toPersistence(tsiusu);
    }

    // Update other properties
    Object.assign(tgfcab, payload);

    return this.tgfcabRepository.update(id, tgfcab);
  }
}
