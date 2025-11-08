import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfcanuEntity } from './tFCANU.entity';
import { TfcbcoEntity } from './tFCBCO.entity';
import { TfppcgEntity } from './tFPPCG.entity';
import { TfphisEntity } from './tFPHIS.entity';
import { TpqgrpEntity } from './tPQGRP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgpescEntity } from './tGPESC.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TgpdesEntity } from './tGPDES.entity';
import { TgpdpaEntity } from './tGPDPA.entity';
import { TgpdpcEntity } from './tGPDPC.entity';
import { TgpfcfEntity } from './tGPFCF.entity';
import { TgpfcpEntity } from './tGPFCP.entity';
import { TgpicpEntity } from './tGPICP.entity';
import { TgpidaEntity } from './tGPIDA.entity';
import { TgpidcEntity } from './tGPIDC.entity';
import { TgpperEntity } from './tGPPER.entity';
import { TgprepEntity } from './tGPREP.entity';
import { TgptcpEntity } from './tGPTCP.entity';
import { TpqpfiEntity } from './tPQPFI.entity';
import { TrsperEntity } from './tRSPER.entity';

@Index('PK_TFPPER', ['codperfil'], { unique: true })
@Entity('TFPPER', { schema: 'SANKHYA' })
export class TfpperEntity {
  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('char', { name: 'DESCRPERFIL', length: 60 })
  descrperfil: string;

  @Column('int', { name: 'CODPERFILPAI' })
  codperfilpai: number;

  @Column('smallint', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('char', { name: 'EXAME', length: 1, default: () => "'N'" })
  exame: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'REQUISITO', length: 1, default: () => "'N'" })
  requisito: string;

  @Column('char', { name: 'NIVELHIER', length: 1, default: () => "'N'" })
  nivelhier: string;

  @Column('char', { name: 'AREAPROF', length: 1, default: () => "'N'" })
  areaprof: string;

  @Column('char', { name: 'COMPETENCIA', length: 1, default: () => "'N'" })
  competencia: string;

  @Column('char', { name: 'ARC', length: 1, default: () => "'N'" })
  arc: string;

  @Column('char', { name: 'TREINAMENTO', length: 1, default: () => "'N'" })
  treinamento: string;

  @Column('varchar', { name: 'CONCEITO', nullable: true, length: 250 })
  conceito: string | null;

  @Column('char', { name: 'TIPCOMPETENCIA', length: 1, default: () => "'T'" })
  tipcompetencia: string;

  @Column('char', { name: 'CPTTREINAVEL', length: 1, default: () => "'N'" })
  cpttreinavel: string;

  @Column('char', { name: 'ATIVIDADE', length: 1, default: () => "'N'" })
  atividade: string;

  @OneToMany(() => TfcanuEntity, (tfcanuEntity) => tfcanuEntity.codperfilArea)
  tfcanus: TfcanuEntity[];

  @OneToMany(() => TfcanuEntity, (tfcanuEntity) => tfcanuEntity.codperfilNivel)
  tfcanus2: TfcanuEntity[];

  @ManyToMany(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.tfppers)
  tfcbcos: TfcbcoEntity[];

  @OneToMany(() => TfppcgEntity, (tfppcgEntity) => tfppcgEntity.codperfil2)
  tfppcgs: TfppcgEntity[];

  @ManyToOne(() => TfphisEntity, (tfphisEntity) => tfphisEntity.tfppers)
  @JoinColumn([{ name: 'CODHISTOCOR', referencedColumnName: 'codhistocor' }])
  codhistocor: TfphisEntity;

  @ManyToOne(() => TpqgrpEntity, (tpqgrpEntity) => tpqgrpEntity.tfppers)
  @JoinColumn([{ name: 'CODGRUPOPERG', referencedColumnName: 'codgrupoperg' }])
  codgrupoperg: TpqgrpEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppers)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tfppers)
  @JoinColumn([{ name: 'CODESCALA', referencedColumnName: 'codescala' }])
  codescala: TgpescEntity;

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tfppers2)
  @JoinColumn([{ name: 'CODESCALAARC', referencedColumnName: 'codescala' }])
  codescalaarc: TgpescEntity;

  @ManyToMany(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tfppers)
  @JoinTable({
    name: 'TFPPSC',
    joinColumns: [{ name: 'CODPERFIL', referencedColumnName: 'codperfil' }],
    inverseJoinColumns: [
      { name: 'CODCARGO', referencedColumnName: 'codcargo' },
    ],
    schema: 'SANKHYA',
  })
  tfpcars: TfpcarEntity[];

  @OneToMany(() => TgpdesEntity, (tgpdesEntity) => tgpdesEntity.codperfil2)
  tgpdes: TgpdesEntity[];

  @OneToMany(() => TgpdpaEntity, (tgpdpaEntity) => tgpdpaEntity.codperfil2)
  tgpdpas: TgpdpaEntity[];

  @OneToMany(() => TgpdpcEntity, (tgpdpcEntity) => tgpdpcEntity.codcompetencia2)
  tgpdpcs: TgpdpcEntity[];

  @OneToMany(() => TgpfcfEntity, (tgpfcfEntity) => tgpfcfEntity.codperfil2)
  tgpfcfs: TgpfcfEntity[];

  @OneToMany(() => TgpfcpEntity, (tgpfcpEntity) => tgpfcpEntity.codcompetencia2)
  tgpfcps: TgpfcpEntity[];

  @OneToMany(() => TgpicpEntity, (tgpicpEntity) => tgpicpEntity.codcompetencia2)
  tgpicps: TgpicpEntity[];

  @OneToMany(() => TgpidaEntity, (tgpidaEntity) => tgpidaEntity.codperfil2)
  tgpidas: TgpidaEntity[];

  @OneToMany(() => TgpidcEntity, (tgpidcEntity) => tgpidcEntity.codcompetencia2)
  tgpidcs: TgpidcEntity[];

  @OneToMany(() => TgpperEntity, (tgpperEntity) => tgpperEntity.codperfil2)
  tgppers: TgpperEntity[];

  @OneToMany(() => TgprepEntity, (tgprepEntity) => tgprepEntity.codperfil2)
  tgpreps: TgprepEntity[];

  @OneToMany(() => TgptcpEntity, (tgptcpEntity) => tgptcpEntity.codcompetencia2)
  tgptcps: TgptcpEntity[];

  @OneToMany(() => TpqpfiEntity, (tpqpfiEntity) => tpqpfiEntity.codperfil2)
  tpqpfis: TpqpfiEntity[];

  @OneToMany(() => TrsperEntity, (trsperEntity) => trsperEntity.codperfil2)
  trspers: TrsperEntity[];
}
