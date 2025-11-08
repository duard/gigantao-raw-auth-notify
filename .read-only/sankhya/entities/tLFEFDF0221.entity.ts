import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TLFEFDF0221',
  ['codemp', 'regniv1', 'dtref', 'codprod', 'codItem', 'codItemAtom'],
  {
    unique: true,
  },
)
@Entity('TLFEFDF0221', { schema: 'SANKHYA' })
export class Tlfefdf0221Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'0001'",
  })
  regniv1: string;

  @Column('varchar', {
    name: 'REGISTRO',
    nullable: true,
    length: 4,
    default: () => "'0221'",
  })
  registro: string | null;

  @Column('char', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  digitado: string | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { primary: true, name: 'COD_ITEM', length: 60 })
  codItem: string;

  @Column('varchar', { primary: true, name: 'COD_ITEM_ATOM', length: 60 })
  codItemAtom: string;

  @Column('int', { name: 'QTD_ITEM_ATOM', nullable: true })
  qtdItemAtom: number | null;

  @Column('varchar', { name: 'CHAVE0200', nullable: true, length: 60 })
  chave0200: string | null;
}
