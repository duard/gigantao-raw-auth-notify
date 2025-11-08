import { PartialType } from '@nestjs/mapped-types';
import { CreateTgfcabDto } from './create-tgfcab.dto';

export class UpdateTgfcabDto extends PartialType(CreateTgfcabDto) {}
