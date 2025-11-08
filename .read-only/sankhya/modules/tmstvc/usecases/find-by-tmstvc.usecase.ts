import { Injectable } from '@nestjs/common';
import { TmstvcRepository } from '../domain/tmstvc.repository';
import { Tmstvc } from '../domain/tmstvc.entity';

@Injectable()
export class FindTmstvcByUseCase {
  constructor(private readonly repo: TmstvcRepository) {}

  async execute(id: number): Promise<Tmstvc | null> {
    return this.repo.findBy(id);
  }
}
