import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFC800', ['codemp', 'dtref', 'regniv1', 'chave'], {
  unique: true,
})
@Entity('TGFEFDFC800', { schema: 'SANKHYA' })
export class Tgfefdfc800Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C800'" })
  registro: string;

  @Column('varchar', { name: 'COD_MOD', length: 2 })
  codMod: string;

  @Column('int', { name: 'COD_SIT', nullable: true })
  codSit: number | null;

  @Column('int', { name: 'NUM_CFE', nullable: true })
  numCfe: number | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('float', { name: 'VL_CFE', nullable: true, precision: 53 })
  vlCfe: number | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('varchar', { name: 'CNPJ_CPF', nullable: true, length: 14 })
  cnpjCpf: string | null;

  @Column('int', { name: 'NR_SAT', nullable: true })
  nrSat: number | null;

  @Column('varchar', { name: 'CHV_CFE', nullable: true, length: 44 })
  chvCfe: string | null;

  @Column('float', { name: 'VL_DESC', nullable: true, precision: 53 })
  vlDesc: number | null;

  @Column('float', { name: 'VL_MERC', nullable: true, precision: 53 })
  vlMerc: number | null;

  @Column('float', { name: 'VL_OUT_DA', nullable: true, precision: 53 })
  vlOutDa: number | null;

  @Column('float', { name: 'VL_ICMS', nullable: true, precision: 53 })
  vlIcms: number | null;

  @Column('float', { name: 'VL_PIS_ST', nullable: true, precision: 53 })
  vlPisSt: number | null;

  @Column('float', { name: 'VL_COFINS_ST', nullable: true, precision: 53 })
  vlCofinsSt: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
