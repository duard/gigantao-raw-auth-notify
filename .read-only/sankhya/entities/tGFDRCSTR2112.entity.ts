import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTR2112',
  [
    'codemp',
    'dtinicial',
    'dtfinal',
    'regpai2',
    'regpai',
    'codprod',
    'reg',
    'unid',
    'cnpjdeclpar',
  ],
  { unique: true },
)
@Entity('TGFDRCSTR2112', { schema: 'SANKHYA' })
export class Tgfdrcstr2112Entity {
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
    default: () => "'2112'",
  })
  reg: string;

  @Column('float', { name: 'QTDEVCF', nullable: true, precision: 53 })
  qtdevcf: number | null;

  @Column('varchar', { primary: true, name: 'UNID', length: 6 })
  unid: string;

  @Column('float', { name: 'FATCONV', precision: 53 })
  fatconv: number;

  @Column('float', { name: 'QTDEVCFC', nullable: true, precision: 53 })
  qtdevcfc: number | null;

  @Column('float', { name: 'VLVCF', nullable: true, precision: 53 })
  vlvcf: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

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
