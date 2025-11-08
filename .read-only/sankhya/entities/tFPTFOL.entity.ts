import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TFPTFOL',
  [
    'referencia',
    'codemp',
    'codfunc',
    'tipfolha',
    'codevento',
    'sequencia',
    'tipevento',
    'codparc',
    'referenciabas',
  ],
  { unique: true },
)
@Index(
  'TFPTFOL_IFUNCPRINC',
  ['codemp', 'referencia', 'tipfolha', 'codfuncprinc'],
  {},
)
@Entity('TFPTFOL', { schema: 'SANKHYA' })
export class TfptfolEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', {
    primary: true,
    name: 'TIPFOLHA',
    length: 1,
    default: () => "'N'",
  })
  tipfolha: string;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', {
    primary: true,
    name: 'TIPEVENTO',
    default: () => '(-1)',
  })
  tipevento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('float', { name: 'VLREVENTO', precision: 53 })
  vlrevento: number;

  @Column('float', { name: 'INDICE', nullable: true, precision: 53 })
  indice: number | null;

  @Column('varchar', { name: 'UNIDADE', length: 1, default: () => "'V'" })
  unidade: string;

  @Column('datetime', { name: 'REFERENCIAORIG', nullable: true })
  referenciaorig: Date | null;

  @Column('varchar', { name: 'TIPFOLHAORIG', nullable: true, length: 1 })
  tipfolhaorig: string | null;

  @Column('smallint', { name: 'SEQUENCIAORIG', nullable: true })
  sequenciaorig: number | null;

  @Column('smallint', { name: 'CODEVENTOORIG', nullable: true })
  codeventoorig: number | null;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('int', { name: 'CODFUNCORIG', nullable: true })
  codfuncorig: number | null;

  @Column('smallint', { name: 'SEQROE', nullable: true })
  seqroe: number | null;

  @Column('float', { name: 'INDTOMADOR', nullable: true, precision: 53 })
  indtomador: number | null;

  @Column('smallint', { name: 'QTDDIASAV', nullable: true })
  qtddiasav: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('int', { name: 'CODFUNCPRINC', nullable: true })
  codfuncprinc: number | null;

  @Column('datetime', { primary: true, name: 'REFERENCIABAS' })
  referenciabas: Date;

  @Column('int', { name: 'SEQUENCIABAS', nullable: true })
  sequenciabas: number | null;

  @Column('varchar', { name: 'EHCOMPLEMENTAR', nullable: true, length: 1 })
  ehcomplementar: string | null;

  @Column('int', { name: 'NROINFODESCFOL', nullable: true })
  nroinfodescfol: number | null;
}
