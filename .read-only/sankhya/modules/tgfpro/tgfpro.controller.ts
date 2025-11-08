import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { TgfproService } from './tgfpro.service';
import { CreateTgfproDto } from './dto/create-tgfpro.dto';
import { UpdateTgfproDto } from './dto/update-tgfpro.dto';
import { QueryTgfproDto } from './dto/query-tgfpro.dto';
import { TgfproResponseDto } from './dto/tgfpro-response.dto';
import { TgfproMapper } from './domain/tgfpro.mapper';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginatedOutputDto } from 'src/utils/dto/paginated-output.dto';
import { TgfproSummaryDto } from './dto/tgfpro-summary.dto';
import { FindAllMobileTgfproDto } from './dto/find-all-mobile-tgfpro.dto';
import { FindAllWithStockTgfproDto } from './dto/find-all-with-stock-tgfpro.dto';
import { TgfproEntity } from 'src/sankhya/entities/tGFPRO.entity';
import { TgfproMobileResponseDto } from './dto/tgfpro-mobile-response.dto';
import { TgfproWithStockResponseDto } from './dto/tgfpro-with-stock-response.dto';

@ApiTags('Tgfpro')
@Controller('tgfpro')
@UseInterceptors(ClassSerializerInterceptor)
export class TgfproController {
  constructor(private readonly tgfproService: TgfproService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new Tgfpro' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The Tgfpro has been successfully created.',
    type: TgfproResponseDto,
  })
  async create(
    @Body() createTgfproDto: CreateTgfproDto,
  ): Promise<TgfproResponseDto> {
    const tgfpro = await this.tgfproService.create(createTgfproDto);
    return TgfproMapper.toResponse(tgfpro);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve all Tgfpro records' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved all Tgfpro records.',
    type: PaginatedOutputDto<TgfproSummaryDto>,
  })
  async findAll(
    @Query() query: QueryTgfproDto,
  ): Promise<PaginatedOutputDto<TgfproSummaryDto>> {
    return this.tgfproService.findAll(query);
  }

  @Get('mobile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve all Tgfpro records for mobile' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved all Tgfpro records for mobile.',
    type: PaginatedOutputDto<TgfproMobileResponseDto>,
  })
  async findAllMobile(
    @Query() query: FindAllMobileTgfproDto,
  ): Promise<PaginatedOutputDto<TgfproMobileResponseDto>> {
    return this.tgfproService.findAllMobile(query);
  }

  @Get('with-stock')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve all Tgfpro records with stock' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved all Tgfpro records with stock.',
    type: PaginatedOutputDto<TgfproWithStockResponseDto>,
  })
  async findAllWithStock(
    @Query() query: FindAllWithStockTgfproDto,
  ): Promise<PaginatedOutputDto<TgfproWithStockResponseDto>> {
    return this.tgfproService.findAllWithStock(query);
  }

  @Get(':codprod')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve a Tgfpro record by codprod' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved Tgfpro record.',
    type: TgfproResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Tgfpro record not found.',
  })
  async findById(
    @Param('codprod') codprod: number,
  ): Promise<TgfproResponseDto | null> {
    const tgfpro = await this.tgfproService.findById(codprod);
    return tgfpro ? TgfproMapper.toResponse(tgfpro) : null;
  }

  @Patch(':codprod')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update a Tgfpro record by codprod' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The Tgfpro record has been successfully updated.',
    type: TgfproResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Tgfpro record not found.',
  })
  async update(
    @Param('codprod') codprod: number,
    @Body() updateTgfproDto: UpdateTgfproDto,
  ): Promise<TgfproResponseDto | null> {
    const tgfpro = await this.tgfproService.update(codprod, updateTgfproDto);
    return tgfpro ? TgfproMapper.toResponse(tgfpro) : null;
  }

  @Delete(':codprod')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a Tgfpro record by codprod' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The Tgfpro record has been successfully deleted.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Tgfpro record not found.',
  })
  async remove(@Param('codprod') codprod: number): Promise<void> {
    await this.tgfproService.remove(codprod);
  }
}
