import { TfpdpdEntity } from '../../../entities/tFPDPD.entity';
import { TfpdpdCreateDto } from '../dtos/tfpdpd.create.dto';
import { QueryTfpdpdDto } from '../dtos/tfpdpd.find-all.dto';
import { QueryTfpdpFindOneDto } from '../dtos/tfpdpd.find-one.dto';
import { TfpdpdUpdateDto } from '../dtos/tfpdpd.update.dto';

export abstract class TfpdpdRepository {
  abstract findAll(query: QueryTfpdpdDto): Promise<TfpdpdEntity[] | null>;
  abstract findOne(query: QueryTfpdpFindOneDto): Promise<TfpdpdEntity | null>;
  abstract create(query: TfpdpdCreateDto): Promise<TfpdpdEntity>;
  abstract update(
    id: QueryTfpdpFindOneDto,
    updateTfpdpdDto: TfpdpdUpdateDto,
  ): Promise<TfpdpdEntity | null>;
  abstract remove(id: QueryTfpdpFindOneDto): Promise<void>;
}
