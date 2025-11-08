import { Injectable } from '@nestjs/common';
import { AdGigpontosintegraRepository } from '../domain/ad-gigpontosintegra.repository';
import { UpdateAdGigpontosintegraDto } from '../dto/update-ad-gigpontosintegra.dto';

@Injectable()
export class UpdateAdGigpontosintegraUseCase {
  constructor(private readonly repository: AdGigpontosintegraRepository) {}

  async execute(
    id: number,
    updateAdGigpontosintegraDto: UpdateAdGigpontosintegraDto,
  ) {
    return this.repository.update(id, updateAdGigpontosintegraDto);
  }
}
