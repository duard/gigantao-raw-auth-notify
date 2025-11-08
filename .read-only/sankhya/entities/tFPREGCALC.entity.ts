import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfncfEntity } from './tFPFNCF.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TfphlmEntity } from './tFPHLM.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpregcalchistEntity } from './tFPREGCALCHIST.entity';

@Index('PK_TFPREGCALC', ['codregcalc'], { unique: true })
@Entity('TFPREGCALC', { schema: 'SANKHYA' })
export class TfpregcalcEntity {
  @Column('varchar', {
    name: 'ABATEACRESCCRED',
    length: 1,
    default: () => "'N'",
  })
  abateacresccred: string;

  @Column('varchar', {
    name: 'ABATECOMPEXTRA',
    length: 1,
    default: () => "'N'",
  })
  abatecompextra: string;

  @Column('varchar', { name: 'ABATEFERDIVD', length: 1, default: () => "'N'" })
  abateferdivd: string;

  @Column('varchar', { name: 'ABATEFERDIVS', length: 1, default: () => "'N'" })
  abateferdivs: string;

  @Column('varchar', { name: 'ABATPERTOLER', length: 1, default: () => "'N'" })
  abatpertoler: string;

  @Column('varchar', {
    name: 'APIPORPERIODOAQUI',
    length: 1,
    default: () => "'N'",
  })
  apiporperiodoaqui: string;

  @Column('varchar', { name: 'APLICALEIAPI', length: 1, default: () => "'N'" })
  aplicaleiapi: string;

  @Column('float', { name: 'ARREDSALLIQ', precision: 53, default: () => '(0)' })
  arredsalliq: number;

  @Column('varchar', { name: 'ATRASODSRFER', length: 1, default: () => "'N'" })
  atrasodsrfer: string;

  @Column('varchar', {
    name: 'ATRASODSRFERNOT',
    length: 1,
    default: () => "'N'",
  })
  atrasodsrfernot: string;

  @Column('varchar', {
    name: 'ATRASOEXCEDENTE',
    length: 1,
    default: () => "'N'",
  })
  atrasoexcedente: string;

  @Column('varchar', {
    name: 'ATRASOEXCEDENTENOT',
    length: 1,
    default: () => "'N'",
  })
  atrasoexcedentenot: string;

  @Column('varchar', { name: 'ATRASOEXTRA', length: 1, default: () => "'N'" })
  atrasoextra: string;

  @Column('varchar', {
    name: 'ATRASOEXTRANOT',
    length: 1,
    default: () => "'N'",
  })
  atrasoextranot: string;

  @Column('varchar', { name: 'ATRASOSUM444', length: 1, default: () => "'N'" })
  atrasosum444: string;

  @Column('varchar', {
    name: 'ATRASOSUM444NOT',
    length: 1,
    default: () => "'N'",
  })
  atrasosum444Not: string;

  @Column('smallint', { name: 'ATUALATRASODSR', default: () => '(2)' })
  atualatrasodsr: number;

  @Column('varchar', { name: 'ATUMOVMEN', length: 1, default: () => "'B'" })
  atumovmen: string;

  @Column('char', { name: 'AVOPCPORFALTAR', length: 1, default: () => "'F'" })
  avopcporfaltar: string;

  @Column('char', { name: 'BAIXAACRESCIMO', length: 1, default: () => "'S'" })
  baixaacrescimo: string;

  @Column('varchar', {
    name: 'CALCFERPERAQUI',
    length: 1,
    default: () => "'S'",
  })
  calcferperaqui: string;

  @Column('varchar', { name: 'CALCPARCFER', length: 1, default: () => "'S'" })
  calcparcfer: string;

  @Column('varchar', { name: 'CALCRESIDUO', length: 1, default: () => "'N'" })
  calcresiduo: string;

  @Column('varchar', {
    name: 'CALCRESIDUOADM',
    length: 1,
    default: () => "'N'",
  })
  calcresiduoadm: string;

  @Column('varchar', {
    name: 'CALCRESIDUOFER',
    length: 1,
    default: () => "'N'",
  })
  calcresiduofer: string;

  @Column('varchar', { name: 'CENTIRF', length: 1, default: () => "'S'" })
  centirf: string;

