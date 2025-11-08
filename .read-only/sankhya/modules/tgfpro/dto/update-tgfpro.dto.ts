import { PartialType } from '@nestjs/swagger';
import { CreateTgfproDto } from './create-tgfpro.dto';

export class UpdateTgfproDto extends PartialType(CreateTgfproDto) {}
