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
import { TsibaiService } from './tsibai.service';
import { CreateTsibaiDto } from './dto/create-tsibai.dto';
import { UpdateTsibaiDto } from './dto/update-tsibai.dto';
import { ApiTags } from '@nestjs/swagger';
import { QueryTsibaiDto } from './dto/query-tsibai.dto';

@ApiTags('tsibai')
@Controller('tsibai')
export class TsibaiController {
  constructor(private readonly tsibaiService: TsibaiService) {}

  @Post()
  create(@Body() createTsibaiDto: CreateTsibaiDto) {
    return this.tsibaiService.create(createTsibaiDto);
  }

  @Get()
  findAll(@Query() query: QueryTsibaiDto) {
    return this.tsibaiService.findAll(query);
  }

  @Get(':codbai')
  findOne(@Param('codbai') codbai: number) {
    return this.tsibaiService.findOne(codbai);
  }

  @Patch(':codbai')
  update(
    @Param('codbai') codbai: number,
    @Body() updateTsibaiDto: UpdateTsibaiDto,
  ) {
    return this.tsibaiService.update(codbai, updateTsibaiDto);
  }

  @Delete(':codbai')
  remove(@Param('codbai') codbai: number) {
    return this.tsibaiService.remove(codbai);
  }
}
