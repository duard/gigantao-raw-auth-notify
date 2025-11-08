import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimfpcEntity } from './tIMFPC.entity';
import { TimfecEntity } from './tIMFEC.entity';
import { TimlocEntity } from './tIMLOC.entity';

@Index('PK_TIMFEI', ['feifechamento', 'feicontratoloc'], { unique: true })
@Entity('TIMFEI', { schema: 'SANKHYA' })
export class TimfeiEntity {
  @Column('int', { primary: true, name: 'FEIFECHAMENTO' })
  feifechamento: number;

  @Column('int', { primary: true, name: 'FEICONTRATOLOC' })
  feicontratoloc: number;

  @Column('float', { name: 'FEIVLRIPTU', nullable: true, precision: 53 })
  feivlriptu: number | null;

  @Column('float', { name: 'FEIVLRSEG', nullable: true, precision: 53 })
  feivlrseg: number | null;

  @Column('float', { name: 'FEICONSUMOAGUA', nullable: true, precision: 53 })
  feiconsumoagua: number | null;

  @Column('float', { name: 'FEIVLRAGUA', nullable: true, precision: 53 })
  feivlragua: number | null;

  @Column('float', { name: 'FEICONSUMOENERGIA', nullable: true, precision: 53 })
  feiconsumoenergia: number | null;

  @Column('float', { name: 'FEIVLRENERGIA', nullable: true, precision: 53 })
  feivlrenergia: number | null;

  @Column('float', { name: 'FEICONSUMOGAS', nullable: true, precision: 53 })
  feiconsumogas: number | null;

  @Column('float', { name: 'FEIVLRGAS', nullable: true, precision: 53 })
  feivlrgas: number | null;

  @Column('float', { name: 'FEITOTVENDA', nullable: true, precision: 53 })
  feitotvenda: number | null;

  @Column('char', { name: 'FEILEGADO', nullable: true, length: 1 })
  feilegado: string | null;

  @ManyToOne(() => TimfpcEntity, (timfpcEntity) => timfpcEntity.timfeis)
  @JoinColumn([
    { name: 'FEICONTRATOLOC', referencedColumnName: 'fpccontratoloc' },
    { name: 'FEIREFFORMAPGTO', referencedColumnName: 'fpcreferencia' },
  ])
  timfpc: TimfpcEntity;

  @ManyToOne(() => TimfecEntity, (timfecEntity) => timfecEntity.timfeis)
  @JoinColumn([{ name: 'FEIFECHAMENTO', referencedColumnName: 'feccodigo' }])
  feifechamento2: TimfecEntity;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timfeis)
  @JoinColumn([{ name: 'FEICONTRATOLOC', referencedColumnName: 'loccodigo' }])
  feicontratoloc2: TimlocEntity;
}
