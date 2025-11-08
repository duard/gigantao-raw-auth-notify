import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdCadhabEntity } from './aD_CADHAB.entity';
import { AdSirvoEntity } from './aD_SIRVO.entity';
import { TfccarEntity } from './tFCCAR.entity';
import { TfpnivEntity } from './tFPNIV.entity';
import { TgpescEntity } from './tGPESC.entity';
import { TfpgcaEntity } from './tFPGCA.entity';
import { TfpcboEntity } from './tFPCBO.entity';
import { TfpcrrEntity } from './tFPCRR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpcevEntity } from './tFPCEV.entity';
import { TfpcgeEntity } from './tFPCGE.entity';
import { TfpfcaEntity } from './tFPFCA.entity';
import { TfpfdsEntity } from './tFPFDS.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfphfuEntity } from './tFPHFU.entity';
import { TfpismEntity } from './tFPISM.entity';
import { TfplotEntity } from './tFPLOT.entity';
import { TfppcgEntity } from './tFPPCG.entity';
import { TfpperEntity } from './tFPPER.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';
import { TgpavaEntity } from './tGPAVA.entity';
import { TgpccrEntity } from './tGPCCR.entity';
import { TgpigsEntity } from './tGPIGS.entity';
import { TgpnvcEntity } from './tGPNVC.entity';
import { TgpqueEntity } from './tGPQUE.entity';
import { TgprelEntity } from './tGPREL.entity';
import { TgprepEntity } from './tGPREP.entity';
import { TrsecgEntity } from './tRSECG.entity';
import { TrsreqEntity } from './tRSREQ.entity';

@Index('PK_TFPCAR', ['codcargo'], { unique: true })
@Entity('TFPCAR', { schema: 'SANKHYA' })
export class TfpcarEntity {
  @Column('int', { primary: true, name: 'CODCARGO' })
  codcargo: number;

