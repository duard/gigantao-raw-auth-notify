import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfobsEntity } from './tGFOBS.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgffdaEntity } from './tGFFDA.entity';
import { TgfficEntity } from './tGFFIC.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index(
  'PK_TGFICM',
  [
    'uforig',
    'ufdest',
    'tiprestricao',
    'codrestricao',
    'tiprestricao2',
    'codrestricao2',
    'sequencia',
  ],
  { unique: true },
)
@Index('TGFICM_I01', ['idaliq'], {})
@Entity('TGFICM', { schema: 'SANKHYA' })
export class TgficmEntity {
  @Column('smallint', { primary: true, name: 'UFORIG' })
  uforig: number;

  @Column('smallint', { primary: true, name: 'UFDEST' })
  ufdest: number;

  @Column('char', {
    primary: true,
    name: 'TIPRESTRICAO',
    length: 1,
    default: () => "'S'",
  })
  tiprestricao: string;

  @Column('int', { primary: true, name: 'CODRESTRICAO' })
  codrestricao: number;

  @Column('char', {
    primary: true,
    name: 'TIPRESTRICAO2',
    length: 1,
    default: () => "'S'",
  })
  tiprestricao2: string;

  @Column('int', { primary: true, name: 'CODRESTRICAO2' })
  codrestricao2: number;

  @Column('float', { name: 'ALIQUOTA', nullable: true, precision: 53 })
  aliquota: number | null;

  @Column('float', { name: 'REDBASE', nullable: true, precision: 53 })
  redbase: number | null;

  @Column('float', { name: 'ALIQFRETE', nullable: true, precision: 53 })
  aliqfrete: number | null;

  @Column('float', { name: 'REDBASEFRETE', nullable: true, precision: 53 })
  redbasefrete: number | null;

  @Column('float', { name: 'MARGLUCRO', nullable: true, precision: 53 })
  marglucro: number | null;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('char', { name: 'REPREDBASE', length: 1, default: () => "'N'" })
  repredbase: string;

  @Column('float', { name: 'ALIQSUBTRIB', nullable: true, precision: 53 })
  aliqsubtrib: number | null;

  @Column('float', { name: 'REDBASEST', nullable: true, precision: 53 })
  redbasest: number | null;

