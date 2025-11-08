import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmstabfreteEntity } from './tMSTABFRETE.entity';

@Index('PK_TMSTABPRECOS', ['codtab', 'sequencia'], { unique: true })
@Entity('TMSTABPRECOS', { schema: 'SANKHYA' })
export class TmstabprecosEntity {
  @Column('int', { primary: true, name: 'CODTAB' })
  codtab: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'PESOINI', nullable: true, precision: 53 })
  pesoini: number | null;

  @Column('float', { name: 'PESOFIN', nullable: true, precision: 53 })
  pesofin: number | null;

  @Column('int', { name: 'DISTINI', nullable: true })
  distini: number | null;

  @Column('int', { name: 'DISTFIN', nullable: true })
  distfin: number | null;

  @Column('float', { name: 'VLRFRETEEMP', nullable: true, precision: 53 })
  vlrfreteemp: number | null;

  @Column('float', { name: 'VLRFRETEMOT', nullable: true, precision: 53 })
  vlrfretemot: number | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODTIPVEI', nullable: true })
  codtipvei: number | null;

  @ManyToOne(
    () => TmstabfreteEntity,
    (tmstabfreteEntity) => tmstabfreteEntity.tmstabprecos,
  )
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab2: TmstabfreteEntity;
}
