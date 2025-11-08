import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFK230',
  ['codemp', 'dtref', 'regniv1', 'dtIni', 'dtFin', 'chave'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFK230', { schema: 'SANKHYA' })
export class Tgfefdfk230Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'K230'" })
  registro: string;

  @Column('datetime', { name: 'DT_INI_OP', nullable: true })
  dtIniOp: Date | null;

  @Column('datetime', { name: 'DT_FIN_OP', nullable: true })
  dtFinOp: Date | null;

  @Column('varchar', { name: 'COD_DOC_OP', nullable: true, length: 30 })
  codDocOp: string | null;

  @Column('varchar', { name: 'COD_ITEM', length: 60 })
  codItem: string;

  @Column('float', { name: 'QTD_ENC', nullable: true, precision: 53 })
  qtdEnc: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
