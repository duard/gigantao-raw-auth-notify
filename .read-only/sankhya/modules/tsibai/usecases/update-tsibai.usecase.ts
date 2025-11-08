import { Injectable } from '@nestjs/common';
import { TsibaiRepository } from 'src/sankhya/modules/tsibai/domain/tsibai.repository';
import { UpdateTsibaiDto } from 'src/sankhya/modules/tsibai/dto/update-tsibai.dto';
import { TsibaiResponseDto } from 'src/sankhya/modules/tsibai/dto/tsibai.response.dto';
import { TsibaiMapper } from 'src/sankhya/modules/tsibai/domain/tsibai.mapper';
import { Tsibai } from 'src/sankhya/modules/tsibai/domain/tsibai.entity';
import { Tsireg } from 'src/sankhya/interfaces/tsireg.interface';

@Injectable()
export class UpdateTsibaiUseCase {
  constructor(private readonly repo: TsibaiRepository) {}

  async execute(
    codbai: number,
    updateDto: UpdateTsibaiDto,
  ): Promise<TsibaiResponseDto> {
    const partialTsibai: Partial<Tsibai> = {};
    if (updateDto.nomebai !== undefined)
      partialTsibai.nomebai = updateDto.nomebai;
    if (updateDto.dtalter !== undefined)
      partialTsibai.dtalter = updateDto.dtalter;
    if (updateDto.descricaocorreio !== undefined)
      partialTsibai.descricaocorreio = updateDto.descricaocorreio;
    if (updateDto.nuversao !== undefined)
      partialTsibai.nuversao = updateDto.nuversao;
    if (updateDto.atunuversao !== undefined)
      partialTsibai.atunuversao = updateDto.atunuversao;
    if (updateDto.codreg !== undefined)
      partialTsibai.codreg = { codreg: updateDto.codreg } as Tsireg;

    const domainEntity = await this.repo.update(codbai, partialTsibai);
    return TsibaiMapper.toResponse(domainEntity);
  }
}
