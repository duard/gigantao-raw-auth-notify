import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTR2131',
  [
    'codemp',
    'dtinicial',
    'dtfinal',
    'regpai4',
    'regpai3',
    'codprod',
    'regpai2',
    'regpai',
    'nunota',
    'sequencia',
    'reg',
    'chvnferet',
    'numitemnferet',
    'cnpjdeclpar',
  ],
  { unique: true },
)
@Entity('TGFDRCSTR2131', { schema: 'SANKHYA' })
export class Tgfdrcstr2131Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI4',
    length: 4,
    default: () => "'2100'",
  })
  regpai4: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI3',
    length: 4,
    default: () => "'2110'",
  })
  regpai3: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI2',
    length: 4,
    default: () => "'2120'",
  })
  regpai2: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'2130'",
  })
  regpai: string;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'2131'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'CHVNFERET', length: 44 })
  chvnferet: string;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'CNPJNFERET', nullable: true, length: 14 })
  cnpjnferet: string | null;

  @Column('smallint', { primary: true, name: 'NUMITEMNFERET' })
  numitemnferet: number;

  @Column('float', { name: 'QTDENFERET', nullable: true, precision: 53 })
  qtdenferet: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('varchar', {
    primary: true,
    name: 'CNPJDECLPAR',
    length: 14,
    default: () => "'0'",
  })
  cnpjdeclpar: string;
}
