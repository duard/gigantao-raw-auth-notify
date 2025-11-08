import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFK290',
  ['codemp', 'dtref', 'regniv1', 'dtIni', 'dtFin', 'sequencia', 'idicop'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFK290', { schema: 'SANKHYA' })
export class Tgfefdfk290Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'K290'" })
  registro: string;

  @Column('int', { primary: true, name: 'IDICOP' })
  idicop: number;

  @Column('datetime', { name: 'DHINST', default: () => 'getdate()' })
  dhinst: Date;

  @Column('datetime', { name: 'DHTERMINO', nullable: true })
  dhtermino: Date | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
