import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdGigpontosintegraService } from './ad-gigpontosintegra.service';
import { CreateAdGigpontosintegraDto } from './dto/create-ad-gigpontosintegra.dto';
import { UpdateAdGigpontosintegraDto } from './dto/update-ad-gigpontosintegra.dto';

@Controller('ad-gigpontosintegra')
export class AdGigpontosintegraController {
  constructor(private readonly service: AdGigpontosintegraService) {}

  @Post()
  create(@Body() createAdGigpontosintegraDto: CreateAdGigpontosintegraDto) {
    return this.service.create(createAdGigpontosintegraDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdGigpontosintegraDto: UpdateAdGigpontosintegraDto,
  ) {
    return this.service.update(+id, updateAdGigpontosintegraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
