import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgiastEntity } from './tGFGIAST.entity';

@Index('PK_TGFGIASTA0', ['codemp', 'dtref', 'uf', 'reg'], { unique: true })
@Entity('TGFGIASTA0', { schema: 'SANKHYA' })
export class Tgfgiasta0Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'UF', length: 2 })
  uf: string;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'A0'",
  })
  reg: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('varchar', { name: 'TIPO', length: 3, default: () => "'GST'" })
  tipo: string;

  @Column('varchar', { name: 'VERSAO', length: 2, default: () => "'03'" })
  versao: string;

  @Column('varchar', { name: 'IE', nullable: true, length: 16 })
  ie: string | null;

  @Column('varchar', {
    name: 'SEMMOV',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  semmov: string | null;

  @Column('varchar', {
    name: 'SUBSTGIA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  substgia: string | null;

  @Column('datetime', { name: 'DTVENCST1', nullable: true })
  dtvencst1: Date | null;

  @Column('float', { name: 'VLRVENCST1', nullable: true, precision: 53 })
  vlrvencst1: number | null;

  @Column('datetime', { name: 'DTVENCST2', nullable: true })
  dtvencst2: Date | null;

  @Column('float', { name: 'VLRVENCST2', nullable: true, precision: 53 })
  vlrvencst2: number | null;

  @Column('datetime', { name: 'DTVENCST3', nullable: true })
  dtvencst3: Date | null;

  @Column('float', { name: 'VLRVENCST3', nullable: true, precision: 53 })
  vlrvencst3: number | null;

  @Column('datetime', { name: 'DTVENCST4', nullable: true })
  dtvencst4: Date | null;

  @Column('float', { name: 'VLRVENCST4', nullable: true, precision: 53 })
  vlrvencst4: number | null;

  @Column('datetime', { name: 'DTVENCST5', nullable: true })
  dtvencst5: Date | null;

  @Column('float', { name: 'VLRVENCST5', nullable: true, precision: 53 })
  vlrvencst5: number | null;

  @Column('datetime', { name: 'DTVENCST6', nullable: true })
  dtvencst6: Date | null;

  @Column('float', { name: 'VLRVENCST6', nullable: true, precision: 53 })
  vlrvencst6: number | null;

  @Column('float', { name: 'VLRTOTPROD', precision: 53, default: () => '(0)' })
  vlrtotprod: number;

  @Column('float', { name: 'VLRTOTIPI', precision: 53, default: () => '(0)' })
  vlrtotipi: number;

  @Column('float', {
    name: 'VLRTOTDESACES',
    precision: 53,
    default: () => '(0)',
  })
  vlrtotdesaces: number;

  @Column('float', {
    name: 'VLRBASECALICMSPROP',
    precision: 53,
    default: () => '(0)',
  })
  vlrbasecalicmsprop: number;

  @Column('float', {
    name: 'VLRTOTICMSPROP',
    precision: 53,
    default: () => '(0)',
  })
  vlrtoticmsprop: number;

  @Column('float', {
    name: 'VLRBASECALICMSSTPROP',
    precision: 53,
    default: () => '(0)',
  })
  vlrbasecalicmsstprop: number;

  @Column('float', {
    name: 'VLRTOTICMSSTRET',
    precision: 53,
    default: () => '(0)',
  })
  vlrtoticmsstret: number;

  @Column('float', {
    name: 'VLRTOTICMSSTDEVPROD',
    precision: 53,
    default: () => '(0)',
  })
  vlrtoticmsstdevprod: number;

  @Column('float', {
    name: 'VLRICMSSTRES',
    precision: 53,
    default: () => '(0)',
  })
  vlricmsstres: number;

  @Column('float', {
    name: 'VLRICMSPERANT',
    precision: 53,
    default: () => '(0)',
  })
  vlricmsperant: number;

  @Column('float', {
    name: 'VLRICMSRECANT',
    precision: 53,
    default: () => '(0)',
  })
  vlricmsrecant: number;

  @Column('float', {
    name: 'VLRICMSDEVIDO',
    precision: 53,
    default: () => '(0)',
  })
  vlricmsdevido: number;

  @Column('float', {
    name: 'VLRICMSRETREFI',
    precision: 53,
    default: () => '(0)',
  })
  vlricmsretrefi: number;

  @Column('float', {
    name: 'VLRCREDPERSEG',
    precision: 53,
    default: () => '(0)',
  })
  vlrcredperseg: number;

  @Column('float', {
    name: 'VLRTOTICMSREC',
    precision: 53,
    default: () => '(0)',
  })
  vlrtoticmsrec: number;

  @Column('varchar', { name: 'CNPJEMPDEC', nullable: true, length: 15 })
  cnpjempdec: string | null;

  @Column('varchar', { name: 'NOMEDEC', nullable: true, length: 50 })
  nomedec: string | null;

  @Column('varchar', { name: 'CPFDEC', nullable: true, length: 11 })
  cpfdec: string | null;

  @Column('varchar', { name: 'CARGODEC', nullable: true, length: 50 })
  cargodec: string | null;

  @Column('smallint', { name: 'DDDTEL', nullable: true })
  dddtel: number | null;

  @Column('varchar', { name: 'NUMTELDEC', nullable: true, length: 15 })
  numteldec: string | null;

  @Column('smallint', { name: 'DDDFAX', nullable: true })
  dddfax: number | null;

  @Column('varchar', { name: 'NUMFAX', nullable: true, length: 15 })
  numfax: string | null;

  @Column('varchar', { name: 'EMAILDEC', nullable: true, length: 50 })
  emaildec: string | null;

  @Column('varchar', { name: 'CIDEMP', nullable: true, length: 50 })
  cidemp: string | null;

  @Column('datetime', { name: 'DTGERARQ', nullable: true })
  dtgerarq: Date | null;

  @Column('varchar', { name: 'INFOCOMPL1', nullable: true, length: 65 })
  infocompl1: string | null;

  @Column('varchar', { name: 'INFOCOMPL2', nullable: true, length: 60 })
  infocompl2: string | null;

  @Column('varchar', { name: 'INFOCOMPL3', nullable: true, length: 60 })
  infocompl3: string | null;

  @Column('varchar', {
    name: 'DISTCOMBTRR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  distcombtrr: string | null;

  @Column('varchar', {
    name: 'TRANSFUFFAV',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  transfuffav: string | null;

  @Column('float', {
    name: 'VLRREPICMSOUTROCONTRIB',
    precision: 53,
    default: () => '(0)',
  })
  vlrrepicmsoutrocontrib: number;

  @Column('varchar', {
    name: 'HOUVEOPERCONSFINAL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  houveoperconsfinal: string | null;

  @Column('float', { name: 'VLRVENCFCP1', precision: 53, default: () => '(0)' })
  vlrvencfcp1: number;

  @Column('float', { name: 'VLRVENCFCP2', precision: 53, default: () => '(0)' })
  vlrvencfcp2: number;

  @Column('float', { name: 'VLRVENCFCP3', precision: 53, default: () => '(0)' })
  vlrvencfcp3: number;

  @Column('float', { name: 'VLRVENCFCP4', precision: 53, default: () => '(0)' })
  vlrvencfcp4: number;

  @Column('float', { name: 'VLRVENCFCP5', precision: 53, default: () => '(0)' })
  vlrvencfcp5: number;

  @Column('float', { name: 'VLRVENCFCP6', precision: 53, default: () => '(0)' })
  vlrvencfcp6: number;

  @Column('float', {
    name: 'VLRICMSDEVUFDEST',
    precision: 53,
    default: () => '(0)',
  })
  vlricmsdevufdest: number;

  @Column('float', { name: 'VLRDEVANUL', precision: 53, default: () => '(0)' })
  vlrdevanul: number;

  @Column('float', { name: 'VLRPGTOANT', precision: 53, default: () => '(0)' })
  vlrpgtoant: number;

  @Column('float', {
    name: 'VLRTOTICMSDEVUFDEST',
    precision: 53,
    default: () => '(0)',
  })
  vlrtoticmsdevufdest: number;

  @Column('float', {
    name: 'VLRTOTICMSFCP',
    precision: 53,
    default: () => '(0)',
  })
  vlrtoticmsfcp: number;

  @ManyToOne(
    () => TgfgiastEntity,
    (tgfgiastEntity) => tgfgiastEntity.tgfgiastas,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'UF', referencedColumnName: 'uf' },
  ])
  tgfgiast: TgfgiastEntity;
}
