import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnftmestreEntity } from './tGFNFTMESTRE.entity';

@Index(
  'PK_TGFNFTITENS',
  ['codemp', 'dtref', 'finalidade', 'nunota', 'sequencia'],
  { unique: true },
)
@Entity('TGFNFTITENS', { schema: 'SANKHYA' })
export class TgfnftitensEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'FINALIDADE', length: 1 })
  finalidade: string;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'CGC_CPF', nullable: true, length: 14 })
  cgcCpf: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('smallint', { name: 'CLASSCONS', nullable: true })
  classcons: number | null;

  @Column('smallint', { name: 'TIPUTILCOM', nullable: true })
  tiputilcom: number | null;

  @Column('smallint', { name: 'GRUPOTENS', nullable: true })
  grupotens: number | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('smallint', { name: 'CODMODDOC' })
  codmoddoc: number;

  @Column('varchar', { name: 'SERIENOTA', length: 3 })
  serienota: string;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('int', { name: 'CODCFO', nullable: true })
  codcfo: number | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'DESCRPROD', nullable: true, length: 50 })
  descrprod: string | null;

  @Column('smallint', { name: 'CODSERVTELECOM', nullable: true })
  codservtelecom: number | null;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('int', { name: 'QTDCONTR', nullable: true })
  qtdcontr: number | null;

  @Column('int', { name: 'QTDMEDID', nullable: true })
  qtdmedid: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('float', { name: 'VLRACRDESACES', nullable: true, precision: 53 })
  vlracrdesaces: number | null;

  @Column('float', { name: 'BASEICMS', nullable: true, precision: 53 })
  baseicms: number | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('float', { name: 'VLRISENTONTRIB', nullable: true, precision: 53 })
  vlrisentontrib: number | null;

  @Column('float', { name: 'VLROUTROS', nullable: true, precision: 53 })
  vlroutros: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('varchar', { name: 'STATUSDOC', nullable: true, length: 1 })
  statusdoc: string | null;

  @Column('datetime', { name: 'DTREFANOMES', nullable: true })
  dtrefanomes: Date | null;

  @Column('int', { name: 'NUMCONTRATO', nullable: true })
  numcontrato: number | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'TARAPLPRMEF', nullable: true, precision: 53 })
  taraplprmef: number | null;

  @Column('float', { name: 'ALIQPIS', nullable: true, precision: 53 })
  aliqpis: number | null;

  @Column('float', { name: 'VLRPIS', nullable: true, precision: 53 })
  vlrpis: number | null;

  @Column('float', { name: 'ALIQCOFINS', nullable: true, precision: 53 })
  aliqcofins: number | null;

  @Column('float', { name: 'VLRCOFINS', nullable: true, precision: 53 })
  vlrcofins: number | null;

  @Column('varchar', { name: 'INDDESJUD', nullable: true, length: 1 })
  inddesjud: string | null;

  @Column('smallint', { name: 'TIPOISENREDBC', nullable: true })
  tipoisenredbc: number | null;

  @Column('int', { name: 'BRANCORESFISC', nullable: true })
  brancoresfisc: number | null;

  @Column('varchar', { name: 'MD5LINHA', nullable: true, length: 32 })
  md5Linha: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfnftmestreEntity,
    (tgfnftmestreEntity) => tgfnftmestreEntity.tgfnftitens,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'FINALIDADE', referencedColumnName: 'finalidade' },
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
  ])
  tgfnftmestre: TgfnftmestreEntity;
}
