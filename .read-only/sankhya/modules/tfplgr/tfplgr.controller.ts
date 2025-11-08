import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { TfplgrService } from './tfplgr.service';
import { CreateTfplgrDto } from './dto/create-tfplgr.dto';
import { UpdateTfplgrDto } from './dto/update-tfplgr.dto';
import { ApiTags } from '@nestjs/swagger';
import { QueryTfplgrDto } from './dto/query-tfplgr.dto';

@ApiTags('tfplgr')
@Controller('tfplgr')
@UseInterceptors(ClassSerializerInterceptor)
export class TfplgrController {
  constructor(private readonly tfplgrService: TfplgrService) {}

  @Post()
  create(@Body() createTfplgrDto: CreateTfplgrDto) {
    return this.tfplgrService.create(createTfplgrDto);
  }

  @Get()
  findAll(@Query() query: QueryTfplgrDto) {
    return this.tfplgrService.findAll(query);
  }

  @Get(':codlogradouro')
  findOne(@Param('codlogradouro') codlogradouro: string) {
    return this.tfplgrService.findOne(codlogradouro);
  }

  @Patch(':codlogradouro')
  update(
    @Param('codlogradouro') codlogradouro: string,
    @Body() updateTfplgrDto: UpdateTfplgrDto,
  ) {
    return this.tfplgrService.update(codlogradouro, updateTfplgrDto);
  }

  @Delete(':codlogradouro')
  remove(@Param('codlogradouro') codlogradouro: string) {
    return this.tfplgrService.remove(codlogradouro);
  }
}
