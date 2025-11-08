import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprmpsEntity } from './tPRMPS.entity';

@Index('PK_TPRDGIR', ['numps', 'seqimps', 'perini'], { unique: true })
@Entity('TPRDGIR', { schema: 'SANKHYA' })
export class TprdgirEntity {
  @Column('int', { primary: true, name: 'NUMPS' })
  numps: number;

  @Column('int', { primary: true, name: 'SEQIMPS' })
  seqimps: number;

  @Column('datetime', { primary: true, name: 'PERINI' })
  perini: Date;

  @Column('datetime', { name: 'PERFIN' })
  perfin: Date;

  @Column('float', { name: 'QTDGIRO', precision: 53, default: () => '(0)' })
  qtdgiro: number;

  @ManyToOne(() => TprmpsEntity, (tprmpsEntity) => tprmpsEntity.tprdgirs)
  @JoinColumn([{ name: 'NUMPS', referencedColumnName: 'numps' }])
  numps2: TprmpsEntity;
}
