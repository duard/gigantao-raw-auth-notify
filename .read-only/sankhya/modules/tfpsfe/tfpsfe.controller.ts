import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  ParseFloatPipe,
} from '@nestjs/common';
import { TfpsfeService } from './tfpsfe.service';
import { CreateTfpsfeDto } from './dto/create-tfpsfe.dto';
import { UpdateTfpsfeDto } from './dto/update-tfpsfe.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Tfpsfe')
@Controller({
  path: 'tfpsfe',
  version: '1',
})
export class TfpsfeController {
  constructor(private readonly tfpsfeService: TfpsfeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new Tfpsfe record' })
  create(@Body() createTfpsfeDto: CreateTfpsfeDto) {
    return this.tfpsfeService.create(createTfpsfeDto);
  }

  @Get(':codemp/:codfunc/:nusolicit/:dtiniaqui')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get a single Tfpsfe record by composite primary key',
  })
  findOne(
    @Param('codemp', ParseIntPipe) codemp: number,
    @Param('codfunc', ParseIntPipe) codfunc: number,
    @Param('nusolicit', ParseIntPipe) nusolicit: number,
    @Param('dtiniaqui') dtiniaqui: string, // Keep as string for date parsing
  ) {
    return this.tfpsfeService.findOne(
      codemp,
      codfunc,
      nusolicit,
      new Date(dtiniaqui),
    );
  }

  @Patch(':codemp/:codfunc/:nusolicit/:dtiniaqui')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update a Tfpsfe record by composite primary key' })
  update(
    @Param('codemp', ParseIntPipe) codemp: number,
    @Param('codfunc', ParseIntPipe) codfunc: number,
    @Param('nusolicit', ParseIntPipe) nusolicit: number,
    @Param('dtiniaqui') dtiniaqui: string,
    @Body() updateTfpsfeDto: UpdateTfpsfeDto,
  ) {
    return this.tfpsfeService.update(
      codemp,
      codfunc,
      nusolicit,
      new Date(dtiniaqui),
      updateTfpsfeDto,
    );
  }

  @Delete(':codemp/:codfunc/:nusolicit/:dtiniaqui')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a Tfpsfe record by composite primary key' })
  remove(
    @Param('codemp', ParseIntPipe) codemp: number,
    @Param('codfunc', ParseIntPipe) codfunc: number,
    @Param('nusolicit', ParseIntPipe) nusolicit: number,
    @Param('dtiniaqui') dtiniaqui: string,
  ) {
    return this.tfpsfeService.remove(
      codemp,
      codfunc,
      nusolicit,
      new Date(dtiniaqui),
    );
  }
}
