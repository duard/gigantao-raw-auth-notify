import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFK220',
  ['codemp', 'dtref', 'dtMov', 'codprodori', 'codproddes'],
  { unique: true },
)
@Entity('TGFEFDFK220', { schema: 'SANKHYA' })
export class Tgfefdfk220Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { name: 'REGNIV1', length: 4, default: () => "'K001'" })
  regniv1: string;

  @Column('datetime', { name: 'DT_INI' })
  dtIni: Date;

  @Column('datetime', { name: 'DT_FIN' })
  dtFin: Date;

  @Column('varchar', { name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'K220'" })
  registro: string;

  @Column('datetime', { primary: true, name: 'DT_MOV' })
  dtMov: Date;

  @Column('int', { primary: true, name: 'CODPRODORI' })
  codprodori: number;

  @Column('int', { primary: true, name: 'CODPRODDES' })
  codproddes: number;

  @Column('float', { name: 'QTD_ORI', precision: 53 })
  qtdOri: number;

  @Column('float', { name: 'QTD_DES', precision: 53 })
  qtdDes: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
