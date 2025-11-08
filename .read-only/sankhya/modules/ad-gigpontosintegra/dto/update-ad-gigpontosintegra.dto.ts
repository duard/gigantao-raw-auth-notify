import { PartialType } from '@nestjs/swagger';
import { CreateAdGigpontosintegraDto } from './create-ad-gigpontosintegra.dto';

export class UpdateAdGigpontosintegraDto extends PartialType(
  CreateAdGigpontosintegraDto,
) {}
