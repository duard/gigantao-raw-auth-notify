import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpcarEntity } from './tFPCAR.entity';
import { TfpfcoEntity } from './tFPFCO.entity';
import { TfpperEntity } from './tFPPER.entity';
import { TgpavaEntity } from './tGPAVA.entity';
import { TgpdesEntity } from './tGPDES.entity';
import { TgpdpaEntity } from './tGPDPA.entity';
import { TgpdpcEntity } from './tGPDPC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgpgreEntity } from './tGPGRE.entity';
import { TgpperEntity } from './tGPPER.entity';
import { TgptarEntity } from './tGPTAR.entity';

@Index('PK_TGPESC', ['codescala'], { unique: true })
@Entity('TGPESC', { schema: 'SANKHYA' })
export class TgpescEntity {
  @Column('int', { primary: true, name: 'CODESCALA' })
  codescala: number;

  @Column('varchar', { name: 'DESCRESCALA', nullable: true, length: 100 })
  descrescala: string | null;

  @Column('varchar', { name: 'CONCEITO', nullable: true, length: 250 })
  conceito: string | null;

  @Column('smallint', { name: 'TIPOESCALA', nullable: true })
  tipoescala: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'TIPOPONTUACAO', default: () => '(0)' })
  tipopontuacao: number;

  @Column('smallint', { name: 'GRAUALTOIMPACTO', nullable: true })
  graualtoimpacto: number | null;

  @OneToMany(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.codescala)
  tfpcars: TfpcarEntity[];

  @OneToMany(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.codescala)
  tfpfcos: TfpfcoEntity[];

  @OneToMany(() => TfpperEntity, (tfpperEntity) => tfpperEntity.codescala)
  tfppers: TfpperEntity[];

  @OneToMany(() => TfpperEntity, (tfpperEntity) => tfpperEntity.codescalaarc)
  tfppers2: TfpperEntity[];

  @OneToMany(() => TgpavaEntity, (tgpavaEntity) => tgpavaEntity.codescala)
  tgpavas: TgpavaEntity[];

  @OneToMany(() => TgpavaEntity, (tgpavaEntity) => tgpavaEntity.codescalaper)
  tgpavas2: TgpavaEntity[];

  @OneToMany(() => TgpdesEntity, (tgpdesEntity) => tgpdesEntity.codescalaniv)
  tgpdes: TgpdesEntity[];

  @OneToMany(() => TgpdesEntity, (tgpdesEntity) => tgpdesEntity.codescalaper)
  tgpdes2: TgpdesEntity[];

  @OneToMany(() => TgpdpaEntity, (tgpdpaEntity) => tgpdpaEntity.codescala)
  tgpdpas: TgpdpaEntity[];

  @OneToMany(() => TgpdpcEntity, (tgpdpcEntity) => tgpdpcEntity.codescala)
  tgpdpcs: TgpdpcEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpescs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgpgreEntity, (tgpgreEntity) => tgpgreEntity.codescala2)
  tgpgres: TgpgreEntity[];

  @OneToMany(() => TgpperEntity, (tgpperEntity) => tgpperEntity.codescala2)
  tgppers: TgpperEntity[];

  @OneToMany(() => TgptarEntity, (tgptarEntity) => tgptarEntity.codescala)
  tgptars: TgptarEntity[];
}
