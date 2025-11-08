import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFEFDFC185', ['codemp', 'dtref', 'regniv1', 'chave', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFC185', { schema: 'SANKHYA' })
export class Tgfefdfc185Entity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { name: 'REGISTRO', length: 5, default: () => "'C185'" })
  registro: string;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 5,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('int', { name: 'NUM_ITEM' })
  numItem: number;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('varchar', { name: 'CST_ICMS', nullable: true, length: 4 })
  cstIcms: string | null;

  @Column('varchar', { name: 'CFOP', nullable: true, length: 4 })
  cfop: string | null;

  @Column('varchar', { name: 'COD_MOT_REST_COMPL', nullable: true, length: 5 })
  codMotRestCompl: string | null;

  @Column('float', { name: 'QUANT_CONV', nullable: true, precision: 53 })
  quantConv: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('float', { name: 'VL_UNIT_CONV', nullable: true, precision: 53 })
  vlUnitConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_NA_OP_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsNaOpConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_OP_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsOpConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_OP_EST_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsOpEstConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_ST_EST_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsStEstConv: number | null;

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

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfefdfcs3)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
