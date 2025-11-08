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
import { TsiufsService } from './tsiufs.service';
import { CreateTsiufsDto } from './dto/create-tsiufs.dto';
import { UpdateTsiufsDto } from './dto/update-tsiufs.dto';
import { QueryTsiufsDto } from './dto/query-tsiufs.dto';

@Controller('tsiufs')
export class TsiufsController {
  constructor(private readonly tsiufsService: TsiufsService) {}

  @Post()
  create(@Body() createTsiufsDto: CreateTsiufsDto) {
    return this.tsiufsService.create(createTsiufsDto);
  }

  @Get()
  findAll(@Query() query: QueryTsiufsDto) {
    return this.tsiufsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tsiufsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTsiufsDto: UpdateTsiufsDto) {
    return this.tsiufsService.update(+id, updateTsiufsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tsiufsService.remove(+id);
  }
}
