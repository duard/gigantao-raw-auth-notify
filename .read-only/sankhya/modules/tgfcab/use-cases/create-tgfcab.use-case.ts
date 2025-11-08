import { Injectable, Inject } from '@nestjs/common';
import { TgfcabRepository } from '../repositories/tgfcab.repository.abstract';
import { CreateTgfcabDto } from '../dto/create-tgfcab.dto';
import { Tgfcab } from '../domain/tgfcab.domain';
import { TsiusuService } from '../../tsiusu/tsiusu.service';
import { TsiusuMapper } from '../../tsiusu/domain/tsiusu.mapper';

@Injectable()
export class CreateTgfcabUseCase {
  constructor(
    @Inject('TgfcabRepository')
    private readonly tgfcabRepository: TgfcabRepository,
    private readonly tsiusuService: TsiusuService,
  ) {}

  async execute(createTgfcabDto: CreateTgfcabDto): Promise<Tgfcab> {
    const tsiusu = await this.tsiusuService.findOne(createTgfcabDto.codusu);
    if (!tsiusu) {
      throw new Error('Tsiusu not found');
    }
    const tgfcab = new Tgfcab();
    Object.assign(tgfcab, createTgfcabDto);
    tgfcab.codusu = tsiusu;
    return this.tgfcabRepository.create(tgfcab);
  }
}
