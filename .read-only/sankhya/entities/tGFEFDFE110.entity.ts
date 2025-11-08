import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE110',
  ['codemp', 'dtref', 'regniv1', 'seqe100', 'registro'],
  { unique: true },
)
@Entity('TGFEFDFE110', { schema: 'SANKHYA' })
export class Tgfefdfe110Entity {
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

  @Column('int', { primary: true, name: 'SEQE100' })
  seqe100: number;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'E110'",
  })
  registro: string;

  @Column('float', { name: 'VL_TOT_DEBITOS', nullable: true, precision: 53 })
  vlTotDebitos: number | null;

  @Column('float', { name: 'VL_AJ_DEBITOS', nullable: true, precision: 53 })
  vlAjDebitos: number | null;

  @Column('float', { name: 'VL_TOT_AJ_DEBITOS', nullable: true, precision: 53 })
  vlTotAjDebitos: number | null;

  @Column('float', { name: 'VL_ESTORNOS_CRED', nullable: true, precision: 53 })
  vlEstornosCred: number | null;

  @Column('float', { name: 'VL_TOT_CREDITOS', nullable: true, precision: 53 })
  vlTotCreditos: number | null;

  @Column('float', { name: 'VL_AJ_CREDITOS', nullable: true, precision: 53 })
  vlAjCreditos: number | null;

  @Column('float', {
    name: 'VL_TOT_AJ_CREDITOS',
    nullable: true,
    precision: 53,
  })
  vlTotAjCreditos: number | null;

  @Column('float', { name: 'VL_ESTORNOS_DEB', nullable: true, precision: 53 })
  vlEstornosDeb: number | null;

  @Column('float', { name: 'VL_SLD_CREDOR_ANT', nullable: true, precision: 53 })
  vlSldCredorAnt: number | null;

  @Column('float', { name: 'VL_SLD_APURADO', nullable: true, precision: 53 })
  vlSldApurado: number | null;

  @Column('float', { name: 'VL_TOT_DED', nullable: true, precision: 53 })
  vlTotDed: number | null;

  @Column('float', { name: 'VL_ICMS_RECOLHER', nullable: true, precision: 53 })
  vlIcmsRecolher: number | null;

  @Column('float', {
    name: 'VL_SLD_CREDOR_TRANSPORTAR',
    nullable: true,
    precision: 53,
  })
  vlSldCredorTransportar: number | null;

  @Column('float', { name: 'DEB_ESP', nullable: true, precision: 53 })
  debEsp: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
