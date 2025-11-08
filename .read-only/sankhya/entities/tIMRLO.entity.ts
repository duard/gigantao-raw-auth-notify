import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimrlcEntity } from './tIMRLC.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TIMRLO', ['rlocodigo'], { unique: true })
@Entity('TIMRLO', { schema: 'SANKHYA' })
export class TimrloEntity {
  @Column('smallint', { primary: true, name: 'RLOCODIGO' })
  rlocodigo: number;

  @Column('char', { name: 'RLOESTAGIO', length: 2 })
  rloestagio: string;

  @Column('datetime', { name: 'RLODHREAJUSTE' })
  rlodhreajuste: Date;

  @Column('datetime', { name: 'RLODHINCLUSAO', nullable: true })
  rlodhinclusao: Date | null;

  @Column('datetime', { name: 'RLODHALTERACAO', nullable: true })
  rlodhalteracao: Date | null;

  @Column('char', { name: 'RLOLEGADO', nullable: true, length: 1 })
  rlolegado: string | null;

  @OneToMany(() => TimrlcEntity, (timrlcEntity) => timrlcEntity.rlcreajuste2)
  timrlcs: TimrlcEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timrlos)
  @JoinColumn([{ name: 'RLOUSUALTERACAO', referencedColumnName: 'codusu' }])
  rlousualteracao: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timrlos2)
  @JoinColumn([{ name: 'RLOUSUINCLUSAO', referencedColumnName: 'codusu' }])
  rlousuinclusao: TsiusuEntity;
}
