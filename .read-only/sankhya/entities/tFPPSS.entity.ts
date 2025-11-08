import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpeprEntity } from './tFPEPR.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpocoEntity } from './tFPOCO.entity';
import { TfpocorjsEntity } from './tFPOCORJS.entity';
import { TfpprtcEntity } from './tFPPRTC.entity';
import { TfppseEntity } from './tFPPSE.entity';
import { TfppsfEntity } from './tFPPSF.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpptprEntity } from './tFPPTPR.entity';
import { TfppubEntity } from './tFPPUB.entity';
import { TfprneEntity } from './tFPRNE.entity';
import { TfpsuspEntity } from './tFPSUSP.entity';
import { TfptercEntity } from './tFPTERC.entity';

@Index('PK_TFPPSS', ['nuprocesso'], { unique: true })
@Entity('TFPPSS', { schema: 'SANKHYA' })
export class TfppssEntity {
  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('varchar', { name: 'NUMPROCESSO', nullable: true, length: 21 })
  numprocesso: string | null;

  @Column('char', { name: 'TIPOPROCESSO', length: 1, default: () => "'A'" })
  tipoprocesso: string;

  @Column('varchar', { name: 'DESCRPROCESSO', length: 100 })
  descrprocesso: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTINICIO', nullable: true })
  dtinicio: Date | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('datetime', { name: 'DTDESCISAO', nullable: true })
  dtdescisao: Date | null;

  @Column('smallint', { name: 'ABRANPROCESSO' })
  abranprocesso: number;

  @Column('char', { name: 'DCCONTRPATR', length: 1, default: () => "'N'" })
  dccontrpatr: string;

  @Column('char', { name: 'DCCONTRPATRSEG', length: 1, default: () => "'N'" })
  dccontrpatrseg: string;

  @Column('char', { name: 'DCNFSERVTOMADO', length: 1, default: () => "'N'" })
  dcnfservtomado: string;

  @Column('char', { name: 'DCNFSERVPRESTADO', length: 1, default: () => "'N'" })
  dcnfservprestado: string;

  @Column('smallint', { name: 'INDDESCISAO', nullable: true })
  inddescisao: number | null;

  @Column('char', { name: 'INDDEPINTEGRAL', length: 1, default: () => "'N'" })
  inddepintegral: string;

  @Column('smallint', { name: 'IDVARA' })
  idvara: number;

  @Column('smallint', { name: 'INDAUTORIA' })
  indautoria: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'TIPINSS', nullable: true })
  tipinss: number | null;

  @Column('smallint', { name: 'TIPIRRF', nullable: true })
  tipirrf: number | null;

  @Column('smallint', { name: 'INDMATPROC', nullable: true })
  indmatproc: number | null;

  @Column('char', { name: 'USADOESOCIAL', length: 1, default: () => "'N'" })
  usadoesocial: string;

  @Column('smallint', { name: 'TPTRIB', nullable: true })
  tptrib: number | null;

  @Column('char', { name: 'EXCLUSIVOEMP', length: 1, default: () => "'N'" })
  exclusivoemp: string;

  @Column('char', { name: 'INSSEMPRESA', length: 1, default: () => "'N'" })
  inssempresa: string;

  @Column('char', { name: 'FGTS', length: 1, default: () => "'N'" })
  fgts: string;

  @Column('char', { name: 'CONTRIBSINDICAL', length: 1, default: () => "'N'" })
  contribsindical: string;

  @Column('char', { name: 'INSSTRABALHADOR', length: 1, default: () => "'N'" })
  insstrabalhador: string;

  @Column('char', { name: 'IRRF', length: 1, default: () => "'N'" })
  irrf: string;

  @Column('char', { name: 'USALIMITESALMIN', length: 1, default: () => "'N'" })
  usalimitesalmin: string;

  @Column('float', { name: 'VLRSALMINIMO', nullable: true, precision: 53 })
  vlrsalminimo: number | null;

  @Column('char', { name: 'RATAJUSTADO', length: 1, default: () => "'N'" })
  ratajustado: string;

  @Column('char', { name: 'OUTRASENTIDADES', length: 1, default: () => "'N'" })
  outrasentidades: string;

  @Column('varchar', { name: 'RECIBOESOCIAL', nullable: true, length: 50 })
  reciboesocial: string | null;

  @Column('varchar', { name: 'PISPASEP', nullable: true, length: 1 })
  pispasep: string | null;

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.nuprocessorat)
  tfpemps: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.nuprocessofap)
  tfpemps2: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.nuprocessopcd)
  tfpemps3: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.nuprocessoapr)
  tfpemps4: TfpempEntity[];

  @OneToMany(() => TfpeprEntity, (tfpeprEntity) => tfpeprEntity.nuprocesso2)
  tfpeprs: TfpeprEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.nuprocessotrab)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.nuprocessojud)
  tfpfuns2: TfpfunEntity[];

  @OneToMany(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.nuprocesso)
  tfpocos: TfpocoEntity[];

  @OneToMany(
    () => TfpocorjsEntity,
    (tfpocorjsEntity) => tfpocorjsEntity.nuprocesso,
  )
  tfpocorjs: TfpocorjsEntity[];

  @OneToMany(() => TfpprtcEntity, (tfpprtcEntity) => tfpprtcEntity.nuprocesso2)
  tfpprtcs: TfpprtcEntity[];

  @OneToMany(() => TfppseEntity, (tfppseEntity) => tfppseEntity.nuprocesso2)
  tfppses: TfppseEntity[];

  @OneToMany(() => TfppsfEntity, (tfppsfEntity) => tfppsfEntity.nuprocesso2)
  tfppsfs: TfppsfEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfppsses)
  @JoinColumn([{ name: 'CODCIDSECAOJUD', referencedColumnName: 'codcid' }])
  codcidsecaojud: TsicidEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppsses)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfpptprEntity, (tfpptprEntity) => tfpptprEntity.nuprocesso2)
  tfpptprs: TfpptprEntity[];

  @OneToMany(() => TfppubEntity, (tfppubEntity) => tfppubEntity.nuprocessojud)
  tfppubs: TfppubEntity[];

  @OneToMany(() => TfprneEntity, (tfprneEntity) => tfprneEntity.nuprocesso2)
  tfprnes: TfprneEntity[];

  @OneToMany(() => TfpsuspEntity, (tfpsuspEntity) => tfpsuspEntity.nuprocesso2)
  tfpsusps: TfpsuspEntity[];

  @OneToMany(() => TfptercEntity, (tfptercEntity) => tfptercEntity.nuprocesso2)
  tfptercs: TfptercEntity[];
}
