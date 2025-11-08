import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDCM100', ['codemp', 'dtref', 'regniv1', 'aliqPis'], {
  unique: true,
})
@Entity('TGFEFDCM100', { schema: 'SANKHYA' })
export class Tgfefdcm100Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'M100'" })
  registro: string;

  @Column('int', { name: 'COD_CRED', nullable: true })
  codCred: number | null;

  @Column('int', { name: 'IND_CRED_ORI', nullable: true })
  indCredOri: number | null;

  @Column('float', { name: 'VL_BC_PIS', nullable: true, precision: 53 })
  vlBcPis: number | null;

  @Column('float', { primary: true, name: 'ALIQ_PIS', precision: 53 })
  aliqPis: number;

  @Column('float', { name: 'QUANT_BC_PIS', nullable: true, precision: 53 })
  quantBcPis: number | null;

  @Column('float', { name: 'ALIQ_PIS_QUANT', nullable: true, precision: 53 })
  aliqPisQuant: number | null;

  @Column('float', { name: 'VL_CRED', nullable: true, precision: 53 })
  vlCred: number | null;

  @Column('float', { name: 'VL_AJUS_ACRES', nullable: true, precision: 53 })
  vlAjusAcres: number | null;

  @Column('float', { name: 'VL_AJUS_REDUC', nullable: true, precision: 53 })
  vlAjusReduc: number | null;

  @Column('float', { name: 'VL_CRED_DIF', nullable: true, precision: 53 })
  vlCredDif: number | null;

  @Column('float', { name: 'VL_CRED_DISP', nullable: true, precision: 53 })
  vlCredDisp: number | null;

  @Column('varchar', { name: 'IND_DESC_CRED', nullable: true, length: 1 })
  indDescCred: string | null;

  @Column('float', { name: 'VL_CRED_DESC', nullable: true, precision: 53 })
  vlCredDesc: number | null;

  @Column('float', { name: 'SLD_CRED', nullable: true, precision: 53 })
  sldCred: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
