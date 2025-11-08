import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIIAPF',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'nrodocumento',
    'tipodocumento',
    'natrend',
    'codparcadv',
    'seqite',
    'codimp',
    'dtfg',
  ],
  { unique: true },
)
@Entity('TRIIAPF', { schema: 'SANKHYA' })
export class TriiapfEntity {
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

  @Column('int', { primary: true, name: 'CODPARCADV' })
  codparcadv: number;

  @Column('smallint', { name: 'TPINSCADV', nullable: true })
  tpinscadv: number | null;

  @Column('varchar', { name: 'NRINSCADV', nullable: true, length: 14 })
  nrinscadv: string | null;

  @Column('float', { name: 'VLRADV', nullable: true, precision: 53 })
  vlradv: number | null;

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
