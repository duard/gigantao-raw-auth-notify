import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TriresEntity } from './tRIRES.entity';

@Index(
  'PK_TRIAQPRRES',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'seqevento'],
  { unique: true },
)
@Entity('TRIAQPRRES', { schema: 'SANKHYA' })
export class TriaqprresEntity {
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

  @Column('float', { name: 'VLRCPSUSPTOTALSIS', nullable: true, precision: 53 })
  vlrcpsusptotalsis: number | null;

  @Column('float', { name: 'VLRCPAPURRET', nullable: true, precision: 53 })
  vlrcpapurret: number | null;

  @Column('float', { name: 'VLRCPSUSPTOTALRET', nullable: true, precision: 53 })
  vlrcpsusptotalret: number | null;

  @ManyToOne(() => TriresEntity, (triresEntity) => triresEntity.triaqprres, {
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
