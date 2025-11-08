import { PartialType } from '@nestjs/mapped-types';
import { CreateTgflnfDto } from './create-tgflnf.dto';

export class UpdateTgflnfDto extends PartialType(CreateTgflnfDto) {}
