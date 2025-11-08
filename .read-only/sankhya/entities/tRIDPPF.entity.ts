import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIDPPF',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'cpfdep',
    'natrend',
    'nrodocumento',
  ],
  { unique: true },
)
@Entity('TRIDPPF', { schema: 'SANKHYA' })
export class TridppfEntity {
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

  @Column('varchar', { primary: true, name: 'CPFDEP', length: 11 })
  cpfdep: string;

  @Column('varchar', { name: 'NOMEDEP', nullable: true, length: 40 })
  nomedep: string | null;

  @Column('smallint', { name: 'RELDEP', nullable: true })
  reldep: number | null;

  @Column('varchar', { name: 'DESCRDEP', nullable: true, length: 30 })
  descrdep: string | null;

  @Column('int', { primary: true, name: 'NATREND', default: () => '(0)' })
  natrend: number;

  @Column('int', { primary: true, name: 'NRODOCUMENTO', default: () => '(0)' })
  nrodocumento: number;
}
