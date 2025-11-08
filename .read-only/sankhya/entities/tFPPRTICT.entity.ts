import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpprtabonoEntity } from './tFPPRTABONO.entity';
import { TfpprtibcEntity } from './tFPPRTIBC.entity';
import { TfpprtEntity } from './tFPPRT.entity';
import { TfpprtiviEntity } from './tFPPRTIVI.entity';
import { TfpprtmcaEntity } from './tFPPRTMCA.entity';
import { TfpprtremEntity } from './tFPPRTREM.entity';

@Index('PK_TFPPRTICT', ['nuict'], { unique: true })
@Entity('TFPPRTICT', { schema: 'SANKHYA' })
export class TfpprtictEntity {
  @Column('int', { primary: true, name: 'NUICT' })
  nuict: number;

  @Column('smallint', { name: 'TIPOCONTRATO', nullable: true })
  tipocontrato: number | null;

  @Column('varchar', { name: 'INFOCONTENVESOCIAL', nullable: true, length: 1 })
  infocontenvesocial: string | null;

  @Column('datetime', { name: 'DTADMORIG', nullable: true })
  dtadmorig: Date | null;

  @Column('varchar', { name: 'HOUVEREINT', nullable: true, length: 1 })
  houvereint: string | null;

  @Column('varchar', { name: 'HOUVERECCATEG', nullable: true, length: 1 })
  houvereccateg: string | null;

  @Column('varchar', { name: 'HOUVERECNATATIV', nullable: true, length: 1 })
  houverecnatativ: string | null;

  @Column('varchar', { name: 'HOUVERECMOTDESLIG', nullable: true, length: 1 })
  houverecmotdeslig: string | null;

  @Column('varchar', { name: 'HOUVERECUNCONTR', nullable: true, length: 1 })
  houverecuncontr: string | null;

  @Column('varchar', { name: 'MATRICULATRAB', nullable: true, length: 30 })
  matriculatrab: string | null;

  @Column('smallint', { name: 'CODCATEGTRAB', nullable: true })
  codcategtrab: number | null;

  @Column('datetime', { name: 'DTINICIOTSVE', nullable: true })
  dtiniciotsve: Date | null;

  @Column('varchar', { name: 'CODCBO', nullable: true, length: 6 })
  codcbo: string | null;

  @Column('smallint', { name: 'CODNATATIVIDADE', nullable: true })
  codnatatividade: number | null;

  @Column('smallint', { name: 'TIPOREGTRAB', nullable: true })
  tiporegtrab: number | null;

  @Column('smallint', { name: 'TIPOREGPREV', nullable: true })
  tiporegprev: number | null;

  @Column('datetime', { name: 'DTADM', nullable: true })
  dtadm: Date | null;

  @Column('smallint', { name: 'TIPOCONTRPARC', nullable: true })
  tipocontrparc: number | null;

  @Column('smallint', { name: 'TIPOCONTRTRAB', nullable: true })
  tipocontrtrab: number | null;

  @Column('datetime', { name: 'DTTERMCONTR', nullable: true })
  dttermcontr: Date | null;

  @Column('varchar', { name: 'CONTRPRAZOTERM', nullable: true, length: 1 })
  contrprazoterm: string | null;

  @Column('varchar', { name: 'OBJDETCONTRTERM', nullable: true, length: 255 })
  objdetcontrterm: string | null;

  @Column('varchar', { name: 'OBSCONTRTRAB', nullable: true, length: 255 })
  obscontrtrab: string | null;

  @Column('smallint', { name: 'TIPOINSC', nullable: true })
  tipoinsc: number | null;

  @Column('varchar', { name: 'NROINSC', nullable: true, length: 14 })
  nroinsc: string | null;

  @Column('varchar', { name: 'CODMATRICULAANT', nullable: true, length: 30 })
  codmatriculaant: string | null;

  @Column('datetime', { name: 'DTTRANSF', nullable: true })
  dttransf: Date | null;

  @Column('datetime', { name: 'DTDESLIG', nullable: true })
  dtdeslig: Date | null;

  @Column('varchar', { name: 'MTVDESLIG', nullable: true, length: 2 })
  mtvdeslig: string | null;

  @Column('datetime', { name: 'DTFIMAVISOPREV', nullable: true })
  dtfimavisoprev: Date | null;

  @Column('datetime', { name: 'DTTERM', nullable: true })
  dtterm: Date | null;

