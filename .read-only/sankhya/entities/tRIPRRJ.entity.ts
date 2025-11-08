import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIPRRJ',
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
@Entity('TRIPRRJ', { schema: 'SANKHYA' })
export class TriprrjEntity {
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

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { primary: true, name: 'TPPROCRET' })
  tpprocret: number;

  @Column('varchar', { name: 'NRPROCRET', length: 60 })
  nrprocret: string;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @Column('float', { name: 'VLRBASESUSPIR', nullable: true, precision: 53 })
  vlrbasesuspir: number | null;

  @Column('float', { name: 'VLRNIR', nullable: true, precision: 53 })
  vlrnir: number | null;

  @Column('float', { name: 'VLRDEPIR', nullable: true, precision: 53 })
  vlrdepir: number | null;

  @Column('float', { name: 'VLRBASESUSPCSLL', nullable: true, precision: 53 })
  vlrbasesuspcsll: number | null;

  @Column('float', { name: 'VLRNCSLL', nullable: true, precision: 53 })
  vlrncsll: number | null;

  @Column('float', { name: 'VLRDEPCSLL', nullable: true, precision: 53 })
  vlrdepcsll: number | null;

  @Column('float', { name: 'VLRBASESUSPCOFINS', nullable: true, precision: 53 })
  vlrbasesuspcofins: number | null;

  @Column('float', { name: 'VLRNCOFINS', nullable: true, precision: 53 })
  vlrncofins: number | null;

  @Column('float', { name: 'VLRDEPCOFINS', nullable: true, precision: 53 })
  vlrdepcofins: number | null;

  @Column('float', { name: 'VLRBASESUSPPP', nullable: true, precision: 53 })
  vlrbasesusppp: number | null;

  @Column('float', { name: 'VLRNPP', nullable: true, precision: 53 })
  vlrnpp: number | null;

  @Column('float', { name: 'VLRDEPPP', nullable: true, precision: 53 })
  vlrdeppp: number | null;

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
