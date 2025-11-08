import { PartialType } from '@nestjs/swagger';
import { CreateTfpferDto } from './create-tfpfer.dto';

export class UpdateTfpferDto extends PartialType(CreateTfpferDto) {}
