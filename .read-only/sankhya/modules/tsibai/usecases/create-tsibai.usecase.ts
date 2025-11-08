import { Injectable } from '@nestjs/common';
import { TsibaiRepository } from 'src/sankhya/modules/tsibai/domain/tsibai.repository';
import { CreateTsibaiDto } from 'src/sankhya/modules/tsibai/dto/create-tsibai.dto';
import { Tsibai } from 'src/sankhya/modules/tsibai/domain/tsibai.entity';
import { TsibaiMapper } from 'src/sankhya/modules/tsibai/domain/tsibai.mapper';
import { TsibaiResponseDto } from 'src/sankhya/modules/tsibai/dto/tsibai.response.dto';

import { Tsireg } from 'src/sankhya/interfaces/tsireg.interface';

@Injectable()
export class CreateTsibaiUseCase {
  constructor(private readonly repo: TsibaiRepository) {}

  async execute(createDto: CreateTsibaiDto): Promise<TsibaiResponseDto> {
    const tsibaiEntity = new Tsibai();
    tsibaiEntity.codbai = createDto.codbai;
    tsibaiEntity.nomebai = createDto.nomebai;
    tsibaiEntity.dtalter = createDto.dtalter;
    tsibaiEntity.descricaocorreio = createDto.descricaocorreio;
    tsibaiEntity.nuversao = createDto.nuversao;
    tsibaiEntity.atunuversao = createDto.atunuversao;
    tsibaiEntity.codreg = createDto.codreg
      ? ({ codreg: createDto.codreg } as Tsireg)
      : undefined;

    const domainEntity = await this.repo.create(tsibaiEntity);
    return TsibaiMapper.toResponse(domainEntity);
  }
}
