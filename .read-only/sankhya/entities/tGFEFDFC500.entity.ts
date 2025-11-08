import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFC500', ['codemp', 'dtref', 'regniv1', 'chave'], {
  unique: true,
})
@Entity('TGFEFDFC500', { schema: 'SANKHYA' })
export class Tgfefdfc500Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C500'" })
  registro: string;

  @Column('varchar', { name: 'IND_OPER', nullable: true, length: 1 })
  indOper: string | null;

  @Column('varchar', { name: 'IND_EMIT', nullable: true, length: 1 })
  indEmit: string | null;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'COD_MOD', length: 2 })
  codMod: string;

  @Column('int', { name: 'COD_SIT', nullable: true })
  codSit: number | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 4 })
  ser: string | null;

  @Column('varchar', { name: 'SUB', nullable: true, length: 3 })
  sub: string | null;

  @Column('varchar', { name: 'COD_CONS', nullable: true, length: 2 })
  codCons: string | null;

  @Column('int', { name: 'NUM_DOC', nullable: true })
  numDoc: number | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('datetime', { name: 'DT_E_S', nullable: true })
  dtES: Date | null;

  @Column('float', { name: 'VL_DOC', nullable: true, precision: 53 })
  vlDoc: number | null;

  @Column('float', { name: 'VL_DESC', nullable: true, precision: 53 })
  vlDesc: number | null;

  @Column('float', { name: 'VL_FORN', nullable: true, precision: 53 })
  vlForn: number | null;

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

  @Column('float', { name: 'VL_BC_ICMS_ST', nullable: true, precision: 53 })
  vlBcIcmsSt: number | null;

  @Column('float', { name: 'VL_ICMS_ST', nullable: true, precision: 53 })
  vlIcmsSt: number | null;

  @Column('varchar', { name: 'COD_INF', nullable: true, length: 6 })
  codInf: string | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('smallint', { name: 'TP_LIGACAO', nullable: true })
  tpLigacao: number | null;

  @Column('varchar', { name: 'COD_GRUPO_TENSAO', nullable: true, length: 2 })
  codGrupoTensao: string | null;

  @Column('varchar', { name: 'CHV_DOCE', nullable: true, length: 44 })
  chvDoce: string | null;

  @Column('smallint', { name: 'FIN_DOCE', nullable: true })
  finDoce: number | null;

  @Column('varchar', { name: 'CHV_DOCE_REF', nullable: true, length: 44 })
  chvDoceRef: string | null;

  @Column('smallint', { name: 'IND_DEST', nullable: true })
  indDest: number | null;

  @Column('int', { name: 'COD_MUN_DEST', nullable: true })
  codMunDest: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 30 })
  codCta: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('float', { name: 'ENER_INJET', nullable: true, precision: 53 })
  enerInjet: number | null;

  @Column('varchar', { name: 'SER_DOC_REF', nullable: true, length: 4 })
  serDocRef: string | null;

  @Column('varchar', { name: 'HASH_DOC_REF', nullable: true, length: 32 })
  hashDocRef: string | null;

  @Column('varchar', { name: 'MES_DOC_REF', nullable: true, length: 6 })
  mesDocRef: string | null;

  @Column('varchar', { name: 'COD_MOD_DOC_REF', nullable: true, length: 2 })
  codModDocRef: string | null;

  @Column('float', { name: 'OUTRAS_DED', nullable: true, precision: 53 })
  outrasDed: number | null;

  @Column('int', { name: 'NUM_DOC_REF', nullable: true })
  numDocRef: number | null;
}
