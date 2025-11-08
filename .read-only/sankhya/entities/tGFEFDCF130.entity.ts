import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCF130',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCF130', { schema: 'SANKHYA' })
export class Tgfefdcf130Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'F001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'F130'" })
  registro: string;

  @Column('varchar', { name: 'NAT_BC_CRED', nullable: true, length: 2 })
  natBcCred: string | null;

  @Column('varchar', { name: 'IDENT_BEM_IMOB', nullable: true, length: 2 })
  identBemImob: string | null;

  @Column('varchar', { name: 'IND_ORIG_CRED', nullable: true, length: 1 })
  indOrigCred: string | null;

  @Column('int', { name: 'IND_UTIL_BEM_IMOB', nullable: true })
  indUtilBemImob: number | null;

  @Column('datetime', { name: 'MES_OPER_AQUIS', nullable: true })
  mesOperAquis: Date | null;

  @Column('float', { name: 'VL_OPER_AQUIS', nullable: true, precision: 53 })
  vlOperAquis: number | null;

  @Column('float', {
    name: 'PARC_OPER_NAO_BC_CRED',
    nullable: true,
    precision: 53,
  })
  parcOperNaoBcCred: number | null;

  @Column('float', { name: 'VL_BC_CRED', nullable: true, precision: 53 })
  vlBcCred: number | null;

  @Column('int', { name: 'IND_NR_PARC', nullable: true })
  indNrParc: number | null;

  @Column('varchar', { name: 'CST_PIS', nullable: true, length: 2 })
  cstPis: string | null;

  @Column('float', { name: 'VL_BC_PIS', nullable: true, precision: 53 })
  vlBcPis: number | null;

  @Column('float', { name: 'ALIQ_PIS', nullable: true, precision: 53 })
  aliqPis: number | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('varchar', { name: 'CST_COFINS', nullable: true, length: 2 })
  cstCofins: string | null;

  @Column('float', { name: 'VL_BC_COFINS', nullable: true, precision: 53 })
  vlBcCofins: number | null;

  @Column('float', { name: 'ALIQ_COFINS', nullable: true, precision: 53 })
  aliqCofins: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('varchar', { name: 'COD_CCUS', nullable: true, length: 255 })
  codCcus: string | null;

  @Column('varchar', { name: 'DESC_BEM_IMOB', nullable: true, length: 3103 })
  descBemImob: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
