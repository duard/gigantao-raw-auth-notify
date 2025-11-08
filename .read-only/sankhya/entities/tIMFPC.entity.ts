import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimfaiEntity } from './tIMFAI.entity';
import { TimfeiEntity } from './tIMFEI.entity';
import { TimlocEntity } from './tIMLOC.entity';

@Index('PK_TIMFPC', ['fpccontratoloc', 'fpcreferencia'], { unique: true })
@Entity('TIMFPC', { schema: 'SANKHYA' })
export class TimfpcEntity {
  @Column('int', { primary: true, name: 'FPCCONTRATOLOC' })
  fpccontratoloc: number;

  @Column('datetime', { primary: true, name: 'FPCREFERENCIA' })
  fpcreferencia: Date;

  @Column('char', { name: 'FPCTIPO', length: 1 })
  fpctipo: string;

  @Column('float', { name: 'FPCVLRFIXO', nullable: true, precision: 53 })
  fpcvlrfixo: number | null;

  @Column('float', { name: 'FPCPERCPA', precision: 53 })
  fpcpercpa: number;

  @Column('float', { name: 'FPCPERCAP', precision: 53 })
  fpcpercap: number;

  @Column('float', { name: 'FPCPERCPE', precision: 53 })
  fpcpercpe: number;

  @Column('varchar', { name: 'FPCBASECALCAP', length: 3 })
  fpcbasecalcap: string;

  @Column('char', { name: 'FPCLEGADO', nullable: true, length: 1 })
  fpclegado: string | null;

  @OneToMany(() => TimfaiEntity, (timfaiEntity) => timfaiEntity.timfpc)
  timfais: TimfaiEntity[];

  @OneToMany(() => TimfeiEntity, (timfeiEntity) => timfeiEntity.timfpc)
  timfeis: TimfeiEntity[];

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timfpcs)
  @JoinColumn([{ name: 'FPCCONTRATOLOC', referencedColumnName: 'loccodigo' }])
  fpccontratoloc2: TimlocEntity;
}
