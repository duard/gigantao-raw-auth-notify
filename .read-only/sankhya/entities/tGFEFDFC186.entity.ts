import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFEFDFC186', ['sequencia', 'chave', 'codemp', 'dtref', 'regniv1'], {
  unique: true,
})
@Entity('TGFEFDFC186', { schema: 'SANKHYA' })
export class Tgfefdfc186Entity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { name: 'REGISTRO', length: 5, default: () => "'C186'" })
  registro: string;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 5,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('int', { name: 'NUM_ITEM', nullable: true })
  numItem: number | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('varchar', { name: 'CST_ICMS', nullable: true, length: 4 })
  cstIcms: string | null;

  @Column('varchar', { name: 'CFOP', nullable: true, length: 4 })
  cfop: string | null;

  @Column('varchar', { name: 'COD_MOT_REST_COMPL', nullable: true, length: 10 })
  codMotRestCompl: string | null;

  @Column('numeric', {
    name: 'QUANT_CONV',
    nullable: true,
    precision: 10,
    scale: 6,
  })
  quantConv: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('varchar', { name: 'COD_MOD_ENTRADA', nullable: true, length: 2 })
  codModEntrada: string | null;

  @Column('varchar', { name: 'SERIE_ENTRADA', nullable: true, length: 3 })
  serieEntrada: string | null;

  @Column('varchar', { name: 'NUM_DOC_ENTRADA', nullable: true, length: 9 })
  numDocEntrada: string | null;

  @Column('varchar', { name: 'CHV_DFE_ENTRADA', nullable: true, length: 44 })
  chvDfeEntrada: string | null;

  @Column('varchar', { name: 'DT_DOC_ENTRADA', nullable: true, length: 8 })
  dtDocEntrada: string | null;

  @Column('int', { name: 'NUM_ITEM_ENTRADA', nullable: true })
  numItemEntrada: number | null;

  @Column('float', { name: 'VL_UNIT_CONV_ENT', nullable: true, precision: 53 })
  vlUnitConvEnt: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_OP_CONV_ENT',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsOpConvEnt: number | null;

  @Column('float', {
    name: 'VL_UNIT_BC_ICMS_ST_CONV_ENT',
    nullable: true,
    precision: 53,
  })
  vlUnitBcIcmsStConvEnt: number | null;

  @Column('float', {
    name: 'VL_UNIT_ICMS_ST_CONV_ENT',
    nullable: true,
    precision: 53,
  })
  vlUnitIcmsStConvEnt: number | null;

  @Column('float', {
    name: 'VL_UNIT_FCP_ST_CONV_ENT',
    nullable: true,
    precision: 53,
  })
  vlUnitFcpStConvEnt: number | null;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfefdfcs4)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
