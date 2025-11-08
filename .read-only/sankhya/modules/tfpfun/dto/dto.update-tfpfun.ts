import { PartialType } from '@nestjs/swagger';
import { CreateTfpfunDto } from './dto.create-tfpfun';

export class UpdateTfpfunDto extends PartialType(CreateTfpfunDto) {}
