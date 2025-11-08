import { PartialType } from '@nestjs/swagger';
import { CreateTfpsfeDto } from './create-tfpsfe.dto';

export class UpdateTfpsfeDto extends PartialType(CreateTfpsfeDto) {}
