import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTR2113',
  [
    'codemp',
    'dtinicial',
    'dtfinal',
    'regpai2',
    'regpai',
    'codprod',
    'reg',
    'nunota',
    'sequencia',
    'cnpjdeclpar',
    'indoper',
  ],
  { unique: true },
)
@Entity('TGFDRCSTR2113', { schema: 'SANKHYA' })
export class Tgfdrcstr2113Entity {
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
    default: () => "'2113'",
  })
  reg: string;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'INDOPER', length: 1 })
  indoper: string;

  @Column('smallint', { name: 'INDS' })
  inds: number;

  @Column('varchar', { name: 'CHVNFE', nullable: true, length: 44 })
  chvnfe: string | null;

  @Column('datetime', { name: 'DTNFE', nullable: true })
  dtnfe: Date | null;

  @Column('datetime', { name: 'DTE', nullable: true })
  dte: Date | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('float', { name: 'QTDEINDS', nullable: true, precision: 53 })
  qtdeinds: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('float', { name: 'FATCONV', nullable: true, precision: 53 })
  fatconv: number | null;

  @Column('float', { name: 'QTDEINDSC', nullable: true, precision: 53 })
  qtdeindsc: number | null;

  @Column('float', { name: 'VLVINDS', nullable: true, precision: 53 })
  vlvinds: number | null;

  @Column('int', { name: 'CODCFO', nullable: true })
  codcfo: number | null;

  @Column('float', { name: 'VLCREDITOMVASN', nullable: true, precision: 53 })
  vlcreditomvasn: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('smallint', { name: 'SEQUENCIAFISCAL', nullable: true })
  sequenciafiscal: number | null;

  @Column('varchar', {
    primary: true,
    name: 'CNPJDECLPAR',
    length: 14,
    default: () => "'0'",
  })
  cnpjdeclpar: string;

  @Column('smallint', { name: 'CODEMPMOV', nullable: true })
  codempmov: number | null;
}
