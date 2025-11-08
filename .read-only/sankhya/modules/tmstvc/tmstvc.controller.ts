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
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { TmstvcService } from './tmstvc.service';
import { CreateTmstvcDto } from './dto/create-tmstvc.dto';
import { UpdateTmstvcDto } from './dto/update-tmstvc.dto';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { TmstvcResponseDto } from './dto/tmstvc.response.dto';
import { QueryTmstvcDto } from './dto/query-tmstvc.dto';

@ApiTags('tmstvc')
@Controller('tmstvc')
@UseInterceptors(ClassSerializerInterceptor)
export class TmstvcController {
  constructor(private readonly tmstvcService: TmstvcService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new TMSTVC entry' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: TmstvcResponseDto,
  })
  create(@Body() createTmstvcDto: CreateTmstvcDto): Promise<TmstvcResponseDto> {
    return this.tmstvcService.create(createTmstvcDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve all TMSTVC entries' })
  @ApiResponse({ status: HttpStatus.OK, type: [TmstvcResponseDto] })
  findAll(@Query() query: QueryTmstvcDto): Promise<TmstvcResponseDto[]> {
    return this.tmstvcService.findAll(query);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve a single TMSTVC entry by ID' })
  @ApiResponse({ status: HttpStatus.OK, type: TmstvcResponseDto })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'TMSTVC not found',
  })
  findOne(@Param('id') id: string): Promise<TmstvcResponseDto | null> {
    return this.tmstvcService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update an existing TMSTVC entry' })
  @ApiResponse({ status: HttpStatus.OK, type: TmstvcResponseDto })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'TMSTVC not found',
  })
  update(
    @Param('id') id: string,
    @Body() updateTmstvcDto: UpdateTmstvcDto,
  ): Promise<TmstvcResponseDto> {
    return this.tmstvcService.update(+id, updateTmstvcDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a TMSTVC entry' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'TMSTVC not found',
  })
  remove(@Param('id') id: string): Promise<void> {
    return this.tmstvcService.remove(+id);
  }
}
