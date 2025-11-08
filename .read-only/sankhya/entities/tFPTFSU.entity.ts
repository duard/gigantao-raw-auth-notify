import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TFPTFSU',
  [
    'referencia',
    'codemp',
    'codfunc',
    'tipfolha',
    'seqfolha',
    'codevento',
    'sequencia',
    'tipevento',
    'codparc',
  ],
  { unique: true },
)
@Entity('TFPTFSU', { schema: 'SANKHYA' })
export class TfptfsuEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { primary: true, name: 'TIPFOLHA', length: 1 })
  tipfolha: string;

  @Column('smallint', { primary: true, name: 'SEQFOLHA' })
  seqfolha: number;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'TIPEVENTO' })
  tipevento: number;

  @Column('float', { name: 'VLREVENTO', precision: 53 })
  vlrevento: number;

  @Column('float', { name: 'INDICE', nullable: true, precision: 53 })
  indice: number | null;

  @Column('varchar', { name: 'UNIDADE', length: 1 })
  unidade: string;

  @Column('smallint', { name: 'PRAZO', nullable: true })
  prazo: number | null;

  @Column('float', { name: 'VLRCALCULO', nullable: true, precision: 53 })
  vlrcalculo: number | null;

  @Column('varchar', { name: 'OBS', nullable: true, length: 60 })
  obs: string | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('int', { name: 'NUOCOR', nullable: true })
  nuocor: number | null;

  @Column('datetime', { name: 'REFERENCIAORIG', nullable: true })
  referenciaorig: Date | null;

  @Column('char', { name: 'TIPFOLHAORIG', nullable: true, length: 1 })
  tipfolhaorig: string | null;

  @Column('smallint', { name: 'SEQUENCIAORIG', nullable: true })
  sequenciaorig: number | null;

  @Column('smallint', { name: 'CODEVENTOORIG', nullable: true })
  codeventoorig: number | null;

  @Column('varchar', { name: 'INSCONSIG', nullable: true, length: 5 })
  insconsig: string | null;

  @Column('varchar', { name: 'NRCONTR', nullable: true, length: 40 })
  nrcontr: string | null;

  @Column('int', { name: 'CODFUNCORIG', nullable: true })
  codfuncorig: number | null;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('smallint', { name: 'SEQROE', nullable: true })
  seqroe: number | null;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'NROINFODESCFOL', nullable: true })
  nroinfodescfol: number | null;
}
