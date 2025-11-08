import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIDBPF',
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
    'cpfdep',
    'indtpdeducao',
    'dtfg',
  ],
  { unique: true },
)
@Entity('TRIDBPF', { schema: 'SANKHYA' })
export class TridbpfEntity {
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

  @Column('varchar', { primary: true, name: 'CPFDEP', length: 11 })
  cpfdep: string;

  @Column('varchar', { name: 'NOMEDEP', nullable: true, length: 40 })
  nomedep: string | null;

  @Column('float', { name: 'VLRDEPEN', nullable: true, precision: 53 })
  vlrdepen: number | null;

  @Column('smallint', { primary: true, name: 'SEQITE' })
  seqite: number;

  @Column('smallint', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('smallint', { primary: true, name: 'INDTPDEDUCAO' })
  indtpdeducao: number;

  @Column('datetime', {
    primary: true,
    name: 'DTFG',
    default: () => 'getdate()',
  })
  dtfg: Date;
}
