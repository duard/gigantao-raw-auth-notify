import { Inject, Injectable } from '@nestjs/common';
import { PaginatedOutputDto } from 'src/utils/dto/paginated-output.dto';
import { TgfproEntity } from 'src/sankhya/entities/tGFPRO.entity';
import { Tgfpro } from './domain/tgfpro.domain';
import { CreateTgfproDto } from './dto/create-tgfpro.dto';
import { QueryTgfproDto } from './dto/query-tgfpro.dto';
import { TgfproSummaryDto } from './dto/tgfpro-summary.dto';
import { UpdateTgfproDto } from './dto/update-tgfpro.dto';
import { TgfproRepository } from './repositories/tgfpro.repository.abstract';
import { FindAllMobileTgfproDto } from './dto/find-all-mobile-tgfpro.dto';
import { FindAllWithStockTgfproDto } from './dto/find-all-with-stock-tgfpro.dto';
import { TgfproMobileResponseDto } from './dto/tgfpro-mobile-response.dto';
import { TgfproWithStockResponseDto } from './dto/tgfpro-with-stock-response.dto';

@Injectable()
export class TgfproService {
  constructor(
    @Inject('TgfproRepository')
    private readonly tgfproRepository: TgfproRepository,
  ) {}

  create(createDto: CreateTgfproDto): Promise<Tgfpro> {
    return this.tgfproRepository.create(createDto);
  }

  findAll(
    query: QueryTgfproDto,
  ): Promise<PaginatedOutputDto<TgfproSummaryDto>> {
    return this.tgfproRepository.findAll(query);
  }

  findAllMobile(
    query: FindAllMobileTgfproDto,
  ): Promise<PaginatedOutputDto<TgfproMobileResponseDto>> {
    return this.tgfproRepository.findAllMobile(query);
  }

  findAllWithStock(
    query: FindAllWithStockTgfproDto,
  ): Promise<PaginatedOutputDto<TgfproWithStockResponseDto>> {
    return this.tgfproRepository.findAllWithStock(query);
  }

  findById(codprod: number): Promise<Tgfpro | null> {
    return this.tgfproRepository.findById(codprod);
  }

  update(codprod: number, updateDto: UpdateTgfproDto): Promise<Tgfpro | null> {
    return this.tgfproRepository.update(codprod, updateDto);
  }

  remove(codprod: number): Promise<void> {
    return this.tgfproRepository.remove(codprod);
  }
}
