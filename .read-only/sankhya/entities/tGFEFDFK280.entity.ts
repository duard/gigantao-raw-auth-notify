import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFK280',
  ['codemp', 'dtref', 'regniv1', 'dtIni', 'dtFin', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFK280', { schema: 'SANKHYA' })
export class Tgfefdfk280Entity {
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

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'K280'" })
  registro: string;

  @Column('datetime', { name: 'DT_EST', nullable: true })
  dtEst: Date | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('float', { name: 'QTD_COR_POS', nullable: true, precision: 53 })
  qtdCorPos: number | null;

  @Column('float', { name: 'QTD_COR_NEG', nullable: true, precision: 53 })
  qtdCorNeg: number | null;

  @Column('varchar', { name: 'IND_EST', nullable: true, length: 1 })
  indEst: string | null;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
