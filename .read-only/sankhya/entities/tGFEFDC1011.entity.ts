import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDC1011',
  ['codemp', 'dtref', 'regniv1', 'nuprocesso', 'seqprocesso', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDC1011', { schema: 'SANKHYA' })
export class Tgfefdc1011Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'SEQPROCESSO' })
  seqprocesso: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1011'" })
  registro: string;

  @Column('varchar', { name: 'REG_REF', nullable: true, length: 4 })
  regRef: string | null;

  @Column('varchar', { name: 'CHAVE_DOC', nullable: true, length: 44 })
  chaveDoc: string | null;

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

  @Column('varchar', { name: 'CST_PIS_SUSP', nullable: true, length: 2 })
  cstPisSusp: string | null;

  @Column('float', { name: 'VL_BC_PIS_SUSP', nullable: true, precision: 53 })
  vlBcPisSusp: number | null;

  @Column('float', { name: 'ALIQ_PIS_SUSP', nullable: true, precision: 53 })
  aliqPisSusp: number | null;

  @Column('float', { name: 'VL_PIS_SUSP', nullable: true, precision: 53 })
  vlPisSusp: number | null;

  @Column('varchar', { name: 'CST_COFINS_SUSP', nullable: true, length: 2 })
  cstCofinsSusp: string | null;

  @Column('float', { name: 'VL_BC_COFINS_SUSP', nullable: true, precision: 53 })
  vlBcCofinsSusp: number | null;

  @Column('float', { name: 'ALIQ_COFINS_SUSP', nullable: true, precision: 53 })
  aliqCofinsSusp: number | null;

  @Column('float', { name: 'VL_COFINS_SUSP', nullable: true, precision: 53 })
  vlCofinsSusp: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('varchar', { name: 'COD_CCUS', nullable: true, length: 255 })
  codCcus: string | null;

  @Column('varchar', { name: 'DESC_DOC_OPER', nullable: true, length: 255 })
  descDocOper: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
