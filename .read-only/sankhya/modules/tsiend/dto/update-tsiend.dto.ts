import { PartialType } from '@nestjs/swagger';
import { CreateTsiendDto } from './create-tsiend.dto';

export class UpdateTsiendDto extends PartialType(CreateTsiendDto) {}
