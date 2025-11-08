import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC857',
  ['codemp', 'dtref', 'regniv1', 'sequencia', 'codprod', 'chave'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC857', { schema: 'SANKHYA' })
export class Tgfefdfc857Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C857'" })
  registro: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'CODAJUSTE', nullable: true })
  codajuste: number | null;

  @Column('varchar', { name: 'DESCCOMPL', nullable: true, length: 255 })
  desccompl: string | null;

  @Column('smallint', { name: 'CODITEM', nullable: true })
  coditem: number | null;

  @Column('float', { name: 'BASEICMS', nullable: true, precision: 53 })
  baseicms: number | null;

  @Column('float', { name: 'ALIQ', nullable: true, precision: 53 })
  aliq: number | null;

  @Column('float', { name: 'VALORICMS', nullable: true, precision: 53 })
  valoricms: number | null;

  @Column('float', { name: 'OUTROSVALORES', nullable: true, precision: 53 })
  outrosvalores: number | null;

  @Column('varchar', {
    primary: true,
    name: 'CHAVE',
    length: 100,
    default: () => "'C'",
  })
  chave: string;

  @Column('varchar', { name: 'CODAJUSTEUF', nullable: true, length: 10 })
  codajusteuf: string | null;
}
