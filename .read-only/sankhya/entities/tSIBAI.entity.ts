import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TccempEntity } from './tCCEMP.entity';
import { TfpestEntity } from './tFPEST.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfppcaEntity } from './tFPPCA.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';
import { TgaentEntity } from './tGAENT.entity';
import { TgfcplEntity } from './tGFCPL.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { Tgflcdprr0030Entity } from './tGFLCDPRR0030.entity';
import { Tgflcdprr0040Entity } from './tGFLCDPRR0040.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfsitEntity } from './tGFSIT.entity';
import { TimcarEntity } from './tIMCAR.entity';
import { TimedgEntity } from './tIMEDG.entity';
import { TimeprEntity } from './tIMEPR.entity';
import { TimfacEntity } from './tIMFAC.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TimpprEntity } from './tIMPPR.entity';
import { TsiageEntity } from './tSIAGE.entity';
import { TsiregEntity } from './tSIREG.entity';
import { TsicepEntity } from './tSICEP.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('AK_NOMEBAI_TSIBAI', ['nomebai'], { unique: true })
@Index('PK_TSIBAI', ['codbai'], { unique: true })
@Entity('TSIBAI', { schema: 'SANKHYA' })
export class TsibaiEntity {
  @Column('int', { primary: true, name: 'CODBAI' })
  codbai: number;

  @Column('varchar', { name: 'NOMEBAI', unique: true, length: 50 })
  nomebai: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', { name: 'DESCRICAOCORREIO', nullable: true, length: 60 })
  descricaocorreio: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @OneToMany(() => TccempEntity, (tccempEntity) => tccempEntity.codbai)
  tccemps: TccempEntity[];

  @OneToMany(() => TfpestEntity, (tfpestEntity) => tfpestEntity.codbaiinstens)
  tfpests: TfpestEntity[];

  @OneToMany(() => TfpestEntity, (tfpestEntity) => tfpestEntity.codbaiagtinteg)
  tfpests2: TfpestEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codbai)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfppcaEntity, (tfppcaEntity) => tfppcaEntity.codbai)
  tfppcas: TfppcaEntity[];

  @OneToMany(() => TfpreqadmEntity, (tfpreqadmEntity) => tfpreqadmEntity.codbai)
  tfpreqadms: TfpreqadmEntity[];

  @OneToMany(() => TgaentEntity, (tgaentEntity) => tgaentEntity.codbai)
  tgaents: TgaentEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codbaitrab)
  tgfcpls: TgfcplEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codbaireceb)
  tgfcpls2: TgfcplEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codbaientrega)
  tgfcpls3: TgfcplEntity[];

  @OneToMany(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.codbai)
  tgfctts: TgfcttEntity[];

  @OneToMany(
    () => Tgflcdprr0030Entity,
    (tgflcdprr0030Entity) => tgflcdprr0030Entity.codbai,
  )
  tgflcdprr0s: Tgflcdprr0030Entity[];

  @OneToMany(
    () => Tgflcdprr0040Entity,
    (tgflcdprr0040Entity) => tgflcdprr0040Entity.codbai,
  )
  tgflcdprr0s2: Tgflcdprr0040Entity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codbai)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfsitEntity, (tgfsitEntity) => tgfsitEntity.codbai)
  tgfsits: TgfsitEntity[];

  @OneToMany(() => TimcarEntity, (timcarEntity) => timcarEntity.carbairro)
  timcars: TimcarEntity[];

  @OneToMany(() => TimedgEntity, (timedgEntity) => timedgEntity.edgbairro)
  timedgs: TimedgEntity[];

  @OneToMany(() => TimeprEntity, (timeprEntity) => timeprEntity.eprbairro)
  timeprs: TimeprEntity[];

  @OneToMany(() => TimfacEntity, (timfacEntity) => timfacEntity.facbairroimovel)
  timfacs: TimfacEntity[];

  @OneToMany(() => TimimvEntity, (timimvEntity) => timimvEntity.imvbairro2)
  timimvs: TimimvEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotbairro)
  timlots: TimlotEntity[];

  @OneToMany(() => TimpprEntity, (timpprEntity) => timpprEntity.pprbairro)
  timpprs: TimpprEntity[];

  @OneToMany(() => TsiageEntity, (tsiageEntity) => tsiageEntity.codbai)
  tsiages: TsiageEntity[];

  @ManyToOne(() => TsiregEntity, (tsiregEntity) => tsiregEntity.tsibais)
  @JoinColumn([{ name: 'CODREG', referencedColumnName: 'codreg' }])
  codreg: TsiregEntity;

  @OneToMany(() => TsicepEntity, (tsicepEntity) => tsicepEntity.codbai2)
  tsiceps: TsicepEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codbai)
  tsiemps: TsiempEntity[];
}
