import { PartialType } from '@nestjs/swagger';
import { CreateTsicidDto } from './create-tsicid.dto';

export class UpdateTsicidDto extends PartialType(CreateTsicidDto) {}
