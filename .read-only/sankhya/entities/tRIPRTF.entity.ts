import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIPRTF',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'nrodocumento',
    'tipodocumento',
    'natrend',
    'tpprocret',
    'nuprocesso',
    'seqite',
    'codimp',
    'dtfg',
  ],
  { unique: true },
)
@Entity('TRIPRTF', { schema: 'SANKHYA' })
export class TriprtfEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

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

  @Column('smallint', { primary: true, name: 'TPPROCRET' })
  tpprocret: number;

  @Column('varchar', { name: 'NRPROCRET', length: 60 })
  nrprocret: string;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @Column('float', { name: 'VLRNRETIDO', nullable: true, precision: 53 })
  vlrnretido: number | null;

  @Column('float', { name: 'VLRDEPJUD', nullable: true, precision: 53 })
  vlrdepjud: number | null;

  @Column('float', { name: 'VLRRENDSUSP', nullable: true, precision: 53 })
  vlrrendsusp: number | null;

  @Column('smallint', { primary: true, name: 'SEQITE' })
  seqite: number;

  @Column('smallint', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('datetime', {
    primary: true,
    name: 'DTFG',
    default: () => 'getdate()',
  })
  dtfg: Date;
}
