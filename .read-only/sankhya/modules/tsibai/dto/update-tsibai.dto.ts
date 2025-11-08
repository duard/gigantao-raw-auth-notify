import { PartialType } from '@nestjs/swagger';
import { CreateTsibaiDto } from './create-tsibai.dto';

export class UpdateTsibaiDto extends PartialType(CreateTsibaiDto) {}