  @Column('varchar', { name: 'CENTVALORES', length: 1, default: () => "'S'" })
  centvalores: string;

  @Column('smallint', { name: 'CODEVENDOMIN', nullable: true })
  codevendomin: number | null;

  @Column('smallint', { name: 'CODEVENFERIADO', nullable: true })
  codevenferiado: number | null;

  @Column('smallint', { name: 'CODEVENFERIADONOT', nullable: true })
  codevenferiadonot: number | null;

  @Column('smallint', { name: 'CODEVENNOTUR', nullable: true })
  codevennotur: number | null;

  @Column('smallint', { name: 'CODEVENNOTURPEC', nullable: true })
  codevennoturpec: number | null;

  @Column('smallint', { name: 'CODEVENPADRAO', nullable: true })
  codevenpadrao: number | null;

  @Column('smallint', { name: 'CODEVENPOSPRI', nullable: true })
  codevenpospri: number | null;

  @Column('smallint', { name: 'CODEVENPRI', nullable: true })
  codevenpri: number | null;

  @Column('smallint', { primary: true, name: 'CODREGCALC' })
  codregcalc: number;

  @Column('varchar', { name: 'COMPENSACAO', length: 1, default: () => "'S'" })
  compensacao: string;

  @Column('char', { name: 'COMPDSRFER', length: 1, default: () => "'S'" })
  compdsrfer: string;

  @Column('char', { name: 'COMPDSRFERNOT', length: 1, default: () => "'S'" })
  compdsrfernot: string;

  @Column('char', { name: 'COMPEXCEDENTE', length: 1, default: () => "'S'" })
  compexcedente: string;

  @Column('char', { name: 'COMPEXCEDENTENOT', length: 1, default: () => "'S'" })
  compexcedentenot: string;

  @Column('char', { name: 'COMPEXTRA', length: 1, default: () => "'S'" })
  compextra: string;

  @Column('char', { name: 'COMPEXTRANOT', length: 1, default: () => "'S'" })
  compextranot: string;

  @Column('smallint', { name: 'COMPLETAUMANO', default: () => '(0)' })
  completaumano: number;

  @Column('char', { name: 'COMPSUM444', length: 1, default: () => "'N'" })
  compsum444: string;

  @Column('char', { name: 'COMPSUM444NOT', length: 1, default: () => "'N'" })
  compsum444Not: string;

  @Column('char', { name: 'CONSIDERAMESRESC', length: 1, default: () => "'N'" })
  consideramesresc: string;

  @Column('varchar', { name: 'CPFRESPFOLHA', nullable: true, length: 11 })
  cpfrespfolha: string | null;

  @Column('varchar', {
    name: 'DECTERCPROJETADEZ',
    length: 1,
    default: () => "'N'",
  })
  dectercprojetadez: string;

  @Column('varchar', {
    name: 'DESCHRNEGJUSTAC',
    length: 1,
    default: () => "'N'",
  })
  deschrnegjustac: string;

  @Column('varchar', {
    name: 'DESCHRNEGSEMJUSTAC',
    length: 1,
    default: () => "'N'",
  })
  deschrnegsemjustac: string;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('smallint', { name: 'DIARETIRADPD', default: () => '(1)' })
  diaretiradpd: number;

  @Column('smallint', { name: 'DIARETIRADPDSF', default: () => '(1)' })
  diaretiradpdsf: number;

  @Column('varchar', { name: 'DOISPER13S', length: 1, default: () => "'N'" })
  doisper13S: string;

  @Column('varchar', { name: 'DOISPERFER', length: 1, default: () => "'N'" })
  doisperfer: string;

  @Column('varchar', { name: 'DOISPERRESC', length: 1, default: () => "'N'" })
  doisperresc: string;

  @Column('char', { name: 'DSRMOTORISTA', length: 1, default: () => "'N'" })
  dsrmotorista: string;

  @Column('datetime', { name: 'DTINICIOAPURABH', nullable: true })
  dtinicioapurabh: Date | null;

  @Column('datetime', { name: 'DTNASCRESP', nullable: true })
  dtnascresp: Date | null;

  @Column('char', { name: 'ENVIADOMFERMOV', length: 1, default: () => "'N'" })
  enviadomfermov: string;

