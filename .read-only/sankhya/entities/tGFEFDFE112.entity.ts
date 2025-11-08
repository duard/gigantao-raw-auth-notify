import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE112',
  ['codemp', 'dtref', 'regniv1', 'seqe100', 'regniv3', 'seqe111', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDFE112', { schema: 'SANKHYA' })
export class Tgfefdfe112Entity {
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

  @Column('int', { primary: true, name: 'SEQE100' })
  seqe100: number;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV3',
    length: 4,
    default: () => "'E110'",
  })
  regniv3: string;

  @Column('int', { primary: true, name: 'SEQE111' })
  seqe111: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'E112'" })
  registro: string;

  @Column('varchar', { name: 'NUM_DA', nullable: true, length: 100 })
  numDa: string | null;

  @Column('varchar', { name: 'NUM_PROC', length: 60 })
  numProc: string;

  @Column('varchar', { name: 'IND_PROC', nullable: true, length: 1 })
  indProc: string | null;

  @Column('varchar', { name: 'DESCPROC', nullable: true, length: 255 })
  descproc: string | null;

  @Column('varchar', { name: 'TXT_COMPL', nullable: true, length: 255 })
  txtCompl: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
