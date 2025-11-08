import { Injectable, Inject } from '@nestjs/common';
import { TgflnfRepository } from '../repositories/tgflnf.repository.abstract';
import { CreateTgflnfDto } from '../dto/create-tgflnf.dto';
import { Tgflnf } from '../domain/tgflnf.domain';

@Injectable()
export class CreateTgflnfUseCase {
  constructor(
    @Inject('TgflnfRepository')
    private readonly tgflnfRepository: TgflnfRepository,
  ) {}

  execute(createTgflnfDto: CreateTgflnfDto): Promise<Tgflnf> {
    return this.tgflnfRepository.create(createTgflnfDto);
  }
}
