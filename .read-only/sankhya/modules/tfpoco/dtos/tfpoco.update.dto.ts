import { PartialType } from '@nestjs/swagger';
import { TfpocoCreateDto } from './tfpoco.create.dto';

export class TfpocoUpdateDto extends PartialType(TfpocoCreateDto) {}