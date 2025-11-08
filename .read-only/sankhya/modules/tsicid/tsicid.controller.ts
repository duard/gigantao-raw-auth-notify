import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TsicidService } from './tsicid.service';
import { CreateTsicidDto } from './dto/create-tsicid.dto';
import { UpdateTsicidDto } from './dto/update-tsicid.dto';
import { ApiTags } from '@nestjs/swagger';
import { QueryTsicidDto } from './dto/query-tsicid.dto';

@ApiTags('tsicid')
@Controller('tsicid')
export class TsicidController {
  constructor(private readonly tsicidService: TsicidService) {}

  @Post()
  create(@Body() createTsicidDto: CreateTsicidDto) {
    return this.tsicidService.create(createTsicidDto);
  }

  @Get()
  findAll(@Query() query: QueryTsicidDto) {
    return this.tsicidService.findAll(query);
  }

  @Get(':codcid')
  findOne(@Param('codcid') codcid: number) {
    return this.tsicidService.findOne(codcid);
  }

  @Patch(':codcid')
  update(
    @Param('codcid') codcid: number,
    @Body() updateTsicidDto: UpdateTsicidDto,
  ) {
    return this.tsicidService.update(codcid, updateTsicidDto);
  }

  @Delete(':codcid')
  remove(@Param('codcid') codcid: number) {
    return this.tsicidService.remove(codcid);
  }
}
