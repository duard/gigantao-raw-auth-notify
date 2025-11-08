import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TGFGIR',
  ['codemp', 'codlocal', 'codprod', 'controle', 'codvol', 'codrel'],
  {
    unique: true,
  },
)
@Index('TGFGIR_I02', ['codrel', 'codgrupoprod'], {})
@Index('TGFGIR_I03', ['codrel', 'marca'], {})
@Index('TGFGIR_I04', ['codrel', 'codemp'], {})
@Index('TGFGIR_I05', ['codrel', 'codprod', 'codvol', 'codvolcompra'], {})
@Index('TGFGIR_I06', ['nunota'], {})
@Entity('TGFGIR', { schema: 'SANKHYA' })
export class TgfgirEntity {
  @Column('smallint', { primary: true, name: 'CODEMP', default: () => '(0)' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('int', { name: 'CODGRUPOPROD', nullable: true })
  codgrupoprod: number | null;

  @Column('varchar', { name: 'DESCRGRUPOPROD', nullable: true, length: 40 })
  descrgrupoprod: string | null;

  @Column('char', { name: 'DESCRPROD', nullable: true, length: 60 })
  descrprod: string | null;

  @Column('char', { name: 'REFERENCIA', nullable: true, length: 15 })
  referencia: string | null;

  @Column('char', { name: 'MARCA', nullable: true, length: 10 })
  marca: string | null;

  @Column('decimal', {
    name: 'VLRVENDA_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvenda_1: number | null;

  @Column('decimal', {
    name: 'PARTQTDE_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partqtde_1: number | null;

  @Column('decimal', {
    name: 'VLRUNIT_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrunit_1: number | null;

  @Column('decimal', {
    name: 'VLRTOT_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtot_1: number | null;

  @Column('decimal', {
    name: 'PARTTOTPER_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  parttotper_1: number | null;

  @Column('decimal', {
    name: 'CUSTOVENDA_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovenda_1: number | null;

  @Column('decimal', {
    name: 'VLRVENDIAUTIL_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvendiautil_1: number | null;

  @Column('decimal', {
    name: 'LUCRO_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  lucro_1: number | null;

  @Column('decimal', {
    name: 'VLRVENDA_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvenda_2: number | null;

  @Column('decimal', {
    name: 'PARTQTDE_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partqtde_2: number | null;

  @Column('decimal', {
    name: 'VLRUNIT_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrunit_2: number | null;

  @Column('decimal', {
    name: 'VLRTOT_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtot_2: number | null;

  @Column('decimal', {
    name: 'PARTTOTPER_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  parttotper_2: number | null;

  @Column('decimal', {
    name: 'VLRVENDIAUTIL_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvendiautil_2: number | null;

  @Column('decimal', {
    name: 'CUSTOVENDA_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovenda_2: number | null;

  @Column('decimal', {
    name: 'LUCRO_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  lucro_2: number | null;

  @Column('decimal', {
    name: 'VLRVENDA_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvenda_3: number | null;

  @Column('decimal', {
    name: 'PARTQTDE_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partqtde_3: number | null;

  @Column('decimal', {
    name: 'VLRUNIT_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrunit_3: number | null;

  @Column('decimal', {
    name: 'VLRTOT_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtot_3: number | null;

  @Column('decimal', {
    name: 'PARTTOTPER_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  parttotper_3: number | null;

  @Column('decimal', {
    name: 'VLRVENDIAUTIL_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvendiautil_3: number | null;

  @Column('decimal', {
    name: 'CUSTOVENDA_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovenda_3: number | null;

  @Column('decimal', {
    name: 'LUCRO_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  lucro_3: number | null;

  @Column('decimal', {
    name: 'VLRVENDA_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvenda_4: number | null;

  @Column('decimal', {
    name: 'PARTQTDE_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partqtde_4: number | null;

  @Column('decimal', {
    name: 'VLRUNIT_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrunit_4: number | null;

  @Column('decimal', {
    name: 'VLRTOT_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtot_4: number | null;

  @Column('decimal', {
    name: 'PARTTOTPER_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  parttotper_4: number | null;

  @Column('decimal', {
    name: 'VLRVENDIAUTIL_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvendiautil_4: number | null;

  @Column('decimal', {
    name: 'CUSTOVENDA_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovenda_4: number | null;

  @Column('decimal', {
    name: 'LUCRO_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  lucro_4: number | null;

  @Column('decimal', {
    name: 'VLRVENDA_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvenda_5: number | null;

  @Column('decimal', {
    name: 'PARTQTDE_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partqtde_5: number | null;

  @Column('decimal', {
    name: 'VLRUNIT_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrunit_5: number | null;

  @Column('decimal', {
    name: 'VLRTOT_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtot_5: number | null;

  @Column('decimal', {
    name: 'PARTTOTPER_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  parttotper_5: number | null;

  @Column('decimal', {
    name: 'VLRVENDIAUTIL_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvendiautil_5: number | null;

  @Column('decimal', {
    name: 'CUSTOVENDA_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovenda_5: number | null;

  @Column('decimal', {
    name: 'LUCRO_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  lucro_5: number | null;

  @Column('decimal', {
    name: 'VLRVENDA_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvenda_6: number | null;

  @Column('decimal', {
    name: 'PARTQTDE_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partqtde_6: number | null;

  @Column('decimal', {
    name: 'VLRUNIT_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrunit_6: number | null;

  @Column('decimal', {
    name: 'VLRTOT_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtot_6: number | null;

  @Column('decimal', {
    name: 'PARTTOTPER_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  parttotper_6: number | null;

  @Column('decimal', {
    name: 'VLRVENDIAUTIL_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvendiautil_6: number | null;

  @Column('decimal', {
    name: 'CUSTOVENDA_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovenda_6: number | null;

  @Column('decimal', {
    name: 'LUCRO_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  lucro_6: number | null;

  @Column('float', { name: 'ESTOQUE', nullable: true, precision: 53 })
  estoque: number | null;

  @Column('decimal', {
    name: 'CUSTOGER',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custoger: number | null;

  @Column('decimal', {
    name: 'ESTCUSTGER',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  estcustger: number | null;

  @Column('decimal', {
    name: 'PARTESTOQUE',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partestoque: number | null;

  @Column('datetime', { name: 'ULTVENDA', nullable: true })
  ultvenda: Date | null;

  @Column('datetime', { name: 'ULTCOMPRA', nullable: true })
  ultcompra: Date | null;

  @Column('decimal', {
    name: 'QTDULTCOMPRA',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  qtdultcompra: number | null;

  @Column('decimal', {
    name: 'PARTLUCRO_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partlucro_1: number | null;

  @Column('decimal', {
    name: 'PARTLUCRO_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partlucro_2: number | null;

  @Column('decimal', {
    name: 'PARTLUCRO_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partlucro_3: number | null;

  @Column('decimal', {
    name: 'PARTLUCRO_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partlucro_4: number | null;

  @Column('decimal', {
    name: 'PARTLUCRO_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partlucro_5: number | null;

  @Column('decimal', {
    name: 'PARTLUCRO_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partlucro_6: number | null;

  @Column('decimal', {
    name: 'VLRGASTOVAR_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrgastovar_1: number | null;

  @Column('decimal', {
    name: 'VLRGASTOVAR_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrgastovar_2: number | null;

  @Column('decimal', {
    name: 'VLRGASTOVAR_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrgastovar_3: number | null;

  @Column('decimal', {
    name: 'VLRGASTOVAR_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrgastovar_4: number | null;

  @Column('decimal', {
    name: 'VLRGASTOVAR_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrgastovar_5: number | null;

  @Column('decimal', {
    name: 'VLRGASTOVAR_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrgastovar_6: number | null;

  @Column('decimal', {
    name: 'PARTGASVAR_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvar_1: number | null;

  @Column('decimal', {
    name: 'PARTGASVAR_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvar_2: number | null;

  @Column('decimal', {
    name: 'PARTGASVAR_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvar_3: number | null;

  @Column('decimal', {
    name: 'PARTGASVAR_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvar_4: number | null;

  @Column('decimal', {
    name: 'PARTGASVAR_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvar_5: number | null;

  @Column('decimal', {
    name: 'PARTGASVAR_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvar_6: number | null;

  @Column('decimal', {
    name: 'PARTGASVARFAT_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvarfat_1: number | null;

  @Column('decimal', {
    name: 'PARTGASVARFAT_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvarfat_2: number | null;

  @Column('decimal', {
    name: 'PARTGASVARFAT_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvarfat_3: number | null;

  @Column('decimal', {
    name: 'PARTGASVARFAT_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvarfat_4: number | null;

  @Column('decimal', {
    name: 'PARTGASVARFAT_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvarfat_5: number | null;

  @Column('decimal', {
    name: 'PARTGASVARFAT_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvarfat_6: number | null;

  @Column('decimal', {
    name: 'VLRMARGCONT_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrmargcont_1: number | null;

  @Column('decimal', {
    name: 'VLRMARGCONT_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrmargcont_2: number | null;

  @Column('decimal', {
    name: 'VLRMARGCONT_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrmargcont_3: number | null;

  @Column('decimal', {
    name: 'VLRMARGCONT_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrmargcont_4: number | null;

  @Column('decimal', {
    name: 'VLRMARGCONT_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrmargcont_5: number | null;

  @Column('decimal', {
    name: 'VLRMARGCONT_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrmargcont_6: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONT_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcont_1: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONT_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcont_2: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONT_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcont_3: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONT_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcont_4: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONT_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcont_5: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONT_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcont_6: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONTFAT_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcontfat_1: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONTFAT_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcontfat_2: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONTFAT_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcontfat_3: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONTFAT_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcontfat_4: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONTFAT_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcontfat_5: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONTFAT_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcontfat_6: number | null;

  @Column('char', { name: 'DESCRLOCAL', nullable: true, length: 40 })
  descrlocal: string | null;

  @Column('decimal', {
    name: 'ESTMIN',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  estmin: number | null;

  @Column('decimal', {
    name: 'ESTMINGIR',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  estmingir: number | null;

  @Column('decimal', {
    name: 'SUGCOMPRA',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  sugcompra: number | null;

  @Column('decimal', {
    name: 'SUGCOMPRAGIR',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  sugcompragir: number | null;

  @Column('decimal', {
    name: 'CUSTOVNDTOTAL_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovndtotal_1: number | null;

  @Column('decimal', {
    name: 'PERLUCRO_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  perlucro_1: number | null;

  @Column('char', { name: 'CURVAQTD_1', nullable: true, length: 1 })
  curvaqtd_1: string | null;

  @Column('char', { name: 'CURVATOT_1', nullable: true, length: 1 })
  curvatot_1: string | null;

  @Column('char', { name: 'CURVAMARG_1', nullable: true, length: 1 })
  curvamarg_1: string | null;

  @Column('decimal', {
    name: 'CUSTOVNDTOTAL_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovndtotal_2: number | null;

  @Column('decimal', {
    name: 'PERLUCRO_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  perlucro_2: number | null;

  @Column('char', { name: 'CURVAQTD_2', nullable: true, length: 1 })
  curvaqtd_2: string | null;

  @Column('char', { name: 'CURVATOT_2', nullable: true, length: 1 })
  curvatot_2: string | null;

  @Column('char', { name: 'CURVAMARG_2', nullable: true, length: 1 })
  curvamarg_2: string | null;

  @Column('decimal', {
    name: 'CUSTOVNDTOTAL_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovndtotal_3: number | null;

  @Column('decimal', {
    name: 'PERLUCRO_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  perlucro_3: number | null;

  @Column('char', { name: 'CURVAQTD_3', nullable: true, length: 1 })
  curvaqtd_3: string | null;

  @Column('char', { name: 'CURVATOT_3', nullable: true, length: 1 })
  curvatot_3: string | null;

  @Column('char', { name: 'CURVAMARG_3', nullable: true, length: 1 })
  curvamarg_3: string | null;

  @Column('decimal', {
    name: 'CUSTOVNDTOTAL_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovndtotal_4: number | null;

  @Column('decimal', {
    name: 'PERLUCRO_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  perlucro_4: number | null;

  @Column('char', { name: 'CURVAQTD_4', nullable: true, length: 1 })
  curvaqtd_4: string | null;

  @Column('char', { name: 'CURVATOT_4', nullable: true, length: 1 })
  curvatot_4: string | null;

  @Column('char', { name: 'CURVAMARG_4', nullable: true, length: 1 })
  curvamarg_4: string | null;

  @Column('decimal', {
    name: 'CUSTOVNDTOTAL_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovndtotal_5: number | null;

  @Column('decimal', {
    name: 'PERLUCRO_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  perlucro_5: number | null;

  @Column('char', { name: 'CURVAQTD_5', nullable: true, length: 1 })
  curvaqtd_5: string | null;

  @Column('char', { name: 'CURVATOT_5', nullable: true, length: 1 })
  curvatot_5: string | null;

  @Column('char', { name: 'CURVAMARG_5', nullable: true, length: 1 })
  curvamarg_5: string | null;

  @Column('decimal', {
    name: 'CUSTOVNDTOTAL_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovndtotal_6: number | null;

  @Column('decimal', {
    name: 'PERLUCRO_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  perlucro_6: number | null;

  @Column('char', { name: 'CURVAQTD_6', nullable: true, length: 1 })
  curvaqtd_6: string | null;

  @Column('char', { name: 'CURVATOT_6', nullable: true, length: 1 })
  curvatot_6: string | null;

  @Column('char', { name: 'CURVAMARG_6', nullable: true, length: 1 })
  curvamarg_6: string | null;

  @Column('decimal', {
    name: 'PEDCPAPEND',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  pedcpapend: number | null;

  @Column('char', { name: 'COMPLDESC', nullable: true, length: 40 })
  compldesc: string | null;

  @Column('char', { name: 'CURVAMARG_10', nullable: true, length: 1 })
  curvamarg_10: string | null;

  @Column('char', { name: 'CURVAMARG_12', nullable: true, length: 1 })
  curvamarg_12: string | null;

  @Column('char', { name: 'CURVAMARG_11', nullable: true, length: 1 })
  curvamarg_11: string | null;

  @Column('char', { name: 'CURVAMARG_9', nullable: true, length: 1 })
  curvamarg_9: string | null;

  @Column('char', { name: 'CURVAMARG_8', nullable: true, length: 1 })
  curvamarg_8: string | null;

  @Column('char', { name: 'CURVAMARG_7', nullable: true, length: 1 })
  curvamarg_7: string | null;

  @Column('char', { name: 'CURVAQTD_10', nullable: true, length: 1 })
  curvaqtd_10: string | null;

  @Column('char', { name: 'CURVAQTD_7', nullable: true, length: 1 })
  curvaqtd_7: string | null;

  @Column('char', { name: 'CURVAQTD_12', nullable: true, length: 1 })
  curvaqtd_12: string | null;

  @Column('char', { name: 'CURVAQTD_11', nullable: true, length: 1 })
  curvaqtd_11: string | null;

  @Column('char', { name: 'CURVAQTD_9', nullable: true, length: 1 })
  curvaqtd_9: string | null;

  @Column('char', { name: 'CURVAQTD_8', nullable: true, length: 1 })
  curvaqtd_8: string | null;

  @Column('char', { name: 'CURVATOT_9', nullable: true, length: 1 })
  curvatot_9: string | null;

  @Column('char', { name: 'CURVATOT_8', nullable: true, length: 1 })
  curvatot_8: string | null;

  @Column('char', { name: 'CURVATOT_7', nullable: true, length: 1 })
  curvatot_7: string | null;

  @Column('char', { name: 'CURVATOT_12', nullable: true, length: 1 })
  curvatot_12: string | null;

  @Column('char', { name: 'CURVATOT_11', nullable: true, length: 1 })
  curvatot_11: string | null;

  @Column('char', { name: 'CURVATOT_10', nullable: true, length: 1 })
  curvatot_10: string | null;

  @Column('decimal', {
    name: 'CUSTOVENDA_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovenda_9: number | null;

  @Column('decimal', {
    name: 'CUSTOVENDA_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovenda_8: number | null;

  @Column('decimal', {
    name: 'CUSTOVENDA_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovenda_7: number | null;

  @Column('decimal', {
    name: 'CUSTOVENDA_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovenda_12: number | null;

  @Column('decimal', {
    name: 'CUSTOVENDA_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovenda_11: number | null;

  @Column('decimal', {
    name: 'CUSTOVENDA_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovenda_10: number | null;

  @Column('decimal', {
    name: 'CUSTOVNDTOTAL_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovndtotal_12: number | null;

  @Column('decimal', {
    name: 'CUSTOVNDTOTAL_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovndtotal_11: number | null;

  @Column('decimal', {
    name: 'CUSTOVNDTOTAL_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovndtotal_9: number | null;

  @Column('decimal', {
    name: 'CUSTOVNDTOTAL_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovndtotal_8: number | null;

  @Column('decimal', {
    name: 'CUSTOVNDTOTAL_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovndtotal_7: number | null;

  @Column('decimal', {
    name: 'CUSTOVNDTOTAL_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  custovndtotal_10: number | null;

  @Column('decimal', {
    name: 'LUCRO_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  lucro_9: number | null;

  @Column('decimal', {
    name: 'LUCRO_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  lucro_8: number | null;

  @Column('decimal', {
    name: 'LUCRO_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  lucro_7: number | null;

  @Column('decimal', {
    name: 'LUCRO_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  lucro_12: number | null;

  @Column('decimal', {
    name: 'LUCRO_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  lucro_11: number | null;

  @Column('decimal', {
    name: 'LUCRO_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  lucro_10: number | null;

  @Column('smallint', { name: 'FREQUENCIA', nullable: true })
  frequencia: number | null;

  @Column('decimal', {
    name: 'PARTGASVAR_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvar_9: number | null;

  @Column('decimal', {
    name: 'PARTGASVAR_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvar_8: number | null;

  @Column('decimal', {
    name: 'PARTGASVAR_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvar_7: number | null;

  @Column('decimal', {
    name: 'PARTGASVAR_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvar_12: number | null;

  @Column('decimal', {
    name: 'PARTGASVAR_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvar_11: number | null;

  @Column('decimal', {
    name: 'PARTGASVARFAT_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvarfat_9: number | null;

  @Column('decimal', {
    name: 'PARTGASVARFAT_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvarfat_8: number | null;

  @Column('decimal', {
    name: 'PARTGASVAR_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvar_10: number | null;

  @Column('decimal', {
    name: 'PARTGASVARFAT_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvarfat_7: number | null;

  @Column('decimal', {
    name: 'PARTGASVARFAT_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvarfat_12: number | null;

  @Column('decimal', {
    name: 'PARTGASVARFAT_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvarfat_11: number | null;

  @Column('decimal', {
    name: 'PARTGASVARFAT_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partgasvarfat_10: number | null;

  @Column('decimal', {
    name: 'PARTLUCRO_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partlucro_9: number | null;

  @Column('decimal', {
    name: 'PARTLUCRO_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partlucro_8: number | null;

  @Column('decimal', {
    name: 'PARTLUCRO_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partlucro_7: number | null;

  @Column('decimal', {
    name: 'PARTLUCRO_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partlucro_12: number | null;

  @Column('decimal', {
    name: 'PARTLUCRO_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partlucro_11: number | null;

  @Column('decimal', {
    name: 'PARTLUCRO_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partlucro_10: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONT_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcont_9: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONT_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcont_8: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONT_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcont_7: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONT_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcont_12: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONT_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcont_11: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONT_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcont_10: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONTFAT_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcontfat_9: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONTFAT_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcontfat_8: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONTFAT_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcontfat_7: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONTFAT_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcontfat_12: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONTFAT_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcontfat_11: number | null;

  @Column('decimal', {
    name: 'PARTMARGCONTFAT_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partmargcontfat_10: number | null;

  @Column('decimal', {
    name: 'PARTQTDE_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partqtde_9: number | null;

  @Column('decimal', {
    name: 'PARTQTDE_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partqtde_8: number | null;

  @Column('decimal', {
    name: 'PARTQTDE_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partqtde_7: number | null;

  @Column('decimal', {
    name: 'PARTQTDE_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partqtde_12: number | null;

  @Column('decimal', {
    name: 'PARTQTDE_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partqtde_11: number | null;

  @Column('decimal', {
    name: 'PARTQTDE_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partqtde_10: number | null;

  @Column('decimal', {
    name: 'PARTTOTPER_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  parttotper_9: number | null;

  @Column('decimal', {
    name: 'PARTTOTPER_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  parttotper_8: number | null;

  @Column('decimal', {
    name: 'PARTTOTPER_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  parttotper_7: number | null;

  @Column('decimal', {
    name: 'PARTTOTPER_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  parttotper_12: number | null;

  @Column('decimal', {
    name: 'PARTTOTPER_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  parttotper_11: number | null;

  @Column('decimal', {
    name: 'PARTTOTPER_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  parttotper_10: number | null;

  @Column('decimal', {
    name: 'PERLUCRO_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  perlucro_9: number | null;

  @Column('decimal', {
    name: 'PERLUCRO_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  perlucro_8: number | null;

  @Column('decimal', {
    name: 'PERLUCRO_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  perlucro_7: number | null;

  @Column('decimal', {
    name: 'PERLUCRO_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  perlucro_12: number | null;

  @Column('decimal', {
    name: 'PERLUCRO_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  perlucro_11: number | null;

  @Column('decimal', {
    name: 'PERLUCRO_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  perlucro_10: number | null;

  @Column('int', { name: 'POPULARIDADE_12', nullable: true })
  popularidade_12: number | null;

  @Column('int', { name: 'POPULARIDADE_11', nullable: true })
  popularidade_11: number | null;

  @Column('int', { name: 'POPULARIDADE_10', nullable: true })
  popularidade_10: number | null;

  @Column('int', { name: 'POPULARIDADE_9', nullable: true })
  popularidade_9: number | null;

  @Column('int', { name: 'POPULARIDADE_8', nullable: true })
  popularidade_8: number | null;

  @Column('int', { name: 'POPULARIDADE_7', nullable: true })
  popularidade_7: number | null;

  @Column('int', { name: 'POPULARIDADE_6', nullable: true })
  popularidade_6: number | null;

  @Column('int', { name: 'POPULARIDADE_5', nullable: true })
  popularidade_5: number | null;

  @Column('int', { name: 'POPULARIDADE_4', nullable: true })
  popularidade_4: number | null;

  @Column('int', { name: 'POPULARIDADE_3', nullable: true })
  popularidade_3: number | null;

  @Column('int', { name: 'POPULARIDADE_2', nullable: true })
  popularidade_2: number | null;

  @Column('int', { name: 'POPULARIDADE_1', nullable: true })
  popularidade_1: number | null;

  @Column('int', { name: 'POPTOTAL', nullable: true })
  poptotal: number | null;

  @Column('decimal', {
    name: 'VLRGASTOVAR_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrgastovar_10: number | null;

  @Column('decimal', {
    name: 'QTDTOTAL',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  qtdtotal: number | null;

  @Column('decimal', {
    name: 'QTDMINIMA',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  qtdminima: number | null;

  @Column('decimal', {
    name: 'QTDMEDIA',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  qtdmedia: number | null;

  @Column('decimal', {
    name: 'QTDMAXIMA',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  qtdmaxima: number | null;

  @Column('decimal', {
    name: 'VLRMARGCONT_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrmargcont_9: number | null;

  @Column('decimal', {
    name: 'VLRMARGCONT_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrmargcont_8: number | null;

  @Column('decimal', {
    name: 'VLRMARGCONT_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrmargcont_7: number | null;

  @Column('decimal', {
    name: 'VLRMARGCONT_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrmargcont_12: number | null;

  @Column('decimal', {
    name: 'VLRMARGCONT_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrmargcont_11: number | null;

  @Column('decimal', {
    name: 'VLRMARGCONT_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrmargcont_10: number | null;

  @Column('decimal', {
    name: 'VLRTOT_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtot_9: number | null;

  @Column('decimal', {
    name: 'VLRTOT_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtot_8: number | null;

  @Column('decimal', {
    name: 'VLRTOT_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtot_7: number | null;

  @Column('decimal', {
    name: 'VLRTOT_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtot_12: number | null;

  @Column('decimal', {
    name: 'VLRTOT_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtot_11: number | null;

  @Column('decimal', {
    name: 'VLRTOT_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtot_10: number | null;

  @Column('decimal', {
    name: 'VLRGASTOVAR_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrgastovar_9: number | null;

  @Column('decimal', {
    name: 'VLRGASTOVAR_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrgastovar_8: number | null;

  @Column('decimal', {
    name: 'VLRGASTOVAR_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrgastovar_7: number | null;

  @Column('decimal', {
    name: 'VLRGASTOVAR_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrgastovar_12: number | null;

  @Column('decimal', {
    name: 'VLRGASTOVAR_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrgastovar_11: number | null;

  @Column('decimal', {
    name: 'VLRUNIT_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrunit_9: number | null;

  @Column('decimal', {
    name: 'VLRUNIT_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrunit_8: number | null;

  @Column('decimal', {
    name: 'VLRUNIT_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrunit_7: number | null;

  @Column('decimal', {
    name: 'VLRUNIT_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrunit_12: number | null;

  @Column('decimal', {
    name: 'VLRUNIT_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrunit_11: number | null;

  @Column('decimal', {
    name: 'VLRUNIT_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrunit_10: number | null;

  @Column('decimal', {
    name: 'VLRVENDA_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvenda_9: number | null;

  @Column('decimal', {
    name: 'VLRVENDA_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvenda_8: number | null;

  @Column('decimal', {
    name: 'VLRVENDA_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvenda_7: number | null;

  @Column('decimal', {
    name: 'VLRVENDA_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvenda_12: number | null;

  @Column('decimal', {
    name: 'VLRVENDA_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvenda_11: number | null;

  @Column('decimal', {
    name: 'VLRVENDA_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvenda_10: number | null;

  @Column('decimal', {
    name: 'VLRVENDIAUTIL_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvendiautil_9: number | null;

  @Column('decimal', {
    name: 'VLRVENDIAUTIL_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvendiautil_8: number | null;

  @Column('decimal', {
    name: 'VLRVENDIAUTIL_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvendiautil_7: number | null;

  @Column('decimal', {
    name: 'VLRVENDIAUTIL_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvendiautil_12: number | null;

  @Column('decimal', {
    name: 'VLRVENDIAUTIL_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvendiautil_11: number | null;

  @Column('decimal', {
    name: 'VLRVENDIAUTIL_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrvendiautil_10: number | null;

  @Column('decimal', {
    name: 'PEDVDAPEND',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  pedvdapend: number | null;

  @Column('decimal', {
    name: 'SUGCOMPCUSTGER',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  sugcompcustger: number | null;

  @Column('decimal', {
    name: 'ACUMQTD_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumqtd_1: number | null;

  @Column('decimal', {
    name: 'ACUMQTD_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumqtd_2: number | null;

  @Column('decimal', {
    name: 'ACUMQTD_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumqtd_3: number | null;

  @Column('decimal', {
    name: 'ACUMQTD_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumqtd_4: number | null;

  @Column('decimal', {
    name: 'ACUMQTD_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumqtd_5: number | null;

  @Column('decimal', {
    name: 'ACUMQTD_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumqtd_6: number | null;

  @Column('decimal', {
    name: 'ACUMQTD_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumqtd_7: number | null;

  @Column('decimal', {
    name: 'ACUMQTD_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumqtd_8: number | null;

  @Column('decimal', {
    name: 'ACUMQTD_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumqtd_9: number | null;

  @Column('decimal', {
    name: 'ACUMQTD_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumqtd_10: number | null;

  @Column('decimal', {
    name: 'ACUMQTD_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumqtd_11: number | null;

  @Column('decimal', {
    name: 'ACUMQTD_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumqtd_12: number | null;

  @Column('decimal', {
    name: 'ACUMTOT_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumtot_1: number | null;

  @Column('decimal', {
    name: 'ACUMTOT_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumtot_2: number | null;

  @Column('decimal', {
    name: 'ACUMTOT_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumtot_3: number | null;

  @Column('decimal', {
    name: 'ACUMTOT_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumtot_4: number | null;

  @Column('decimal', {
    name: 'ACUMTOT_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumtot_5: number | null;

  @Column('decimal', {
    name: 'ACUMTOT_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumtot_6: number | null;

  @Column('decimal', {
    name: 'ACUMTOT_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumtot_7: number | null;

  @Column('decimal', {
    name: 'ACUMTOT_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumtot_8: number | null;

  @Column('decimal', {
    name: 'ACUMTOT_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumtot_9: number | null;

  @Column('decimal', {
    name: 'ACUMTOT_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumtot_10: number | null;

  @Column('decimal', {
    name: 'ACUMTOT_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumtot_11: number | null;

  @Column('decimal', {
    name: 'ACUMTOT_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumtot_12: number | null;

  @Column('decimal', {
    name: 'ACUMMARG_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acummarg_1: number | null;

  @Column('decimal', {
    name: 'ACUMMARG_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acummarg_2: number | null;

  @Column('decimal', {
    name: 'ACUMMARG_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acummarg_3: number | null;

  @Column('decimal', {
    name: 'ACUMMARG_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acummarg_4: number | null;

  @Column('decimal', {
    name: 'ACUMMARG_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acummarg_5: number | null;

  @Column('decimal', {
    name: 'ACUMMARG_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acummarg_6: number | null;

  @Column('decimal', {
    name: 'ACUMMARG_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acummarg_7: number | null;

  @Column('decimal', {
    name: 'ACUMMARG_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acummarg_8: number | null;

  @Column('decimal', {
    name: 'ACUMMARG_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acummarg_9: number | null;

  @Column('decimal', {
    name: 'ACUMMARG_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acummarg_10: number | null;

  @Column('decimal', {
    name: 'ACUMMARG_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acummarg_11: number | null;

  @Column('decimal', {
    name: 'ACUMMARG_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acummarg_12: number | null;

  @Column('char', { name: 'CODVOLCOMPRA', nullable: true, length: 2 })
  codvolcompra: string | null;

  @Column('char', { name: 'REFFORN', nullable: true, length: 30 })
  refforn: string | null;

  @Column('decimal', {
    name: 'VLRTABPRECO',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  vlrtabpreco: number | null;

  @Column('decimal', {
    name: 'DESCMAX',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  descmax: number | null;

  @Column('varchar', { name: 'LISTALPM', length: 1, default: () => "'N'" })
  listalpm: string;

  @Column('varchar', { name: 'ONEROSO', length: 1, default: () => "'N'" })
  oneroso: string;

  @Column('varchar', { name: 'REFMERCMED', length: 1, default: () => "'N'" })
  refmercmed: string;

  @Column('varchar', { name: 'TERMOLABIL', length: 1, default: () => "'N'" })
  termolabil: string;

  @Column('varchar', { name: 'CONTROLADO', length: 1, default: () => "'N'" })
  controlado: string;

  @Column('varchar', { name: 'IDENPORTARIA', nullable: true, length: 30 })
  idenportaria: string | null;

  @Column('varchar', { name: 'IDENOTC', nullable: true, length: 30 })
  idenotc: string | null;

  @Column('varchar', { name: 'IDENCORRELATO', length: 1, default: () => "'N'" })
  idencorrelato: string;

  @Column('varchar', { name: 'IDENCOSME', length: 1, default: () => "'N'" })
  idencosme: string;

  @Column('varchar', { name: 'PRODFALTA', length: 1, default: () => "'N'" })
  prodfalta: string;

  @Column('int', { name: 'STATUSMED', default: () => '(0)' })
  statusmed: number;

  @Column('varchar', { name: 'CURVAPESO_1', nullable: true, length: 1 })
  curvapeso_1: string | null;

  @Column('varchar', { name: 'CURVAPESO_2', nullable: true, length: 1 })
  curvapeso_2: string | null;

  @Column('varchar', { name: 'CURVAPESO_3', nullable: true, length: 1 })
  curvapeso_3: string | null;

  @Column('varchar', { name: 'CURVAPESO_4', nullable: true, length: 1 })
  curvapeso_4: string | null;

  @Column('varchar', { name: 'CURVAPESO_5', nullable: true, length: 1 })
  curvapeso_5: string | null;

  @Column('varchar', { name: 'CURVAPESO_6', nullable: true, length: 1 })
  curvapeso_6: string | null;

  @Column('varchar', { name: 'CURVAPESO_7', nullable: true, length: 1 })
  curvapeso_7: string | null;

  @Column('varchar', { name: 'CURVAPESO_8', nullable: true, length: 1 })
  curvapeso_8: string | null;

  @Column('varchar', { name: 'CURVAPESO_9', nullable: true, length: 1 })
  curvapeso_9: string | null;

  @Column('varchar', { name: 'CURVAPESO_10', nullable: true, length: 1 })
  curvapeso_10: string | null;

  @Column('varchar', { name: 'CURVAPESO_11', nullable: true, length: 1 })
  curvapeso_11: string | null;

  @Column('varchar', { name: 'CURVAPESO_12', nullable: true, length: 1 })
  curvapeso_12: string | null;

  @Column('decimal', {
    name: 'ACUMPESO_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumpeso_1: number | null;

  @Column('decimal', {
    name: 'ACUMPESO_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumpeso_2: number | null;

  @Column('decimal', {
    name: 'ACUMPESO_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumpeso_3: number | null;

  @Column('decimal', {
    name: 'ACUMPESO_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumpeso_4: number | null;

  @Column('decimal', {
    name: 'ACUMPESO_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumpeso_5: number | null;

  @Column('decimal', {
    name: 'ACUMPESO_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumpeso_6: number | null;

  @Column('decimal', {
    name: 'ACUMPESO_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumpeso_7: number | null;

  @Column('decimal', {
    name: 'ACUMPESO_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumpeso_8: number | null;

  @Column('decimal', {
    name: 'ACUMPESO_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumpeso_9: number | null;

  @Column('decimal', {
    name: 'ACUMPESO_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumpeso_10: number | null;

  @Column('decimal', {
    name: 'ACUMPESO_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumpeso_11: number | null;

  @Column('decimal', {
    name: 'ACUMPESO_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  acumpeso_12: number | null;

  @Column('decimal', {
    name: 'PESO_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  peso_1: number | null;

  @Column('decimal', {
    name: 'PESO_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  peso_2: number | null;

  @Column('decimal', {
    name: 'PESO_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  peso_3: number | null;

  @Column('decimal', {
    name: 'PESO_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  peso_4: number | null;

  @Column('decimal', {
    name: 'PESO_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  peso_5: number | null;

  @Column('decimal', {
    name: 'PESO_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  peso_6: number | null;

  @Column('decimal', {
    name: 'PESO_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  peso_7: number | null;

  @Column('decimal', {
    name: 'PESO_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  peso_8: number | null;

  @Column('decimal', {
    name: 'PESO_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  peso_9: number | null;

  @Column('decimal', {
    name: 'PESO_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  peso_10: number | null;

  @Column('decimal', {
    name: 'PESO_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  peso_11: number | null;

  @Column('decimal', {
    name: 'PESO_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  peso_12: number | null;

  @Column('decimal', {
    name: 'PARTPESO_1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partpeso_1: number | null;

  @Column('decimal', {
    name: 'PARTPESO_2',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partpeso_2: number | null;

  @Column('decimal', {
    name: 'PARTPESO_3',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partpeso_3: number | null;

  @Column('decimal', {
    name: 'PARTPESO_4',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partpeso_4: number | null;

  @Column('decimal', {
    name: 'PARTPESO_5',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partpeso_5: number | null;

  @Column('decimal', {
    name: 'PARTPESO_6',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partpeso_6: number | null;

  @Column('decimal', {
    name: 'PARTPESO_7',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partpeso_7: number | null;

  @Column('decimal', {
    name: 'PARTPESO_8',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partpeso_8: number | null;

  @Column('decimal', {
    name: 'PARTPESO_9',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partpeso_9: number | null;

  @Column('decimal', {
    name: 'PARTPESO_10',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partpeso_10: number | null;

  @Column('decimal', {
    name: 'PARTPESO_11',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partpeso_11: number | null;

  @Column('decimal', {
    name: 'PARTPESO_12',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  partpeso_12: number | null;

  @Column('int', { primary: true, name: 'CODREL', default: () => '(0)' })
  codrel: number;

  @Column('char', { name: 'ESTMENMEDVEND', nullable: true, length: 1 })
  estmenmedvend: string | null;

  @Column('float', { name: 'ALIQCRED', nullable: true, precision: 53 })
  aliqcred: number | null;

  @Column('float', { name: 'VLRCREDICMS', nullable: true, precision: 53 })
  vlrcredicms: number | null;

  @Column('float', { name: 'MARKUP', nullable: true, precision: 53 })
  markup: number | null;

  @Column('float', { name: 'ORDEMMEDIDA', nullable: true, precision: 53 })
  ordemmedida: number | null;

  @Column('float', { name: 'CUSTOREP', nullable: true, precision: 53 })
  custorep: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'DUREST', nullable: true })
  durest: number | null;

  @Column('int', { name: 'DURESTPOSCPA', nullable: true })
  durestposcpa: number | null;

  @Column('int', { name: 'DIASSEMVENDA', nullable: true })
  diassemvenda: number | null;

  @Column('int', { name: 'LEADTIME', nullable: true })
  leadtime: number | null;

  @Column('char', {
    name: 'SUGCPAGIRALTERADO',
    length: 1,
    default: () => "'N'",
  })
  sugcpagiralterado: string;

  @Column('char', {
    name: 'UNPADRAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  unpadrao: string | null;

  @Column('float', { name: 'ESTMAX', nullable: true, precision: 53 })
  estmax: number | null;

  @Column('float', { name: 'ESTMAXGIR', nullable: true, precision: 53 })
  estmaxgir: number | null;

  @Column('int', { name: 'GIRODIARIO', nullable: true })
  girodiario: number | null;

  @Column('int', { name: 'DIASUTEIS', nullable: true })
  diasuteis: number | null;

  @Column('int', { name: 'DURESTSEG', nullable: true })
  durestseg: number | null;

  @Column('datetime', { name: 'PONTOPED', nullable: true })
  pontoped: Date | null;

  @Column('datetime', { name: 'PREVENTREGA', nullable: true })
  preventrega: Date | null;

  @Column('int', { name: 'DURESTPOSCPAGIR', nullable: true })
  durestposcpagir: number | null;

  @Column('int', { name: 'NUMCOTACAO', nullable: true })
  numcotacao: number | null;

  @Column('float', {
    name: 'PERCDESCFORNECEDOR',
    nullable: true,
    precision: 53,
  })
  percdescfornecedor: number | null;

  @Column('float', { name: 'WMSBLOQUEADO', nullable: true, precision: 53 })
  wmsbloqueado: number | null;

  @Column('float', { name: 'VLRULTCOMPRA', nullable: true, precision: 53 })
  vlrultcompra: number | null;

  @Column('char', { name: 'POSSUIFAM', nullable: true, length: 1 })
  possuifam: string | null;

  @Column('int', { name: 'DIASRUPTURAEST_5', nullable: true })
  diasrupturaest_5: number | null;

  @Column('int', { name: 'DIASRUPTURAEST_9', nullable: true })
  diasrupturaest_9: number | null;

  @Column('int', { name: 'DIASRUPTURAEST_12', nullable: true })
  diasrupturaest_12: number | null;

  @Column('int', { name: 'DIASRUPTURAEST_2', nullable: true })
  diasrupturaest_2: number | null;

  @Column('int', { name: 'DIASRUPTURAEST_11', nullable: true })
  diasrupturaest_11: number | null;

  @Column('int', { name: 'DIASRUPTURAEST_8', nullable: true })
  diasrupturaest_8: number | null;

  @Column('int', { name: 'DIASRUPTURAEST_4', nullable: true })
  diasrupturaest_4: number | null;

  @Column('int', { name: 'DIASRUPTURAEST_7', nullable: true })
  diasrupturaest_7: number | null;

  @Column('int', { name: 'DIASRUPTURA', nullable: true })
  diasruptura: number | null;

  @Column('int', { name: 'DIASRUPTURAEST_3', nullable: true })
  diasrupturaest_3: number | null;

  @Column('int', { name: 'DIASRUPTURAEST_6', nullable: true })
  diasrupturaest_6: number | null;

  @Column('int', { name: 'DIASRUPTURAEST_1', nullable: true })
  diasrupturaest_1: number | null;

  @Column('int', { name: 'DIASRUPTURAEST_10', nullable: true })
  diasrupturaest_10: number | null;

  @Column('int', { name: 'NUMMPS', nullable: true })
  nummps: number | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfgirs, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfgirs)
  @JoinColumn([{ name: 'CODPARCFORN', referencedColumnName: 'codparc' }])
  codparcforn: TgfparEntity;
}
