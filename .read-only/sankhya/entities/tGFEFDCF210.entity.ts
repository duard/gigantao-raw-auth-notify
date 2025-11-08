import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCF210',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'sequencia', 'seqF210'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCF210', { schema: 'SANKHYA' })
export class Tgfefdcf210Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'F210'" })
  registro: string;

  @Column('int', { primary: true, name: 'SEQ_F210' })
  seqF210: number;

  @Column('float', { name: 'VL_CUS_ORC', nullable: true, precision: 53 })
  vlCusOrc: number | null;

  @Column('float', { name: 'VL_EXC', nullable: true, precision: 53 })
  vlExc: number | null;

  @Column('float', { name: 'VL_CUS_ORC_AJU', nullable: true, precision: 53 })
  vlCusOrcAju: number | null;

  @Column('float', { name: 'VL_BC_CRED', nullable: true, precision: 53 })
  vlBcCred: number | null;

  @Column('varchar', { name: 'CST_PIS', nullable: true, length: 2 })
  cstPis: string | null;

  @Column('float', { name: 'ALIQ_PIS', nullable: true, precision: 53 })
  aliqPis: number | null;

  @Column('float', { name: 'VL_CRED_PIS_UTIL', nullable: true, precision: 53 })
  vlCredPisUtil: number | null;

  @Column('varchar', { name: 'CST_COFINS', nullable: true, length: 2 })
  cstCofins: string | null;

  @Column('float', { name: 'ALIQ_COFINS', nullable: true, precision: 53 })
  aliqCofins: number | null;

  @Column('float', {
    name: 'VL_CRED_COFINS_UTIL',
    nullable: true,
    precision: 53,
  })
  vlCredCofinsUtil: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
