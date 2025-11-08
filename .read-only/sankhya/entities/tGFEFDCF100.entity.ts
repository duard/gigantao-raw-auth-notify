import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCF100',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCF100', { schema: 'SANKHYA' })
export class Tgfefdcf100Entity {
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

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'F100'" })
  registro: string;

  @Column('varchar', { name: 'IND_OPER', nullable: true, length: 1 })
  indOper: string | null;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('datetime', { name: 'DT_OPER', nullable: true })
  dtOper: Date | null;

  @Column('float', { name: 'VL_OPER', nullable: true, precision: 53 })
  vlOper: number | null;

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

  @Column('varchar', { name: 'NAT_BC_CRED', nullable: true, length: 2 })
  natBcCred: string | null;

  @Column('varchar', { name: 'IND_ORIG_CRED', nullable: true, length: 1 })
  indOrigCred: string | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('varchar', { name: 'COD_CCUS', nullable: true, length: 255 })
  codCcus: string | null;

  @Column('varchar', { name: 'DESC_DOC_OPER', nullable: true, length: 3103 })
  descDocOper: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