  @Column('varchar', { name: 'DESCRCARGO', length: 100 })
  descrcargo: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('text', { name: 'RESPONSABILIDADES', nullable: true })
  responsabilidades: string | null;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'CONTAGEMTEMPO', length: 1, default: () => '(1)' })
  contagemtempo: string;

  @Column('varchar', {
    name: 'TECNICOCIENTIFICO',
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  tecnicocientifico: string | null;

  @Column('smallint', { name: 'ORIGATIV', default: () => '(1)' })
  origativ: number;

  @Column('char', { name: 'DEDICACAOEXC', length: 1, default: () => "'N'" })
  dedicacaoexc: string;

  @Column('char', { name: 'APOSENTAESP', length: 1, default: () => "'N'" })
  aposentaesp: string;

  @Column('char', { name: 'POSSUINIVEL', length: 1, default: () => "'N'" })
  possuinivel: string;

  @Column('smallint', { name: 'ACUMCARGO', nullable: true })
  acumcargo: number | null;

  @Column('smallint', { name: 'CONTAGEMESP', nullable: true })
  contagemesp: number | null;

  @Column('varchar', { name: 'NRLEI', nullable: true, length: 12 })
  nrlei: string | null;

  @Column('datetime', { name: 'DTLEI', nullable: true })
  dtlei: Date | null;

  @Column('smallint', { name: 'SITCARGO', nullable: true })
  sitcargo: number | null;

  @Column('char', { name: 'USADOESOCIAL', length: 1, default: () => "'N'" })
  usadoesocial: string;

  @Column('smallint', { name: 'TEMPOASO', nullable: true })
  tempoaso: number | null;

  @Column('varchar', { name: 'AD_EXIGECNH', nullable: true, length: 10 })
  adExigecnh: string | null;

  @Column('float', { name: 'AD_SALBASE', nullable: true, precision: 53 })
  adSalbase: number | null;

  @ManyToMany(() => AdCadhabEntity, (adCadhabEntity) => adCadhabEntity.tfpcars)
  adCadhabs: AdCadhabEntity[];

  @OneToMany(() => AdSirvoEntity, (adSirvoEntity) => adSirvoEntity.codcargo)
  adSirvos: AdSirvoEntity[];

  @OneToMany(() => TfccarEntity, (tfccarEntity) => tfccarEntity.codcargo2)
  tfccars: TfccarEntity[];

  @ManyToOne(() => TfpnivEntity, (tfpnivEntity) => tfpnivEntity.tfpcars)
  @JoinColumn([{ name: 'CODNIVELINI', referencedColumnName: 'codnivelref' }])
  codnivelini: TfpnivEntity;

  @ManyToOne(() => TfpnivEntity, (tfpnivEntity) => tfpnivEntity.tfpcars2)
  @JoinColumn([{ name: 'CODNIVELFIM', referencedColumnName: 'codnivelref' }])
  codnivelfim: TfpnivEntity;

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tfpcars)
  @JoinColumn([{ name: 'CODESCALA', referencedColumnName: 'codescala' }])
  codescala: TgpescEntity;

  @ManyToOne(() => TfpgcaEntity, (tfpgcaEntity) => tfpgcaEntity.tfpcars)
  @JoinColumn([
    { name: 'CODGRUPOCARGO', referencedColumnName: 'codgrupocargo' },
  ])
  codgrupocargo: TfpgcaEntity;

  @ManyToOne(() => TfpcboEntity, (tfpcboEntity) => tfpcboEntity.tfpcars)
  @JoinColumn([{ name: 'CODCBO', referencedColumnName: 'codcbo' }])
  codcbo: TfpcboEntity;

  @ManyToOne(() => TfpcrrEntity, (tfpcrrEntity) => tfpcrrEntity.tfpcars)
  @JoinColumn([{ name: 'CODCARREIRA', referencedColumnName: 'codcarreira' }])
  codcarreira: TfpcrrEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpcars)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfpcevEntity, (tfpcevEntity) => tfpcevEntity.codcargo2)
  tfpcevs: TfpcevEntity[];

  @OneToMany(() => TfpcgeEntity, (tfpcgeEntity) => tfpcgeEntity.codcargo2)
  tfpcges: TfpcgeEntity[];

  @OneToMany(() => TfpfcaEntity, (tfpfcaEntity) => tfpfcaEntity.codcargo2)
  tfpfcas: TfpfcaEntity[];

  @OneToMany(() => TfpfdsEntity, (tfpfdsEntity) => tfpfdsEntity.codcargo2)
  tfpfds: TfpfdsEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codcargo)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfphfuEntity, (tfphfuEntity) => tfphfuEntity.codcargo)
  tfphfus: TfphfuEntity[];

  @OneToMany(() => TfpismEntity, (tfpismEntity) => tfpismEntity.codcargo2)
  tfpisms: TfpismEntity[];

  @OneToMany(() => TfplotEntity, (tfplotEntity) => tfplotEntity.codcargo2)
  tfplots: TfplotEntity[];

  @OneToMany(() => TfppcgEntity, (tfppcgEntity) => tfppcgEntity.codcargo2)
  tfppcgs: TfppcgEntity[];

  @ManyToMany(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tfpcars)
  tfppers: TfpperEntity[];

  @OneToMany(
    () => TfpreqadmEntity,
    (tfpreqadmEntity) => tfpreqadmEntity.codcargo,
  )
  tfpreqadms: TfpreqadmEntity[];

  @OneToMany(() => TgpavaEntity, (tgpavaEntity) => tgpavaEntity.codcargo)
  tgpavas: TgpavaEntity[];

  @OneToMany(() => TgpccrEntity, (tgpccrEntity) => tgpccrEntity.codcargo2)
  tgpccrs: TgpccrEntity[];

  @OneToMany(() => TgpigsEntity, (tgpigsEntity) => tgpigsEntity.codcargo)
  tgpigs: TgpigsEntity[];

  @OneToMany(() => TgpnvcEntity, (tgpnvcEntity) => tgpnvcEntity.codcargo2)
  tgpnvcs: TgpnvcEntity[];

  @OneToMany(() => TgpqueEntity, (tgpqueEntity) => tgpqueEntity.codcargo2)
  tgpques: TgpqueEntity[];

  @OneToMany(() => TgprelEntity, (tgprelEntity) => tgprelEntity.codcargo2)
  tgprels: TgprelEntity[];

  @OneToMany(() => TgprepEntity, (tgprepEntity) => tgprepEntity.codcargo2)
  tgpreps: TgprepEntity[];

  @OneToMany(() => TrsecgEntity, (trsecgEntity) => trsecgEntity.codcargo2)
  trsecgs: TrsecgEntity[];

  @OneToMany(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.codcargo)
  trsreqs: TrsreqEntity[];
}
