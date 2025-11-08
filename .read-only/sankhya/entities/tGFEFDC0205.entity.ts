import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDC0205',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'codprod', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDC0205', { schema: 'SANKHYA' })
export class Tgfefdc0205Entity {
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

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0205'" })
  registro: string;

  @Column('varchar', { name: 'DESCR_ANT_ITEM', nullable: true, length: 255 })
  descrAntItem: string | null;

  @Column('datetime', { name: 'DT_INI', nullable: true })
  dtIni: Date | null;

  @Column('datetime', { name: 'DT_FIM', nullable: true })
  dtFim: Date | null;

  @Column('varchar', { name: 'COD_ANT_ITEM', nullable: true, length: 255 })
  codAntItem: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;
}
