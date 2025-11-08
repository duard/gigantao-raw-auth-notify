import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { Tgfdimesccfg30Entity } from './tGFDIMESCCFG30.entity';
import { Tgfdimesccfg33Entity } from './tGFDIMESCCFG33.entity';
import { Tgfdimesccfg48Entity } from './tGFDIMESCCFG48.entity';
import { Tgfdimesccfg81Entity } from './tGFDIMESCCFG81.entity';
import { Tgfdimesccfg82Entity } from './tGFDIMESCCFG82.entity';
import { Tgfdimesccfg83Entity } from './tGFDIMESCCFG83.entity';
import { Tgfdimesccfg84Entity } from './tGFDIMESCCFG84.entity';
import { Tgfdimesccfg85Entity } from './tGFDIMESCCFG85.entity';
import { Tgfdimescr22Entity } from './tGFDIMESCR22.entity';
import { Tgfdimescr23Entity } from './tGFDIMESCR23.entity';
import { Tgfdimescr24Entity } from './tGFDIMESCR24.entity';
import { Tgfdimescr25Entity } from './tGFDIMESCR25.entity';
import { Tgfdimescr26Entity } from './tGFDIMESCR26.entity';
import { Tgfdimescr30Entity } from './tGFDIMESCR30.entity';
import { Tgfdimescr31Entity } from './tGFDIMESCR31.entity';
import { Tgfdimescr32Entity } from './tGFDIMESCR32.entity';
import { Tgfdimescr33Entity } from './tGFDIMESCR33.entity';
import { Tgfdimescr34Entity } from './tGFDIMESCR34.entity';
import { Tgfdimescr35Entity } from './tGFDIMESCR35.entity';
import { Tgfdimescr36Entity } from './tGFDIMESCR36.entity';
import { Tgfdimescr37Entity } from './tGFDIMESCR37.entity';
import { Tgfdimescr41Entity } from './tGFDIMESCR41.entity';
import { Tgfdimescr42Entity } from './tGFDIMESCR42.entity';
import { Tgfdimescr46Entity } from './tGFDIMESCR46.entity';
import { Tgfdimescr47Entity } from './tGFDIMESCR47.entity';
import { Tgfdimescr48Entity } from './tGFDIMESCR48.entity';
import { Tgfdimescr49Entity } from './tGFDIMESCR49.entity';
import { Tgfdimescr50Entity } from './tGFDIMESCR50.entity';
import { Tgfdimescr51Entity } from './tGFDIMESCR51.entity';
import { Tgfdimescr80Entity } from './tGFDIMESCR80.entity';
import { Tgfdimescr81Entity } from './tGFDIMESCR81.entity';
import { Tgfdimescr82Entity } from './tGFDIMESCR82.entity';
import { Tgfdimescr83Entity } from './tGFDIMESCR83.entity';
import { Tgfdimescr84Entity } from './tGFDIMESCR84.entity';
import { Tgfdimescr85Entity } from './tGFDIMESCR85.entity';
import { Tgfdimescr90Entity } from './tGFDIMESCR90.entity';
import { Tgfdimescr91Entity } from './tGFDIMESCR91.entity';
import { Tgfdimescr92Entity } from './tGFDIMESCR92.entity';
import { Tgfdimescr93Entity } from './tGFDIMESCR93.entity';
import { Tgfdimescr94Entity } from './tGFDIMESCR94.entity';
import { Tgfdimescr98Entity } from './tGFDIMESCR98.entity';
import { Tgfdimescr99Entity } from './tGFDIMESCR99.entity';

