import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC485',
  [
    'codemp',
    'dtref',
    'regniv1',
    'codempestab',
    'codmaq',
    'seqc405',
    'sequencia',
  ],
  { unique: true },
)
@Entity('TGFEFDCC485', { schema: 'SANKHYA' })
export class Tgfefdcc485Entity {
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

  @Column('int', { primary: true, name: 'CODMAQ' })
  codmaq: number;

  @Column('int', { primary: true, name: 'SEQC405' })
  seqc405: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C485'" })
  registro: string;

  @Column('varchar', { name: 'CST_COFINS', nullable: true, length: 2 })
  cstCofins: string | null;

  @Column('varchar', { name: 'VL_ITEM', nullable: true, length: 2 })
  vlItem: string | null;

  @Column('varchar', { name: 'VL_BC_COFINS', nullable: true, length: 2 })
  vlBcCofins: string | null;

  @Column('float', { name: 'ALIQ_COFINS', nullable: true, precision: 53 })
  aliqCofins: number | null;

  @Column('float', { name: 'QUANT_BC_COFINS', nullable: true, precision: 53 })
  quantBcCofins: number | null;

  @Column('float', { name: 'ALIQ_COFINS_QUANT', nullable: true, precision: 53 })
  aliqCofinsQuant: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('float', { name: 'VL_ITEM_F', nullable: true, precision: 53 })
  vlItemF: number | null;

  @Column('float', { name: 'VL_BC_COFINS_F', nullable: true, precision: 53 })
  vlBcCofinsF: number | null;
}
