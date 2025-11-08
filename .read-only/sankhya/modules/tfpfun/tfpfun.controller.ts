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
import { TfpfunService } from './tfpfun.service';
import { CreateTfpfunDto } from './dto/dto.create-tfpfun';
import { UpdateTfpfunDto } from './dto/dto.update-tfpfun';
import { TfpfunResponseDto } from './dto/tfpfun.dto';
import { QueryTfpfunDto } from './dto/query-tfpfun.dto';
import { PaginatedOutputDto } from 'src/utils/dto/paginated-output.dto';

@Controller('tfpfun')
export class TfpfunController {
  constructor(private readonly tfpfunService: TfpfunService) {}

  @Post()
  create(@Body() createTfpfunDto: CreateTfpfunDto): Promise<TfpfunResponseDto> {
    return this.tfpfunService.create(createTfpfunDto);
  }

  @Get()
  findAll(
    @Query() query: QueryTfpfunDto,
  ): Promise<PaginatedOutputDto<TfpfunResponseDto>> {
    return this.tfpfunService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('codemp') codemp: string,
  ): Promise<TfpfunResponseDto> {
    return this.tfpfunService.findOne(+id, +codemp);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTfpfunDto: UpdateTfpfunDto,
  ): Promise<TfpfunResponseDto> {
    return this.tfpfunService.update(+id, updateTfpfunDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tfpfunService.remove(+id);
  }
}
