import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimltvEntity } from './tIMLTV.entity';
import { TimapsEntity } from './tIMAPS.entity';

@Index('PK_TIMAPR', ['apraprovsaldo', 'aprcontrato'], { unique: true })
@Entity('TIMAPR', { schema: 'SANKHYA' })
export class TimaprEntity {
  @Column('smallint', { primary: true, name: 'APRAPROVSALDO' })
  apraprovsaldo: number;

  @Column('int', { primary: true, name: 'APRCONTRATO' })
  aprcontrato: number;

  @Column('varchar', { name: 'APRLOTE', nullable: true, length: 50 })
  aprlote: string | null;

  @Column('varchar', { name: 'APRQUADRA', nullable: true, length: 50 })
  aprquadra: string | null;

  @Column('float', { name: 'APRVLRTOTAL', nullable: true, precision: 53 })
  aprvlrtotal: number | null;

  @Column('float', { name: 'APRPENDENTE', nullable: true, precision: 53 })
  aprpendente: number | null;

  @Column('float', { name: 'APRAPROVEITADO', nullable: true, precision: 53 })
  apraproveitado: number | null;

  @Column('float', { name: 'APRRESTANTE', nullable: true, precision: 53 })
  aprrestante: number | null;

  @Column('float', { name: 'APRVLRPARCANT', nullable: true, precision: 53 })
  aprvlrparcant: number | null;

  @Column('char', { name: 'APRLEGADO', nullable: true, length: 1 })
  aprlegado: string | null;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timaprs)
  @JoinColumn([{ name: 'APRCONTRATO', referencedColumnName: 'ltvcodigo' }])
  aprcontrato2: TimltvEntity;

  @ManyToOne(() => TimapsEntity, (timapsEntity) => timapsEntity.timaprs)
  @JoinColumn([{ name: 'APRAPROVSALDO', referencedColumnName: 'apscodigo' }])
  apraprovsaldo2: TimapsEntity;
}
