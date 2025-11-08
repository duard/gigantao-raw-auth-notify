import { PartialType } from '@nestjs/mapped-types';
import { CreateTsiufsDto } from './create-tsiufs.dto';

export class UpdateTsiufsDto extends PartialType(CreateTsiufsDto) {}
