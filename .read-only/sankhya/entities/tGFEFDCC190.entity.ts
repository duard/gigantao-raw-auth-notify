import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC190',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'codprod'],
  { unique: true },
)
@Entity('TGFEFDCC190', { schema: 'SANKHYA' })
export class Tgfefdcc190Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C190'" })
  registro: string;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('datetime', { name: 'DT_REF_INI', nullable: true })
  dtRefIni: Date | null;

  @Column('datetime', { name: 'DT_REF_FIN', nullable: true })
  dtRefFin: Date | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('varchar', { name: 'COD_NCM', nullable: true, length: 8 })
  codNcm: string | null;

  @Column('varchar', { name: 'EX_IPI', nullable: true, length: 3 })
  exIpi: string | null;

  @Column('float', { name: 'VL_TOT_ITEM', nullable: true, precision: 53 })
  vlTotItem: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
