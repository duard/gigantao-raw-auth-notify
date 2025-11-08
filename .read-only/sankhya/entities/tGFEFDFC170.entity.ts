import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFC170', ['codemp', 'dtref', 'regniv1', 'chave', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFC170', { schema: 'SANKHYA' })
export class Tgfefdfc170Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C170'" })
  registro: string;

  @Column('int', { name: 'NUM_ITEM' })
  numItem: number;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('varchar', { name: 'DESCR_COMPL', nullable: true, length: 255 })
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

  @Column('int', { name: 'CST_ICMS', nullable: true })
  cstIcms: number | null;

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

  @Column('int', { name: 'CST_PIS', nullable: true })
  cstPis: number | null;

  @Column('float', { name: 'VL_BC_PIS', nullable: true, precision: 53 })
  vlBcPis: number | null;

  @Column('float', { name: 'ALIQ_PIS_PERC', nullable: true, precision: 53 })
  aliqPisPerc: number | null;

  @Column('int', { name: 'QUANT_BC_PIS', nullable: true })
  quantBcPis: number | null;

  @Column('float', { name: 'ALIQ_PIS_REAIS', nullable: true, precision: 53 })
  aliqPisReais: number | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('int', { name: 'CST_COFINS', nullable: true })
  cstCofins: number | null;

  @Column('float', { name: 'VL_BC_COFINS', nullable: true, precision: 53 })
  vlBcCofins: number | null;

  @Column('float', { name: 'ALIQ_COFINS_PERC', nullable: true, precision: 53 })
  aliqCofinsPerc: number | null;

  @Column('int', { name: 'QUANT_BC_COFINS', nullable: true })
  quantBcCofins: number | null;

  @Column('float', { name: 'ALIQ_COFINS_REAIS', nullable: true, precision: 53 })
  aliqCofinsReais: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 60 })
  codCta: string | null;

  @Column('float', { name: 'VL_ABAT_NT', nullable: true, precision: 53 })
  vlAbatNt: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
