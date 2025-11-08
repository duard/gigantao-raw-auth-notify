import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimeprEntity } from './tIMEPR.entity';
import { TimfeiEntity } from './tIMFEI.entity';

@Index('PK_TIMFEC', ['feccodigo'], { unique: true })
@Index('UK_TIMFEC', ['fecempreendimento', 'fecreferencia'], { unique: true })
@Entity('TIMFEC', { schema: 'SANKHYA' })
export class TimfecEntity {
  @Column('int', { primary: true, name: 'FECCODIGO' })
  feccodigo: number;

  @Column('int', { name: 'FECEMPREENDIMENTO', unique: true })
  fecempreendimento: number;

  @Column('datetime', { name: 'FECREFERENCIA', unique: true })
  fecreferencia: Date;

  @Column('float', { name: 'FECDESPRATEAVEL', precision: 53 })
  fecdesprateavel: number;

  @Column('float', { name: 'FECPRECOENERGIA', nullable: true, precision: 53 })
  fecprecoenergia: number | null;

  @Column('float', { name: 'FECPRECOGAS', nullable: true, precision: 53 })
  fecprecogas: number | null;

  @Column('float', { name: 'FECPRECOAGUA', nullable: true, precision: 53 })
  fecprecoagua: number | null;

  @Column('float', { name: 'FECPRECOIPTU', nullable: true, precision: 53 })
  fecprecoiptu: number | null;

  @Column('float', { name: 'FECPRECOSEGURO', nullable: true, precision: 53 })
  fecprecoseguro: number | null;

  @Column('char', { name: 'FECGEROUPARC', length: 1, default: () => "'N'" })
  fecgerouparc: string;

  @Column('char', { name: 'FECLEGADO', nullable: true, length: 1 })
  feclegado: string | null;

  @ManyToOne(() => TimeprEntity, (timeprEntity) => timeprEntity.timfecs)
  @JoinColumn([
    { name: 'FECEMPREENDIMENTO', referencedColumnName: 'eprcodigo' },
  ])
  fecempreendimento2: TimeprEntity;

  @OneToMany(() => TimfeiEntity, (timfeiEntity) => timfeiEntity.feifechamento2)
  timfeis: TimfeiEntity[];
}