  @Column('char', { name: 'ENVIADSRMOV', length: 1, default: () => "'N'" })
  enviadsrmov: string;

  @Column('char', { name: 'ENVIAHEFALTAFOL', length: 1, default: () => "'N'" })
  enviahefaltafol: string;

  @Column('char', { name: 'ENVIASABMOV', length: 1, default: () => "'N'" })
  enviasabmov: string;

  @Column('varchar', { name: 'ESTENDEADN', length: 1, default: () => "'N'" })
  estendeadn: string;

  @Column('char', {
    name: 'EXCECAODUODECIMAL',
    length: 1,
    default: () => "'N'",
  })
  excecaoduodecimal: string;

  @Column('char', { name: 'FALTADESCDSR', length: 1, default: () => "'S'" })
  faltadescdsr: string;

  @Column('char', { name: 'FEVEREIRO30', length: 1, default: () => "'N'" })
  fevereiro30: string;

  @Column('float', { name: 'HORASSEMCCT', precision: 53, default: () => '(0)' })
  horassemcct: number;

  @Column('smallint', { name: 'HRDIARIABCOHR', nullable: true })
  hrdiariabcohr: number | null;

  @Column('smallint', { name: 'HREXTRAATE', default: () => '(200)' })
  hrextraate: number;

  @Column('smallint', { name: 'HRFAIXA1', nullable: true })
  hrfaixa1: number | null;

  @Column('smallint', { name: 'HRFAIXA2', nullable: true })
  hrfaixa2: number | null;

  @Column('int', { name: 'HRLAVOURAFIM', default: () => '(500)' })
  hrlavourafim: number;

  @Column('int', { name: 'HRLAVOURAINICIO', default: () => '(2100)' })
  hrlavourainicio: number;

  @Column('smallint', { name: 'HRLIMITEDIABH', nullable: true })
  hrlimitediabh: number | null;

  @Column('int', { name: 'HRPECUARIAFIM', default: () => '(400)' })
  hrpecuariafim: number;

  @Column('int', { name: 'HRPECUARIAINICIO', default: () => '(2000)' })
  hrpecuariainicio: number;

  @Column('smallint', { name: 'HRSEMANAL', nullable: true })
  hrsemanal: number | null;

  @Column('int', { name: 'HRURBANAFIM', default: () => '(500)' })
  hrurbanafim: number;

  @Column('int', { name: 'HRURBANAINICIO', default: () => '(2200)' })
  hrurbanainicio: number;

  @Column('char', {
    name: 'INCLUIREFEICAOADNOT',
    length: 1,
    default: () => "'N'",
  })
  incluirefeicaoadnot: string;

  @Column('smallint', { name: 'INDENIZADESCANSO', default: () => '(0)' })
  indenizadescanso: number;

  @Column('smallint', { name: 'INDENIZAINTERVALO', default: () => '(0)' })
  indenizaintervalo: number;

  @Column('smallint', { name: 'INICIOSEMANA', default: () => '(1)' })
  iniciosemana: number;

  @Column('float', { name: 'IRFMIN', nullable: true, precision: 53 })
  irfmin: number | null;

  @Column('varchar', { name: 'LANCFERADIANT', length: 1, default: () => "'N'" })
  lancferadiant: string;

  @Column('smallint', { name: 'LIMATRASODSR', nullable: true })
  limatrasodsr: number | null;

  @Column('int', { name: 'LIMMINHEXTRA', default: () => '(0)' })
  limminhextra: number;

  @Column('int', { name: 'LIMMINTOLATR', default: () => '(0)' })
  limmintolatr: number;

  @Column('int', {
    name: 'MAIORVALQTD13S',
    nullable: true,
    default: () => '(0)',
  })
  maiorvalqtd13S: number | null;

  @Column('int', {
    name: 'MAIORVALQTDFER',
    nullable: true,
    default: () => '(0)',
  })
  maiorvalqtdfer: number | null;

  @Column('int', {
    name: 'MAIORVALQTDRESC',
    nullable: true,
    default: () => '(0)',
  })
  maiorvalqtdresc: number | null;

