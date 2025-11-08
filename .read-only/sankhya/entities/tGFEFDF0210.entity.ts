import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF0210',
  ['codemp', 'dtref', 'regniv1', 'codprod', 'codItemComp'],
  { unique: true },
)
@Entity('TGFEFDF0210', { schema: 'SANKHYA' })
export class Tgfefdf0210Entity {
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

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0210'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'COD_ITEM_COMP', length: 60 })
  codItemComp: string;

  @Column('int', { name: 'QTD_COMP', nullable: true })
  qtdComp: number | null;

  @Column('int', { name: 'PERDA', nullable: true })
  perda: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
