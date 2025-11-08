import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimrloEntity } from './tIMRLO.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TsimoeEntity } from './tSIMOE.entity';

@Index('PK_TIMRLC', ['rlcreajuste', 'rlccontrato'], { unique: true })
@Entity('TIMRLC', { schema: 'SANKHYA' })
export class TimrlcEntity {
  @Column('smallint', { primary: true, name: 'RLCREAJUSTE' })
  rlcreajuste: number;

  @Column('int', { primary: true, name: 'RLCCONTRATO' })
  rlccontrato: number;

  @Column('char', { name: 'RLCESTAGIO', length: 2 })
  rlcestagio: string;

  @Column('smallint', { name: 'RLCQTDMESES', nullable: true })
  rlcqtdmeses: number | null;

  @Column('float', { name: 'RLCTXCORR', nullable: true, precision: 53 })
  rlctxcorr: number | null;

  @Column('text', { name: 'RLCLOG', nullable: true })
  rlclog: string | null;

  @Column('char', { name: 'RLCLEGADO', nullable: true, length: 1 })
  rlclegado: string | null;

  @Column('char', { name: 'RLCBLOQUEADO', nullable: true, length: 1 })
  rlcbloqueado: string | null;

  @ManyToOne(() => TimrloEntity, (timrloEntity) => timrloEntity.timrlcs)
  @JoinColumn([{ name: 'RLCREAJUSTE', referencedColumnName: 'rlocodigo' }])
  rlcreajuste2: TimrloEntity;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timrlcs)
  @JoinColumn([{ name: 'RLCCONTRATO', referencedColumnName: 'loccodigo' }])
  rlccontrato2: TimlocEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.timrlcs)
  @JoinColumn([{ name: 'RLCINDICE', referencedColumnName: 'codmoeda' }])
  rlcindice: TsimoeEntity;
}
