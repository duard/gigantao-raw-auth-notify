import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF1910',
  ['codemp', 'dtref', 'regniv1', 'indApurIcms', 'dtIni', 'dtFin'],
  {
    unique: true,
  },
)
@Entity('TGFEFDF1910', { schema: 'SANKHYA' })
export class Tgfefdf1910Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'IND_APUR_ICMS', length: 1 })
  indApurIcms: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1910'" })
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
