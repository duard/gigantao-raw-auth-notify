import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCF600',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave'],
  { unique: true },
)
@Entity('TGFEFDCF600', { schema: 'SANKHYA' })
export class Tgfefdcf600Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'F600'" })
  registro: string;

  @Column('varchar', { name: 'IND_NAT_RET', nullable: true, length: 2 })
  indNatRet: string | null;

  @Column('datetime', { name: 'DT_RET', nullable: true })
  dtRet: Date | null;

  @Column('float', { name: 'VL_BC_RET', nullable: true, precision: 53 })
  vlBcRet: number | null;

  @Column('float', { name: 'VL_RET', nullable: true, precision: 53 })
  vlRet: number | null;

  @Column('int', { name: 'COD_REC', nullable: true })
  codRec: number | null;

  @Column('int', { name: 'IND_NAT_REC', nullable: true })
  indNatRec: number | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('float', { name: 'VL_RET_PIS', nullable: true, precision: 53 })
  vlRetPis: number | null;

  @Column('float', { name: 'VL_RET_COFINS', nullable: true, precision: 53 })
  vlRetCofins: number | null;

  @Column('int', { name: 'IND_DEC', nullable: true })
  indDec: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
