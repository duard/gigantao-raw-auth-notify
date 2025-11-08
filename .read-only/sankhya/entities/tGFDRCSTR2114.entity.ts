import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTR2114',
  [
    'codemp',
    'dtinicial',
    'dtfinal',
    'regpai3',
    'regpai2',
    'codprod',
    'regpai',
    'nunota',
    'sequencia',
    'reg',
    'chvnferef',
    'cnpjdeclpar',
  ],
  { unique: true },
)
@Entity('TGFDRCSTR2114', { schema: 'SANKHYA' })
export class Tgfdrcstr2114Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI3',
    length: 4,
    default: () => "'2100'",
  })
  regpai3: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI2',
    length: 4,
    default: () => "'2110'",
  })
  regpai2: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'2113'",
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
    default: () => "'2114'",
  })
  reg: string;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('varchar', { primary: true, name: 'CHVNFEREF', length: 44 })
  chvnferef: string;

  @Column('smallint', { name: 'ECFCXREF', nullable: true })
  ecfcxref: number | null;

  @Column('int', { name: 'NUMDOCREF', nullable: true })
  numdocref: number | null;

  @Column('datetime', { name: 'DTDOCREF', nullable: true })
  dtdocref: Date | null;

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
