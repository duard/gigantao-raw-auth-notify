import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDC0200',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'codprod'],
  { unique: true },
)
@Entity('TGFEFDC0200', { schema: 'SANKHYA' })
export class Tgfefdc0200Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0200'" })
  registro: string;

  @Column('varchar', { name: 'COD_ITEM', length: 60 })
  codItem: string;

  @Column('varchar', { name: 'DESCR_ITEM', nullable: true, length: 3103 })
  descrItem: string | null;

  @Column('varchar', { name: 'COD_BARRA', nullable: true, length: 255 })
  codBarra: string | null;

  @Column('varchar', { name: 'COD_ANT_ITEM', nullable: true, length: 60 })
  codAntItem: string | null;

  @Column('varchar', { name: 'UNID_INV', nullable: true, length: 6 })
  unidInv: string | null;

  @Column('varchar', { name: 'TIPO_ITEM', nullable: true, length: 2 })
  tipoItem: string | null;

  @Column('varchar', { name: 'COD_NCM', nullable: true, length: 8 })
  codNcm: string | null;

  @Column('varchar', { name: 'EX_IPI', nullable: true, length: 3 })
  exIpi: string | null;

  @Column('int', { name: 'COD_GEN', nullable: true })
  codGen: number | null;

  @Column('int', { name: 'COD_LST', nullable: true })
  codLst: number | null;

  @Column('float', { name: 'ALIQ_ICMS', nullable: true, precision: 53 })
  aliqIcms: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
