import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimltvEntity } from './tIMLTV.entity';

@Index('PK_TIMBAL', ['balseq', 'balcontrato'], { unique: true })
@Entity('TIMBAL', { schema: 'SANKHYA' })
export class TimbalEntity {
  @Column('int', { primary: true, name: 'BALSEQ' })
  balseq: number;

  @Column('int', { primary: true, name: 'BALCONTRATO' })
  balcontrato: number;

  @Column('datetime', { name: 'BALDTVENC' })
  baldtvenc: Date;

  @Column('float', { name: 'BALVALOR', precision: 53 })
  balvalor: number;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timbals)
  @JoinColumn([{ name: 'BALCONTRATO', referencedColumnName: 'ltvcodigo' }])
  balcontrato2: TimltvEntity;
}
