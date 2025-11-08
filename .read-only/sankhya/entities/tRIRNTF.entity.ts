import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIRNTF',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'nrodocumento',
    'tipodocumento',
    'natrend',
    'seqite',
    'codimp',
    'tpisencao',
    'dtfg',
  ],
  { unique: true },
)
@Entity('TRIRNTF', { schema: 'SANKHYA' })
export class TrirntfEntity {
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

  @Column('smallint', { primary: true, name: 'TPISENCAO' })
  tpisencao: number;

  @Column('float', { name: 'VLRISENTO', nullable: true, precision: 53 })
  vlrisento: number | null;

  @Column('varchar', { name: 'DESCRENDIMENTO', nullable: true, length: 100 })
  descrendimento: string | null;

  @Column('datetime', { name: 'DTLAUDO', nullable: true })
  dtlaudo: Date | null;

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
