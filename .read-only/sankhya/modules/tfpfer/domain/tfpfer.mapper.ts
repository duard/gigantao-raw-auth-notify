import { TfpferEntity } from '../../../entities/tFPFER.entity';

export class TfpferMapper {
  static toResponse(entity: TfpferEntity): TfpferEntity {
    return {
      ...entity,
    };
  }
}
