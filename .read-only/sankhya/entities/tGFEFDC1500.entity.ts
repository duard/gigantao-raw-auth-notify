import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC1500', ['codemp', 'dtref', 'regniv1', 'chave'], {
  unique: true,
})
@Entity('TGFEFDC1500', { schema: 'SANKHYA' })
export class Tgfefdc1500Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1500'" })
  registro: string;

  @Column('datetime', { name: 'PER_APU_CRED' })
  perApuCred: Date;

  @Column('varchar', { name: 'ORIG_CRED', nullable: true, length: 2 })
  origCred: string | null;

  @Column('varchar', { name: 'CNPJ_SUC', nullable: true, length: 14 })
  cnpjSuc: string | null;

  @Column('int', { name: 'COD_CRED', nullable: true })
  codCred: number | null;

  @Column('float', { name: 'VL_CRED_APU', nullable: true, precision: 53 })
  vlCredApu: number | null;

  @Column('float', { name: 'VL_CRED_EXT_APU', nullable: true, precision: 53 })
  vlCredExtApu: number | null;

  @Column('float', { name: 'VL_TOT_CRED_APU', nullable: true, precision: 53 })
  vlTotCredApu: number | null;

  @Column('float', {
    name: 'VL_CRED_DESC_PA_ANT',
    nullable: true,
    precision: 53,
  })
  vlCredDescPaAnt: number | null;

  @Column('float', {
    name: 'VL_CRED_PER_PA_ANT',
    nullable: true,
    precision: 53,
  })
  vlCredPerPaAnt: number | null;

  @Column('float', {
    name: 'VL_CRED_DCOMP_PA_ANT',
    nullable: true,
    precision: 53,
  })
  vlCredDcompPaAnt: number | null;

  @Column('float', { name: 'SD_CRED_DISP_EFD', nullable: true, precision: 53 })
  sdCredDispEfd: number | null;

  @Column('float', { name: 'VL_CRED_DESC_EFD', nullable: true, precision: 53 })
  vlCredDescEfd: number | null;

  @Column('float', { name: 'VL_CRED_PER_EFD', nullable: true, precision: 53 })
  vlCredPerEfd: number | null;

  @Column('float', { name: 'VL_CRED_DCOMP_EFD', nullable: true, precision: 53 })
  vlCredDcompEfd: number | null;

  @Column('float', { name: 'VL_CRED_TRANS', nullable: true, precision: 53 })
  vlCredTrans: number | null;

  @Column('float', { name: 'VL_CRED_OUT', nullable: true, precision: 53 })
  vlCredOut: number | null;

  @Column('float', { name: 'SLD_CRED_FIM', nullable: true, precision: 53 })
  sldCredFim: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
