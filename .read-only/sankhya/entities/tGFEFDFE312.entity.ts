import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE312',
  ['codemp', 'dtref', 'regniv1', 'seqe300', 'regniv3', 'seqe311', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDFE312', { schema: 'SANKHYA' })
export class Tgfefdfe312Entity {
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

  @Column('int', { primary: true, name: 'SEQE300' })
  seqe300: number;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV3',
    length: 4,
    default: () => "'E310'",
  })
  regniv3: string;

  @Column('int', { primary: true, name: 'SEQE311' })
  seqe311: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'E312'" })
  registro: string;

  @Column('varchar', { name: 'NUM_DA', nullable: true, length: 30 })
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
