import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCA170',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCA170', { schema: 'SANKHYA' })
export class Tgfefdca170Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'A001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQITEM', nullable: true })
  seqitem: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'A170'" })
  registro: string;

  @Column('int', { name: 'NUM_ITEM', nullable: true })
  numItem: number | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('varchar', { name: 'DESCR_COMPL', nullable: true, length: 3103 })
  descrCompl: string | null;

  @Column('float', { name: 'VL_ITEM', nullable: true, precision: 53 })
  vlItem: number | null;

  @Column('float', { name: 'VL_DESC', nullable: true, precision: 53 })
  vlDesc: number | null;

  @Column('varchar', { name: 'NAT_BC_CRED', nullable: true, length: 2 })
  natBcCred: string | null;

  @Column('varchar', { name: 'IND_ORIG_CRED', nullable: true, length: 1 })
  indOrigCred: string | null;

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

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('char', { name: 'ESTRANGEIRO', length: 1, default: () => "'N'" })
  estrangeiro: string;

  @Column('int', { name: 'NUPROCESSOPISRET', nullable: true })
  nuprocessopisret: number | null;

  @Column('smallint', { name: 'SEQPROCESSOPISRET', nullable: true })
  seqprocessopisret: number | null;

  @Column('varchar', { name: 'NUMPROCESSOPISRET', nullable: true, length: 21 })
  numprocessopisret: string | null;

  @Column('smallint', { name: 'INDORIGPROCPISRET', nullable: true })
  indorigprocpisret: number | null;

  @Column('int', { name: 'NUPROCESSOCOFINSRET', nullable: true })
  nuprocessocofinsret: number | null;

  @Column('smallint', { name: 'SEQPROCESSOCOFINSRET', nullable: true })
  seqprocessocofinsret: number | null;

  @Column('varchar', {
    name: 'NUMPROCESSOCOFINSRET',
    nullable: true,
    length: 21,
  })
  numprocessocofinsret: string | null;

  @Column('smallint', { name: 'INDORIGPROCCOFINSRET', nullable: true })
  indorigproccofinsret: number | null;

  @Column('int', { name: 'NUPROCESSOPIS', nullable: true })
  nuprocessopis: number | null;

  @Column('smallint', { name: 'SEQPROCESSOPIS', nullable: true })
  seqprocessopis: number | null;

  @Column('varchar', { name: 'NUMPROCESSOPIS', nullable: true, length: 21 })
  numprocessopis: string | null;

  @Column('smallint', { name: 'INDORIGPROCPIS', nullable: true })
  indorigprocpis: number | null;

  @Column('int', { name: 'NUPROCESSOCOFINS', nullable: true })
  nuprocessocofins: number | null;

  @Column('smallint', { name: 'SEQPROCESSOCOFINS', nullable: true })
  seqprocessocofins: number | null;

  @Column('varchar', { name: 'NUMPROCESSOCOFINS', nullable: true, length: 21 })
  numprocessocofins: string | null;

  @Column('smallint', { name: 'INDORIGPROCCOFINS', nullable: true })
  indorigproccofins: number | null;
}
