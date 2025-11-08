import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TmstvcmediaEntity } from './tMSTVCMEDIA.entity';
import { TmstvcEntity } from './tMSTVC.entity';

@Index('PK_TMSTVCMEDIAREF', ['codtip', 'dtvigencia'], { unique: true })
@Entity('TMSTVCMEDIAREF', { schema: 'SANKHYA' })
export class TmstvcmediarefEntity {
  @Column('int', { primary: true, name: 'CODTIP' })
  codtip: number;

  @Column('datetime', { primary: true, name: 'DTVIGENCIA' })
  dtvigencia: Date;

  @OneToMany(
    () => TmstvcmediaEntity,
    (tmstvcmediaEntity) => tmstvcmediaEntity.tmstvcmediaref,
  )
  tmstvcmedias: TmstvcmediaEntity[];

  @ManyToOne(() => TmstvcEntity, (tmstvcEntity) => tmstvcEntity.tmstvcmediarefs)
  @JoinColumn([{ name: 'CODTIP', referencedColumnName: 'codtip' }])
  codtip2: TmstvcEntity;
}
