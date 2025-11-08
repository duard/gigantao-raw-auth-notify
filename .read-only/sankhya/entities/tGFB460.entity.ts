import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { Tgfb465Entity } from './tGFB465.entity';

@Index('PK_TGFB460', ['codemp', 'dtinicio', 'sequencia'], { unique: true })
@Entity('TGFB460', { schema: 'SANKHYA' })
export class Tgfb460Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'IND_DEDUCAO' })
  indDeducao: number;

  @Column('float', { name: 'VLRAJUSTE', precision: 53 })
  vlrajuste: number;

  @Column('varchar', { name: 'NUM_PROC', nullable: true, length: 30 })
  numProc: string | null;

  @Column('smallint', { name: 'IND_PROC', nullable: true })
  indProc: number | null;

  @Column('varchar', { name: 'DESC_PROC', nullable: true, length: 250 })
  descProc: string | null;

  @Column('smallint', { name: 'COD_INF_OBS', nullable: true })
  codInfObs: number | null;

  @Column('smallint', { name: 'INDOBRIGACAO', nullable: true })
  indobrigacao: number | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfbs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(() => Tgfb465Entity, (tgfb465Entity) => tgfb465Entity.tgfb)
  tgfbs: Tgfb465Entity[];
}
