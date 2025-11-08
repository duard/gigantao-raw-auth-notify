import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCA100',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave'],
  { unique: true },
)
@Entity('TGFEFDCA100', { schema: 'SANKHYA' })
export class Tgfefdca100Entity {
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

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'A100'" })
  registro: string;

  @Column('varchar', { name: 'IND_OPER', length: 1 })
  indOper: string;

  @Column('varchar', { name: 'IND_EMIT', nullable: true, length: 1 })
  indEmit: string | null;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'COD_SIT', nullable: true, length: 2 })
  codSit: string | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 20 })
  ser: string | null;

  @Column('varchar', { name: 'SUB', nullable: true, length: 20 })
  sub: string | null;

  @Column('varchar', { name: 'NUM_DOC', nullable: true, length: 60 })
  numDoc: string | null;

  @Column('varchar', { name: 'CHV_NFSE', nullable: true, length: 60 })
  chvNfse: string | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('datetime', { name: 'DT_EXE_SERV', nullable: true })
  dtExeServ: Date | null;

  @Column('float', { name: 'VL_DOC', nullable: true, precision: 53 })
  vlDoc: number | null;

  @Column('varchar', { name: 'IND_PGTO', nullable: true, length: 1 })
  indPgto: string | null;

  @Column('float', { name: 'VL_DESC', nullable: true, precision: 53 })
  vlDesc: number | null;

  @Column('float', { name: 'VL_BC_PIS', nullable: true, precision: 53 })
  vlBcPis: number | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('float', { name: 'VL_BC_COFINS', nullable: true, precision: 53 })
  vlBcCofins: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('float', { name: 'VL_PIS_RET', nullable: true, precision: 53 })
  vlPisRet: number | null;

  @Column('float', { name: 'VL_COFINS_RET', nullable: true, precision: 53 })
  vlCofinsRet: number | null;

  @Column('float', { name: 'VL_ISS', nullable: true, precision: 53 })
  vlIss: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('char', { name: 'CONFDESGRACARG', length: 1, default: () => "'N'" })
  confdesgracarg: string;

  @Column('char', { name: 'TEMVLRLIQITEM', length: 1, default: () => "'N'" })
  temvlrliqitem: string;

  @Column('float', { name: 'VLRDESCSERV', nullable: true, precision: 53 })
  vlrdescserv: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('float', { name: 'BASESUBST', nullable: true, precision: 53 })
  basesubst: number | null;

  @Column('float', {
    name: 'VLRRESIDUODESCONTO',
    nullable: true,
    precision: 53,
  })
  vlrresiduodesconto: number | null;

  @Column('varchar', { name: 'NATBCCRED', nullable: true, length: 2 })
  natbccred: string | null;

  @Column('datetime', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;
}
