import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTR2120',
  ['codemp', 'dtinicial', 'dtfinal', 'regpai2', 'regpai', 'codprod', 'reg'],
  { unique: true },
)
@Entity('TGFDRCSTR2120', { schema: 'SANKHYA' })
export class Tgfdrcstr2120Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI2',
    length: 4,
    default: () => "'2100'",
  })
  regpai2: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'2110'",
  })
  regpai: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'2120'",
  })
  reg: string;

  @Column('float', { name: 'SQTDEC', nullable: true, precision: 53 })
  sqtdec: number | null;

  @Column('float', { name: 'SVLBCSTINT', nullable: true, precision: 53 })
  svlbcstint: number | null;

  @Column('float', { name: 'VLMUNITBCST', nullable: true, precision: 53 })
  vlmunitbcst: number | null;

  @Column('float', { name: 'SVLICMS', nullable: true, precision: 53 })
  svlicms: number | null;

  @Column('float', { name: 'VLMUNITICMS', nullable: true, precision: 53 })
  vlmuniticms: number | null;

  @Column('float', { name: 'SVLICMSST', nullable: true, precision: 53 })
  svlicmsst: number | null;

  @Column('float', { name: 'VLMUNITICMSST', nullable: true, precision: 53 })
  vlmuniticmsst: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
