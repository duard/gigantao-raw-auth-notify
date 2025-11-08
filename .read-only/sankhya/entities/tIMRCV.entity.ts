import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsimoeEntity } from './tSIMOE.entity';
import { TimretEntity } from './tIMRET.entity';
import { TimltvEntity } from './tIMLTV.entity';

@Index('PK_TIMRCV', ['rcvcontrato', 'rcvreajuste'], { unique: true })
@Entity('TIMRCV', { schema: 'SANKHYA' })
export class TimrcvEntity {
  @Column('int', { primary: true, name: 'RCVCONTRATO' })
  rcvcontrato: number;

  @Column('int', { primary: true, name: 'RCVREAJUSTE' })
  rcvreajuste: number;

  @Column('char', { name: 'RCVESTAGIO', length: 2, default: () => "'PE'" })
  rcvestagio: string;

  @Column('char', { name: 'RCVTABELAPRICE', nullable: true, length: 1 })
  rcvtabelaprice: string | null;

  @Column('float', { name: 'RCVTXINDICEACM', nullable: true, precision: 53 })
  rcvtxindiceacm: number | null;

  @Column('float', { name: 'RCVTXJUROACM', nullable: true, precision: 53 })
  rcvtxjuroacm: number | null;

  @Column('int', { name: 'RCVQTDMESES' })
  rcvqtdmeses: number;

  @Column('text', { name: 'RCVLOG', nullable: true })
  rcvlog: string | null;

  @Column('char', { name: 'RCVLEGADO', nullable: true, length: 1 })
  rcvlegado: string | null;

  @Column('datetime', { name: 'RCVDTULTREAJUSTE', nullable: true })
  rcvdtultreajuste: Date | null;

  @Column('datetime', { name: 'RCVDTREAJUSTE', nullable: true })
  rcvdtreajuste: Date | null;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.timrcvs)
  @JoinColumn([{ name: 'RCVINDICE', referencedColumnName: 'codmoeda' }])
  rcvindice: TsimoeEntity;

  @ManyToOne(() => TimretEntity, (timretEntity) => timretEntity.timrcvs)
  @JoinColumn([{ name: 'RCVREAJUSTE', referencedColumnName: 'retcodigo' }])
  rcvreajuste2: TimretEntity;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timrcvs)
  @JoinColumn([{ name: 'RCVCONTRATO', referencedColumnName: 'ltvcodigo' }])
  rcvcontrato2: TimltvEntity;
}
