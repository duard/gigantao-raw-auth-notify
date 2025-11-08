import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTR2121',
  ['codemp', 'dtinicial', 'dtfinal', 'regpai2', 'regpai', 'codprod', 'reg'],
  { unique: true },
)
@Entity('TGFDRCSTR2121', { schema: 'SANKHYA' })
export class Tgfdrcstr2121Entity {
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
    default: () => "'2121'",
  })
  reg: string;

  @Column('float', { name: 'SQTDECT', nullable: true, precision: 53 })
  sqtdect: number | null;

  @Column('float', { name: 'SQTDECVLM', nullable: true, precision: 53 })
  sqtdecvlm: number | null;

  @Column('float', { name: 'SVLBCSTINTVLM', nullable: true, precision: 53 })
  svlbcstintvlm: number | null;

  @Column('float', { name: 'VLMUNITBCSTG', nullable: true, precision: 53 })
  vlmunitbcstg: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
