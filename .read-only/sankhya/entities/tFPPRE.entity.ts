import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpcfeEntity } from './tFPCFE.entity';
import { TfpdfcEntity } from './tFPDFC.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpmdeEntity } from './tFPMDE.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TfphlmEntity } from './tFPHLM.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpseqEntity } from './tFPSEQ.entity';
import { TfpsinEntity } from './tFPSIN.entity';

@Index('PK_TFPPRE', ['codpref'], { unique: true })
@Entity('TFPPRE', { schema: 'SANKHYA' })
export class TfppreEntity {
  @Column('smallint', { primary: true, name: 'CODPREF' })
  codpref: number;

  @Column('smallint', { name: 'CODEVENTO', nullable: true })
  codevento: number | null;

  @Column('char', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('char', { name: 'CENTVALORES', length: 1, default: () => "'S'" })
  centvalores: string;

  @Column('char', { name: 'CENTIRF', length: 1, default: () => "'S'" })
  centirf: string;

  @Column('money', { name: 'IRFMIN', nullable: true })
  irfmin: number | null;

  @Column('money', { name: 'ARREDSALLIQ', nullable: true })
  arredsalliq: number | null;

  @Column('char', {
    name: 'TIPARRED',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  tiparred: string | null;

  @Column('char', { name: 'TIPMES', length: 1, default: () => "'C'" })
  tipmes: string;

  @Column('char', { name: 'RESPFOLHA', nullable: true, length: 36 })
  respfolha: string | null;

  @Column('smallint', { name: 'MESESMEDIAFER', nullable: true })
  mesesmediafer: number | null;

  @Column('char', { name: 'CALCFERPERAQUI', length: 1, default: () => "'S'" })
  calcferperaqui: string;

  @Column('char', {
    name: 'LANCFERADIANT',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  lancferadiant: string | null;

  @Column('char', { name: 'PROVFERMEDIAS', length: 1, default: () => "'N'" })
  provfermedias: string;

  @Column('char', { name: 'CALCPARCFER', length: 1, default: () => "'S'" })
  calcparcfer: string;

  @Column('char', { name: 'CALCRESIDUO', length: 1, default: () => "'N'" })
  calcresiduo: string;

  @Column('smallint', { name: 'MESESMEDIA13S', nullable: true })
  mesesmedia13S: number | null;

  @Column('smallint', { name: 'MESESMEDIARESC', nullable: true })
  mesesmediaresc: number | null;

  @Column('char', {
    name: 'FORMACALCMEDIAS',
    nullable: true,
    length: 1,
    default: () => "'T'",
  })
  formacalcmedias: string | null;

  @Column('smallint', { name: 'DIARETIRADPD', default: () => '(1)' })
  diaretiradpd: number;

  @Column('smallint', { name: 'PAGATRASO', nullable: true })
  pagatraso: number | null;

  @Column('smallint', { name: 'PAGHSEXTRA', nullable: true })
  paghsextra: number | null;

  @Column('char', { name: 'COMPENSACAO', length: 1, default: () => "'S'" })
  compensacao: string;

  @Column('int', { name: 'LIMMINHEXTRA', default: () => '(0)' })
  limminhextra: number;

  @Column('int', { name: 'LIMMINTOLATR', default: () => '(0)' })
  limmintolatr: number;

  @Column('smallint', { name: 'MESCARENCIA', default: () => '(0)' })
  mescarencia: number;

  @Column('char', { name: 'ATUMOVMEN', length: 1, default: () => "'B'" })
  atumovmen: string;

  @Column('smallint', {
    name: 'QTDMAIORES',
    nullable: true,
    default: () => '(0)',
  })
  qtdmaiores: number | null;

  @Column('smallint', { name: 'MESESMEDIAFER2', nullable: true })
  mesesmediafer2: number | null;

  @Column('smallint', { name: 'MESESMEDIA13S2', nullable: true })
  mesesmedia13S2: number | null;

  @Column('smallint', { name: 'MESESMEDIARESC2', nullable: true })
  mesesmediaresc2: number | null;

  @Column('char', { name: 'TIPMOVMEDIAS', length: 1, default: () => "'N'" })
  tipmovmedias: string;

  @Column('char', { name: 'FERPROPERAQUI', length: 1, default: () => "'N'" })
  ferproperaqui: string;

  @Column('smallint', { name: 'MESDATABASE', default: () => '(1)' })
  mesdatabase: number;

  @Column('float', { name: 'REMUMINIMA', precision: 53, default: () => '(0)' })
  remuminima: number;

  @Column('char', { name: 'MEDIAARITIM13', length: 1, default: () => "'N'" })
  mediaaritim13: string;

  @Column('char', { name: 'MEDIAPERFERIAS', length: 1, default: () => "'N'" })
  mediaperferias: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'MANTEMPERAQUIS', length: 1, default: () => "'N'" })
  mantemperaquis: string;

  @Column('char', { name: 'QUITAFERMENORQ10', length: 1, default: () => "'N'" })
  quitafermenorq10: string;

  @Column('char', { name: 'CPFRESPFOLHA', nullable: true, length: 11 })
  cpfrespfolha: string | null;

  @Column('smallint', { name: 'CODEVENPADRAO', nullable: true })
  codevenpadrao: number | null;

  @Column('datetime', { name: 'DTNASCRESP', nullable: true })
  dtnascresp: Date | null;

  @Column('int', { name: 'HRURBANAINICIO', default: () => '(2200)' })
  hrurbanainicio: number;

  @Column('int', { name: 'HRURBANAFIM', default: () => '(500)' })
  hrurbanafim: number;

  @Column('int', { name: 'HRLAVOURAINICIO', default: () => '(2100)' })
  hrlavourainicio: number;

  @Column('int', { name: 'HRLAVOURAFIM', default: () => '(500)' })
  hrlavourafim: number;

  @Column('int', { name: 'HRPECUARIAINICIO', default: () => '(2000)' })
  hrpecuariainicio: number;

  @Column('int', { name: 'HRPECUARIAFIM', default: () => '(400)' })
  hrpecuariafim: number;

  @Column('smallint', { name: 'CODEVENNOTURPEC', nullable: true })
  codevennoturpec: number | null;

  @Column('varchar', {
    name: 'DECTERCPROJETADEZ',
    length: 1,
    default: () => "'N'",
  })
  dectercprojetadez: string;

  @Column('varchar', { name: 'ABATPERTOLER', length: 1, default: () => "'N'" })
  abatpertoler: string;

  @Column('char', { name: 'ESTENDEADN', length: 1, default: () => "'N'" })
  estendeadn: string;

  @Column('smallint', { name: 'MESESMEDIARESF', nullable: true })
  mesesmediaresf: number | null;

  @Column('smallint', { name: 'MESESMEDIARESF2', nullable: true })
  mesesmediaresf2: number | null;

  @Column('smallint', { name: 'MESESMEDIARESD', nullable: true })
  mesesmediaresd: number | null;

  @Column('smallint', { name: 'MESESMEDIARESD2', nullable: true })
  mesesmediaresd2: number | null;

  @Column('char', { name: 'CALCMEDIARESF', length: 1, default: () => "'P'" })
  calcmediaresf: string;

  @Column('char', { name: 'CALCMEDIARESD', length: 1, default: () => "'A'" })
  calcmediaresd: string;

  @Column('char', { name: 'MEDIAARITFERPRO', length: 1, default: () => "'S'" })
  mediaaritferpro: string;

  @Column('smallint', { name: 'APLICALEIAPI', default: () => '(0)' })
  aplicaleiapi: number;

  @Column('smallint', { name: 'COMPLETAUMANO', default: () => '(0)' })
  completaumano: number;

  @Column('smallint', { name: 'HRSEMANAL', nullable: true })
  hrsemanal: number | null;

  @Column('smallint', { name: 'HRFAIXA1', nullable: true })
  hrfaixa1: number | null;

  @Column('smallint', { name: 'HRFAIXA2', nullable: true })
  hrfaixa2: number | null;

  @Column('float', { name: 'PERCHRFAIXA1', nullable: true, precision: 53 })
  perchrfaixa1: number | null;

  @Column('float', { name: 'PERCHRFAIXA2', nullable: true, precision: 53 })
  perchrfaixa2: number | null;

  @Column('float', { name: 'PERCDOMFER', nullable: true, precision: 53 })
  percdomfer: number | null;

  @Column('char', { name: 'DESCHRNEGJUSTAC', length: 1, default: () => "'N'" })
  deschrnegjustac: string;

  @Column('char', {
    name: 'DESCHRNEGSEMJUSTAC',
    length: 1,
    default: () => "'N'",
  })
  deschrnegsemjustac: string;

  @Column('char', { name: 'MEDIAARITM13RES', length: 1, default: () => "'N'" })
  mediaaritm13Res: string;

  @Column('char', { name: 'CALCRESIDUOFER', length: 1, default: () => "'N'" })
  calcresiduofer: string;

  @Column('char', { name: 'CALCRESIDUOADM', length: 1, default: () => "'N'" })
  calcresiduoadm: string;

  @Column('char', { name: 'FEVEREIRO30', length: 1, default: () => "'N'" })
  fevereiro30: string;

  @Column('char', { name: 'REAJUSTEPROP', length: 1, default: () => "'N'" })
  reajusteprop: string;

  @Column('char', { name: 'MESPROPAVISO', length: 1, default: () => "'A'" })
  mespropaviso: string;

  @Column('char', { name: 'AVOPCPORFALTAR', length: 1, default: () => "'F'" })
  avopcporfaltar: string;

  @Column('smallint', { name: 'REGRACLTCCT', default: () => '(2)' })
  regracltcct: number;

  @Column('smallint', { name: 'ATUALFALTAFER', default: () => '(1)' })
  atualfaltafer: number;

  @Column('char', { name: 'VERTOLERANOTOTAL', length: 1, default: () => "'N'" })
  vertoleranototal: string;

  @Column('char', { name: 'ENVIAHEFALTAFOL', length: 1, default: () => "'N'" })
  enviahefaltafol: string;

  @Column('char', { name: 'QUITABCOHORAS', length: 1, default: () => "'N'" })
  quitabcohoras: string;

  @Column('char', { name: 'ENVIADSRMOV', length: 1, default: () => "'N'" })
  enviadsrmov: string;

  @Column('char', { name: 'CONSIDERAMESRESC', length: 1, default: () => "'N'" })
  consideramesresc: string;

  @Column('float', { name: 'HORASSEMCCT', precision: 53, default: () => '(0)' })
  horassemcct: number;

  @Column('char', {
    name: 'APIPORPERIODOAQUI',
    length: 1,
    default: () => "'N'",
  })
  apiporperiodoaqui: string;

  @Column('smallint', { name: 'ATUALATRASODSR', default: () => '(2)' })
  atualatrasodsr: number;

  @Column('char', { name: 'USAFAIXAHREXTRA', length: 1, default: () => "'N'" })
  usafaixahrextra: string;

  @Column('smallint', { name: 'NULIMITEHR', nullable: true })
  nulimitehr: number | null;

  @Column('smallint', { name: 'HRDIARIABCOHR', nullable: true })
  hrdiariabcohr: number | null;

  @Column('smallint', { name: 'HRLIMITEDIABH', nullable: true })
  hrlimitediabh: number | null;

  @Column('smallint', { name: 'MESCARENCIAATRASO', nullable: true })
  mescarenciaatraso: number | null;

  @Column('char', { name: 'BAIXAACRESCIMO', length: 1, default: () => "'S'" })
  baixaacrescimo: string;

  @Column('smallint', { name: 'INDENIZADESCANSO', default: () => '(0)' })
  indenizadescanso: number;

  @Column('smallint', { name: 'INDENIZAINTERVALO', default: () => '(0)' })
  indenizaintervalo: number;

  @Column('char', { name: 'COMPEXTRA', length: 1, default: () => "'S'" })
  compextra: string;

  @Column('char', { name: 'COMPEXCEDENTE', length: 1, default: () => "'S'" })
  compexcedente: string;

  @Column('char', { name: 'COMPDSRFER', length: 1, default: () => "'S'" })
  compdsrfer: string;

  @Column('char', { name: 'COMPEXTRANOT', length: 1, default: () => "'S'" })
  compextranot: string;

  @Column('char', { name: 'COMPEXCEDENTENOT', length: 1, default: () => "'S'" })
  compexcedentenot: string;

  @Column('char', { name: 'COMPDSRFERNOT', length: 1, default: () => "'S'" })
  compdsrfernot: string;

  @Column('smallint', { name: 'METODOAPURABH', default: () => '(1)' })
  metodoapurabh: number;

  @Column('datetime', { name: 'DTINICIOAPURABH', nullable: true })
  dtinicioapurabh: Date | null;

  @Column('smallint', { name: 'DIARETIRADPDSF', default: () => '(1)' })
  diaretiradpdsf: number;

  @Column('char', { name: 'ABATECOMPEXTRA', length: 1, default: () => "'S'" })
  abatecompextra: string;

  @Column('char', { name: 'ATRASOEXTRA', length: 1, default: () => "'S'" })
  atrasoextra: string;

  @Column('char', { name: 'ATRASOEXCEDENTE', length: 1, default: () => "'S'" })
  atrasoexcedente: string;

  @Column('char', { name: 'ATRASODSRFER', length: 1, default: () => "'S'" })
  atrasodsrfer: string;

  @Column('char', { name: 'ATRASOEXTRANOT', length: 1, default: () => "'S'" })
  atrasoextranot: string;

  @Column('char', {
    name: 'ATRASOEXCEDENTENOT',
    length: 1,
    default: () => "'S'",
  })
  atrasoexcedentenot: string;

  @Column('char', { name: 'ATRASODSRFERNOT', length: 1, default: () => "'S'" })
  atrasodsrfernot: string;

  @Column('char', { name: 'FALTADESCDSR', length: 1, default: () => "'S'" })
  faltadescdsr: string;

  @Column('char', { name: 'ENVIADOMFERMOV', length: 1, default: () => "'N'" })
  enviadomfermov: string;

  @Column('smallint', { name: 'NUFAIXARECESSO', nullable: true })
  nufaixarecesso: number | null;

  @Column('smallint', { name: 'HREXTRAATE', default: () => '(200)' })
  hrextraate: number;

  @Column('char', { name: 'USAREFANTPAGTOBH', length: 1, default: () => "'N'" })
  usarefantpagtobh: string;

  @Column('char', { name: 'USAFALTABH', length: 1, default: () => "'S'" })
  usafaltabh: string;

  @Column('char', { name: 'USAATRASOBH', length: 1, default: () => "'S'" })
  usaatrasobh: string;

  @Column('char', { name: 'USACOMPENSABH', length: 1, default: () => "'S'" })
  usacompensabh: string;

  @Column('char', { name: 'DSRMOTORISTA', length: 1, default: () => "'N'" })
  dsrmotorista: string;

  @Column('char', { name: 'COMPSUM444', length: 1, default: () => "'N'" })
  compsum444: string;

  @Column('char', { name: 'COMPSUM444NOT', length: 1, default: () => "'N'" })
  compsum444Not: string;

  @Column('char', { name: 'ATRASOSUM444', length: 1, default: () => "'N'" })
  atrasosum444: string;

  @Column('char', { name: 'ATRASOSUM444NOT', length: 1, default: () => "'N'" })
  atrasosum444Not: string;

  @Column('char', {
    name: 'INCLUIREFEICAOADNOT',
    length: 1,
    default: () => "'N'",
  })
  incluirefeicaoadnot: string;

  @Column('char', { name: 'DIVHOMOLOGNET', length: 1, default: () => "'N'" })
  divhomolognet: string;

  @Column('char', {
    name: 'MEDIAPERFERDIVVAL',
    length: 1,
    default: () => "'N'",
  })
  mediaperferdivval: string;

  @Column('char', { name: 'DIVISORMEDAPI', length: 1, default: () => "'A'" })
  divisormedapi: string;

  @Column('char', { name: 'ENVIASABMOV', length: 1, default: () => "'N'" })
  enviasabmov: string;

  @Column('smallint', { name: 'CODEVENFERIADO', nullable: true })
  codevenferiado: number | null;

  @Column('smallint', { name: 'CODEVENFERIADONOT', nullable: true })
  codevenferiadonot: number | null;

  @Column('char', { name: 'ABATEACRESCCRED', length: 1, default: () => "'N'" })
  abateacresccred: string;

  @Column('char', { name: 'USACOMPSEMANAL', length: 1, default: () => "'N'" })
  usacompsemanal: string;

  @Column('smallint', { name: 'INICIOSEMANA', default: () => '(1)' })
  iniciosemana: number;

  @Column('smallint', { name: 'MINDIASFER', default: () => '(5)' })
  mindiasfer: number;

  @Column('char', { name: 'USAAVISOANOTRAB', length: 1, default: () => "'S'" })
  usaavisoanotrab: string;

  @Column('float', {
    name: 'SEMANASPORMES',
    precision: 53,
    default: () => '(5.0)',
  })
  semanaspormes: number;

  @Column('smallint', { name: 'LIMATRASODSR', nullable: true })
  limatrasodsr: number | null;

  @Column('char', {
    name: 'EXCECAODUODECIMAL',
    length: 1,
    default: () => "'N'",
  })
  excecaoduodecimal: string;

  @Column('smallint', { name: 'PRAZOMAXDIASEXP', nullable: true })
  prazomaxdiasexp: number | null;

  @Column('char', {
    name: 'USAINTERVALOCARGAHR',
    length: 1,
    default: () => "'N'",
  })
  usaintervalocargahr: string;

  @Column('char', { name: 'USAPRIMEIROMES', length: 1, default: () => "'N'" })
  usaprimeiromes: string;

  @Column('smallint', { name: 'QTDMESMEDIAESP', nullable: true })
  qtdmesmediaesp: number | null;

  @Column('varchar', { name: 'COMPSDNEG', length: 1, default: () => "'N'" })
  compsdneg: string;

  @Column('smallint', { name: 'CODEVEINT', nullable: true })
  codeveint: number | null;

  @Column('char', {
    name: 'INTERVALOSEMEXTRA',
    length: 1,
    default: () => "'N'",
  })
  intervalosemextra: string;

  @Column('char', {
    name: 'IGNTOLERANCINTRAJOR',
    length: 1,
    default: () => "'N'",
  })
  igntolerancintrajor: string;

  @Column('smallint', { name: 'CODEVEINTRA', nullable: true })
  codeveintra: number | null;

  @Column('smallint', { name: 'LIMDIAJORTRAB', nullable: true })
  limdiajortrab: number | null;

  @Column('smallint', { name: 'PERCLIMITEDIAFL', nullable: true })
  perclimitediafl: number | null;

  @Column('varchar', { name: 'GRUPOMEDIASESP', nullable: true, length: 20 })
  grupomediasesp: string | null;

  @Column('char', { name: 'USADIVARITMESP', length: 1, default: () => "'N'" })
  usadivaritmesp: string;

  @Column('char', {
    name: 'USAMESESCOMVLRESP',
    length: 1,
    default: () => "'N'",
  })
  usamesescomvlresp: string;

  @Column('smallint', { name: 'INDENIZADESC12X36', default: () => '(0)' })
  indenizadesc12X36: number;

  @Column('char', { name: 'COMPBH', length: 1, default: () => "'N'" })
  compbh: string;

  @Column('smallint', { name: 'PERCREDSALDODEV', nullable: true })
  percredsaldodev: number | null;

  @Column('varchar', { name: 'HORANOTREDUZ', length: 1, default: () => "'S'" })
  horanotreduz: string;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('smallint', { name: 'LIMMAXATR', nullable: true })
  limmaxatr: number | null;

  @Column('smallint', { name: 'CODEVENPLDDU6H', nullable: true })
  codevenplddu6H: number | null;

  @Column('smallint', { name: 'CODEVENPLDNU6H', nullable: true })
  codevenpldnu6H: number | null;

  @Column('smallint', { name: 'CODEVENPLNDU6H', nullable: true })
  codevenplndu6H: number | null;

  @Column('smallint', { name: 'CODEVENPLNDN6H', nullable: true })
  codevenplndn6H: number | null;

  @Column('smallint', { name: 'CODEVENPLDDU12H', nullable: true })
  codevenplddu12H: number | null;

  @Column('smallint', { name: 'CODEVENPLDNU12H', nullable: true })
  codevenpldnu12H: number | null;

  @Column('smallint', { name: 'CODEVENPLNDU12H', nullable: true })
  codevenplndu12H: number | null;

  @Column('smallint', { name: 'CODEVENPLNDN12H', nullable: true })
  codevenplndn12H: number | null;

  @Column('smallint', { name: 'CODEVENPLDDU24H', nullable: true })
  codevenplddu24H: number | null;

  @Column('smallint', { name: 'CODEVENPLDNU24H', nullable: true })
  codevenpldnu24H: number | null;

  @Column('smallint', { name: 'CODEVENPLNDU24H', nullable: true })
  codevenplndu24H: number | null;

  @Column('smallint', { name: 'CODEVENPLNDN24H', nullable: true })
  codevenplndn24H: number | null;

  @Column('smallint', { name: 'CODEVENSADDU6H', nullable: true })
  codevensaddu6H: number | null;

  @Column('smallint', { name: 'CODEVENSADNU6H', nullable: true })
  codevensadnu6H: number | null;

  @Column('smallint', { name: 'CODEVENSANDU6H', nullable: true })
  codevensandu6H: number | null;

  @Column('smallint', { name: 'CODEVENSANDN6H', nullable: true })
  codevensandn6H: number | null;

  @Column('smallint', { name: 'CODEVENSADDU12H', nullable: true })
  codevensaddu12H: number | null;

  @Column('smallint', { name: 'CODEVENSADNU12H', nullable: true })
  codevensadnu12H: number | null;

  @Column('smallint', { name: 'CODEVENSANDU12H', nullable: true })
  codevensandu12H: number | null;

  @Column('smallint', { name: 'CODEVENSANDN12H', nullable: true })
  codevensandn12H: number | null;

  @Column('smallint', { name: 'CODEVENSADDU24H', nullable: true })
  codevensaddu24H: number | null;

  @Column('smallint', { name: 'CODEVENSADNU24H', nullable: true })
  codevensadnu24H: number | null;

  @Column('smallint', { name: 'CODEVENSANDU24H', nullable: true })
  codevensandu24H: number | null;

  @Column('smallint', { name: 'CODEVENSANDN24H', nullable: true })
  codevensandn24H: number | null;

  @Column('varchar', {
    name: 'ENVTHEXDIACOMP',
    length: 1,
    default: () => "'N'",
  })
  envthexdiacomp: string;

  @Column('smallint', { name: 'LIMMAXATRBAT', nullable: true })
  limmaxatrbat: number | null;

  @Column('smallint', { name: 'LIMMAXHEXTBAT', nullable: true })
  limmaxhextbat: number | null;

  @Column('char', { name: 'CONSIDERAMESADM', length: 1, default: () => "'N'" })
  consideramesadm: string;

  @Column('char', { name: 'USACALPUB', nullable: true, length: 1 })
  usacalpub: string | null;

  @Column('smallint', { name: 'CARENCIABCOCAL', nullable: true })
  carenciabcocal: number | null;

  @Column('smallint', { name: 'ORDEMDEBCAL', default: () => '(1)' })
  ordemdebcal: number;

  @Column('smallint', { name: 'ENVIASALNEGCAL', default: () => '(2)' })
  enviasalnegcal: number;

  @Column('smallint', { name: 'SALDOFIMCAL', default: () => '(2)' })
  saldofimcal: number;

  @Column('char', { name: 'USAEXTRACAL', length: 1, default: () => "'S'" })
  usaextracal: string;

  @Column('char', { name: 'USAATRASOCAL', length: 1, default: () => "'S'" })
  usaatrasocal: string;

  @Column('smallint', { name: 'ENVIASALDOCAL', default: () => '(2)' })
  enviasaldocal: number;

  @Column('char', { name: 'TOLHREXENT', length: 1, default: () => "'N'" })
  tolhrexent: string;

  @Column('char', { name: 'TOLHREXSAI', length: 1, default: () => "'N'" })
  tolhrexsai: string;

  @Column('char', { name: 'TOLATRASOENT', length: 1, default: () => "'N'" })
  tolatrasoent: string;

  @Column('char', { name: 'TOLATRASOSAI', length: 1, default: () => "'N'" })
  tolatrasosai: string;

  @Column('datetime', { name: 'DTINIBHCPU', nullable: true })
  dtinibhcpu: Date | null;

  @Column('datetime', { name: 'DTFIMBHCPU', nullable: true })
  dtfimbhcpu: Date | null;

  @Column('char', { name: 'USABCOHRNEGATIVO', length: 1, default: () => "'N'" })
  usabcohrnegativo: string;

  @Column('char', { name: 'USACONVOCACAO', length: 1, default: () => "'N'" })
  usaconvocacao: string;

  @Column('smallint', { name: 'MINUTOSCOMPENSAHR', nullable: true })
  minutoscompensahr: number | null;

  @Column('varchar', {
    name: 'ENVATRFALSABBH',
    length: 1,
    default: () => "'N'",
  })
  envatrfalsabbh: string;

  @Column('smallint', {
    name: 'FATORARRD',
    nullable: true,
    default: () => '(0)',
  })
  fatorarrd: number | null;

  @Column('varchar', { name: 'TIPOARRD', length: 1, default: () => "'N'" })
  tipoarrd: string;

  @Column('smallint', { name: 'LIMSALDOPOSITBCO', nullable: true })
  limsaldopositbco: number | null;

  @Column('smallint', { name: 'LIMSALDONEGATBCO', nullable: true })
  limsaldonegatbco: number | null;

  @Column('smallint', { name: 'MESBALANCOBH', nullable: true })
  mesbalancobh: number | null;

  @Column('char', {
    name: 'PAGHRPOSITSEMJUSTAC',
    length: 1,
    default: () => "'N'",
  })
  paghrpositsemjustac: string;

  @Column('char', {
    name: 'USADTBASEDESCROCO',
    length: 1,
    default: () => "'N'",
  })
  usadtbasedescroco: string;

  @Column('char', { name: 'TIPDATAREGFUNC', length: 1, default: () => "'R'" })
  tipdataregfunc: string;

  @Column('smallint', { name: 'CODEVENSANAOTRAB', nullable: true })
  codevensanaotrab: number | null;

  @Column('char', { name: 'CALCRESIDUORES', length: 1, default: () => "'N'" })
  calcresiduores: string;

  @Column('char', { name: 'COMPENSANOFIM', length: 1, default: () => "'N'" })
  compensanofim: string;

  @Column('char', { name: 'USATOLERAHRNOT', length: 1, default: () => "'N'" })
  usatolerahrnot: string;

  @Column('smallint', { name: 'MESESRETROREAJ', nullable: true })
  mesesretroreaj: number | null;

  @OneToMany(() => TfpcfeEntity, (tfpcfeEntity) => tfpcfeEntity.codpref2)
  tfpcfes: TfpcfeEntity[];

  @OneToMany(() => TfpdfcEntity, (tfpdfcEntity) => tfpdfcEntity.codpref2)
  tfpdfcs: TfpdfcEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codpref)
  tfpemps: TfpempEntity[];

  @OneToMany(() => TfpmdeEntity, (tfpmdeEntity) => tfpmdeEntity.codpref2)
  tfpmdes: TfpmdeEntity[];

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tfppres)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppres)
  @JoinColumn([{ name: 'CODEVENDOMIN', referencedColumnName: 'codevento' }])
  codevendomin: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppres2)
  @JoinColumn([{ name: 'CODEVENEXCNOT', referencedColumnName: 'codevento' }])
  codevenexcnot: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppres3)
  @JoinColumn([{ name: 'CODEVENEXTNOT', referencedColumnName: 'codevento' }])
  codevenextnot: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppres4)
  @JoinColumn([{ name: 'CODEVENFALTAS', referencedColumnName: 'codevento' }])
  codevenfaltas: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppres5)
  @JoinColumn([{ name: 'CODEVENNOTUR', referencedColumnName: 'codevento' }])
  codevennotur: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppres6)
  @JoinColumn([{ name: 'CODEVEINDENIZA', referencedColumnName: 'codevento' }])
  codeveindeniza: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppres7)
  @JoinColumn([{ name: 'CODEVENBHORAS', referencedColumnName: 'codevento' }])
  codevenbhoras: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppres8)
  @JoinColumn([{ name: 'CODEVENATRASO', referencedColumnName: 'codevento' }])
  codevenatraso: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppres9)
  @JoinColumn([{ name: 'CODEVENCRED', referencedColumnName: 'codevento' }])
  codevencred: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpprs)
  @JoinColumn([{ name: 'CODEVENDEB', referencedColumnName: 'codevento' }])
  codevendeb: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpprs2)
  @JoinColumn([{ name: 'CODEVENDFCNOT', referencedColumnName: 'codevento' }])
  codevendfcnot: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpprs3)
  @JoinColumn([{ name: 'EVECREDLIMSEM', referencedColumnName: 'codevento' }])
  evecredlimsem: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpprs4)
  @JoinColumn([{ name: 'EVEJUSTACFAIXA2', referencedColumnName: 'codevento' }])
  evejustacfaixa: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpprs5)
  @JoinColumn([{ name: 'CODEVESOBREAVISO', referencedColumnName: 'codevento' }])
  codevesobreaviso: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpprs6)
  @JoinColumn([{ name: 'CODEVEIND12X36', referencedColumnName: 'codevento' }])
  codeveind12X: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpprs7)
  @JoinColumn([{ name: 'CODEVESUM444', referencedColumnName: 'codevento' }])
  codevesum4: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpprs8)
  @JoinColumn([{ name: 'CODEVESUM444NOT', referencedColumnName: 'codevento' }])
  codevesum444Not: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpprs9)
  @JoinColumn([{ name: 'EVEJUSTACDOMFER', referencedColumnName: 'codevento' }])
  evejustacdomfer: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppr10)
  @JoinColumn([{ name: 'EVEJUSTACFAIXA1', referencedColumnName: 'codevento' }])
  evejustacfaixa2: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppr11)
  @JoinColumn([
    { name: 'EVESEMJUSTACFAIXA1', referencedColumnName: 'codevento' },
  ])
  evesemjustacfaixa: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppr12)
  @JoinColumn([
    { name: 'EVESEMJUSTACFAIXA2', referencedColumnName: 'codevento' },
  ])
  evesemjustacfaixa2: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppr13)
  @JoinColumn([
    { name: 'EVESEMJUSTACDOMFER', referencedColumnName: 'codevento' },
  ])
  evesemjustacdomfer: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppr14)
  @JoinColumn([{ name: 'CODEVENNOTURLAV', referencedColumnName: 'codevento' }])
  codevennoturlav: TfpeveEntity;

  @ManyToOne(() => TfphlmEntity, (tfphlmEntity) => tfphlmEntity.tfppres)
  @JoinColumn([{ name: 'NUFAIXAPGTOBH', referencedColumnName: 'nulimitehr' }])
  nufaixapgtobh: TfphlmEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppr15)
  @JoinColumn([{ name: 'CODEVENPOSPRI', referencedColumnName: 'codevento' }])
  codevenpospri: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfppr16)
  @JoinColumn([{ name: 'CODEVENPRI', referencedColumnName: 'codevento' }])
  codevenpri: TfpeveEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppres)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfpseqEntity, (tfpseqEntity) => tfpseqEntity.codpref2)
  tfpseqs: TfpseqEntity[];

  @OneToMany(() => TfpsinEntity, (tfpsinEntity) => tfpsinEntity.codpref)
  tfpsins: TfpsinEntity[];
}
