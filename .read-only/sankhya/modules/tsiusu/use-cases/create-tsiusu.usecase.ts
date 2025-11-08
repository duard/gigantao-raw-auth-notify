import { Injectable, Inject } from '@nestjs/common';
import { TsiusuRepository } from '../repositories/tsiusu.repository.abstract';
import { CreateTsiusuDto } from '../dto/create-tsiusu.dto';
import { Tsiusu } from '../domain/tsiusu.domain';

@Injectable()
export class CreateTsiusuUseCase {
  constructor(
    @Inject('TsiusuRepository')
    private readonly tsiusuRepository: TsiusuRepository,
  ) {}

  execute(createTsiusuDto: CreateTsiusuDto): Promise<Tsiusu> {
    return this.tsiusuRepository.create(createTsiusuDto);
  }
}
