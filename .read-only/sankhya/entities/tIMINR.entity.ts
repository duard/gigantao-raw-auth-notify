import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimtinEntity } from './tIMTIN.entity';
import { TimlvrEntity } from './tIMLVR.entity';

@Index('PK_TIMINR', ['inrseq', 'inrreneg', 'inrcontrato'], { unique: true })
@Entity('TIMINR', { schema: 'SANKHYA' })
export class TiminrEntity {
  @Column('int', { primary: true, name: 'INRSEQ' })
  inrseq: number;

  @Column('int', { primary: true, name: 'INRRENEG' })
  inrreneg: number;

  @Column('int', { primary: true, name: 'INRCONTRATO' })
  inrcontrato: number;

  @Column('datetime', { name: 'INRDTVENC' })
  inrdtvenc: Date;

  @Column('float', { name: 'INRVALOR', precision: 53 })
  inrvalor: number;

  @ManyToOne(() => TimtinEntity, (timtinEntity) => timtinEntity.timinrs)
  @JoinColumn([{ name: 'INRTIPOINTERMED', referencedColumnName: 'tincodigo' }])
  inrtipointermed: TimtinEntity;

  @ManyToOne(() => TimlvrEntity, (timlvrEntity) => timlvrEntity.timinrs)
  @JoinColumn([
    { name: 'INRRENEG', referencedColumnName: 'lvrcodigo' },
    { name: 'INRCONTRATO', referencedColumnName: 'lvrcontrato' },
  ])
  timlvr: TimlvrEntity;
}
