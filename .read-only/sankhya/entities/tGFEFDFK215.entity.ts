import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFK215',
  ['codemp', 'dtref', 'regniv1', 'dtIni', 'dtFin', 'chavepai', 'codItemDes'],
  { unique: true },
)
@Entity('TGFEFDFK215', { schema: 'SANKHYA' })
export class Tgfefdfk215Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'K001'",
  })
  regniv1: string;

  @Column('datetime', { primary: true, name: 'DT_INI' })
  dtIni: Date;

  @Column('datetime', { primary: true, name: 'DT_FIN' })
  dtFin: Date;

  @Column('varchar', { primary: true, name: 'CHAVEPAI', length: 100 })
  chavepai: string;

  @Column('varchar', { primary: true, name: 'COD_ITEM_DES', length: 30 })
  codItemDes: string;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'QTD_DES', nullable: true, precision: 53 })
  qtdDes: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'K215'" })
  registro: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
