import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF0205',
  ['codemp', 'dtref', 'regniv1', 'codprod', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDF0205', { schema: 'SANKHYA' })
export class Tgfefdf0205Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0205'" })
  registro: string;

  @Column('varchar', { name: 'DESCR_ANT_ITEM', nullable: true, length: 255 })
  descrAntItem: string | null;

  @Column('datetime', { name: 'DT_INI', nullable: true })
  dtIni: Date | null;

  @Column('datetime', { name: 'DT_FIN', nullable: true })
  dtFin: Date | null;

  @Column('varchar', { name: 'COD_ANT_ITEM', nullable: true, length: 60 })
  codAntItem: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;
}
