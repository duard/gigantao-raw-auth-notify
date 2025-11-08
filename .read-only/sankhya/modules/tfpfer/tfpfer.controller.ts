import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CreateTfpferDto } from './dtos/create-tfpfer.dto';
import { QueryTfpferDto, QueryTfpferFindOneDto } from './dtos/query-tfpfer.dto';
import { TfpferService } from './tfpfer.service';

@Controller({ path: 'tfpfer', version: '1' })
export class TfpferController {
  constructor(private readonly service: TfpferService) {}

  @Post()
  async create(@Query() query: CreateTfpferDto) {
    return await this.service.create(query);
  }

  @Get('find-all')
  async findAll(@Query() query: QueryTfpferDto) {
    return await this.service.findAll(query);
  }

  @Get('find-one')
  async findOne(@Query() query: QueryTfpferFindOneDto) {
    return await this.service.findOne(query);
  }

  @Put('update')
  async update(
    @Query() query: QueryTfpferFindOneDto,
    @Query() data: CreateTfpferDto,
  ) {
    return await this.service.update(query, data);
  }

  @Delete('remove')
  async remove(@Query() query: QueryTfpferFindOneDto) {
    return await this.service.remove(query);
  }
}
