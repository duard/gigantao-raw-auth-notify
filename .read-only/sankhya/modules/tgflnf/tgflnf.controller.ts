import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { TgflnfService } from './tgflnf.service';
import { CreateTgflnfDto } from './dto/create-tgflnf.dto';
import { UpdateTgflnfDto } from './dto/update-tgflnf.dto';
import { QueryTgflnfDto } from './dto/query-tgflnf.dto';

@Controller('tgflnf')
@UseInterceptors(ClassSerializerInterceptor)
export class TgflnfController {
  constructor(private readonly tgflnfService: TgflnfService) {}

  @Post()
  create(@Body() createTgflnfDto: CreateTgflnfDto) {
    return this.tgflnfService.create(createTgflnfDto);
  }

  @Get()
  findAll(@Query() query: QueryTgflnfDto) {
    return this.tgflnfService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tgflnfService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTgflnfDto: UpdateTgflnfDto) {
    return this.tgflnfService.update(+id, updateTgflnfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tgflnfService.remove(+id);
  }
}
