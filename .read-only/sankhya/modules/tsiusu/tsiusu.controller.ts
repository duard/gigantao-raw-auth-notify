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
import { TsiusuService } from './tsiusu.service';
import { CreateTsiusuDto } from './dto/create-tsiusu.dto';
import { UpdateTsiusuDto } from './dto/update-tsiusu.dto';
import { QueryTsiusuDto } from './dto/query-tsiusu.dto';

@Controller('tsiusu')
export class TsiusuController {
  constructor(private readonly tsiusuService: TsiusuService) {}

  @Post()
  create(@Body() createTsiusuDto: CreateTsiusuDto) {
    return this.tsiusuService.create(createTsiusuDto);
  }

  @Get()
  findAll(@Query() query: QueryTsiusuDto) {
    return this.tsiusuService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tsiusuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTsiusuDto: UpdateTsiusuDto) {
    return this.tsiusuService.update(+id, updateTsiusuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tsiusuService.remove(+id);
  }
}