  @Column('varchar', { name: 'MTVTERM', nullable: true, length: 2 })
  mtvterm: string | null;

  @Column('varchar', { name: 'RESPPGTOVLR', nullable: true, length: 1 })
  resppgtovlr: string | null;

  @Column('smallint', { name: 'TPINSCESTAB', nullable: true })
  tpinscestab: number | null;

  @Column('varchar', { name: 'NRINSCESTAB', nullable: true, length: 14 })
  nrinscestab: string | null;

  @Column('datetime', { name: 'COMPINI', nullable: true })
  compini: Date | null;

  @Column('datetime', { name: 'COMPFIM', nullable: true })
  compfim: Date | null;

  @Column('smallint', { name: 'REPERCPROC', nullable: true })
  repercproc: number | null;

  @Column('float', { name: 'VLRTOTRENUM', nullable: true, precision: 53 })
  vlrtotrenum: number | null;

  @Column('float', { name: 'VLRAVISOPREV', nullable: true, precision: 53 })
  vlravisoprev: number | null;

  @Column('float', { name: 'VLR13AVISOPREV', nullable: true, precision: 53 })
  vlr13Avisoprev: number | null;

  @Column('float', { name: 'VLRTOTVERBIND', nullable: true, precision: 53 })
  vlrtotverbind: number | null;

  @Column('float', { name: 'VLRBASEMULTFGTS', nullable: true, precision: 53 })
  vlrbasemultfgts: number | null;

  @Column('varchar', { name: 'MULTPAGATRAB', nullable: true, length: 1 })
  multpagatrab: string | null;

  @Column('datetime', { name: 'DTDEMJUD', nullable: true })
  dtdemjud: Date | null;

  @Column('datetime', { name: 'DTADMJUD', nullable: true })
  dtadmjud: Date | null;

  @Column('varchar', { name: 'PENSALIM', nullable: true, length: 1 })
  pensalim: string | null;

  @Column('float', { name: 'VRALIM', nullable: true, precision: 53 })
  vralim: number | null;

  @Column('varchar', { name: 'INDENSD', nullable: true, length: 1 })
  indensd: string | null;

  @Column('char', { name: 'CODNATATIVIDADEJUD', nullable: true, length: 1 })
  codnatatividadejud: string | null;

  @Column('varchar', { name: 'INDREPERC', nullable: true, length: 1 })
  indreperc: string | null;

  @Column('varchar', { name: 'INDENABONO', nullable: true, length: 1 })
  indenabono: string | null;

  @Column('int', { name: 'CODTPRJUD', nullable: true })
  codtprjud: number | null;

  @Column('float', { name: 'PERCALIMENT', nullable: true, precision: 53 })
  percaliment: number | null;

  @Column('smallint', { name: 'CODCATEGTRABJUD', nullable: true })
  codcategtrabjud: number | null;

  @Column('char', { name: 'INCLUIDTDESLIG', nullable: true, length: 1 })
  incluidtdeslig: string | null;

  @Column('int', { name: 'TIPORECISCAO', nullable: true })
  tiporeciscao: number | null;

  @Column('datetime', { name: 'DTDESLIGRESC', nullable: true })
  dtdesligresc: Date | null;

  @OneToMany(
    () => TfpprtabonoEntity,
    (tfpprtabonoEntity) => tfpprtabonoEntity.nuict2,
  )
  tfpprtabonos: TfpprtabonoEntity[];

  @OneToMany(() => TfpprtibcEntity, (tfpprtibcEntity) => tfpprtibcEntity.nuict)
  tfpprtibcs: TfpprtibcEntity[];

  @ManyToOne(() => TfpprtEntity, (tfpprtEntity) => tfpprtEntity.tfpprticts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUPRT', referencedColumnName: 'nuprt' }])
  nuprt: TfpprtEntity;

  @OneToMany(() => TfpprtiviEntity, (tfpprtiviEntity) => tfpprtiviEntity.nuict)
  tfpprtivis: TfpprtiviEntity[];

  @OneToMany(() => TfpprtmcaEntity, (tfpprtmcaEntity) => tfpprtmcaEntity.nuict)
  tfpprtmcas: TfpprtmcaEntity[];

  @OneToMany(() => TfpprtremEntity, (tfpprtremEntity) => tfpprtremEntity.nuict)
  tfpprtrems: TfpprtremEntity[];
}
