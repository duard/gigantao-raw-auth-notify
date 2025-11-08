import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TriresEntity } from './tRIRES.entity';

@Index(
  'PK_TRICPRBRES',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'codreceita'],
  { unique: true },
)
@Entity('TRICPRBRES', { schema: 'SANKHYA' })
export class TricprbresEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CODRECEITA', length: 6 })
  codreceita: string;

  @Column('float', { name: 'VLRCPAPURTOTALSIS', nullable: true, precision: 53 })
  vlrcpapurtotalsis: number | null;

  @Column('float', {
    name: 'VLRCPRBSUSPTOTALSIS',
    nullable: true,
    precision: 53,
  })
  vlrcprbsusptotalsis: number | null;

  @Column('float', { name: 'VLRCPAPURTOTALRET', nullable: true, precision: 53 })
  vlrcpapurtotalret: number | null;

  @Column('float', {
    name: 'VLRCPRBSUSPTOTALRET',
    nullable: true,
    precision: 53,
  })
  vlrcprbsusptotalret: number | null;

  @ManyToOne(() => TriresEntity, (triresEntity) => triresEntity.tricprbres, {
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
