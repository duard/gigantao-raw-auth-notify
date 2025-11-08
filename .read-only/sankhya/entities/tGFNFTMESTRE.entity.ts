import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfnftdestinatEntity } from './tGFNFTDESTINAT.entity';
import { TgfnftitensEntity } from './tGFNFTITENS.entity';
import { TgfnftEntity } from './tGFNFT.entity';

@Index('PK_TGFNFTMESTRE', ['codemp', 'dtref', 'finalidade', 'nunota'], {
  unique: true,
})
@Entity('TGFNFTMESTRE', { schema: 'SANKHYA' })
export class TgfnftmestreEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'FINALIDADE', length: 1 })
  finalidade: string;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'CGC_CPF', nullable: true, length: 14 })
  cgcCpf: string | null;

  @Column('varchar', { name: 'INSCESTAD', nullable: true, length: 16 })
  inscestad: string | null;

  @Column('varchar', { name: 'RAZAOSOCIAL', nullable: true, length: 40 })
  razaosocial: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('smallint', { name: 'CLASSCONS', nullable: true })
  classcons: number | null;

  @Column('smallint', { name: 'TIPUTILCOM', nullable: true })
  tiputilcom: number | null;

  @Column('smallint', { name: 'GRUPOTENS', nullable: true })
  grupotens: number | null;

  @Column('varchar', { name: 'CODIDENTCONS', nullable: true, length: 12 })
  codidentcons: string | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('smallint', { name: 'CODMODDOC' })
  codmoddoc: number;

  @Column('varchar', { name: 'SERIENOTA', length: 3 })
  serienota: string;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('varchar', { name: 'CODAUDIG', nullable: true, length: 32 })
  codaudig: string | null;

  @Column('float', { name: 'VLRNOTA', nullable: true, precision: 53 })
  vlrnota: number | null;

  @Column('float', { name: 'BASEICMS', nullable: true, precision: 53 })
  baseicms: number | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('float', { name: 'VLRISENTONTRIB', nullable: true, precision: 53 })
  vlrisentontrib: number | null;

  @Column('float', { name: 'VLROUTROS', nullable: true, precision: 53 })
  vlroutros: number | null;

  @Column('varchar', { name: 'STATUSDOC', nullable: true, length: 1 })
  statusdoc: string | null;

  @Column('datetime', { name: 'DTREFANOMES', nullable: true })
  dtrefanomes: Date | null;

  @Column('int', { name: 'REFITEMNF', nullable: true })
  refitemnf: number | null;

  @Column('varchar', { name: 'NUMTERMTELUNC', nullable: true, length: 13 })
  numtermtelunc: string | null;

  @Column('smallint', { name: 'INDTIPOINFO', nullable: true })
  indtipoinfo: number | null;

  @Column('smallint', { name: 'TIPCLIENTESERVCOM', nullable: true })
  tipclienteservcom: number | null;

  @Column('int', { name: 'SUBCLASSCONS', nullable: true })
  subclasscons: number | null;

  @Column('varchar', { name: 'NUMTERMTEL', nullable: true, length: 13 })
  numtermtel: string | null;

  @Column('varchar', { name: 'CGC_CPF_EMIT', nullable: true, length: 14 })
  cgcCpfEmit: string | null;

  @Column('int', { name: 'NUMFATURACOM', nullable: true })
  numfaturacom: number | null;

  @Column('float', { name: 'VLRTOTAL', nullable: true, precision: 53 })
  vlrtotal: number | null;

  @Column('datetime', { name: 'DTLEITUANTE', nullable: true })
  dtleituante: Date | null;

  @Column('datetime', { name: 'DTLEITUATUA', nullable: true })
  dtleituatua: Date | null;

  @Column('varchar', { name: 'BRANCOSRFU1', nullable: true, length: 50 })
  brancosrfu1: string | null;

  @Column('int', { name: 'BRANCOSRFU2', nullable: true })
  brancosrfu2: number | null;

  @Column('varchar', { name: 'INFOADCI', nullable: true, length: 30 })
  infoadci: string | null;

  @Column('int', { name: 'BRANCOSRFU3', nullable: true })
  brancosrfu3: number | null;

  @Column('varchar', { name: 'MD5LINHA', nullable: true, length: 32 })
  md5Linha: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @OneToMany(
    () => TgfnftdestinatEntity,
    (tgfnftdestinatEntity) => tgfnftdestinatEntity.tgfnftmestre,
  )
  tgfnftdestinats: TgfnftdestinatEntity[];

  @OneToMany(
    () => TgfnftitensEntity,
    (tgfnftitensEntity) => tgfnftitensEntity.tgfnftmestre,
  )
  tgfnftitens: TgfnftitensEntity[];

  @ManyToOne(() => TgfnftEntity, (tgfnftEntity) => tgfnftEntity.tgfnftmestres, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'FINALIDADE', referencedColumnName: 'finalidade' },
  ])
  tgfnft: TgfnftEntity;
}