@Index('PK_TGFDIMESC', ['codemp', 'dtref'], { unique: true })
@Entity('TGFDIMESC', { schema: 'SANKHYA' })
export class TgfdimescEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { name: 'TPDECLARACAO' })
  tpdeclaracao: number;

  @Column('smallint', { name: 'TPREGIME', nullable: true })
  tpregime: number | null;

  @Column('smallint', { name: 'TPAPURCONSOLIDA', nullable: true })
  tpapurconsolida: number | null;

  @Column('smallint', { name: 'TPTRANSFCREDITO', nullable: true })
  tptransfcredito: number | null;

  @Column('smallint', { name: 'TPMOVIMENTO', nullable: true })
  tpmovimento: number | null;

  @Column('smallint', { name: 'TPSUBSTIT', nullable: true })
  tpsubstit: number | null;

  @Column('smallint', { name: 'TPESCCONTABIL', nullable: true })
  tpesccontabil: number | null;

  @Column('smallint', { name: 'QTDTRABALHADOR', nullable: true })
  qtdtrabalhador: number | null;

  @Column('varchar', { name: 'INFANUAL', nullable: true, length: 1 })
  infanual: string | null;

  @Column('varchar', { name: 'INFENCERRAMENTO', nullable: true, length: 1 })
  infencerramento: string | null;

  @Column('varchar', { name: 'INFREGESPECIAL', nullable: true, length: 1 })
  infregespecial: string | null;

  @Column('varchar', { name: 'REPROCESSATOT', nullable: true, length: 1 })
  reprocessatot: string | null;

  @Column('varchar', { name: 'CONSDIFAL', nullable: true, length: 1 })
  consdifal: string | null;

  @Column('varchar', { name: 'CONSVLRCONTZERO', nullable: true, length: 1 })
  consvlrcontzero: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdimescs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(
    () => Tgfdimesccfg30Entity,
    (tgfdimesccfg30Entity) => tgfdimesccfg30Entity.tgfdimesc,
  )
  tgfdimesccfgs: Tgfdimesccfg30Entity[];

  @OneToMany(
    () => Tgfdimesccfg33Entity,
    (tgfdimesccfg33Entity) => tgfdimesccfg33Entity.tgfdimesc,
  )
  tgfdimesccfgs2: Tgfdimesccfg33Entity[];

  @OneToMany(
    () => Tgfdimesccfg48Entity,
    (tgfdimesccfg48Entity) => tgfdimesccfg48Entity.tgfdimesc,
  )
  tgfdimesccfgs3: Tgfdimesccfg48Entity[];

  @OneToMany(
    () => Tgfdimesccfg81Entity,
    (tgfdimesccfg81Entity) => tgfdimesccfg81Entity.tgfdimesc,
  )
  tgfdimesccfgs4: Tgfdimesccfg81Entity[];

  @OneToMany(
    () => Tgfdimesccfg82Entity,
    (tgfdimesccfg82Entity) => tgfdimesccfg82Entity.tgfdimesc,
  )
  tgfdimesccfgs5: Tgfdimesccfg82Entity[];

  @OneToMany(
    () => Tgfdimesccfg83Entity,
    (tgfdimesccfg83Entity) => tgfdimesccfg83Entity.tgfdimesc,
  )
  tgfdimesccfgs6: Tgfdimesccfg83Entity[];

  @OneToMany(
    () => Tgfdimesccfg84Entity,
    (tgfdimesccfg84Entity) => tgfdimesccfg84Entity.tgfdimesc,
  )
  tgfdimesccfgs7: Tgfdimesccfg84Entity[];

  @OneToMany(
    () => Tgfdimesccfg85Entity,
    (tgfdimesccfg85Entity) => tgfdimesccfg85Entity.tgfdimesc,
  )
  tgfdimesccfgs8: Tgfdimesccfg85Entity[];

  @OneToMany(
    () => Tgfdimescr22Entity,
    (tgfdimescr22Entity) => tgfdimescr22Entity.tgfdimesc,
  )
  tgfdimescrs: Tgfdimescr22Entity[];

  @OneToMany(
    () => Tgfdimescr23Entity,
    (tgfdimescr23Entity) => tgfdimescr23Entity.tgfdimesc,
  )
  tgfdimescrs2: Tgfdimescr23Entity[];

  @OneToMany(
    () => Tgfdimescr24Entity,
    (tgfdimescr24Entity) => tgfdimescr24Entity.tgfdimesc,
  )
  tgfdimescrs3: Tgfdimescr24Entity[];

  @OneToMany(
    () => Tgfdimescr25Entity,
    (tgfdimescr25Entity) => tgfdimescr25Entity.tgfdimesc,
  )
  tgfdimescrs4: Tgfdimescr25Entity[];

  @OneToMany(
    () => Tgfdimescr26Entity,
    (tgfdimescr26Entity) => tgfdimescr26Entity.tgfdimesc,
  )
  tgfdimescrs5: Tgfdimescr26Entity[];

  @OneToMany(
    () => Tgfdimescr30Entity,
    (tgfdimescr30Entity) => tgfdimescr30Entity.tgfdimesc,
  )
  tgfdimescrs6: Tgfdimescr30Entity[];

  @OneToMany(
    () => Tgfdimescr31Entity,
    (tgfdimescr31Entity) => tgfdimescr31Entity.tgfdimesc,
  )
  tgfdimescrs7: Tgfdimescr31Entity[];

  @OneToMany(
    () => Tgfdimescr32Entity,
    (tgfdimescr32Entity) => tgfdimescr32Entity.tgfdimesc,
  )
  tgfdimescrs8: Tgfdimescr32Entity[];

  @OneToMany(
    () => Tgfdimescr33Entity,
    (tgfdimescr33Entity) => tgfdimescr33Entity.tgfdimesc,
  )
  tgfdimescrs9: Tgfdimescr33Entity[];

  @OneToMany(
    () => Tgfdimescr34Entity,
    (tgfdimescr34Entity) => tgfdimescr34Entity.tgfdimesc,
  )
  tgfdimescr10: Tgfdimescr34Entity[];

  @OneToMany(
    () => Tgfdimescr35Entity,
    (tgfdimescr35Entity) => tgfdimescr35Entity.tgfdimesc,
  )
  tgfdimescr11: Tgfdimescr35Entity[];

  @OneToMany(
    () => Tgfdimescr36Entity,
    (tgfdimescr36Entity) => tgfdimescr36Entity.tgfdimesc,
  )
  tgfdimescr12: Tgfdimescr36Entity[];

  @OneToMany(
    () => Tgfdimescr37Entity,
    (tgfdimescr37Entity) => tgfdimescr37Entity.tgfdimesc,
  )
  tgfdimescr13: Tgfdimescr37Entity[];

  @OneToMany(
    () => Tgfdimescr41Entity,
    (tgfdimescr41Entity) => tgfdimescr41Entity.tgfdimesc,
  )
  tgfdimescr14: Tgfdimescr41Entity[];

  @OneToMany(
    () => Tgfdimescr42Entity,
    (tgfdimescr42Entity) => tgfdimescr42Entity.tgfdimesc,
  )
  tgfdimescr15: Tgfdimescr42Entity[];

  @OneToMany(
    () => Tgfdimescr46Entity,
    (tgfdimescr46Entity) => tgfdimescr46Entity.tgfdimesc,
  )
  tgfdimescr16: Tgfdimescr46Entity[];

  @OneToMany(
    () => Tgfdimescr47Entity,
    (tgfdimescr47Entity) => tgfdimescr47Entity.tgfdimesc,
  )
  tgfdimescr17: Tgfdimescr47Entity[];

  @OneToMany(
    () => Tgfdimescr48Entity,
    (tgfdimescr48Entity) => tgfdimescr48Entity.tgfdimesc,
  )
  tgfdimescr18: Tgfdimescr48Entity[];

  @OneToMany(
    () => Tgfdimescr49Entity,
    (tgfdimescr49Entity) => tgfdimescr49Entity.tgfdimesc,
  )
  tgfdimescr19: Tgfdimescr49Entity[];

  @OneToMany(
    () => Tgfdimescr50Entity,
    (tgfdimescr50Entity) => tgfdimescr50Entity.tgfdimesc,
  )
  tgfdimescr20: Tgfdimescr50Entity[];

  @OneToMany(
    () => Tgfdimescr51Entity,
    (tgfdimescr51Entity) => tgfdimescr51Entity.tgfdimesc,
  )
  tgfdimescr21: Tgfdimescr51Entity[];

  @OneToMany(
    () => Tgfdimescr80Entity,
    (tgfdimescr80Entity) => tgfdimescr80Entity.tgfdimesc,
  )
  tgfdimescr22: Tgfdimescr80Entity[];

  @OneToMany(
    () => Tgfdimescr81Entity,
    (tgfdimescr81Entity) => tgfdimescr81Entity.tgfdimesc,
  )
  tgfdimescr23: Tgfdimescr81Entity[];

  @OneToMany(
    () => Tgfdimescr82Entity,
    (tgfdimescr82Entity) => tgfdimescr82Entity.tgfdimesc,
  )
  tgfdimescr24: Tgfdimescr82Entity[];

  @OneToMany(
    () => Tgfdimescr83Entity,
    (tgfdimescr83Entity) => tgfdimescr83Entity.tgfdimesc,
  )
  tgfdimescr25: Tgfdimescr83Entity[];

  @OneToMany(
    () => Tgfdimescr84Entity,
    (tgfdimescr84Entity) => tgfdimescr84Entity.tgfdimesc,
  )
  tgfdimescr26: Tgfdimescr84Entity[];

  @OneToMany(
    () => Tgfdimescr85Entity,
    (tgfdimescr85Entity) => tgfdimescr85Entity.tgfdimesc,
  )
  tgfdimescr27: Tgfdimescr85Entity[];

  @OneToMany(
    () => Tgfdimescr90Entity,
    (tgfdimescr90Entity) => tgfdimescr90Entity.tgfdimesc,
  )
  tgfdimescr28: Tgfdimescr90Entity[];

  @OneToMany(
    () => Tgfdimescr91Entity,
    (tgfdimescr91Entity) => tgfdimescr91Entity.tgfdimesc,
  )
  tgfdimescr29: Tgfdimescr91Entity[];

  @OneToMany(
    () => Tgfdimescr92Entity,
    (tgfdimescr92Entity) => tgfdimescr92Entity.tgfdimesc,
  )
  tgfdimescr30: Tgfdimescr92Entity[];

  @OneToMany(
    () => Tgfdimescr93Entity,
    (tgfdimescr93Entity) => tgfdimescr93Entity.tgfdimesc,
  )
  tgfdimescr31: Tgfdimescr93Entity[];

  @OneToMany(
    () => Tgfdimescr94Entity,
    (tgfdimescr94Entity) => tgfdimescr94Entity.tgfdimesc,
  )
  tgfdimescr32: Tgfdimescr94Entity[];

  @OneToMany(
    () => Tgfdimescr98Entity,
    (tgfdimescr98Entity) => tgfdimescr98Entity.tgfdimesc,
  )
  tgfdimescr33: Tgfdimescr98Entity[];

  @OneToMany(
    () => Tgfdimescr99Entity,
    (tgfdimescr99Entity) => tgfdimescr99Entity.tgfdimesc,
  )
  tgfdimescr34: Tgfdimescr99Entity[];
}
