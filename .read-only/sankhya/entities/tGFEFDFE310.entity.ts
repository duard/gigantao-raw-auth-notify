import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE310',
  ['codemp', 'dtref', 'regniv1', 'seqe300', 'registro'],
  { unique: true },
)
@Entity('TGFEFDFE310', { schema: 'SANKHYA' })
export class Tgfefdfe310Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'E001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQE300' })
  seqe300: number;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'E310'",
  })
  registro: string;

  @Column('varchar', { name: 'IND_MOV_FCP_DIFAL', nullable: true, length: 4 })
  indMovFcpDifal: string | null;

  @Column('float', {
    name: 'VL_SLD_CRED_ANT_DIFAL',
    nullable: true,
    precision: 53,
  })
  vlSldCredAntDifal: number | null;

  @Column('float', {
    name: 'VL_TOT_DEBITOS_DIFAL',
    nullable: true,
    precision: 53,
  })
  vlTotDebitosDifal: number | null;

  @Column('float', { name: 'VL_OUT_DEB_DIFAL', nullable: true, precision: 53 })
  vlOutDebDifal: number | null;

  @Column('float', {
    name: 'VL_TOT_CREDITOS_DIFAL',
    nullable: true,
    precision: 53,
  })
  vlTotCreditosDifal: number | null;

  @Column('float', { name: 'VL_OUT_CRED_DIFAL', nullable: true, precision: 53 })
  vlOutCredDifal: number | null;

  @Column('float', {
    name: 'VL_SLD_DEV_ANT_DIFAL',
    nullable: true,
    precision: 53,
  })
  vlSldDevAntDifal: number | null;

  @Column('float', { name: 'VL_DEDUCOES_DIFAL', nullable: true, precision: 53 })
  vlDeducoesDifal: number | null;

  @Column('float', { name: 'VL_RECOL_DIFAL', nullable: true, precision: 53 })
  vlRecolDifal: number | null;

  @Column('float', {
    name: 'VL_SLD_CRED_TRANSPORTAR_DIFAL',
    nullable: true,
    precision: 53,
  })
  vlSldCredTransportarDifal: number | null;

  @Column('float', { name: 'DEB_ESP_DIFAL', nullable: true, precision: 53 })
  debEspDifal: number | null;

  @Column('float', {
    name: 'VL_SLD_CRED_ANT_FCP',
    nullable: true,
    precision: 53,
  })
  vlSldCredAntFcp: number | null;

  @Column('float', { name: 'VL_TOT_DEB_FCP', nullable: true, precision: 53 })
  vlTotDebFcp: number | null;

  @Column('float', { name: 'VL_OUT_DEB_FCP', nullable: true, precision: 53 })
  vlOutDebFcp: number | null;

  @Column('float', { name: 'VL_TOT_CRED_FCP', nullable: true, precision: 53 })
  vlTotCredFcp: number | null;

  @Column('float', { name: 'VL_OUT_CRED_FCP', nullable: true, precision: 53 })
  vlOutCredFcp: number | null;

  @Column('float', {
    name: 'VL_SLD_DEV_ANT_FCP',
    nullable: true,
    precision: 53,
  })
  vlSldDevAntFcp: number | null;

  @Column('float', { name: 'VL_DEDUCOES_FCP', nullable: true, precision: 53 })
  vlDeducoesFcp: number | null;

  @Column('float', { name: 'VL_RECOL_FCP', nullable: true, precision: 53 })
  vlRecolFcp: number | null;

  @Column('float', {
    name: 'VL_SLD_CRED_TRANSPORTAR_FCP',
    nullable: true,
    precision: 53,
  })
  vlSldCredTransportarFcp: number | null;

  @Column('float', { name: 'DEB_ESP_FCP', nullable: true, precision: 53 })
  debEspFcp: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
