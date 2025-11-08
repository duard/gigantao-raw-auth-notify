import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIDRR',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'nrodocumento',
    'tipodocumento',
    'natrend',
    'codimp',
    'seqite',
    'codparc',
    'dtfg',
  ],
  { unique: true },
)
@Entity('TRIDRR', { schema: 'SANKHYA' })
export class TridrrEntity {
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

  @Column('datetime', { primary: true, name: 'DTFG' })
  dtfg: Date;

  @Column('float', { name: 'VLRBRUTO', nullable: true, precision: 53 })
  vlrbruto: number | null;

  @Column('float', { name: 'VLRBASEIR', nullable: true, precision: 53 })
  vlrbaseir: number | null;

  @Column('float', { name: 'VLRIR', nullable: true, precision: 53 })
  vlrir: number | null;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('smallint', { primary: true, name: 'SEQITE' })
  seqite: number;

  @Column('varchar', { name: 'OBSERV', nullable: true, length: 200 })
  observ: string | null;
}