  @Column('varchar', {
    name: 'MANTEMPERAQUIS',
    length: 1,
    default: () => "'N'",
  })
  mantemperaquis: string;

  @Column('smallint', { name: 'MESCARENCIA', default: () => '(0)' })
  mescarencia: number;

  @Column('smallint', { name: 'MESCARENCIAATRASO', nullable: true })
  mescarenciaatraso: number | null;

  @Column('smallint', { name: 'MESDATABASE', default: () => '(1)' })
  mesdatabase: number;

  @Column('smallint', { name: 'MESESMEDIAFER', nullable: true })
  mesesmediafer: number | null;

  @Column('char', { name: 'MESPROPAVISO', length: 1, default: () => "'A'" })
  mespropaviso: string;

  @Column('smallint', { name: 'METODOAPURABH', default: () => '(1)' })
  metodoapurabh: number;

  @Column('smallint', { name: 'MINDIASFER', default: () => '(5)' })
  mindiasfer: number;

  @Column('varchar', { name: 'MOVMEDIAS', length: 1, default: () => "'S'" })
  movmedias: string;

  @Column('smallint', { name: 'NUFAIXARECESSO', nullable: true })
  nufaixarecesso: number | null;

  @Column('smallint', { name: 'NULIMITEHR', nullable: true })
  nulimitehr: number | null;

  @Column('smallint', { name: 'PAGATRASO', nullable: true })
  pagatraso: number | null;

  @Column('smallint', { name: 'PAGHSEXTRA', nullable: true })
  paghsextra: number | null;

  @Column('varchar', { name: 'PER13S', length: 1, default: () => "'D'" })
  per13S: string;

  @Column('float', { name: 'PERCDOMFER', nullable: true, precision: 53 })
  percdomfer: number | null;

  @Column('float', { name: 'PERCHRFAIXA1', nullable: true, precision: 53 })
  perchrfaixa1: number | null;

  @Column('float', { name: 'PERCHRFAIXA2', nullable: true, precision: 53 })
  perchrfaixa2: number | null;

  @Column('varchar', { name: 'PERFER', length: 1, default: () => "'P'" })
  perfer: string;

  @Column('varchar', { name: 'PERRESC', length: 1, default: () => "'D'" })
  perresc: string;

  @Column('smallint', { name: 'PRAZOMAXDIASEXP', nullable: true })
  prazomaxdiasexp: number | null;

  @Column('varchar', { name: 'PROVFERMEDIAS', length: 1, default: () => "'N'" })
  provfermedias: string;

  @Column('int', { name: 'QTDULTMESPER13S', default: () => '(0)' })
  qtdultmesper13S: number;

  @Column('int', { name: 'QTDULTMESPERFER', default: () => '(0)' })
  qtdultmesperfer: number;

  @Column('int', { name: 'QTDULTMESPERRESC', default: () => '(0)' })
  qtdultmesperresc: number;

  @Column('char', { name: 'QUITABCOHORAS', length: 1, default: () => "'N'" })
  quitabcohoras: string;

  @Column('varchar', {
    name: 'QUITAFERMENORQ10',
    length: 1,
    default: () => "'N'",
  })
  quitafermenorq10: string;

  @Column('char', { name: 'REAJUSTEPROP', length: 1, default: () => "'N'" })
  reajusteprop: string;

  @Column('smallint', { name: 'REGRACLTCCT', default: () => '(2)' })
  regracltcct: number;

  @Column('float', { name: 'REMUMINIMA', precision: 53, default: () => '(0)' })
  remuminima: number;

  @Column('varchar', { name: 'RESPFOLHA', nullable: true, length: 36 })
  respfolha: string | null;

  @Column('float', {
    name: 'SEMANASPORMES',
    precision: 53,
    default: () => '(5.0)',
  })
  semanaspormes: number;

