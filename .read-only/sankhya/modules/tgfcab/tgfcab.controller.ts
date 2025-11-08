import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateTgfcabDto } from './dto/create-tgfcab.dto';
import { QueryTgfcabDto } from './dto/query-tgfcab.dto';
import { SearchTgfcabResponse } from './dto/search-response.dto';
import { UpdateTgfcabDto } from './dto/update-tgfcab.dto';
import { TgfcabService } from './tgfcab.service';
import { PaginatedOutputDto } from 'src/utils/dto/paginated-output.dto';
import { TgfcabSummaryDto } from './dto/tgfcab-summary.dto';

@ApiTags('tgfcab')
@Controller('tgfcab')
@UseInterceptors(ClassSerializerInterceptor)
export class TgfcabController {
  constructor(private readonly tgfcabService: TgfcabService) {}

  @Post()
  create(@Body() createTgfcabDto: CreateTgfcabDto) {
    return this.tgfcabService.create(createTgfcabDto);
  }

  @Get()
  @ApiOkResponse({
    type: SearchTgfcabResponse,
  })
  findAll(@Query() query: QueryTgfcabDto): Promise<SearchTgfcabResponse> {
    console.log('Controller query', query);

    return this.tgfcabService.findAll(query);
  }

  @Get('summarized')
  @ApiOkResponse({
    type: PaginatedOutputDto<TgfcabSummaryDto>,
  })
  findAllSummarized(
    @Query() query: QueryTgfcabDto,
  ): Promise<PaginatedOutputDto<TgfcabSummaryDto>> {
    console.log('Controller findAllSummarized');
    return this.tgfcabService.findAllSummarized(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tgfcabService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTgfcabDto: UpdateTgfcabDto) {
    return this.tgfcabService.update(+id, updateTgfcabDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tgfcabService.remove(+id);
  }
}
