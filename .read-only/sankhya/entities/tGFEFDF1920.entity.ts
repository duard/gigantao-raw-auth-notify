import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF1920',
  ['codemp', 'dtref', 'regniv1', 'indApurIcms', 'dtIni', 'dtFin', 'registro'],
  { unique: true },
)
@Entity('TGFEFDF1920', { schema: 'SANKHYA' })
export class Tgfefdf1920Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'IND_APUR_ICMS', length: 1 })
  indApurIcms: string;

  @Column('datetime', { primary: true, name: 'DT_INI' })
  dtIni: Date;

  @Column('datetime', { primary: true, name: 'DT_FIN' })
  dtFin: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'1920'",
  })
  registro: string;

  @Column('float', {
    name: 'VL_TOT_TRANSF_DEBITOS_OA',
    nullable: true,
    precision: 53,
  })
  vlTotTransfDebitosOa: number | null;

  @Column('float', {
    name: 'VL_TOT_AJ_DEBITOS_OA',
    nullable: true,
    precision: 53,
  })
  vlTotAjDebitosOa: number | null;

  @Column('float', {
    name: 'VL_ESTORNOS_CRED_OA',
    nullable: true,
    precision: 53,
  })
  vlEstornosCredOa: number | null;

  @Column('float', {
    name: 'VL_TOT_TRANSF_CREDITOS_OA',
    nullable: true,
    precision: 53,
  })
  vlTotTransfCreditosOa: number | null;

  @Column('float', {
    name: 'VL_TOT_AJ_CREDITOS_OA',
    nullable: true,
    precision: 53,
  })
  vlTotAjCreditosOa: number | null;

  @Column('float', {
    name: 'VL_ESTORNOS_DEB_OA',
    nullable: true,
    precision: 53,
  })
  vlEstornosDebOa: number | null;

  @Column('float', {
    name: 'VL_SLD_CREDOR_ANT_OA',
    nullable: true,
    precision: 53,
  })
  vlSldCredorAntOa: number | null;

  @Column('float', { name: 'VL_SLD_APURADO_OA', nullable: true, precision: 53 })
  vlSldApuradoOa: number | null;

  @Column('float', { name: 'VL_TOT_DED', nullable: true, precision: 53 })
  vlTotDed: number | null;

  @Column('float', {
    name: 'VL_ICMS_RECOLHER_OA',
    nullable: true,
    precision: 53,
  })
  vlIcmsRecolherOa: number | null;

  @Column('float', {
    name: 'VL_SLD_CREDOR_TRANSP_OA',
    nullable: true,
    precision: 53,
  })
  vlSldCredorTranspOa: number | null;

  @Column('float', { name: 'DEB_ESP_OA', nullable: true, precision: 53 })
  debEspOa: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
