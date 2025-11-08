import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTR2110',
  ['codemp', 'dtinicial', 'dtfinal', 'regpai', 'reg', 'codprod'],
  {
    unique: true,
  },
)
@Entity('TGFDRCSTR2110', { schema: 'SANKHYA' })
export class Tgfdrcstr2110Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'2100'",
  })
  regpai: string;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'2110'",
  })
  reg: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CODITEM', length: 60 })
  coditem: string;

  @Column('float', { name: 'QTDETVCF', nullable: true, precision: 53 })
  qtdetvcf: number | null;

  @Column('float', { name: 'VLTVCF', nullable: true, precision: 53 })
  vltvcf: number | null;

  @Column('float', { name: 'VLMUNITVCF', nullable: true, precision: 53 })
  vlmunitvcf: number | null;

  @Column('float', { name: 'VLTBCSTVCF', nullable: true, precision: 53 })
  vltbcstvcf: number | null;

  @Column('float', { name: 'VLDIFMAIORBCST', nullable: true, precision: 53 })
  vldifmaiorbcst: number | null;

  @Column('float', { name: 'VLDIFMENORBCST', nullable: true, precision: 53 })
  vldifmenorbcst: number | null;

  @Column('float', { name: 'ALIQEF', nullable: true, precision: 53 })
  aliqef: number | null;

  @Column('float', { name: 'VLICMSSTREST', nullable: true, precision: 53 })
  vlicmsstrest: number | null;

  @Column('float', { name: 'VLICMSSTCOMPL', nullable: true, precision: 53 })
  vlicmsstcompl: number | null;

  @Column('float', { name: 'QTDETINDSOE', nullable: true, precision: 53 })
  qtdetindsoe: number | null;

  @Column('float', { name: 'VLICMSINDSOE', nullable: true, precision: 53 })
  vlicmsindsoe: number | null;

  @Column('float', { name: 'VLICMSSTINDSOE', nullable: true, precision: 53 })
  vlicmsstindsoe: number | null;

  @Column('float', { name: 'QTDETINDSSN', nullable: true, precision: 53 })
  qtdetindssn: number | null;

  @Column('float', { name: 'VLTCREDITOMVASN', nullable: true, precision: 53 })
  vltcreditomvasn: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
