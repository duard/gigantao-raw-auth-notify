import { PartialType } from '@nestjs/swagger';
import { TfpdpdCreateDto } from './tfpdpd.create.dto';

export class TfpdpdUpdateDto extends PartialType(TfpdpdCreateDto) {}
