import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFC181F', ['codemp', 'dtref', 'nunota', 'sequencia'], {
  unique: true,
})
@Entity('TGFC181F', { schema: 'SANKHYA' })
export class Tgfc181FEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'COD_MOT_REST_COMPL', nullable: true, length: 5 })
  codMotRestCompl: string | null;

  @Column('float', { name: 'QUANT_CONV', nullable: true, precision: 53 })
  quantConv: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('varchar', { name: 'COD_MOD_SAIDA', nullable: true, length: 2 })
  codModSaida: string | null;

  @Column('varchar', { name: 'SERIE_SAIDA', nullable: true, length: 3 })
  serieSaida: string | null;

  @Column('varchar', { name: 'ECF_FAB_SAIDA', nullable: true, length: 21 })
  ecfFabSaida: string | null;

  @Column('int', { name: 'NUM_DOC_SAIDA', nullable: true })
  numDocSaida: number | null;

  @Column('varchar', { name: 'CHV_DFE_SAIDA', nullable: true, length: 44 })
  chvDfeSaida: string | null;

  @Column('datetime', { name: 'DT_DOC_SAIDA', nullable: true })
  dtDocSaida: Date | null;

  @Column('int', { name: 'NUM_ITEM_SAIDA', nullable: true })
  numItemSaida: number | null;

  @Column('float', {
    name: 'VL_UNIT_CONV_SAIDA',
    nullable: true,
    precision: 53,
  })
  vlUnitConvSaida: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_OP_EST_CONV_S',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsOpEstConvS: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_ST_EST_CONV_S',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsStEstConvS: number | null;

  @Column('float', {
    name: 'VL_UNIT_FCP_ICMS_ST_EST_CONV_S',
    nullable: true,
    precision: 53,
  })
  vlUnitFcpIcmsStEstConvS: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_NA_OP_CONV_S',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsNaOpConvS: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_OP_CONV_SAIDA',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsOpConvSaida: number | null;

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
    name: 'VL_UNIT_FCP_ST_CONV_COMPL',
    nullable: true,
    precision: 53,
  })
  vlUnitFcpStConvCompl: number | null;
}
