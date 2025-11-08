import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFC180F', ['codemp', 'dtref', 'nunota', 'sequencia'], {
  unique: true,
})
@Entity('TGFC180F', { schema: 'SANKHYA' })
export class Tgfc180FEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'COD_RESP_RET', nullable: true })
  codRespRet: number | null;

  @Column('float', { name: 'QUANT_CONV', nullable: true, precision: 53 })
  quantConv: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('float', { name: 'VL_UNIT_CONV', nullable: true, precision: 53 })
  vlUnitConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_OP_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsOpConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_BC_ICMS_ST_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitBcIcmsStConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_ST_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsStConv: number | null;

  @Column('float', {
    name: 'VL_UNIT_FCP_ST_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitFcpStConv: number | null;

  @Column('varchar', { name: 'COD_DA', nullable: true, length: 1 })
  codDa: string | null;

  @Column('varchar', { name: 'NUM_DA', nullable: true, length: 30 })
  numDa: string | null;

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

  @Column('smallint', { name: 'NUM_ITEM', nullable: true })
  numItem: number | null;
}
