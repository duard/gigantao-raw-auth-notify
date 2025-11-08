import { PartialType } from '@nestjs/swagger';
import { CreateTfplgrDto } from './create-tfplgr.dto';

export class UpdateTfplgrDto extends PartialType(CreateTfplgrDto) {}
