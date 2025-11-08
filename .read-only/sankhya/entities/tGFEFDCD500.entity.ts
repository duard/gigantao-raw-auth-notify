import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCD500',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'nunota'],
  { unique: true },
)
@Entity('TGFEFDCD500', { schema: 'SANKHYA' })
export class Tgfefdcd500Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'D001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'D500'" })
  registro: string;

  @Column('varchar', { name: 'IND_OPER', nullable: true, length: 1 })
  indOper: string | null;

  @Column('varchar', { name: 'IND_EMIT', nullable: true, length: 1 })
  indEmit: string | null;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('varchar', { name: 'COD_SIT', nullable: true, length: 2 })
  codSit: string | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 4 })
  ser: string | null;

  @Column('int', { name: 'SUB', nullable: true })
  sub: number | null;

  @Column('int', { name: 'NUM_DOC', nullable: true })
  numDoc: number | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('datetime', { name: 'DT_A_P', nullable: true })
  dtAP: Date | null;

  @Column('float', { name: 'VL_DOC', nullable: true, precision: 53 })
  vlDoc: number | null;

  @Column('float', { name: 'VL_DESC', nullable: true, precision: 53 })
  vlDesc: number | null;

  @Column('float', { name: 'VL_SERV', nullable: true, precision: 53 })
  vlServ: number | null;

  @Column('float', { name: 'VL_SERV_NT', nullable: true, precision: 53 })
  vlServNt: number | null;

  @Column('float', { name: 'VL_TERC', nullable: true, precision: 53 })
  vlTerc: number | null;

  @Column('float', { name: 'VL_DA', nullable: true, precision: 53 })
  vlDa: number | null;

  @Column('float', { name: 'VL_BC_ICMS', nullable: true, precision: 53 })
  vlBcIcms: number | null;

  @Column('float', { name: 'VL_ICMS', nullable: true, precision: 53 })
  vlIcms: number | null;

  @Column('varchar', { name: 'COD_INF', nullable: true, length: 6 })
  codInf: string | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('int', { name: 'CODINF0450', nullable: true })
  codinf0450: number | null;
}
