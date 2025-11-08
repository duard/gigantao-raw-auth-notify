import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC176',
  ['codemp', 'dtref', 'regniv1', 'chave', 'seqc170', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC176', { schema: 'SANKHYA' })
export class Tgfefdfc176Entity {
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

  @Column('int', { primary: true, name: 'SEQC170' })
  seqc170: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C176'" })
  registro: string;

  @Column('varchar', { name: 'COD_MOD_ULT_E', nullable: true, length: 2 })
  codModUltE: string | null;

  @Column('int', { name: 'NUM_DOC_ULT_E', nullable: true })
  numDocUltE: number | null;

  @Column('varchar', { name: 'SER_ULT_E', nullable: true, length: 3 })
  serUltE: string | null;

  @Column('datetime', { name: 'DT_ULT_E', nullable: true })
  dtUltE: Date | null;

  @Column('varchar', { name: 'COD_PART_ULT_E', nullable: true, length: 60 })
  codPartUltE: string | null;

  @Column('float', { name: 'QUANT_ULT_E', nullable: true, precision: 53 })
  quantUltE: number | null;

  @Column('float', { name: 'VL_UNIT_ULT_E', nullable: true, precision: 53 })
  vlUnitUltE: number | null;

  @Column('float', { name: 'VL_UNIT_BC_ST', nullable: true, precision: 53 })
  vlUnitBcSt: number | null;

  @Column('varchar', { name: 'CHAVE_NFE_ULT_E', nullable: true, length: 44 })
  chaveNfeUltE: string | null;

  @Column('int', { name: 'NUM_ITEM_ULT_E', nullable: true })
  numItemUltE: number | null;

  @Column('float', {
    name: 'VL_UNIT_BC_ICMS_ULT_E',
    nullable: true,
    precision: 53,
  })
  vlUnitBcIcmsUltE: number | null;

  @Column('float', { name: 'ALIQ_ICMS_ULT_E', nullable: true, precision: 53 })
  aliqIcmsUltE: number | null;

  @Column('float', {
    name: 'VL_UNIT_LIMITE_BC_ICMS_ULT_E',
    nullable: true,
    precision: 53,
  })
  vlUnitLimiteBcIcmsUltE: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_ULT_E',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsUltE: number | null;

  @Column('float', { name: 'ALIQ_ST_ULT_E', nullable: true, precision: 53 })
  aliqStUltE: number | null;

  @Column('float', { name: 'VL_UNIT_RES', nullable: true, precision: 53 })
  vlUnitRes: number | null;

  @Column('smallint', { name: 'COD_RESP_RET', nullable: true })
  codRespRet: number | null;

  @Column('smallint', { name: 'COD_MOT_RES', nullable: true })
  codMotRes: number | null;

  @Column('varchar', { name: 'CHAVE_NFE_RET', nullable: true, length: 44 })
  chaveNfeRet: string | null;

  @Column('varchar', { name: 'COD_PART_NFE_RET', nullable: true, length: 60 })
  codPartNfeRet: string | null;

  @Column('varchar', { name: 'SER_NFE_RET', nullable: true, length: 3 })
  serNfeRet: string | null;

  @Column('int', { name: 'NUM_NFE_RET', nullable: true })
  numNfeRet: number | null;

  @Column('int', { name: 'ITEM_NFE_RET', nullable: true })
  itemNfeRet: number | null;

  @Column('varchar', { name: 'COD_DA', nullable: true, length: 1 })
  codDa: string | null;

  @Column('varchar', { name: 'NUM_DA', nullable: true, length: 10 })
  numDa: string | null;

  @Column('float', {
    name: 'VL_UNIT_RES_FCP_ST',
    nullable: true,
    precision: 53,
  })
  vlUnitResFcpSt: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
