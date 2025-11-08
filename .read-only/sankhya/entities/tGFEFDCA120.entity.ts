import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCA120',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCA120', { schema: 'SANKHYA' })
export class Tgfefdca120Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'A120'" })
  registro: string;

  @Column('float', { name: 'VL_TOT_SERV', nullable: true, precision: 53 })
  vlTotServ: number | null;

  @Column('float', { name: 'VL_BC_PIS', nullable: true, precision: 53 })
  vlBcPis: number | null;

  @Column('float', { name: 'VL_PIS_IMP', nullable: true, precision: 53 })
  vlPisImp: number | null;

  @Column('datetime', { name: 'DT_PAG_PIS', nullable: true })
  dtPagPis: Date | null;

  @Column('float', { name: 'VL_BC_COFINS', nullable: true, precision: 53 })
  vlBcCofins: number | null;

  @Column('float', { name: 'VL_COFINS_IMP', nullable: true, precision: 53 })
  vlCofinsImp: number | null;

  @Column('datetime', { name: 'DT_PAG_COFINS', nullable: true })
  dtPagCofins: Date | null;

  @Column('varchar', { name: 'LOC_EXE_SERV', nullable: true, length: 1 })
  locExeServ: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
