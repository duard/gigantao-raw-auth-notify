import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdGigpontosintegraEntity } from '../../../entities/AD_GIGPONTOSINTEGRA.entity';
import { AdGigpontosintegra } from '../domain/ad-gigpontosintegra.entity';
import { AdGigpontosintegraRepository } from '../domain/ad-gigpontosintegra.repository';
import { CreateAdGigpontosintegraDto } from '../dto/create-ad-gigpontosintegra.dto';
import { UpdateAdGigpontosintegraDto } from '../dto/update-ad-gigpontosintegra.dto';

@Injectable()
export class AdGigpontosintegraRepositoryImpl
  implements AdGigpontosintegraRepository
{
  constructor(
    @InjectRepository(AdGigpontosintegraEntity)
    private readonly repository: Repository<AdGigpontosintegraEntity>,
  ) {}

  async create(
    createAdGigpontosintegraDto: CreateAdGigpontosintegraDto,
  ): Promise<AdGigpontosintegra> {
    const newEntry = this.repository.create(createAdGigpontosintegraDto);
    return this.repository.save(newEntry);
  }

  async findAll(): Promise<AdGigpontosintegra[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AdGigpontosintegra | null> {
    return this.repository.findOneBy({ id });
  }

  async findOneByHashUid(hashUid: string): Promise<AdGigpontosintegra | null> {
    return this.repository.findOneBy({ hashUid });
  }

  async findMaxId(): Promise<number> {
    const result = await this.repository
      .createQueryBuilder('ad_gigpontosintegra')
      .select('MAX(ad_gigpontosintegra.id)', 'maxId')
      .getRawOne();
    return result?.maxId || 0;
  }

  async update(
    id: number,
    updateAdGigpontosintegraDto: UpdateAdGigpontosintegraDto,
  ): Promise<AdGigpontosintegra> {
    await this.repository.update(id, updateAdGigpontosintegraDto);
    const updatedEntity = await this.findOne(id);
    if (!updatedEntity) {
      throw new NotFoundException(`Entry with ID ${id} not found after update`);
    }
    return updatedEntity;
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}