import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimlvrEntity } from './tIMLVR.entity';

@Index('PK_TIMBAR', ['barseq', 'barreneg', 'barcontrato'], { unique: true })
@Entity('TIMBAR', { schema: 'SANKHYA' })
export class TimbarEntity {
  @Column('int', { primary: true, name: 'BARSEQ' })
  barseq: number;

  @Column('int', { primary: true, name: 'BARRENEG' })
  barreneg: number;

  @Column('int', { primary: true, name: 'BARCONTRATO' })
  barcontrato: number;

  @Column('datetime', { name: 'BARDTVENC' })
  bardtvenc: Date;

  @Column('float', { name: 'BARVALOR', precision: 53 })
  barvalor: number;

  @ManyToOne(() => TimlvrEntity, (timlvrEntity) => timlvrEntity.timbars)
  @JoinColumn([
    { name: 'BARRENEG', referencedColumnName: 'lvrcodigo' },
    { name: 'BARCONTRATO', referencedColumnName: 'lvrcontrato' },
  ])
  timlvr: TimlvrEntity;
}
