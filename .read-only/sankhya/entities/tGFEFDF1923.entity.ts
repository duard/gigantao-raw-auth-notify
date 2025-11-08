import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF1923',
  [
    'codemp',
    'dtref',
    'regniv1',
    'indApurIcms',
    'dtIni',
    'dtFin',
    'regniv4',
    'seq1921',
    'sequencia',
  ],
  { unique: true },
)
@Entity('TGFEFDF1923', { schema: 'SANKHYA' })
export class Tgfefdf1923Entity {
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

  @Column('int', { primary: true, name: 'SEQ1921' })
  seq1921: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('bigint', { name: 'CODPROD', nullable: true })
  codprod: string | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1923'" })
  registro: string;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 4 })
  ser: string | null;

  @Column('int', { name: 'SUB', nullable: true })
  sub: number | null;

  @Column('int', { name: 'NUM_DOC', nullable: true })
  numDoc: number | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('float', { name: 'VL_AJ_ITEM', nullable: true, precision: 53 })
  vlAjItem: number | null;

  @Column('varchar', { name: 'CHV_DOCE', nullable: true, length: 44 })
  chvDoce: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
