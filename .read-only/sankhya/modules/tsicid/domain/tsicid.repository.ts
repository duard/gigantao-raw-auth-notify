import { Tsicid } from './tsicid.domain';
import { CreateTsicidDto } from '../dto/create-tsicid.dto';
import { UpdateTsicidDto } from '../dto/update-tsicid.dto';
import { QueryTsicidDto } from './../dto/query-tsicid.dto';
import { TsicidEntity } from 'src/sankhya/entities/tSICID.entity';

export abstract class TsicidRepository {
  abstract create(createDto: CreateTsicidDto): Promise<Tsicid>;
  abstract findAll(query: QueryTsicidDto): Promise<Tsicid[]>;
  abstract findById(codcid: number): Promise<Tsicid | null>;
  abstract update(
    codcid: number,
    updateDto: UpdateTsicidDto,
  ): Promise<TsicidEntity>;
  abstract delete(codcid: number): Promise<void>;
}
