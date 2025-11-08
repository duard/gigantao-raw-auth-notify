import { PartialType } from '@nestjs/swagger';
import { CreateTmstvcDto } from './create-tmstvc.dto';

export class UpdateTmstvcDto extends PartialType(CreateTmstvcDto) {}
