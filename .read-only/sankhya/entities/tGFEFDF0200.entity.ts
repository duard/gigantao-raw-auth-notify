import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF0200', ['codemp', 'dtref', 'regniv1', 'codprod'], {
  unique: true,
})
@Entity('TGFEFDF0200', { schema: 'SANKHYA' })
export class Tgfefdf0200Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0200'" })
  registro: string;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('varchar', { name: 'DESCR_ITEM', nullable: true, length: 255 })
  descrItem: string | null;

  @Column('varchar', { name: 'COD_BARRA', nullable: true, length: 150 })
  codBarra: string | null;

  @Column('varchar', { name: 'COD_ANT_ITEM', nullable: true, length: 60 })
  codAntItem: string | null;

  @Column('varchar', { name: 'UNID_INV', nullable: true, length: 6 })
  unidInv: string | null;

  @Column('int', { name: 'TIPO_ITEM', nullable: true })
  tipoItem: number | null;

  @Column('varchar', { name: 'COD_NCM', nullable: true, length: 8 })
  codNcm: string | null;

  @Column('varchar', { name: 'EX_IPI', nullable: true, length: 3 })
  exIpi: string | null;

  @Column('int', { name: 'COD_GEN', nullable: true })
  codGen: number | null;

  @Column('varchar', { name: 'COD_LST', nullable: true, length: 5 })
  codLst: string | null;

  @Column('float', { name: 'ALIQ_ICMS', nullable: true, precision: 53 })
  aliqIcms: number | null;

  @Column('int', { name: 'CEST', nullable: true })
  cest: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 60 })
  chave: string | null;
}
