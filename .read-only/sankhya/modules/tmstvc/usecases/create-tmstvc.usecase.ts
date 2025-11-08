import { Injectable } from '@nestjs/common';
import { TmstvcRepository } from '../domain/tmstvc.repository';
import { Tmstvc } from '../domain/tmstvc.entity';
import { CreateTmstvcDto } from '../dto/create-tmstvc.dto';

@Injectable()
export class CreateTmstvcUseCase {
  constructor(private readonly repo: TmstvcRepository) {}

  async execute(data: CreateTmstvcDto): Promise<Tmstvc> {
    return this.repo.create(data);
  }
}
