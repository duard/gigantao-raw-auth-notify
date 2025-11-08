import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF1921',
  [
    'codemp',
    'dtref',
    'regniv1',
    'indApurIcms',
    'dtIni',
    'dtFin',
    'regniv4',
    'sequencia',
  ],
  { unique: true },
)
@Entity('TGFEFDF1921', { schema: 'SANKHYA' })
export class Tgfefdf1921Entity {
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

  @Column('datetime', { primary: true, name: 'DT_INI' })
  dtIni: Date;

  @Column('datetime', { primary: true, name: 'DT_FIN' })
  dtFin: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV4',
    length: 4,
    default: () => "'1920'",
  })
  regniv4: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1921'" })
  registro: string;

  @Column('varchar', { name: 'COD_AJ_APUR', nullable: true, length: 8 })
  codAjApur: string | null;

  @Column('varchar', { name: 'DESCR_COMPL_AJ', nullable: true, length: 255 })
  descrComplAj: string | null;

  @Column('float', { name: 'VL_AJ_APUR', nullable: true, precision: 53 })
  vlAjApur: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
