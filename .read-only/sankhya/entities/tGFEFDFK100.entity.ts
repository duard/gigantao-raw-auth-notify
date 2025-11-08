import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFK100', ['codemp', 'dtref', 'regniv1', 'dtIni', 'dtFin'], {
  unique: true,
})
@Entity('TGFEFDFK100', { schema: 'SANKHYA' })
export class Tgfefdfk100Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'K100'" })
  registro: string;

  @Column('datetime', { primary: true, name: 'DT_INI' })
  dtIni: Date;

  @Column('datetime', { primary: true, name: 'DT_FIN' })
  dtFin: Date;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
