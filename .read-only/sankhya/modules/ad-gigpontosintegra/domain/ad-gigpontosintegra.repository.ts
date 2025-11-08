import { AdGigpontosintegra } from './ad-gigpontosintegra.entity';
import { CreateAdGigpontosintegraDto } from '../dto/create-ad-gigpontosintegra.dto';
import { UpdateAdGigpontosintegraDto } from '../dto/update-ad-gigpontosintegra.dto';

export abstract class AdGigpontosintegraRepository {
  abstract create(
    createAdGigpontosintegraDto: CreateAdGigpontosintegraDto,
  ): Promise<AdGigpontosintegra>;
  abstract findAll(): Promise<AdGigpontosintegra[]>;
  abstract findOne(id: number): Promise<AdGigpontosintegra | null>;
  abstract findOneByHashUid(hashUid: string): Promise<AdGigpontosintegra | null>;
  abstract findMaxId(): Promise<number>; // New method
  abstract update(
    id: number,
    updateAdGigpontosintegraDto: UpdateAdGigpontosintegraDto,
  ): Promise<AdGigpontosintegra>;
  abstract remove(id: number): Promise<void>;
}