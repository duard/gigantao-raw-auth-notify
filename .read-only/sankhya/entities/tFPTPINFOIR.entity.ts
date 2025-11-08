import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpgrinfoirEntity } from './tFPGRINFOIR.entity';
import { Tfptpinfoirrub21Entity } from './tFPTPINFOIRRUB21.entity';

@Index('PK_TFPTPINFOIR', ['codtpinfoir'], { unique: true })
@Entity('TFPTPINFOIR', { schema: 'SANKHYA' })
export class TfptpinfoirEntity {
  @Column('smallint', { primary: true, name: 'CODTPINFOIR' })
  codtpinfoir: number;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @ManyToOne(
    () => TfpgrinfoirEntity,
    (tfpgrinfoirEntity) => tfpgrinfoirEntity.tfptpinfoirs,
  )
  @JoinColumn([{ name: 'CODGRINFOIR', referencedColumnName: 'codgrinfoir' }])
  codgrinfoir: TfpgrinfoirEntity;

  @OneToMany(
    () => Tfptpinfoirrub21Entity,
    (tfptpinfoirrub21Entity) => tfptpinfoirrub21Entity.codtpinfoir,
  )
  tfptpinfoirrubs: Tfptpinfoirrub21Entity[];
}
