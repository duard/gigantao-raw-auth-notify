import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFC185F', ['codemp', 'dtref', 'nunota', 'sequencia'], {
  unique: true,
})
@Entity('TGFC185F', { schema: 'SANKHYA' })
export class Tgfc185FEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'NUM_ITEM', nullable: true })
  numItem: number | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('varchar', { name: 'CST_ICMS', nullable: true, length: 3 })
  cstIcms: string | null;

  @Column('smallint', { name: 'CFOP', nullable: true })
  cfop: number | null;

  @Column('varchar', { name: 'COD_MOT_REST_COMPL', nullable: true, length: 5 })
  codMotRestCompl: string | null;

  @Column('float', { name: 'QUANT_CONV', nullable: true, precision: 53 })
  quantConv: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('float', { name: 'VL_UNIT_CONV', nullable: true, precision: 53 })
  vlUnitConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_NA_OPERACAO_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsNaOperacaoConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_OP_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsOpConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_OP_ESTOQUE_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsOpEstoqueConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_ST_ESTOQUE_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsStEstoqueConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_FCP_ICMS_ST_EST_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitFcpIcmsStEstConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_ST_CONV_REST',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsStConvRest: number | null;

  @Column('float', {
    name: 'VL_UNIT_FCP_ST_CONV_REST',
    nullable: true,
    precision: 53,
  })
  vlUnitFcpStConvRest: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_ST_CONV_COMPL',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsStConvCompl: number | null;

  @Column('float', {
    name: 'VL_UNIT_FCP_ST_CONV_COMPL',
    nullable: true,
    precision: 53,
  })
  vlUnitFcpStConvCompl: number | null;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 3 })
  ser: string | null;

  @Column('int', { name: 'NUM_DOC', nullable: true })
  numDoc: number | null;

  @Column('varchar', { name: 'CHV_DFE', nullable: true, length: 44 })
  chvDfe: string | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('char', { name: 'TIPMOV', nullable: true, length: 1 })
  tipmov: string | null;
}
