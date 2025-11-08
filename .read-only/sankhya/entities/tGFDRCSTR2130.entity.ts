import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTR2130',
  [
    'codemp',
    'dtinicial',
    'dtfinal',
    'regpai3',
    'regpai2',
    'codprod',
    'regpai',
    'reg',
    'nunota',
    'sequencia',
    'cnpjdeclpar',
  ],
  { unique: true },
)
@Entity('TGFDRCSTR2130', { schema: 'SANKHYA' })
export class Tgfdrcstr2130Entity {
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
    default: () => "'2120'",
  })
  regpai: string;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'2130'",
  })
  reg: string;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'INDOPER', length: 1 })
  indoper: string;

  @Column('varchar', { name: 'CHVNFE', nullable: true, length: 44 })
  chvnfe: string | null;

  @Column('datetime', { name: 'DTE', nullable: true })
  dte: Date | null;

  @Column('datetime', { name: 'DTNFE', nullable: true })
  dtnfe: Date | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('smallint', { name: 'CODRESPRET', nullable: true })
  codrespret: number | null;

  @Column('float', { name: 'QTDE', nullable: true, precision: 53 })
  qtde: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('float', { name: 'FATCONV', nullable: true, precision: 53 })
  fatconv: number | null;

  @Column('float', { name: 'QTDEC', nullable: true, precision: 53 })
  qtdec: number | null;

  @Column('float', { name: 'VLE', nullable: true, precision: 53 })
  vle: number | null;

  @Column('int', { name: 'CODCFO', nullable: true })
  codcfo: number | null;

  @Column('float', { name: 'VLBCICMS', nullable: true, precision: 53 })
  vlbcicms: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('float', { name: 'VLICMS', nullable: true, precision: 53 })
  vlicms: number | null;

  @Column('float', { name: 'VLBCST', nullable: true, precision: 53 })
  vlbcst: number | null;

  @Column('float', { name: 'VLBCSTINT', nullable: true, precision: 53 })
  vlbcstint: number | null;

  @Column('float', { name: 'ALIQSTE', nullable: true, precision: 53 })
  aliqste: number | null;

  @Column('float', { name: 'ALIQSTEF', nullable: true, precision: 53 })
  aliqstef: number | null;

  @Column('float', { name: 'CALICMSST', nullable: true, precision: 53 })
  calicmsst: number | null;

  @Column('float', { name: 'VLICMSST', nullable: true, precision: 53 })
  vlicmsst: number | null;

  @Column('char', { name: 'CODDA', nullable: true, length: 1 })
  codda: string | null;

  @Column('varchar', { name: 'NUMDARE', nullable: true, length: 60 })
  numdare: string | null;

  @Column('varchar', { name: 'CODAJ', nullable: true, length: 10 })
  codaj: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('float', { name: 'VLRSUBSTANT', nullable: true, precision: 53 })
  vlrsubstant: number | null;

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
