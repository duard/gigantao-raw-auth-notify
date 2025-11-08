import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmstvcmediarefEntity } from './tMSTVCMEDIAREF.entity';

@Index('PK_TMSTVCMEDIA', ['codtip', 'dtvigencia', 'limitemedia'], {
  unique: true,
})
@Entity('TMSTVCMEDIA', { schema: 'SANKHYA' })
export class TmstvcmediaEntity {
  @Column('int', { primary: true, name: 'CODTIP' })
  codtip: number;

  @Column('datetime', { primary: true, name: 'DTVIGENCIA' })
  dtvigencia: Date;

  @Column('float', { primary: true, name: 'LIMITEMEDIA', precision: 53 })
  limitemedia: number;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;

  @ManyToOne(
    () => TmstvcmediarefEntity,
    (tmstvcmediarefEntity) => tmstvcmediarefEntity.tmstvcmedias,
  )
  @JoinColumn([
    { name: 'CODTIP', referencedColumnName: 'codtip' },
    { name: 'DTVIGENCIA', referencedColumnName: 'dtvigencia' },
  ])
  tmstvcmediaref: TmstvcmediarefEntity;
}
