import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFK210',
  ['codemp', 'dtref', 'regniv1', 'dtIni', 'dtFin', 'chave'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFK210', { schema: 'SANKHYA' })
export class Tgfefdfk210Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'COD_DOC_OS', length: 30, default: () => "'0'" })
  codDocOs: string;

  @Column('varchar', { name: 'COD_ITEM_ORI', length: 60 })
  codItemOri: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'K210'" })
  registro: string;

  @Column('datetime', { name: 'DT_INI_OS', nullable: true })
  dtIniOs: Date | null;

  @Column('datetime', { name: 'DT_FIN_OS', nullable: true })
  dtFinOs: Date | null;

  @Column('float', { name: 'QTD_ORI', nullable: true, precision: 53 })
  qtdOri: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
