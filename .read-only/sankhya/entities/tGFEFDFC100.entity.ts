import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFC100', ['codemp', 'dtref', 'regniv1', 'chave'], {
  unique: true,
})
@Entity('TGFEFDFC100', { schema: 'SANKHYA' })
export class Tgfefdfc100Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C100'" })
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

  @Column('varchar', { name: 'SER', nullable: true, length: 3 })
  ser: string | null;

  @Column('int', { name: 'NUM_DOC', nullable: true })
  numDoc: number | null;

  @Column('varchar', { name: 'CHV_NFE', nullable: true, length: 44 })
  chvNfe: string | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('datetime', { name: 'DT_E_S', nullable: true })
  dtES: Date | null;

  @Column('float', { name: 'VL_DOC', nullable: true, precision: 53 })
  vlDoc: number | null;

  @Column('varchar', { name: 'IND_PGTO', nullable: true, length: 1 })
  indPgto: string | null;

  @Column('float', { name: 'VL_DESC', nullable: true, precision: 53 })
  vlDesc: number | null;

  @Column('float', { name: 'VL_ABAT_NT', nullable: true, precision: 53 })
  vlAbatNt: number | null;

  @Column('float', { name: 'VL_MERC', nullable: true, precision: 53 })
  vlMerc: number | null;

  @Column('varchar', { name: 'IND_FRT', nullable: true, length: 1 })
  indFrt: string | null;

  @Column('float', { name: 'VL_FRT', nullable: true, precision: 53 })
  vlFrt: number | null;

  @Column('float', { name: 'VL_SEG', nullable: true, precision: 53 })
  vlSeg: number | null;

  @Column('float', { name: 'VL_OUT_DA', nullable: true, precision: 53 })
  vlOutDa: number | null;

  @Column('float', { name: 'VL_BC_ICMS', nullable: true, precision: 53 })
  vlBcIcms: number | null;

  @Column('float', { name: 'VL_ICMS', nullable: true, precision: 53 })
  vlIcms: number | null;

  @Column('float', { name: 'VL_BC_ICMS_ST', nullable: true, precision: 53 })
  vlBcIcmsSt: number | null;

  @Column('float', { name: 'VL_ICMS_ST', nullable: true, precision: 53 })
  vlIcmsSt: number | null;

  @Column('float', { name: 'VL_IPI', nullable: true, precision: 53 })
  vlIpi: number | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('float', { name: 'VL_PIS_ST', nullable: true, precision: 53 })
  vlPisSt: number | null;

  @Column('float', { name: 'VL_COFINS_ST', nullable: true, precision: 53 })
  vlCofinsSt: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
