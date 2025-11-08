import { TfpdpdEntity } from '../../../entities/tFPDPD.entity';

export class TfpdpdMapper {
  static toResponse(entity: TfpdpdEntity): TfpdpdEntity {
    return {
      ...entity,
    };
  }
}
