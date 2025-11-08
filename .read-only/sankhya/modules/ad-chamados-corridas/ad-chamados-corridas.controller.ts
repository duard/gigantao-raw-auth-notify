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
import { AdChamadosCorridasService } from './ad-chamados-corridas.service';
import { CreateAdChamadosCorridasDto } from './dto/ad-chamados-corridas.create.dto';
import { UpdateAdChamadosCorridasDto } from './dto/ad-chamados-corridas.update.dto';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { AdChamadosCorridasResponseDto } from './dto/ad-chamados-corridas.response.dto';
import { QueryAdChamadosCorridasDto } from './dto/query-ad-chamados-corridas.dto';

@ApiTags('ad-chamados-corridas')
@Controller('ad-chamados-corridas')
@UseInterceptors(ClassSerializerInterceptor)
export class AdChamadosCorridasController {
  constructor(
    private readonly adChamadosCorridasService: AdChamadosCorridasService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new AdChamadosCorridas entry' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: AdChamadosCorridasResponseDto,
  })
  create(
    @Body() createAdChamadosCorridaDto: CreateAdChamadosCorridasDto,
  ): Promise<AdChamadosCorridasResponseDto> {
    return this.adChamadosCorridasService.create(createAdChamadosCorridaDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve all AdChamadosCorridas entries' })
  @ApiResponse({ status: HttpStatus.OK, type: [AdChamadosCorridasResponseDto] })
  findAll(
    @Query() query: QueryAdChamadosCorridasDto,
  ): Promise<AdChamadosCorridasResponseDto[]> {
    return this.adChamadosCorridasService.findAll(query);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve a single AdChamadosCorridas entry by ID' })
  @ApiResponse({ status: HttpStatus.OK, type: AdChamadosCorridasResponseDto })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'AdChamadosCorridas not found',
  })
  findOne(
    @Param('id') id: string,
  ): Promise<AdChamadosCorridasResponseDto | null> {
    return this.adChamadosCorridasService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update an existing AdChamadosCorridas entry' })
  @ApiResponse({ status: HttpStatus.OK, type: AdChamadosCorridasResponseDto })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'AdChamadosCorridas not found',
  })
  update(
    @Param('id') id: string,
    @Body() updateAdChamadosCorridaDto: UpdateAdChamadosCorridasDto,
  ): Promise<AdChamadosCorridasResponseDto> {
    return this.adChamadosCorridasService.update(
      +id,
      updateAdChamadosCorridaDto,
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete an AdChamadosCorridas entry' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'AdChamadosCorridas not found',
  })
  remove(@Param('id') id: string): Promise<void> {
    return this.adChamadosCorridasService.remove(+id);
  }
}
