import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TfpdpdCreateDto } from './dtos/tfpdpd.create.dto';
import { QueryTfpdpdDto } from './dtos/tfpdpd.find-all.dto';
import { QueryTfpdpFindOneDto } from './dtos/tfpdpd.find-one.dto';
import { TfpdpdUpdateDto } from './dtos/tfpdpd.update.dto';
import { TfpdpdService } from './tfpdpd.service';

@Controller('tfpdpd')
export class TfpdpdController {
  constructor(private readonly service: TfpdpdService) {}

  @Post('create')
  create(@Body() data: TfpdpdCreateDto) {
    return this.service.create(data);
  }

  @Get('find-all')
  findAll(@Query() query: QueryTfpdpdDto) {
    return this.service.findAll(query);
  }

  @Get('find-one')
  findOne(@Query() query: QueryTfpdpdDto) {
    return this.service.findOne(query);
  }

  @Put('update')
  update(@Query() id: QueryTfpdpFindOneDto, @Body() data: TfpdpdUpdateDto) {
    return this.service.update(id, data);
  }

  @Delete('remove')
  remove(@Query() id: QueryTfpdpFindOneDto) {
    return this.service.remove(id);
  }
}
