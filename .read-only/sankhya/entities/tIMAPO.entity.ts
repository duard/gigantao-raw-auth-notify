import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimltvEntity } from './tIMLTV.entity';
import { TimapsEntity } from './tIMAPS.entity';

@Index('PK_TIMAPO', ['apoaprovsaldo', 'apocontrato'], { unique: true })
@Entity('TIMAPO', { schema: 'SANKHYA' })
export class TimapoEntity {
  @Column('smallint', { primary: true, name: 'APOAPROVSALDO' })
  apoaprovsaldo: number;

  @Column('int', { primary: true, name: 'APOCONTRATO' })
  apocontrato: number;

  @Column('varchar', { name: 'APOLOTE', nullable: true, length: 50 })
  apolote: string | null;

  @Column('varchar', { name: 'APOQUADRA', nullable: true, length: 50 })
  apoquadra: string | null;

  @Column('float', { name: 'APOVLRTOTAL', nullable: true, precision: 53 })
  apovlrtotal: number | null;

  @Column('float', { name: 'APOAPROVEITAR', nullable: true, precision: 53 })
  apoaproveitar: number | null;

  @Column('char', { name: 'APOLEGADO', nullable: true, length: 1 })
  apolegado: string | null;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timapos)
  @JoinColumn([{ name: 'APOCONTRATO', referencedColumnName: 'ltvcodigo' }])
  apocontrato2: TimltvEntity;

  @ManyToOne(() => TimapsEntity, (timapsEntity) => timapsEntity.timapos)
  @JoinColumn([{ name: 'APOAPROVSALDO', referencedColumnName: 'apscodigo' }])
  apoaprovsaldo2: TimapsEntity;
}
