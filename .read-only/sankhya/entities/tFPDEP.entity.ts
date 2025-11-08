import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdItevaloresdporcEntity } from './aD_ITEVALORESDPORC.entity';
import { AdSirvomotEntity } from './aD_SIRVOMOT.entity';
import { TcicteEntity } from './tCICTE.entity';
import { TcilocEntity } from './tCILOC.entity';
import { TcimovEntity } from './tCIMOV.entity';
import { TcimovajEntity } from './tCIMOVAJ.entity';
import { TfpctfEntity } from './tFPCTF.entity';
import { TfpfisEntity } from './tFPFIS.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TfpdpeEntity } from './tFPDPE.entity';
import { TfpfdpEntity } from './tFPFDP.entity';
import { TfpfdsEntity } from './tFPFDS.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpgrdEntity } from './tFPGRD.entity';
import { TfphdeEntity } from './tFPHDE.entity';
import { TfphfuEntity } from './tFPHFU.entity';
import { TfpmrhEntity } from './tFPMRH.entity';
import { TfppcaEntity } from './tFPPCA.entity';
import { TfpponraioEntity } from './tFPPONRAIO.entity';
import { TfppubEntity } from './tFPPUB.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';
import { TfpvpjEntity } from './tFPVPJ.entity';
import { TgpavaEntity } from './tGPAVA.entity';
import { TrsreqEntity } from './tRSREQ.entity';

@Index('PK_TFPDEP', ['coddep'], { unique: true })
@Entity('TFPDEP', { schema: 'SANKHYA' })
export class TfpdepEntity {
  @Column('int', { primary: true, name: 'CODDEP' })
  coddep: number;

  @Column('char', { name: 'DESCRDEP', length: 30 })
  descrdep: string;

  @Column('char', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('int', { name: 'CODDEPPAI' })
  coddeppai: number;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'TIPPONTO', length: 1, default: () => "'S'" })
  tipponto: string;

  @Column('smallint', { name: 'DIAAPURAPONTO', default: () => '(0)' })
  diaapuraponto: number;

  @Column('smallint', { name: 'TIPLOTACAO', default: () => '(0)' })
  tiplotacao: number;

  @Column('smallint', { name: 'TPINSCPROP', nullable: true })
  tpinscprop: number | null;

  @Column('varchar', { name: 'NRINSCPROP', nullable: true, length: 14 })
  nrinscprop: string | null;

  @Column('char', { name: 'USADOESOCIAL', length: 1, default: () => "'N'" })
  usadoesocial: string;

  @Column('varchar', { name: 'NRINSCCONTRAT', nullable: true, length: 14 })
  nrinsccontrat: string | null;

  @Column('smallint', { name: 'TPINSCCONTRAT', nullable: true })
  tpinsccontrat: number | null;

  @Column('int', { name: 'CODPROJ', nullable: true })
  codproj: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(
    () => AdItevaloresdporcEntity,
    (adItevaloresdporcEntity) => adItevaloresdporcEntity.coddep,
  )
  adItevaloresdporcs: AdItevaloresdporcEntity[];

  @OneToMany(
    () => AdSirvomotEntity,
    (adSirvomotEntity) => adSirvomotEntity.coddep,
  )
  adSirvomots: AdSirvomotEntity[];

  @OneToMany(() => TcicteEntity, (tcicteEntity) => tcicteEntity.coddepcp)
  tcictes: TcicteEntity[];

  @OneToMany(() => TcicteEntity, (tcicteEntity) => tcicteEntity.coddepct)
  tcictes2: TcicteEntity[];

  @OneToMany(() => TcicteEntity, (tcicteEntity) => tcicteEntity.coddepsis)
  tcictes3: TcicteEntity[];

  @OneToMany(() => TcilocEntity, (tcilocEntity) => tcilocEntity.coddepto)
  tcilocs: TcilocEntity[];

  @OneToMany(() => TcimovEntity, (tcimovEntity) => tcimovEntity.coddep)
  tcimovs: TcimovEntity[];

  @OneToMany(() => TcimovajEntity, (tcimovajEntity) => tcimovajEntity.coddep)
  tcimovajs: TcimovajEntity[];

  @OneToMany(() => TfpctfEntity, (tfpctfEntity) => tfpctfEntity.coddep2)
  tfpctfs: TfpctfEntity[];

  @ManyToOne(() => TfpfisEntity, (tfpfisEntity) => tfpfisEntity.tfpdeps)
  @JoinColumn([{ name: 'CODREGFIS', referencedColumnName: 'codregfis' }])
  codregfis: TfpfisEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tfpdeps)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tfpdeps)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tfpdeps)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;

  @OneToMany(() => TfpdpeEntity, (tfpdpeEntity) => tfpdpeEntity.coddep2)
  tfpdpes: TfpdpeEntity[];

  @OneToMany(() => TfpfdpEntity, (tfpfdpEntity) => tfpfdpEntity.coddep2)
  tfpfdps: TfpfdpEntity[];

  @OneToMany(() => TfpfdsEntity, (tfpfdsEntity) => tfpfdsEntity.coddep2)
  tfpfds: TfpfdsEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.coddep)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfpgrdEntity, (tfpgrdEntity) => tfpgrdEntity.coddep2)
  tfpgrds: TfpgrdEntity[];

  @OneToMany(() => TfphdeEntity, (tfphdeEntity) => tfphdeEntity.coddep2)
  tfphdes: TfphdeEntity[];

  @OneToMany(() => TfphfuEntity, (tfphfuEntity) => tfphfuEntity.coddep)
  tfphfus: TfphfuEntity[];

  @OneToMany(() => TfpmrhEntity, (tfpmrhEntity) => tfpmrhEntity.coddep)
  tfpmrhs: TfpmrhEntity[];

  @OneToMany(() => TfppcaEntity, (tfppcaEntity) => tfppcaEntity.coddep)
  tfppcas: TfppcaEntity[];

  @OneToMany(
    () => TfpponraioEntity,
    (tfpponraioEntity) => tfpponraioEntity.coddep,
  )
  tfpponraios: TfpponraioEntity[];

  @OneToMany(() => TfppubEntity, (tfppubEntity) => tfppubEntity.coddep)
  tfppubs: TfppubEntity[];

  @OneToMany(() => TfpreqadmEntity, (tfpreqadmEntity) => tfpreqadmEntity.coddep)
  tfpreqadms: TfpreqadmEntity[];

  @OneToMany(() => TfpvpjEntity, (tfpvpjEntity) => tfpvpjEntity.coddep)
  tfpvpjs: TfpvpjEntity[];

  @OneToMany(() => TgpavaEntity, (tgpavaEntity) => tgpavaEntity.coddep)
  tgpavas: TgpavaEntity[];

  @OneToMany(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.coddep)
  trsreqs: TrsreqEntity[];
}
