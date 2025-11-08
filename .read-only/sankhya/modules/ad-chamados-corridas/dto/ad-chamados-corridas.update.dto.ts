import { PartialType } from '@nestjs/swagger';
import { CreateAdChamadosCorridasDto } from './ad-chamados-corridas.create.dto';

export class UpdateAdChamadosCorridasDto extends PartialType(
  CreateAdChamadosCorridasDto,
) {}
