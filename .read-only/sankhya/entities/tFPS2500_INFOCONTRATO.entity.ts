import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2500AbonosalarialEntity } from './tFPS2500_ABONOSALARIAL.entity';
import { Tfps2500BasecalculoEntity } from './tFPS2500_BASECALCULO.entity';
import { Tfps2500Entity } from './tFPS2500.entity';
import { Tfps2500MudcategativEntity } from './tFPS2500_MUDCATEGATIV.entity';
import { Tfps2500RemuneracaoEntity } from './tFPS2500_REMUNERACAO.entity';
import { Tfps2500UniccontrEntity } from './tFPS2500_UNICCONTR.entity';

@Index(
  'PK_TFPS2500_INFOCONTRATO',
  ['codemp', 'dtref', 'tpamb', 'chave2500', 'sequencia', 'chave'],
  { unique: true },
)
@Entity('TFPS2500_INFOCONTRATO', { schema: 'SANKHYA' })
export class Tfps2500InfocontratoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE2500', length: 100 })
  chave2500: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'TPCONTR', nullable: true })
  tpcontr: number | null;

  @Column('varchar', { name: 'INDCONTR', nullable: true, length: 1 })
  indcontr: string | null;

  @Column('datetime', { name: 'DTADMORIG', nullable: true })
  dtadmorig: Date | null;

  @Column('varchar', { name: 'INDREINT', nullable: true, length: 1 })
  indreint: string | null;

  @Column('varchar', { name: 'INDCATEG', nullable: true, length: 1 })
  indcateg: string | null;

  @Column('varchar', { name: 'INDNATATIV', nullable: true, length: 1 })
  indnatativ: string | null;

  @Column('varchar', { name: 'INDMOTDESLIG', nullable: true, length: 1 })
  indmotdeslig: string | null;

  @Column('varchar', { name: 'INDUNIC', nullable: true, length: 1 })
  indunic: string | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('datetime', { name: 'DTINICIO', nullable: true })
  dtinicio: Date | null;

  @Column('varchar', { name: 'CODCBOCOMPL', nullable: true, length: 6 })
  codcbocompl: string | null;

  @Column('smallint', { name: 'NATATIVIDADECOMPL', nullable: true })
  natatividadecompl: number | null;

  @Column('smallint', { name: 'TPREGTRABVINC', nullable: true })
  tpregtrabvinc: number | null;

  @Column('smallint', { name: 'TPREGPREVVINC', nullable: true })
  tpregprevvinc: number | null;

  @Column('datetime', { name: 'DTADMVINC', nullable: true })
  dtadmvinc: Date | null;

  @Column('smallint', { name: 'TMPPARCVINC', nullable: true })
  tmpparcvinc: number | null;

  @Column('smallint', { name: 'TPCONTRDURACAO', nullable: true })
  tpcontrduracao: number | null;

  @Column('datetime', { name: 'DTTERMDURACAO', nullable: true })
  dttermduracao: Date | null;

  @Column('varchar', { name: 'CLAUASSECDURACAO', nullable: true, length: 1 })
  clauassecduracao: string | null;

  @Column('varchar', { name: 'OBJDETDURACAO', nullable: true, length: 255 })
  objdetduracao: string | null;

  @Column('smallint', { name: 'TPINSCSUCESSAO', nullable: true })
  tpinscsucessao: number | null;

  @Column('varchar', { name: 'NRINSCSUCESSAO', nullable: true, length: 14 })
  nrinscsucessao: string | null;

  @Column('varchar', { name: 'MATRICANTSUCESSAO', nullable: true, length: 30 })
  matricantsucessao: string | null;

  @Column('datetime', { name: 'DTTRANSFSUCESSAO', nullable: true })
  dttransfsucessao: Date | null;

  @Column('datetime', { name: 'DTDESLIG', nullable: true })
  dtdeslig: Date | null;

  @Column('varchar', { name: 'MTVDESLIG', nullable: true, length: 2 })
  mtvdeslig: string | null;

  @Column('datetime', { name: 'DTPROJFIMAPI', nullable: true })
  dtprojfimapi: Date | null;

  @Column('datetime', { name: 'DTTERMTSVE', nullable: true })
  dttermtsve: Date | null;

  @Column('varchar', { name: 'MTVDESLIGTSVE', nullable: true, length: 2 })
  mtvdesligtsve: string | null;

  @Column('smallint', { name: 'TPINSCESTAB', nullable: true })
  tpinscestab: number | null;

  @Column('varchar', { name: 'NRINSCESTAB', nullable: true, length: 14 })
  nrinscestab: string | null;

  @Column('varchar', { name: 'COMPINI', nullable: true, length: 7 })
  compini: string | null;

  @Column('varchar', { name: 'COMPFIM', nullable: true, length: 7 })
  compfim: string | null;

  @Column('smallint', { name: 'REPERCPROC', nullable: true })
  repercproc: number | null;

  @Column('float', { name: 'VRRENUM', nullable: true, precision: 53 })
  vrrenum: number | null;

  @Column('float', { name: 'VRAPI', nullable: true, precision: 53 })
  vrapi: number | null;

  @Column('float', { name: 'VR13API', nullable: true, precision: 53 })
  vr13Api: number | null;

  @Column('float', { name: 'VRINDEN', nullable: true, precision: 53 })
  vrinden: number | null;

  @Column('float', { name: 'VRBASEINDENFGTS', nullable: true, precision: 53 })
  vrbaseindenfgts: number | null;

  @Column('varchar', { name: 'PAGDIRETORESC', nullable: true, length: 1 })
  pagdiretoresc: string | null;

  @Column('varchar', { name: 'OBSERVACAOVINC', nullable: true, length: 255 })
  observacaovinc: string | null;

  @Column('varchar', { name: 'PENSALIM', nullable: true, length: 1 })
  pensalim: string | null;

  @Column('varchar', { name: 'INDENSD', nullable: true, length: 1 })
  indensd: string | null;

  @Column('float', { name: 'PERCALIMENT', nullable: true, precision: 53 })
  percaliment: number | null;

  @Column('float', { name: 'VRALIM', nullable: true, precision: 53 })
  vralim: number | null;

  @Column('varchar', { name: 'INDREPERC', nullable: true, length: 1 })
  indreperc: string | null;

  @Column('varchar', { name: 'INDENABONO', nullable: true, length: 1 })
  indenabono: string | null;

  @OneToMany(
    () => Tfps2500AbonosalarialEntity,
    (tfps2500AbonosalarialEntity) =>
      tfps2500AbonosalarialEntity.tfps2500Infocontrato,
  )
  tfps2500Abonosalarials: Tfps2500AbonosalarialEntity[];

  @OneToMany(
    () => Tfps2500BasecalculoEntity,
    (tfps2500BasecalculoEntity) =>
      tfps2500BasecalculoEntity.tfps2500Infocontrato,
  )
  tfps2500Basecalculos: Tfps2500BasecalculoEntity[];

  @ManyToOne(
    () => Tfps2500Entity,
    (tfps2500Entity) => tfps2500Entity.tfps2500Infocontratoes,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2500', referencedColumnName: 'chave' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tfps2: Tfps2500Entity;

  @OneToMany(
    () => Tfps2500MudcategativEntity,
    (tfps2500MudcategativEntity) =>
      tfps2500MudcategativEntity.tfps2500Infocontrato,
  )
  tfps2500Mudcategativs: Tfps2500MudcategativEntity[];

  @OneToMany(
    () => Tfps2500RemuneracaoEntity,
    (tfps2500RemuneracaoEntity) =>
      tfps2500RemuneracaoEntity.tfps2500Infocontrato,
  )
  tfps2500Remuneracaos: Tfps2500RemuneracaoEntity[];

  @OneToMany(
    () => Tfps2500UniccontrEntity,
    (tfps2500UniccontrEntity) => tfps2500UniccontrEntity.tfps2500Infocontrato,
  )
  tfps2500Uniccontrs: Tfps2500UniccontrEntity[];
}
