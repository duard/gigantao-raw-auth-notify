import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE210',
  ['codemp', 'dtref', 'regniv1', 'seqe200', 'registro'],
  { unique: true },
)
@Entity('TGFEFDFE210', { schema: 'SANKHYA' })
export class Tgfefdfe210Entity {
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

  @Column('int', { primary: true, name: 'SEQE200' })
  seqe200: number;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'E210'",
  })
  registro: string;

  @Column('varchar', { name: 'IND_MOV_ST', nullable: true, length: 1 })
  indMovSt: string | null;

  @Column('float', {
    name: 'VL_SLD_CRED_ANT_ST',
    nullable: true,
    precision: 53,
  })
  vlSldCredAntSt: number | null;

  @Column('float', { name: 'VL_DEVOL_ST', nullable: true, precision: 53 })
  vlDevolSt: number | null;

  @Column('float', { name: 'VL_RESSARC_ST', nullable: true, precision: 53 })
  vlRessarcSt: number | null;

  @Column('float', { name: 'VL_OUT_CRED_ST', nullable: true, precision: 53 })
  vlOutCredSt: number | null;

  @Column('float', { name: 'VL_AJ_CREDITOS_ST', nullable: true, precision: 53 })
  vlAjCreditosSt: number | null;

  @Column('float', { name: 'VL_RETENCAO_ST', nullable: true, precision: 53 })
  vlRetencaoSt: number | null;

  @Column('float', { name: 'VL_OUT_DEB_ST', nullable: true, precision: 53 })
  vlOutDebSt: number | null;

  @Column('float', { name: 'VL_AJ_DEBITOS_ST', nullable: true, precision: 53 })
  vlAjDebitosSt: number | null;

  @Column('float', { name: 'VL_SLD_DEV_ANT_ST', nullable: true, precision: 53 })
  vlSldDevAntSt: number | null;

  @Column('float', { name: 'VL_DEDUCOES_ST', nullable: true, precision: 53 })
  vlDeducoesSt: number | null;

  @Column('float', { name: 'VL_ICMS_RECOL_ST', nullable: true, precision: 53 })
  vlIcmsRecolSt: number | null;

  @Column('float', {
    name: 'VL_SLD_CRED_ST_TRANSPORTAR',
    nullable: true,
    precision: 53,
  })
  vlSldCredStTransportar: number | null;

  @Column('float', { name: 'DEB_ESP_ST', nullable: true, precision: 53 })
  debEspSt: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
