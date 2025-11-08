import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFK292',
  ['codemp', 'dtref', 'regniv1', 'dtIni', 'dtFin', 'sequencia', 'idicop'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFK292', { schema: 'SANKHYA' })
export class Tgfefdfk292Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'K292'" })
  registro: string;

  @Column('int', { name: 'COD_ITEM_CON', nullable: true })
  codItemCon: number | null;

  @Column('int', { primary: true, name: 'IDICOP' })
  idicop: number;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
