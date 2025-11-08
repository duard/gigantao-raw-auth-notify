import { Injectable } from '@nestjs/common';
import { TmstvcRepository } from '../domain/tmstvc.repository';
import { Tmstvc } from '../domain/tmstvc.entity';
import { QueryTmstvcDto } from '../dto/query-tmstvc.dto';

@Injectable()
export class FindAllTmstvcUseCase {
  constructor(private readonly repo: TmstvcRepository) {}

  async execute(query: QueryTmstvcDto): Promise<Tmstvc[]> {
    return this.repo.findAll(query);
  }
}
