import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTRH010',
  ['codemp', 'dtinicial', 'dtfinal', 'regpai', 'reg', 'codprod', 'cnpjdeclpar'],
  { unique: true },
)
@Entity('TGFDRCSTRH010', { schema: 'SANKHYA' })
export class Tgfdrcstrh010Entity {
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
    default: () => "'H005'",
  })
  regpai: string;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'H010'",
  })
  reg: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CODITEM', length: 60 })
  coditem: string;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('float', { name: 'VLUNIT', nullable: true, precision: 53 })
  vlunit: number | null;

  @Column('float', { name: 'VLITEM', nullable: true, precision: 53 })
  vlitem: number | null;

  @Column('char', { name: 'INDPROP', nullable: true, length: 1 })
  indprop: string | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'TXTCOMPL', nullable: true, length: 60 })
  txtcompl: string | null;

  @Column('varchar', { name: 'CODCTA', nullable: true, length: 60 })
  codcta: string | null;

  @Column('float', { name: 'VLITEMIR', nullable: true, precision: 53 })
  vlitemir: number | null;

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
