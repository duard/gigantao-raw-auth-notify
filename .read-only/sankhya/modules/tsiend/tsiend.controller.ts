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
import { TsiendService } from './tsiend.service';
import { CreateTsiendDto } from './dto/create-tsiend.dto';
import { UpdateTsiendDto } from './dto/update-tsiend.dto';
import { ApiTags } from '@nestjs/swagger';
import { QueryTsiendDto } from './dto/query-tsiend.dto';

@ApiTags('tsiend')
@Controller('tsiend')
export class TsiendController {
  constructor(private readonly tsiendService: TsiendService) {}

  @Post()
  create(@Body() createTsiendDto: CreateTsiendDto) {
    return this.tsiendService.create(createTsiendDto);
  }

  @Get()
  findAll(@Query() query: QueryTsiendDto) {
    return this.tsiendService.findAll(query);
  }

  @Get(':codend')
  findOne(@Param('codend') codend: number) {
    return this.tsiendService.findOne(codend);
  }

  @Patch(':codend')
  update(
    @Param('codend') codend: number,
    @Body() updateTsiendDto: UpdateTsiendDto,
  ) {
    return this.tsiendService.update(codend, updateTsiendDto);
  }

  @Delete(':codend')
  remove(@Param('codend') codend: number) {
    return this.tsiendService.remove(codend);
  }
}
