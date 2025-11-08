import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC420',
  ['codemp', 'dtref', 'regniv1', 'seqc400', 'seqc405', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC420', { schema: 'SANKHYA' })
export class Tgfefdfc420Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQC400' })
  seqc400: number;

  @Column('int', { primary: true, name: 'SEQC405' })
  seqc405: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C420'" })
  registro: string;

  @Column('varchar', { name: 'COD_TOT_PAR', length: 7 })
  codTotPar: string;

  @Column('float', { name: 'VLR_ACUM_TOT', nullable: true, precision: 53 })
  vlrAcumTot: number | null;

  @Column('int', { name: 'NR_TOT', nullable: true })
  nrTot: number | null;

  @Column('varchar', { name: 'DESCR_NR_TOT', nullable: true, length: 255 })
  descrNrTot: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