  @Column('varchar', {
    name: 'TIPARRED',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  tiparred: string | null;

  @Column('varchar', { name: 'TIPMES', length: 1, default: () => "'C'" })
  tipmes: string;

  @Column('varchar', { name: 'TIPODIVD13S', length: 1, default: () => "'P'" })
  tipodivd13S: string;

  @Column('varchar', { name: 'TIPODIVDFER', length: 1, default: () => "'P'" })
  tipodivdfer: string;

  @Column('varchar', { name: 'TIPODIVDRESC', length: 1, default: () => "'P'" })
  tipodivdresc: string;

  @Column('varchar', { name: 'TIPODIVS13S', length: 1, default: () => "'P'" })
  tipodivs13S: string;

  @Column('varchar', { name: 'TIPODIVSFER', length: 1, default: () => "'P'" })
  tipodivsfer: string;

  @Column('varchar', { name: 'TIPODIVSRESC', length: 1, default: () => "'P'" })
  tipodivsresc: string;

  @Column('char', { name: 'USAATRASOBH', length: 1, default: () => "'S'" })
  usaatrasobh: string;

  @Column('char', { name: 'USAAVISOANOTRAB', length: 1, default: () => "'S'" })
  usaavisoanotrab: string;

  @Column('char', { name: 'USACOMPENSABH', length: 1, default: () => "'S'" })
  usacompensabh: string;

  @Column('char', { name: 'USACOMPSEMANAL', length: 1, default: () => "'N'" })
  usacompsemanal: string;

  @Column('char', { name: 'USAFAIXAHREXTRA', length: 1, default: () => "'N'" })
  usafaixahrextra: string;

  @Column('char', { name: 'USAFALTABH', length: 1, default: () => "'S'" })
  usafaltabh: string;

  @Column('char', { name: 'USAREFANTPAGTOBH', length: 1, default: () => "'N'" })
  usarefantpagtobh: string;

  @Column('char', { name: 'VERTOLERANOTOTAL', length: 1, default: () => "'N'" })
  vertoleranototal: string;

  @Column('varchar', {
    name: 'CONSIDERAMEDIAPROV',
    length: 1,
    default: () => "'N'",
  })
  consideramediaprov: string;

  @Column('smallint', { name: 'CODEVEINT', nullable: true })
  codeveint: number | null;

  @Column('char', {
    name: 'INTERVALOSEMEXTRA',
    length: 1,
    default: () => "'N'",
  })
  intervalosemextra: string;

  @Column('char', {
    name: 'USAINTERVALOCARGAHR',
    length: 1,
    default: () => "'N'",
  })
  usaintervalocargahr: string;

  @Column('smallint', { name: 'CODEVEINTRA', nullable: true })
  codeveintra: number | null;

  @Column('smallint', { name: 'CODTAB', nullable: true })
  codtab: number | null;

  @Column('char', { name: 'USAPRIMEIROMES', length: 1, default: () => "'N'" })
  usaprimeiromes: string;

  @Column('smallint', { name: 'QTDULTMESPERFER2', default: () => '(0)' })
  qtdultmesperfer2: number;

  @Column('smallint', { name: 'QTDULTMESPER13S2', default: () => '(0)' })
  qtdultmesper13S2: number;

  @Column('smallint', { name: 'QTDULTMESPERRESC2', default: () => '(0)' })
  qtdultmesperresc2: number;

  @Column('smallint', { name: 'QTDULTMESPERFER3', default: () => '(0)' })
  qtdultmesperfer3: number;

  @Column('smallint', { name: 'QTDULTMESPER13S3', default: () => '(0)' })
  qtdultmesper13S3: number;

  @Column('smallint', { name: 'QTDULTMESPERRESC3', default: () => '(0)' })
  qtdultmesperresc3: number;

  @Column('smallint', { name: 'QTDULTMESRESF', default: () => '(0)' })
  qtdultmesresf: number;

  @Column('smallint', { name: 'QTDULTMESRESF2', default: () => '(0)' })
  qtdultmesresf2: number;

  @Column('smallint', { name: 'QTDULTMESRESF3', default: () => '(0)' })
  qtdultmesresf3: number;

  @Column('smallint', { name: 'QTDULTMESRESD', default: () => '(0)' })
  qtdultmesresd: number;

  @Column('smallint', { name: 'QTDULTMESRESD2', default: () => '(0)' })
  qtdultmesresd2: number;

  @Column('smallint', { name: 'QTDULTMESRESD3', default: () => '(0)' })
  qtdultmesresd3: number;

  @Column('char', { name: 'TIPODIVDFERRESC', length: 1, default: () => "'P'" })
  tipodivdferresc: string;

  @Column('char', { name: 'TIPODIVSFERRESC', length: 1, default: () => "'P'" })
  tipodivsferresc: string;

  @Column('char', { name: 'TIPODIVD13SRESC', length: 1, default: () => "'P'" })
  tipodivd13Sresc: string;

  @Column('char', { name: 'TIPODIVS13SRESC', length: 1, default: () => "'P'" })
  tipodivs13Sresc: string;

  @Column('char', { name: 'PERFERRESC', length: 1, default: () => "'P'" })
  perferresc: string;

  @Column('char', { name: 'PER13SRESC', length: 1, default: () => "'D'" })
  per13Sresc: string;

  @Column('char', { name: 'TRESPERFER', length: 1, default: () => "'N'" })
  tresperfer: string;

  @Column('char', { name: 'TRESPER13S', length: 1, default: () => "'N'" })
  tresper13S: string;

  @Column('char', { name: 'TRESPERRESC', length: 1, default: () => "'N'" })
  tresperresc: string;

  @Column('char', { name: 'TIPODIVD13SREC', length: 1, default: () => "'P'" })
  tipodivd13Srec: string;

  @Column('char', { name: 'TIPODIVS13SREC', length: 1, default: () => "'P'" })
  tipodivs13Srec: string;

  @Column('char', { name: 'DIVHOMOLOGNET', length: 1, default: () => "'N'" })
  divhomolognet: string;

  @Column('smallint', { name: 'LIMMAXATRBAT', nullable: true })
  limmaxatrbat: number | null;

  @Column('smallint', { name: 'LIMMAXHEXTBAT', nullable: true })
  limmaxhextbat: number | null;

  @Column('char', { name: 'FERPROPERAQUI', length: 1, default: () => "'N'" })
  ferproperaqui: string;

  @Column('char', { name: 'BATIDAEXCECAO', length: 1, default: () => "'N'" })
  batidaexcecao: string;

  @Column('smallint', { name: 'DIASPERCADSR', nullable: true })
  diaspercadsr: number | null;

  @Column('varchar', { name: 'TIPMOVMEDIAS', length: 1, default: () => "'N'" })
  tipmovmedias: string;

  @Column('int', {
    name: 'MAIORVALQTD13SRESC',
    nullable: true,
    default: () => '(0)',
  })
  maiorvalqtd13Sresc: number | null;

  @Column('int', {
    name: 'MAIORVALQTDFERRESC',
    nullable: true,
    default: () => '(0)',
  })
  maiorvalqtdferresc: number | null;

  @Column('varchar', {
    name: 'SUSPCONTDEC',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  suspcontdec: string | null;

  @Column('varchar', {
    name: 'SUSPCONTFER',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  suspcontfer: string | null;

  @Column('smallint', { name: 'CODEVESOBREAVISO', nullable: true })
  codevesobreaviso: number | null;

  @Column('varchar', { name: 'CALCRESIDUORESC', nullable: true, length: 1 })
  calcresiduoresc: string | null;

  @Column('varchar', {
    name: 'CONSIDERAMESADM',
    length: 1,
    default: () => "'N'",
  })
  consideramesadm: string;

  @Column('varchar', { name: 'TIPOARRD', length: 1, default: () => "'N'" })
  tipoarrd: string;

  @Column('smallint', { name: 'FATORARRD', nullable: true })
  fatorarrd: number | null;

  @Column('varchar', { name: 'TIPOARRDMEN', length: 1, default: () => "'N'" })
  tipoarrdmen: string;

  @Column('smallint', { name: 'FATORARRDMEN', nullable: true })
  fatorarrdmen: number | null;

  @Column('varchar', { name: 'PERCHEIOCOMP', length: 1, default: () => "'N'" })
  percheiocomp: string;

  @Column('varchar', { name: 'CALCCOMPPERC', length: 1, default: () => "'N'" })
  calccompperc: string;

  @Column('varchar', {
    name: 'CALCCOMPPERCMEN',
    length: 1,
    default: () => "'N'",
  })
  calccomppercmen: string;

  @Column('varchar', {
    name: 'CONVSDOSALDIAHOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  convsdosaldiahor: string | null;

  @Column('varchar', {
    name: 'FPABONOLIMITADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  fpabonolimitado: string | null;

  @Column('varchar', {
    name: 'CALCLICENCAREMUNERADA',
    length: 1,
    default: () => "'N'",
  })
  calclicencaremunerada: string;

  @Column('varchar', {
    name: 'EXIBEVALORZERO',
    length: 1,
    default: () => "'N'",
  })
  exibevalorzero: string;

  @Column('varchar', { name: 'FERIASABONO', length: 1, default: () => "'N'" })
  feriasabono: string;

  @OneToMany(() => TfpfncfEntity, (tfpfncfEntity) => tfpfncfEntity.codregcalc2)
  tfpfncfs: TfpfncfEntity[];

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcalcs)
  @JoinColumn([{ name: 'EVECREDLIMSEM', referencedColumnName: 'codevento' }])
  evecredlimsem: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcalcs2)
  @JoinColumn([{ name: 'CODEVENDEB', referencedColumnName: 'codevento' }])
  codevendeb: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcalcs3)
  @JoinColumn([
    { name: 'EVESEMJUSTACFAIXA2', referencedColumnName: 'codevento' },
  ])
  evesemjustacfaixa: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcalcs4)
  @JoinColumn([
    { name: 'EVESEMJUSTACDOMFER', referencedColumnName: 'codevento' },
  ])
  evesemjustacdomfer: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcalcs5)
  @JoinColumn([{ name: 'CODEVENNOTURLAV', referencedColumnName: 'codevento' }])
  codevennoturlav: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcalcs6)
  @JoinColumn([{ name: 'CODEVENFALTAS', referencedColumnName: 'codevento' }])
  codevenfaltas: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcalcs7)
  @JoinColumn([
    { name: 'EVESEMJUSTACFAIXA1', referencedColumnName: 'codevento' },
  ])
  evesemjustacfaixa2: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcalcs8)
  @JoinColumn([{ name: 'CODEVEINDENIZA', referencedColumnName: 'codevento' }])
  codeveindeniza: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcalcs9)
  @JoinColumn([{ name: 'CODEVESUM444NOT', referencedColumnName: 'codevento' }])
  codevesum444Not: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcals)
  @JoinColumn([{ name: 'CODEVESUM444', referencedColumnName: 'codevento' }])
  codevesum4: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcals2)
  @JoinColumn([{ name: 'EVEJUSTACDOMFER', referencedColumnName: 'codevento' }])
  evejustacdomfer: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcals3)
  @JoinColumn([{ name: 'EVEJUSTACFAIXA1', referencedColumnName: 'codevento' }])
  evejustacfaixa: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcals4)
  @JoinColumn([{ name: 'EVEJUSTACFAIXA2', referencedColumnName: 'codevento' }])
  evejustacfaixa2: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcals5)
  @JoinColumn([{ name: 'CODEVENBHORAS', referencedColumnName: 'codevento' }])
  codevenbhoras: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcals6)
  @JoinColumn([{ name: 'CODEVENATRASO', referencedColumnName: 'codevento' }])
  codevenatraso: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcals7)
  @JoinColumn([{ name: 'CODEVENCRED', referencedColumnName: 'codevento' }])
  codevencred: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcals8)
  @JoinColumn([{ name: 'CODEVENDFCNOT', referencedColumnName: 'codevento' }])
  codevendfcnot: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcals9)
  @JoinColumn([{ name: 'CODEVENEXCNOT', referencedColumnName: 'codevento' }])
  codevenexcnot: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpregcal10)
  @JoinColumn([{ name: 'CODEVENEXTNOT', referencedColumnName: 'codevento' }])
  codevenextnot: TfpeveEntity;

  @ManyToOne(() => TfphlmEntity, (tfphlmEntity) => tfphlmEntity.tfpregcalcs)
  @JoinColumn([{ name: 'NUFAIXAPGTOBH', referencedColumnName: 'nulimitehr' }])
  nufaixapgtobh: TfphlmEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpregcalcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => TfpregcalchistEntity,
    (tfpregcalchistEntity) => tfpregcalchistEntity.codregcalc2,
  )
  tfpregcalchists: TfpregcalchistEntity[];
}