  @Column('char', {
    name: 'MAIORBASEST',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  maiorbasest: string | null;

  @Column('char', { name: 'REPICMS', length: 1, default: () => "'N'" })
  repicms: string;

  @Column('char', { name: 'REDICMS', length: 1, default: () => "'N'" })
  redicms: string;

  @Column('char', { name: 'BASESTRED', length: 1, default: () => "'S'" })
  basestred: string;

  @Column('float', { name: 'OUTORGA', nullable: true, precision: 53 })
  outorga: number | null;

  @Column('char', { name: 'CONVPRODUZ', length: 1, default: () => "'N'" })
  convproduz: string;

  @Column('char', { name: 'MAIORBASEICMS', length: 1, default: () => "'N'" })
  maiorbaseicms: string;

  @Column('int', { name: 'BASICMMOD', nullable: true })
  basicmmod: number | null;

  @Column('int', { name: 'BASICMSTMOD', nullable: true })
  basicmstmod: number | null;

  @Column('char', { name: 'REPREDBASE2', length: 1, default: () => "'N'" })
  repredbase2: string;

  @Column('float', { name: 'MVASTUFDEST', nullable: true, precision: 53 })
  mvastufdest: number | null;

  @Column('float', { name: 'ALIQUFDEST', nullable: true, precision: 53 })
  aliqufdest: number | null;

  @Column('char', { name: 'BASESTUFDEST', length: 1, default: () => "'P'" })
  basestufdest: string;

  @Column('varchar', { name: 'CODANTECIPST', length: 1, default: () => "'N'" })
  codantecipst: string;

  @Column('smallint', { name: 'CSOSN', nullable: true })
  csosn: number | null;

  @Column('varchar', { name: 'ZERAR', length: 1, default: () => "'N'" })
  zerar: string;

  @Column('char', { name: 'PROEMPREGO', length: 1, default: () => "'N'" })
  proemprego: string;

  @Column('char', { name: 'STCAT137SP', length: 1, default: () => "'N'" })
  stcat137Sp: string;

  @Column('char', { name: 'ZERARSTNEG', length: 1, default: () => "'N'" })
  zerarstneg: string;

  @Column('float', { name: 'REPPERCBASEICMS', nullable: true, precision: 53 })
  reppercbaseicms: number | null;

  @Column('smallint', { name: 'CODMOTDESONERAICMS', nullable: true })
  codmotdesoneraicms: number | null;

  @Column('char', { name: 'CALCSTEXTRANOTA', length: 1, default: () => "'N'" })
  calcstextranota: string;

  @Column('char', { name: 'CUSCOMICMSBASEST', length: 1, default: () => "'N'" })
  cuscomicmsbasest: string;

  @Column('float', { name: 'PERCMINSUBTRIB', nullable: true, precision: 53 })
  percminsubtrib: number | null;

  @Column('varchar', { name: 'TABCFOP', nullable: true, length: 512 })
  tabcfop: string | null;

  @Column('char', { name: 'STSUTRI4302014MG', length: 1, default: () => "'N'" })
  stsutri4302014Mg: string;

  @Column('float', { name: 'ALIQINTDEST', nullable: true, precision: 53 })
  aliqintdest: number | null;

  @Column('float', { name: 'PERCICMSFCP', nullable: true, precision: 53 })
  percicmsfcp: number | null;

  @Column('char', { name: 'CALCMVAAJUSTADO', length: 1, default: () => "'N'" })
  calcmvaajustado: string;

  @Column('int', { name: 'IDALIQ', nullable: true })
  idaliq: number | null;

  @Column('float', {
    name: 'PERCICMSCOMPL',
    precision: 53,
    default: () => "'0'",
  })
  percicmscompl: number;

  @Column('smallint', { name: 'TIPCALCDIFAL', default: () => '(0)' })
  tipcalcdifal: number;

  @Column('float', {
    name: 'PERCREDBASEDEST',
    precision: 53,
    default: () => '(0)',
  })
  percredbasedest: number;

  @Column('char', { name: 'CALCSTDIFALIQ', length: 1, default: () => "'N'" })
  calcstdifaliq: string;

  @Column('float', { name: 'ALIQESTRANGEIRA', nullable: true, precision: 53 })
  aliqestrangeira: number | null;

  @Column('varchar', {
    name: 'DESCONSIDERAREDBASE',
    length: 1,
    default: () => "'N'",
  })
  desconsideraredbase: string;

  @Column('char', {
    name: 'ICMSUFORIGDIFEMIT',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  icmsuforigdifemit: string | null;

  @Column('char', { name: 'CALCSTSEMDEDICMS', length: 1, default: () => "'N'" })
  calcstsemdedicms: string;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(1)',
  })
  sequencia: number;

  @Column('smallint', { name: 'TIPCALCSTESPEC', default: () => '(0)' })
  tipcalcstespec: number;

  @Column('char', { name: 'MVASIMPLIFICADO', length: 1, default: () => "'N'" })
  mvasimplificado: string;

  @Column('float', {
    name: 'PERCCARGATRIBMEDIA',
    nullable: true,
    precision: 53,
  })
  perccargatribmedia: number | null;

  @Column('char', { name: 'MVAORIGINAL', length: 1, default: () => "'N'" })
  mvaoriginal: string;

  @Column('float', { name: 'PERCICMSFCPINT', nullable: true, precision: 53 })
  percicmsfcpint: number | null;

  @Column('float', { name: 'PERCSTFCPINT', nullable: true, precision: 53 })
  percstfcpint: number | null;

  @Column('char', { name: 'ZERARDIFALREM', length: 1, default: () => "'N'" })
  zerardifalrem: string;

  @Column('float', { name: 'PERCTRAVAMED', nullable: true, precision: 53 })
  perctravamed: number | null;

  @Column('char', { name: 'REPDIFALFCP', length: 1, default: () => "'N'" })
  repdifalfcp: string;

  @Column('varchar', { name: 'BASEFCPINT', nullable: true, length: 1 })
  basefcpint: string | null;

  @Column('float', {
    name: 'REDBASEESTRANGEIRA',
    nullable: true,
    precision: 53,
  })
  redbaseestrangeira: number | null;

  @Column('float', {
    name: 'PERCREDBASEICMSEFET',
    nullable: true,
    precision: 53,
  })
  percredbaseicmsefet: number | null;

  @Column('float', { name: 'ALIQICMSEFET', nullable: true, precision: 53 })
  aliqicmsefet: number | null;

  @Column('float', { name: 'PERCMULTCALCDP', nullable: true, precision: 53 })
  percmultcalcdp: number | null;

  @Column('char', { name: 'ICMSDIFPOSITIVA', nullable: true, length: 1 })
  icmsdifpositiva: string | null;

  @Column('float', { name: 'MARGLUCROEST', nullable: true, precision: 53 })
  marglucroest: number | null;

  @Column('varchar', { name: 'CALCREPREDDENTRO', nullable: true, length: 1 })
  calcrepreddentro: string | null;

  @Column('varchar', { name: 'FORMAREPICMS', nullable: true, length: 1 })
  formarepicms: string | null;

  @Column('varchar', { name: 'CALCDIFICMSDENTRO', nullable: true, length: 1 })
  calcdificmsdentro: string | null;

  @Column('char', { name: 'PAUTAVLRSTFIXO', nullable: true, length: 1 })
  pautavlrstfixo: string | null;

  @Column('char', { name: 'CALCSTLIVRECOM', nullable: true, length: 1 })
  calcstlivrecom: string | null;

  @Column('float', {
    name: 'ALIQICMSLIMITECALCST',
    nullable: true,
    precision: 53,
  })
  aliqicmslimitecalcst: number | null;

  @Column('char', { name: 'CALCSTCONSUTRI', nullable: true, length: 1 })
  calcstconsutri: string | null;

  @Column('char', { name: 'CONSIDIPIVLROPPROP', nullable: true, length: 1 })
  considipivlropprop: string | null;

  @Column('float', { name: 'PERCPMPF', nullable: true, precision: 53 })
  percpmpf: number | null;

  @Column('float', { name: 'ALIQICMSESPST', nullable: true, precision: 53 })
  aliqicmsespst: number | null;

  @Column('char', { name: 'CARACTRIB', nullable: true, length: 1 })
  caractrib: string | null;

  @Column('char', { name: 'FINALIDADE', nullable: true, length: 1 })
  finalidade: string | null;

  @Column('char', { name: 'REGRACALCBCICMSAT', nullable: true, length: 1 })
  regracalcbcicmsat: string | null;

  @Column('float', { name: 'ALIQICMSAT', nullable: true, precision: 53 })
  aliqicmsat: number | null;

  @Column('float', { name: 'ALIQICMSATIMP', nullable: true, precision: 53 })
  aliqicmsatimp: number | null;

  @Column('float', { name: 'ALIQICMSATINT', nullable: true, precision: 53 })
  aliqicmsatint: number | null;

  @Column('char', { name: 'REGRADEDICMSAT', nullable: true, length: 1 })
  regradedicmsat: string | null;

  @Column('float', { name: 'PERCUSAQUDECPE', nullable: true, precision: 53 })
  percusaqudecpe: number | null;

  @Column('char', { name: 'TIPCUSAQUDECPE', nullable: true, length: 1 })
  tipcusaqudecpe: string | null;

  @Column('smallint', { name: 'TIPCALCFCPSTESPEC', nullable: true })
  tipcalcfcpstespec: number | null;

  @Column('varchar', { name: 'CALCREPREDST', nullable: true, length: 1 })
  calcrepredst: string | null;

  @Column('float', {
    name: 'ALIQICMSCARGTRIBRED',
    nullable: true,
    precision: 53,
  })
  aliqicmscargtribred: number | null;

  @Column('float', { name: 'ALIQSTCARGTRIBRED', nullable: true, precision: 53 })
  aliqstcargtribred: number | null;

  @Column('varchar', { name: 'CALPERREDBASEICMS', nullable: true, length: 1 })
  calperredbaseicms: string | null;

  @Column('varchar', { name: 'CALPERREDBASEST', nullable: true, length: 1 })
  calperredbasest: string | null;

  @Column('smallint', { name: 'CODMOTDESONERAST', nullable: true })
  codmotdesonerast: number | null;

  @Column('float', { name: 'PERCUSAQUDECPEEST', nullable: true, precision: 53 })
  percusaqudecpeest: number | null;

  @Column('char', { name: 'DESICMSSN', nullable: true, length: 1 })
  desicmssn: string | null;

  @Column('char', { name: 'CALCSTDECPR', nullable: true, length: 1 })
  calcstdecpr: string | null;

  @Column('float', { name: 'CREDPRESDECPR', nullable: true, precision: 53 })
  credpresdecpr: number | null;

  @Column('int', { name: 'FORMCALFCPDIFAL', nullable: true })
  formcalfcpdifal: number | null;

  @Column('int', { name: 'CODFORMCALCDIFAL', nullable: true })
  codformcalcdifal: number | null;

  @Column('char', { name: 'CALCREDPREICMCON', nullable: true, length: 1 })
  calcredpreicmcon: string | null;

  @Column('float', { name: 'PERCREDPREICMCON', nullable: true, precision: 53 })
  percredpreicmcon: number | null;

  @Column('char', { name: 'NAOCONSIDMVA', nullable: true, length: 1 })
  naoconsidmva: string | null;

  @Column('int', { name: 'MOTREDADREM', nullable: true })
  motredadrem: number | null;

  @Column('float', { name: 'PERCICMSMONORET', nullable: true, precision: 53 })
  percicmsmonoret: number | null;

  @Column('float', { name: 'PERCALIQADREMICMS', nullable: true, precision: 53 })
  percaliqadremicms: number | null;

  @Column('float', { name: 'ALIQADREMICMS', nullable: true, precision: 53 })
  aliqadremicms: number | null;

  @Column('char', { name: 'CONSPMVABCICM', nullable: true, length: 1 })
  conspmvabcicm: string | null;

  @Column('char', { name: 'CALCALIFCPST', nullable: true, length: 1 })
  calcalifcpst: string | null;

  @Column('float', { name: 'PERCREDPR', nullable: true, precision: 53 })
  percredpr: number | null;

  @Column('varchar', { name: 'CODBEN', nullable: true, length: 10 })
  codben: string | null;

  @Column('float', { name: 'ALIQCONSFIN', nullable: true, precision: 53 })
  aliqconsfin: number | null;

  @Column('int', { name: 'CODFORMVA', nullable: true })
  codformva: number | null;

  @ManyToOne(() => TgfobsEntity, (tgfobsEntity) => tgfobsEntity.tgficms)
  @JoinColumn([{ name: 'CODOBSPADRAO', referencedColumnName: 'codobspadrao' }])
  codobspadrao: TgfobsEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgficms)
  @JoinColumn([{ name: 'CODTABSTFARPOP', referencedColumnName: 'codtab' }])
  codtabstfarpop: TgfntaEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgficms2)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgficms3)
  @JoinColumn([{ name: 'CODTABICMS', referencedColumnName: 'codtab' }])
  codtabicms: TgfntaEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgficms4)
  @JoinColumn([{ name: 'CODTABSTANT', referencedColumnName: 'codtab' }])
  codtabstant: TgfntaEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgficms5)
  @JoinColumn([{ name: 'CODTABSTUFDEST', referencedColumnName: 'codtab' }])
  codtabstufdest: TgfntaEntity;

  @ManyToOne(() => TgffdaEntity, (tgffdaEntity) => tgffdaEntity.tgficms)
  @JoinColumn([{ name: 'CODFORMBASDIFAL', referencedColumnName: 'codform' }])
  codformbasdifal: TgffdaEntity;

  @ManyToOne(() => TgffdaEntity, (tgffdaEntity) => tgffdaEntity.tgficms2)
  @JoinColumn([{ name: 'CODFORMBCICMSAT', referencedColumnName: 'codform' }])
  codformbcicmsat: TgffdaEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgficms6)
  @JoinColumn([{ name: 'CODTABSTPMPF', referencedColumnName: 'codtab' }])
  codtabstpmpf: TgfntaEntity;

  @ManyToOne(() => TgfficEntity, (tgfficEntity) => tgfficEntity.tgficms)
  @JoinColumn([{ name: 'CODFORMBASICM', referencedColumnName: 'codform' }])
  codformbasicm: TgfficEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgficms)
  @JoinColumn([{ name: 'UFORIG', referencedColumnName: 'coduf' }])
  uforig2: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgficms2)
  @JoinColumn([{ name: 'UFDEST', referencedColumnName: 'coduf' }])
  ufdest2: TsiufsEntity;
}
