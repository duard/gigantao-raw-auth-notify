import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE230',
  ['codemp', 'dtref', 'regniv1', 'seqe200', 'regniv3', 'seqe220', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDFE230', { schema: 'SANKHYA' })
export class Tgfefdfe230Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'E001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQE200' })
  seqe200: number;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV3',
    length: 4,
    default: () => "'E210'",
  })
  regniv3: string;

  @Column('int', { primary: true, name: 'SEQE220' })
  seqe220: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'E230'" })
  registro: string;

  @Column('varchar', { name: 'NUM_DA', nullable: true, length: 100 })
  numDa: string | null;

  @Column('varchar', { name: 'NUM_PROC', length: 60 })
  numProc: string;

  @Column('smallint', { name: 'IND_PROC', nullable: true })
  indProc: number | null;

  @Column('varchar', { name: 'DESCPROC', nullable: true, length: 255 })
  descproc: string | null;

  @Column('varchar', { name: 'TXT_COMPL', nullable: true, length: 255 })
  txtCompl: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
