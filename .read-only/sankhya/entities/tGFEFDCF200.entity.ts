import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCF200',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCF200', { schema: 'SANKHYA' })
export class Tgfefdcf200Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'F200'" })
  registro: string;

  @Column('varchar', { name: 'IND_OPER', nullable: true, length: 2 })
  indOper: string | null;

  @Column('varchar', { name: 'UNID_IMOB', nullable: true, length: 2 })
  unidImob: string | null;

  @Column('varchar', { name: 'IDENT_EMP', nullable: true, length: 3103 })
  identEmp: string | null;

  @Column('varchar', { name: 'DESC_UNID_IMOB', nullable: true, length: 90 })
  descUnidImob: string | null;

  @Column('varchar', { name: 'NUM_CONT', nullable: true, length: 90 })
  numCont: string | null;

  @Column('varchar', { name: 'CPF_CNPJ_ADQU', nullable: true, length: 14 })
  cpfCnpjAdqu: string | null;

  @Column('datetime', { name: 'DT_OPER', nullable: true })
  dtOper: Date | null;

  @Column('float', { name: 'VL_TOT_VEND', nullable: true, precision: 53 })
  vlTotVend: number | null;

  @Column('float', { name: 'VL_REC_ACUM', nullable: true, precision: 53 })
  vlRecAcum: number | null;

  @Column('float', { name: 'VL_TOT_REC', nullable: true, precision: 53 })
  vlTotRec: number | null;

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

  @Column('float', { name: 'PERC_REC_RECEB', nullable: true, precision: 53 })
  percRecReceb: number | null;

  @Column('int', { name: 'IND_NAT_EMP', nullable: true })
  indNatEmp: number | null;

  @Column('varchar', { name: 'INF_COMP', nullable: true, length: 90 })
  infComp: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
