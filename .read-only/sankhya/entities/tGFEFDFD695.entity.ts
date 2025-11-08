import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFD695', ['codemp', 'dtref', 'regniv1', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFD695', { schema: 'SANKHYA' })
export class Tgfefdfd695Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'D001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'D695'" })
  registro: string;

  @Column('varchar', { name: 'COD_MOD', length: 2 })
  codMod: string;

  @Column('varchar', { name: 'SER', nullable: true, length: 4 })
  ser: string | null;

  @Column('int', { name: 'NRO_ORD_INI', nullable: true })
  nroOrdIni: number | null;

  @Column('int', { name: 'NRO_ORD_FIN', nullable: true })
  nroOrdFin: number | null;

  @Column('datetime', { name: 'DT_DOC_INI', nullable: true })
  dtDocIni: Date | null;

  @Column('datetime', { name: 'DT_DOC_FIN', nullable: true })
  dtDocFin: Date | null;

  @Column('varchar', { name: 'NOM_MEST', nullable: true, length: 33 })
  nomMest: string | null;

  @Column('varchar', { name: 'CHV_COD_DIG', nullable: true, length: 32 })
  chvCodDig: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
