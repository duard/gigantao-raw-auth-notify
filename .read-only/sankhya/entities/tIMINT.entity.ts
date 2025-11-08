import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimtinEntity } from './tIMTIN.entity';
import { TimltvEntity } from './tIMLTV.entity';

@Index('PK_TIMINT', ['intseq', 'intcontrato'], { unique: true })
@Entity('TIMINT', { schema: 'SANKHYA' })
export class TimintEntity {
  @Column('int', { primary: true, name: 'INTSEQ' })
  intseq: number;

  @Column('int', { primary: true, name: 'INTCONTRATO' })
  intcontrato: number;

  @Column('datetime', { name: 'INTDTVENC' })
  intdtvenc: Date;

  @Column('float', { name: 'INTVALOR', precision: 53 })
  intvalor: number;

  @ManyToOne(() => TimtinEntity, (timtinEntity) => timtinEntity.timints)
  @JoinColumn([{ name: 'INTTIPOINTERMED', referencedColumnName: 'tincodigo' }])
  inttipointermed: TimtinEntity;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timints)
  @JoinColumn([{ name: 'INTCONTRATO', referencedColumnName: 'ltvcodigo' }])
  intcontrato2: TimltvEntity;
}
