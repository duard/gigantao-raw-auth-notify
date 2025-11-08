import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TriresEntity } from './tRIRES.entity';

@Index(
  'PK_TRIRCSTRES',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'cnpjprestador'],
  {
    unique: true,
  },
)
@Entity('TRIRCSTRES', { schema: 'SANKHYA' })
export class TrircstresEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CNPJPRESTADOR', length: 14 })
  cnpjprestador: string;

  @Column('float', {
    name: 'VLRTOTALBASERETSIS',
    nullable: true,
    precision: 53,
  })
  vlrtotalbaseretsis: number | null;

  @Column('float', {
    name: 'VLRTOTALRETPRINCSIS',
    nullable: true,
    precision: 53,
  })
  vlrtotalretprincsis: number | null;

  @Column('float', {
    name: 'VLRTOTALRETADICSIS',
    nullable: true,
    precision: 53,
  })
  vlrtotalretadicsis: number | null;

  @Column('float', {
    name: 'VLRTOTALNRETPRINCSIS',
    nullable: true,
    precision: 53,
  })
  vlrtotalnretprincsis: number | null;

  @Column('float', {
    name: 'VLRTOTALNRETADICSIS',
    nullable: true,
    precision: 53,
  })
  vlrtotalnretadicsis: number | null;

  @Column('float', {
    name: 'VLRTOTALBASERETRET',
    nullable: true,
    precision: 53,
  })
  vlrtotalbaseretret: number | null;

  @Column('float', {
    name: 'VLRTOTALRETPRINCRET',
    nullable: true,
    precision: 53,
  })
  vlrtotalretprincret: number | null;

  @Column('float', {
    name: 'VLRTOTALRETADICRET',
    nullable: true,
    precision: 53,
  })
  vlrtotalretadicret: number | null;

  @Column('float', {
    name: 'VLRTOTALNRETPRINCRET',
    nullable: true,
    precision: 53,
  })
  vlrtotalnretprincret: number | null;

  @Column('float', {
    name: 'VLRTOTALNRETADICRET',
    nullable: true,
    precision: 53,
  })
  vlrtotalnretadicret: number | null;

  @Column('float', { name: 'VLRCRTOMSIS', nullable: true, precision: 53 })
  vlrcrtomsis: number | null;

  @Column('float', { name: 'VLRCRTOMSUSPSIS', nullable: true, precision: 53 })
  vlrcrtomsuspsis: number | null;

  @Column('float', { name: 'VLRCRTOMRET', nullable: true, precision: 53 })
  vlrcrtomret: number | null;

  @Column('float', { name: 'VLRCRTOMSUSPRET', nullable: true, precision: 53 })
  vlrcrtomsuspret: number | null;

  @ManyToOne(() => TriresEntity, (triresEntity) => triresEntity.trircstres, {
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
