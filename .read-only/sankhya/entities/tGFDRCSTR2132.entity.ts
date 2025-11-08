import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTR2132',
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
    'chvnferef',
    'cnpjdeclpar',
  ],
  { unique: true },
)
@Entity('TGFDRCSTR2132', { schema: 'SANKHYA' })
export class Tgfdrcstr2132Entity {
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
    default: () => "'2132'",
  })
  reg: string;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { primary: true, name: 'CHVNFEREF', length: 44 })
  chvnferef: string;

  @Column('datetime', { name: 'DTEREF', nullable: true })
  dteref: Date | null;

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
