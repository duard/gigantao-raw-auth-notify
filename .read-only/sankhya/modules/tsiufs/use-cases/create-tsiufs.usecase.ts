import { Injectable, Inject } from '@nestjs/common';
import { TsiufsRepository } from '../repositories/tsiufs.repository.abstract';
import { CreateTsiufsDto } from '../dto/create-tsiufs.dto';
import { Tsiufs } from '../domain/tsiufs.domain';

@Injectable()
export class CreateTsiufsUseCase {
  constructor(
    @Inject('TsiufsRepository')
    private readonly tsiufsRepository: TsiufsRepository,
  ) {}

  execute(createTsiufsDto: CreateTsiufsDto): Promise<Tsiufs> {
    return this.tsiufsRepository.create(createTsiufsDto);
  }
}
