import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TccempEntity } from './tCCEMP.entity';
import { TfpcatrEntity } from './tFPCATR.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpestEntity } from './tFPEST.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';
import { TfptatEntity } from './tFPTAT.entity';
import { TgaentEntity } from './tGAENT.entity';
import { TgfcplEntity } from './tGFCPL.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { Tgflcdprr0030Entity } from './tGFLCDPRR0030.entity';
import { Tgflcdprr0040Entity } from './tGFLCDPRR0040.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfsitEntity } from './tGFSIT.entity';
import { TimedgEntity } from './tIMEDG.entity';
import { TimeprEntity } from './tIMEPR.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimpprEntity } from './tIMPPR.entity';
import { TsiageEntity } from './tSIAGE.entity';
import { TsicepEntity } from './tSICEP.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TfplgrEntity } from './tFPLGR.entity';

@Index('AK_NOMEEND_TSIEND', ['nomeend', 'tipo'], { unique: true })
@Index('PK_TSIEND', ['codend'], { unique: true })
@Entity('TSIEND', { schema: 'SANKHYA' })
export class TsiendEntity {
  @Column('int', { primary: true, name: 'CODEND' })
  codend: number;

  @Column('varchar', { name: 'NOMEEND', unique: true, length: 60 })
  nomeend: string;

  @Column('varchar', { name: 'TIPO', nullable: true, unique: true, length: 8 })
  tipo: string | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', { name: 'DESCRICAOCORREIO', nullable: true, length: 60 })
  descricaocorreio: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @OneToMany(() => TccempEntity, (tccempEntity) => tccempEntity.codend)
  tccemps: TccempEntity[];

  @OneToMany(
    () => TfpcatrEntity,
    (tfpcatrEntity) => tfpcatrEntity.codendlocalcat,
  )
  tfpcatrs: TfpcatrEntity[];

  @OneToMany(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.codend)
  tfpdeps: TfpdepEntity[];

  @OneToMany(() => TfpestEntity, (tfpestEntity) => tfpestEntity.codendinstens)
  tfpests: TfpestEntity[];

  @OneToMany(() => TfpestEntity, (tfpestEntity) => tfpestEntity.codendagtinteg)
  tfpests2: TfpestEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codend)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfpreqadmEntity, (tfpreqadmEntity) => tfpreqadmEntity.codend)
  tfpreqadms: TfpreqadmEntity[];

  @OneToMany(() => TfptatEntity, (tfptatEntity) => tfptatEntity.codend)
  tfptats: TfptatEntity[];

  @OneToMany(() => TgaentEntity, (tgaentEntity) => tgaentEntity.codend)
  tgaents: TgaentEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codendreceb)
  tgfcpls: TgfcplEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codendentrega)
  tgfcpls2: TgfcplEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codendtrab)
  tgfcpls3: TgfcplEntity[];

  @OneToMany(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.codend)
  tgfctts: TgfcttEntity[];

  @OneToMany(
    () => Tgflcdprr0030Entity,
    (tgflcdprr0030Entity) => tgflcdprr0030Entity.codend,
  )
  tgflcdprr0s: Tgflcdprr0030Entity[];

  @OneToMany(
    () => Tgflcdprr0040Entity,
    (tgflcdprr0040Entity) => tgflcdprr0040Entity.codend,
  )
  tgflcdprr0s2: Tgflcdprr0040Entity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codend)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfsitEntity, (tgfsitEntity) => tgfsitEntity.codend)
  tgfsits: TgfsitEntity[];

  @OneToMany(() => TimedgEntity, (timedgEntity) => timedgEntity.edgcodend)
  timedgs: TimedgEntity[];

  @OneToMany(() => TimeprEntity, (timeprEntity) => timeprEntity.eprcodend)
  timeprs: TimeprEntity[];

  @OneToMany(() => TimimvEntity, (timimvEntity) => timimvEntity.imvcodend)
  timimvs: TimimvEntity[];

  @OneToMany(() => TimpprEntity, (timpprEntity) => timpprEntity.pprcodend)
  timpprs: TimpprEntity[];

  @OneToMany(() => TsiageEntity, (tsiageEntity) => tsiageEntity.codend)
  tsiages: TsiageEntity[];

  @OneToMany(() => TsicepEntity, (tsicepEntity) => tsicepEntity.codend2)
  tsiceps: TsicepEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codend)
  tsiemps: TsiempEntity[];

  @ManyToOne(() => TfplgrEntity, (tfplgrEntity) => tfplgrEntity.tsiends)
  @JoinColumn([
    { name: 'CODLOGRADOURO', referencedColumnName: 'codlogradouro' },
  ])
  codlogradouro: TfplgrEntity;
}
