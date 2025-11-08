import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCF205',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'sequencia', 'numCont'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCF205', { schema: 'SANKHYA' })
export class Tgfefdcf205Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'F205'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'NUM_CONT', length: 90 })
  numCont: string;

  @Column('float', {
    name: 'VL_CUS_INC_ACUM_ANT',
    nullable: true,
    precision: 53,
  })
  vlCusIncAcumAnt: number | null;

  @Column('float', {
    name: 'VL_CUS_INC_PER_ESC',
    nullable: true,
    precision: 53,
  })
  vlCusIncPerEsc: number | null;

  @Column('float', { name: 'VL_CUS_INC_ACUM', nullable: true, precision: 53 })
  vlCusIncAcum: number | null;

  @Column('float', {
    name: 'VL_EXC_BC_CUS_INC_ACUM',
    nullable: true,
    precision: 53,
  })
  vlExcBcCusIncAcum: number | null;

  @Column('float', { name: 'VL_BC_CUS_INC', nullable: true, precision: 53 })
  vlBcCusInc: number | null;

  @Column('varchar', { name: 'CST_PIS', nullable: true, length: 2 })
  cstPis: string | null;

  @Column('float', { name: 'ALIQ_PIS', nullable: true, precision: 53 })
  aliqPis: number | null;

  @Column('float', { name: 'VL_CRED_PIS_ACUM', nullable: true, precision: 53 })
  vlCredPisAcum: number | null;

  @Column('float', {
    name: 'VL_CRED_PIS_DESC_ANT',
    nullable: true,
    precision: 53,
  })
  vlCredPisDescAnt: number | null;

  @Column('float', { name: 'VL_CRED_PIS_DESC', nullable: true, precision: 53 })
  vlCredPisDesc: number | null;

  @Column('float', {
    name: 'VL_CRED_PIS_DESC_FUT',
    nullable: true,
    precision: 53,
  })
  vlCredPisDescFut: number | null;

  @Column('varchar', { name: 'CST_COFINS', nullable: true, length: 2 })
  cstCofins: string | null;

  @Column('float', { name: 'ALIQ_COFINS', nullable: true, precision: 53 })
  aliqCofins: number | null;

  @Column('float', {
    name: 'VL_CRED_COFINS_ACUM',
    nullable: true,
    precision: 53,
  })
  vlCredCofinsAcum: number | null;

  @Column('float', {
    name: 'VL_CRED_COFINS_DESC_ANT',
    nullable: true,
    precision: 53,
  })
  vlCredCofinsDescAnt: number | null;

  @Column('float', {
    name: 'VL_CRED_COFINS_DESC',
    nullable: true,
    precision: 53,
  })
  vlCredCofinsDesc: number | null;

  @Column('float', {
    name: 'VL_CRED_COFINS_DESC_FUT',
    nullable: true,
    precision: 53,
  })
  vlCredCofinsDescFut: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
