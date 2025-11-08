import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDCM600', ['codemp', 'dtref', 'regniv1', 'registro'], {
  unique: true,
})
@Entity('TGFEFDCM600', { schema: 'SANKHYA' })
export class Tgfefdcm600Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'M001'",
  })
  regniv1: string;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'M600'",
  })
  registro: string;

  @Column('float', { name: 'VL_TOT_CONT_NC_PER', precision: 53 })
  vlTotContNcPer: number;

  @Column('float', { name: 'VL_TOT_CRED_DESC', nullable: true, precision: 53 })
  vlTotCredDesc: number | null;

  @Column('float', {
    name: 'VL_TOT_CRED_DESC_ANT',
    nullable: true,
    precision: 53,
  })
  vlTotCredDescAnt: number | null;

  @Column('float', {
    name: 'VL_TOT_CONT_NC_DEV',
    nullable: true,
    precision: 53,
  })
  vlTotContNcDev: number | null;

  @Column('float', { name: 'VL_RET_NC', nullable: true, precision: 53 })
  vlRetNc: number | null;

  @Column('float', { name: 'VL_OUT_DED_NC', nullable: true, precision: 53 })
  vlOutDedNc: number | null;

  @Column('float', { name: 'VL_CONT_NC_REC', nullable: true, precision: 53 })
  vlContNcRec: number | null;

  @Column('float', {
    name: 'VL_TOT_CONT_CUM_PER',
    nullable: true,
    precision: 53,
  })
  vlTotContCumPer: number | null;

  @Column('float', { name: 'VL_RET_CUM', nullable: true, precision: 53 })
  vlRetCum: number | null;

  @Column('float', { name: 'VL_OUT_DED_CUM', nullable: true, precision: 53 })
  vlOutDedCum: number | null;

  @Column('float', { name: 'VL_CONT_CUM_REC', nullable: true, precision: 53 })
  vlContCumRec: number | null;

  @Column('float', { name: 'VL_TOT_CONT_REC', nullable: true, precision: 53 })
  vlTotContRec: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
