import { PartialType } from '@nestjs/swagger';
import { CreateTfpreqDto } from './create-tfpreq.dto';

export class UpdateTfpreqDto extends PartialType(CreateTfpreqDto) {}
