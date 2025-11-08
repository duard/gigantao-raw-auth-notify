import { PartialType } from '@nestjs/mapped-types';
import { CreateTsiusuDto } from './create-tsiusu.dto';

export class UpdateTsiusuDto extends PartialType(CreateTsiusuDto) {}
