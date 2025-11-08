import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFD130', ['codemp', 'dtref', 'regniv1', 'chave', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFD130', { schema: 'SANKHYA' })
export class Tgfefdfd130Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARCCONSIGNATARIO', nullable: true })
  codparcconsignatario: number | null;

  @Column('int', { name: 'CODPARCREDESPACHO', nullable: true })
  codparcredespacho: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'D130'" })
  registro: string;

  @Column('varchar', { name: 'COD_PART_CONSG', nullable: true, length: 60 })
  codPartConsg: string | null;

  @Column('varchar', { name: 'COD_PART_RED', nullable: true, length: 60 })
  codPartRed: string | null;

  @Column('varchar', { name: 'IND_FRT_RED', nullable: true, length: 1 })
  indFrtRed: string | null;

  @Column('int', { name: 'COD_MUN_ORIG', nullable: true })
  codMunOrig: number | null;

  @Column('int', { name: 'COD_MUN_DEST', nullable: true })
  codMunDest: number | null;

  @Column('varchar', { name: 'VEIC_ID', nullable: true, length: 7 })
  veicId: string | null;

  @Column('float', { name: 'VL_LIQ_FRT', nullable: true, precision: 53 })
  vlLiqFrt: number | null;

  @Column('float', { name: 'VL_SEC_CAT', nullable: true, precision: 53 })
  vlSecCat: number | null;

  @Column('float', { name: 'VL_DESP', nullable: true, precision: 53 })
  vlDesp: number | null;

  @Column('float', { name: 'VL_PEDG', nullable: true, precision: 53 })
  vlPedg: number | null;

  @Column('float', { name: 'VL_OUT', nullable: true, precision: 53 })
  vlOut: number | null;

  @Column('float', { name: 'VL_FRT', nullable: true, precision: 53 })
  vlFrt: number | null;

  @Column('varchar', { name: 'UF_ID', nullable: true, length: 2 })
  ufId: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
