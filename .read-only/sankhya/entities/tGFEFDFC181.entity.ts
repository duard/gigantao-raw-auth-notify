import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFEFDFC181',
  ['codemp', 'dtref', 'regniv1', 'chave', 'seqc170', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC181', { schema: 'SANKHYA' })
export class Tgfefdfc181Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { name: 'REGISTRO', length: 5, default: () => "'C181'" })
  registro: string;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 5,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQC170' })
  seqc170: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'DT_DOC_SAIDA', length: 8 })
  dtDocSaida: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QUANT_CONV', nullable: true, precision: 53 })
  quantConv: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('varchar', { name: 'COD_MOD_SAIDA', nullable: true, length: 10 })
  codModSaida: string | null;

  @Column('varchar', { name: 'SERIE_SAIDA', nullable: true, length: 10 })
  serieSaida: string | null;

  @Column('varchar', { name: 'ECF_FAB_SAIDA', nullable: true, length: 21 })
  ecfFabSaida: string | null;

  @Column('varchar', { name: 'NUM_DOC_SAIDA', nullable: true, length: 9 })
  numDocSaida: string | null;

  @Column('varchar', { name: 'CHV_DFE_SAIDA', nullable: true, length: 44 })
  chvDfeSaida: string | null;

  @Column('int', { name: 'NUM_ITEM_SAIDA', nullable: true })
  numItemSaida: number | null;

  @Column('float', {
    name: 'VL_UNIT_CONV_SAIDA',
    nullable: true,
    precision: 53,
  })
  vlUnitConvSaida: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_OP_EST_CONV_SAIDA',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsOpEstConvSaida: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_ST_EST_CONV_SAIDA',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsStEstConvSaida: number | null;

  @Column('float', {
    name: 'VL_UNIT_FCP_ST_EST_CONV_SAIDA',
    nullable: true,
    precision: 53,
  })
  vlUnitFcpStEstConvSaida: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_NA_OP_CONV_SAIDA',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsNaOpConvSaida: number | null;

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

  @Column('varchar', { name: 'COD_MOT_REST_COMPL', nullable: true, length: 5 })
  codMotRestCompl: string | null;

  @Column('varchar', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  digitado: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfefdfcs2)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
