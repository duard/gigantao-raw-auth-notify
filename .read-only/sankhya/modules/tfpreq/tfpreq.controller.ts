import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTfpreqDto } from './dto/create-tfpreq.dto';
import { UpdateTfpreqDto } from './dto/update-tfpreq.dto';
import { TfpreqService } from './tfpreq.service';

@Controller({
  path: 'tfpreq',
  version: '1',
})
export class TfpreqController {
  constructor(private readonly tfpreqService: TfpreqService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTfpreqDto: CreateTfpreqDto) {
    return this.tfpreqService.create(createTfpreqDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.tfpreqService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateTfpreqDto: UpdateTfpreqDto) {
    return this.tfpreqService.update(+id, updateTfpreqDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.tfpreqService.remove(+id);
  }
}
