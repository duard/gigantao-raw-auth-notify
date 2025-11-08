import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTR2111',
  [
    'codemp',
    'dtinicial',
    'dtfinal',
    'regpai2',
    'regpai',
    'codprod',
    'reg',
    'codsitesp',
    'complcoditem',
  ],
  { unique: true },
)
@Entity('TGFDRCSTR2111', { schema: 'SANKHYA' })
export class Tgfdrcstr2111Entity {
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
    default: () => "'2111'",
  })
  reg: string;

  @Column('smallint', { primary: true, name: 'CODSITESP' })
  codsitesp: number;

  @Column('varchar', { primary: true, name: 'COMPLCODITEM', length: 60 })
  complcoditem: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
