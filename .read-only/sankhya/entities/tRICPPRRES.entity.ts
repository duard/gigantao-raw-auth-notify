import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TriresEntity } from './tRIRES.entity';

@Index(
  'PK_TRICPPRRES',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'seqevento'],
  { unique: true },
)
@Entity('TRICPPRRES', { schema: 'SANKHYA' })
export class TricpprresEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'SEQEVENTO' })
  seqevento: number;

  @Column('float', { name: 'VLRCPAPURSIS', nullable: true, precision: 53 })
  vlrcpapursis: number | null;

  @Column('float', { name: 'VLRRATAPURSIS', nullable: true, precision: 53 })
  vlrratapursis: number | null;

  @Column('float', { name: 'VLRSENARAPURSIS', nullable: true, precision: 53 })
  vlrsenarapursis: number | null;

  @Column('float', { name: 'VLRCPSUSPTOTALSIS', nullable: true, precision: 53 })
  vlrcpsusptotalsis: number | null;

  @Column('float', {
    name: 'VLRRATSUSPTOTALSIS',
    nullable: true,
    precision: 53,
  })
  vlrratsusptotalsis: number | null;

  @Column('float', {
    name: 'VLRSENARSUSPTOTALSIS',
    nullable: true,
    precision: 53,
  })
  vlrsenarsusptotalsis: number | null;

  @Column('float', { name: 'VLRCPAPURRET', nullable: true, precision: 53 })
  vlrcpapurret: number | null;

  @Column('float', { name: 'VLRRATAPURRET', nullable: true, precision: 53 })
  vlrratapurret: number | null;

  @Column('float', { name: 'VLRSENARAPURRET', nullable: true, precision: 53 })
  vlrsenarapurret: number | null;

  @Column('float', { name: 'VLRCPSUSPTOTALRET', nullable: true, precision: 53 })
  vlrcpsusptotalret: number | null;

  @Column('float', {
    name: 'VLRRATSUSPTOTALRET',
    nullable: true,
    precision: 53,
  })
  vlrratsusptotalret: number | null;

  @Column('float', {
    name: 'VLRSENARSUSPTOTALRET',
    nullable: true,
    precision: 53,
  })
  vlrsenarsusptotalret: number | null;

  @ManyToOne(() => TriresEntity, (triresEntity) => triresEntity.tricpprres, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  trires: TriresEntity;
}
