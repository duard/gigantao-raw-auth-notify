import { PaginatedOutputDto } from 'src/utils/dto/paginated-output.dto';
import { Tgfpro } from '../domain/tgfpro.domain';
import { CreateTgfproDto } from '../dto/create-tgfpro.dto';
import { QueryTgfproDto } from '../dto/query-tgfpro.dto';
import { TgfproSummaryDto } from '../dto/tgfpro-summary.dto';
import { UpdateTgfproDto } from '../dto/update-tgfpro.dto';
import { FindAllMobileTgfproDto } from '../dto/find-all-mobile-tgfpro.dto';
import { FindAllWithStockTgfproDto } from '../dto/find-all-with-stock-tgfpro.dto';
import { TgfproEntity } from 'src/sankhya/entities/tGFPRO.entity';

export abstract class TgfproRepository {
  abstract create(createDto: CreateTgfproDto): Promise<Tgfpro>;
  abstract findAll(
    query: QueryTgfproDto,
  ): Promise<PaginatedOutputDto<TgfproSummaryDto>>;
  abstract findAllMobile(query: FindAllMobileTgfproDto): Promise<any>;
  abstract findAllWithStock(query: FindAllWithStockTgfproDto): Promise<any>;
  abstract findById(codprod: number): Promise<Tgfpro | null>;
  abstract update(
    codprod: number,
    updateDto: UpdateTgfproDto,
  ): Promise<Tgfpro | null>;
  abstract remove(codprod: number): Promise<void>;
}
