import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfptpinfoirEntity } from './tFPTPINFOIR.entity';

@Index('PK_GRINFOIR', ['codgrinfoir'], { unique: true })
@Entity('TFPGRINFOIR', { schema: 'SANKHYA' })
export class TfpgrinfoirEntity {
  @Column('smallint', { primary: true, name: 'CODGRINFOIR' })
  codgrinfoir: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @OneToMany(
    () => TfptpinfoirEntity,
    (tfptpinfoirEntity) => tfptpinfoirEntity.codgrinfoir,
  )
  tfptpinfoirs: TfptpinfoirEntity[];
}
