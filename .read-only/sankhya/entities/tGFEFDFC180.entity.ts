import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFEFDFC180',
  ['codemp', 'dtref', 'regniv1', 'registro', 'chave', 'seqc170'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC180', { schema: 'SANKHYA' })
export class Tgfefdfc180Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 5,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 5,
    default: () => "'C180'",
  })
  registro: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { primary: true, name: 'SEQC170' })
  seqc170: number;

  @Column('int', { name: 'COD_RESP_RET', nullable: true })
  codRespRet: number | null;

  @Column('float', { name: 'QUANT_CONV', nullable: true, precision: 53 })
  quantConv: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 20 })
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

  @Column('float', {
    name: 'VL_UNIT_BC_ICMS_ST_CONV',
    nullable: true,
    precision: 53,
  })
  vlUnitBcIcmsStConv: number | null;

  @Column('varchar', { name: 'COD_DA', nullable: true, length: 100 })
  codDa: string | null;

  @Column('varchar', { name: 'NUM_DA', nullable: true, length: 100 })
  numDa: string | null;

  @Column('varchar', { name: 'DIGITADO', nullable: true, length: 1 })
  digitado: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfefdfcs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
