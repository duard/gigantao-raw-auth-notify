import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC495',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'codMod', 'chave'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCC495', { schema: 'SANKHYA' })
export class Tgfefdcc495Entity {
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

  @Column('varchar', { primary: true, name: 'COD_MOD', length: 2 })
  codMod: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C495'" })
  registro: string;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('varchar', { name: 'CST_COFINS', length: 2 })
  cstCofins: string;

  @Column('int', { name: 'CFOP', nullable: true })
  cfop: number | null;

  @Column('float', { name: 'VL_ITEM', nullable: true, precision: 53 })
  vlItem: number | null;

  @Column('float', { name: 'VL_BC_COFINS', nullable: true, precision: 53 })
  vlBcCofins: number | null;

  @Column('float', { name: 'ALIQ_COFINS', nullable: true, precision: 53 })
  aliqCofins: number | null;

  @Column('float', { name: 'QUANT_BC_COFINS', nullable: true, precision: 53 })
  quantBcCofins: number | null;

  @Column('float', { name: 'ALIQ_COFINS_QUANT', nullable: true, precision: 53 })
  aliqCofinsQuant: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
