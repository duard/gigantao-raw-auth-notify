import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimfaiEntity } from './tIMFAI.entity';
import { TimeprEntity } from './tIMEPR.entity';

@Index('PK_TIMFEA', ['feacodigo'], { unique: true })
@Index('UK_TIMFEA', ['feaempreendimento', 'feareferencia'], { unique: true })
@Entity('TIMFEA', { schema: 'SANKHYA' })
export class TimfeaEntity {
  @Column('int', { primary: true, name: 'FEACODIGO' })
  feacodigo: number;

  @Column('int', { name: 'FEAEMPREENDIMENTO', unique: true })
  feaempreendimento: number;

  @Column('datetime', { name: 'FEAREFERENCIA', unique: true })
  feareferencia: Date;

  @Column('char', { name: 'FEAGEROUPARC', length: 1, default: () => "'N'" })
  feagerouparc: string;

  @Column('char', { name: 'FEALEGADO', nullable: true, length: 1 })
  fealegado: string | null;

  @OneToMany(() => TimfaiEntity, (timfaiEntity) => timfaiEntity.faifechamento2)
  timfais: TimfaiEntity[];

  @ManyToOne(() => TimeprEntity, (timeprEntity) => timeprEntity.timfeas)
  @JoinColumn([
    { name: 'FEAEMPREENDIMENTO', referencedColumnName: 'eprcodigo' },
  ])
  feaempreendimento2: TimeprEntity;
}
