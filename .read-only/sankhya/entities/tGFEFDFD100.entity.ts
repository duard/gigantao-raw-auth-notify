import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFD100', ['codemp', 'dtref', 'regniv1', 'chave'], {
  unique: true,
})
@Entity('TGFEFDFD100', { schema: 'SANKHYA' })
export class Tgfefdfd100Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'D100'" })
  registro: string;

  @Column('varchar', { name: 'IND_OPER', length: 1 })
  indOper: string;

  @Column('varchar', { name: 'IND_EMIT', nullable: true, length: 1 })
  indEmit: string | null;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('int', { name: 'COD_SIT', nullable: true })
  codSit: number | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 4 })
  ser: string | null;

  @Column('varchar', { name: 'SUB', nullable: true, length: 3 })
  sub: string | null;

  @Column('int', { name: 'NUM_DOC', nullable: true })
  numDoc: number | null;

  @Column('varchar', { name: 'CHV_CTE', nullable: true, length: 44 })
  chvCte: string | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('datetime', { name: 'DT_A_P', nullable: true })
  dtAP: Date | null;

  @Column('smallint', { name: 'TP_CTE', nullable: true })
  tpCte: number | null;

  @Column('varchar', { name: 'CHV_CTE_REF', nullable: true, length: 44 })
  chvCteRef: string | null;

  @Column('float', { name: 'VL_DOC', nullable: true, precision: 53 })
  vlDoc: number | null;

  @Column('float', { name: 'VL_DESC', nullable: true, precision: 53 })
  vlDesc: number | null;

  @Column('varchar', { name: 'IND_FRT', nullable: true, length: 1 })
  indFrt: string | null;

  @Column('float', { name: 'VL_SERV', nullable: true, precision: 53 })
  vlServ: number | null;

  @Column('float', { name: 'VL_BC_ICMS', nullable: true, precision: 53 })
  vlBcIcms: number | null;

  @Column('float', { name: 'VL_ICMS', nullable: true, precision: 53 })
  vlIcms: number | null;

  @Column('float', { name: 'VL_NT', nullable: true, precision: 53 })
  vlNt: number | null;

  @Column('varchar', { name: 'COD_INF', nullable: true, length: 6 })
  codInf: string | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 60 })
  codCta: string | null;

  @Column('int', { name: 'COD_MUN_ORIG', nullable: true })
  codMunOrig: number | null;

  @Column('int', { name: 'COD_MUN_DEST', nullable: true })
  codMunDest: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
