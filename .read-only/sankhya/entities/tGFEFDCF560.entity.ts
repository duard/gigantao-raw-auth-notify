import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCF560',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave'],
  { unique: true },
)
@Entity('TGFEFDCF560', { schema: 'SANKHYA' })
export class Tgfefdcf560Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'F001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'F560'" })
  registro: string;

  @Column('float', { name: 'VL_REC_COMP', nullable: true, precision: 53 })
  vlRecComp: number | null;

  @Column('varchar', { name: 'CST_PIS', length: 2 })
  cstPis: string;

  @Column('float', { name: 'VL_DESC_PIS', nullable: true, precision: 53 })
  vlDescPis: number | null;

  @Column('float', { name: 'QUANT_BC_PIS', nullable: true, precision: 53 })
  quantBcPis: number | null;

  @Column('float', { name: 'ALIQ_PIS_QUANT', nullable: true, precision: 53 })
  aliqPisQuant: number | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('varchar', { name: 'CST_COFINS', length: 2 })
  cstCofins: string;

  @Column('float', { name: 'VL_DESC_COFINS', nullable: true, precision: 53 })
  vlDescCofins: number | null;

  @Column('float', { name: 'QUANT_BC_COFINS', nullable: true, precision: 53 })
  quantBcCofins: number | null;

  @Column('float', { name: 'ALIQ_COFINS_QUANT', nullable: true, precision: 53 })
  aliqCofinsQuant: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('int', { name: 'CFOP', nullable: true })
  cfop: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('varchar', { name: 'INFO_COMPL', nullable: true, length: 3103 })
  infoCompl: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
