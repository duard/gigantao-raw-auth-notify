import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIAPPR',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'nrodocumento',
    'tipodocumento',
    'natrend',
    'nuprocesso',
    'codimp',
    'seqite',
    'codparc',
    'dtfg',
  ],
  { unique: true },
)
@Entity('TRIAPPR', { schema: 'SANKHYA' })
export class TriapprEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('int', { primary: true, name: 'NRODOCUMENTO' })
  nrodocumento: number;

  @Column('varchar', { primary: true, name: 'TIPODOCUMENTO', length: 1 })
  tipodocumento: string;

  @Column('smallint', { primary: true, name: 'NATREND' })
  natrend: number;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { name: 'TPPROCRET', nullable: true })
  tpprocret: number | null;

  @Column('varchar', { name: 'NRPROCRET', nullable: true, length: 52 })
  nrprocret: string | null;

  @Column('bigint', { name: 'CODSUSP', nullable: true })
  codsusp: string | null;

  @Column('float', { name: 'VLRBASESUSPIR', nullable: true, precision: 53 })
  vlrbasesuspir: number | null;

  @Column('float', { name: 'VLRNIR', nullable: true, precision: 53 })
  vlrnir: number | null;

  @Column('float', { name: 'VLRDEPIR', nullable: true, precision: 53 })
  vlrdepir: number | null;

  @Column('smallint', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('smallint', { primary: true, name: 'SEQITE' })
  seqite: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', {
    primary: true,
    name: 'DTFG',
    default: () => 'getdate()',
  })
  dtfg: Date;
}
