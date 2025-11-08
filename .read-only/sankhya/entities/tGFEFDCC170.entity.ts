import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC170',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCC170', { schema: 'SANKHYA' })
export class Tgfefdcc170Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C170'" })
  registro: string;

  @Column('int', { name: 'NUM_ITEM', nullable: true })
  numItem: number | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('varchar', { name: 'DESCR_COMPL', nullable: true, length: 3103 })
  descrCompl: string | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('float', { name: 'VL_ITEM', nullable: true, precision: 53 })
  vlItem: number | null;

  @Column('float', { name: 'VL_DESC', nullable: true, precision: 53 })
  vlDesc: number | null;

  @Column('varchar', { name: 'IND_MOV', nullable: true, length: 1 })
  indMov: string | null;

  @Column('varchar', { name: 'CST_ICMS', nullable: true, length: 3 })
  cstIcms: string | null;

  @Column('int', { name: 'CFOP', nullable: true })
  cfop: number | null;

  @Column('varchar', { name: 'COD_NAT', nullable: true, length: 10 })
  codNat: string | null;

  @Column('float', { name: 'VL_BC_ICMS', nullable: true, precision: 53 })
  vlBcIcms: number | null;

  @Column('float', { name: 'ALIQ_ICMS', nullable: true, precision: 53 })
  aliqIcms: number | null;

  @Column('float', { name: 'VL_ICMS', nullable: true, precision: 53 })
  vlIcms: number | null;

  @Column('float', { name: 'VL_BC_ICMS_ST', nullable: true, precision: 53 })
  vlBcIcmsSt: number | null;

  @Column('float', { name: 'ALIQ_ST', nullable: true, precision: 53 })
  aliqSt: number | null;

  @Column('float', { name: 'VL_ICMS_ST', nullable: true, precision: 53 })
  vlIcmsSt: number | null;

  @Column('varchar', { name: 'IND_APUR', nullable: true, length: 1 })
  indApur: string | null;

  @Column('varchar', { name: 'CST_IPI', nullable: true, length: 2 })
  cstIpi: string | null;

  @Column('varchar', { name: 'COD_ENQ', nullable: true, length: 3 })
  codEnq: string | null;

  @Column('float', { name: 'VL_BC_IPI', nullable: true, precision: 53 })
  vlBcIpi: number | null;

  @Column('float', { name: 'ALIQ_IPI', nullable: true, precision: 53 })
  aliqIpi: number | null;

  @Column('float', { name: 'VL_IPI', nullable: true, precision: 53 })
  vlIpi: number | null;

  @Column('varchar', { name: 'CST_PIS', nullable: true, length: 2 })
  cstPis: string | null;

  @Column('float', { name: 'VL_BC_PIS', nullable: true, precision: 53 })
  vlBcPis: number | null;

  @Column('float', { name: 'ALIQ_PIS', nullable: true, precision: 53 })
  aliqPis: number | null;

  @Column('float', { name: 'QUANT_BC_PIS', nullable: true, precision: 53 })
  quantBcPis: number | null;

  @Column('float', { name: 'ALIQ_PIS_QUANT', nullable: true, precision: 53 })
  aliqPisQuant: number | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('varchar', { name: 'CST_COFINS', nullable: true, length: 2 })
  cstCofins: string | null;

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

  @Column('char', { name: 'UNIDPORPARCEIRO', nullable: true, length: 1 })
  unidporparceiro: string | null;

  @Column('int', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
