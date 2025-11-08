import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF0220',
  ['codemp', 'dtref', 'regniv1', 'codprod', 'unidConv', 'fatConv', 'codItem'],
  { unique: true },
)
@Entity('TGFEFDF0220', { schema: 'SANKHYA' })
export class Tgfefdf0220Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0220'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'UNID_CONV', length: 6 })
  unidConv: string;

  @Column('float', { primary: true, name: 'FAT_CONV', precision: 53 })
  fatConv: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'COD_BARRA', nullable: true, length: 150 })
  codBarra: string | null;

  @Column('varchar', {
    primary: true,
    name: 'COD_ITEM',
    length: 60,
    default: () => "' '",
  })
  codItem: string;
}
