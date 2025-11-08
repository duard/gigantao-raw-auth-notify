import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFK291',
  ['codemp', 'dtref', 'regniv1', 'dtIni', 'dtFin', 'sequencia', 'idicop'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFK291', { schema: 'SANKHYA' })
export class Tgfefdfk291Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'K291'" })
  registro: string;

  @Column('int', { name: 'COD_ITEM', nullable: true })
  codItem: number | null;

  @Column('int', { primary: true, name: 'IDICOP' })
  idicop: number;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
