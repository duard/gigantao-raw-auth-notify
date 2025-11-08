import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfipaEntity } from './tGFIPA.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfpcaEntity } from './tGFPCA.entity';
import { TgfpclEntity } from './tGFPCL.entity';
import { TgfpcpEntity } from './tGFPCP.entity';
import { TgfppdEntity } from './tGFPPD.entity';

@Index('PK_TGFIPC', ['nupca', 'codprod'], { unique: true })
@Entity('TGFIPC', { schema: 'SANKHYA' })
export class TgfipcEntity {
  @Column('int', { primary: true, name: 'NUPCA' })
  nupca: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'GIROMED', precision: 53, default: () => '(0)' })
  giromed: number;

  @Column('float', { name: 'GIROMEDREC', precision: 53, default: () => '(0)' })
  giromedrec: number;

  @Column('float', { name: 'DESVIO', precision: 53, default: () => '(0)' })
  desvio: number;

  @Column('float', { name: 'LEADTIME', precision: 53, default: () => '(0)' })
  leadtime: number;

  @Column('float', { name: 'LOTECOMPRAS', precision: 53, default: () => '(0)' })
  lotecompras: number;

  @Column('float', { name: 'ESTSEG', precision: 53, default: () => '(0)' })
  estseg: number;

  @Column('float', { name: 'DEMANDA', precision: 53, default: () => '(0)' })
  demanda: number;

  @Column('float', { name: 'ESTFISICO', precision: 53, default: () => '(0)' })
  estfisico: number;

  @Column('float', { name: 'PEDCOMPEN', precision: 53, default: () => '(0)' })
  pedcompen: number;

  @Column('float', { name: 'PEDVENPEN', precision: 53, default: () => '(0)' })
  pedvenpen: number;

  @Column('float', { name: 'ESTPREVISTO', precision: 53, default: () => '(0)' })
  estprevisto: number;

  @Column('float', { name: 'ESTFUTURO', precision: 53, default: () => '(0)' })
  estfuturo: number;

  @Column('float', {
    name: 'ESTFUTUROAJU',
    precision: 53,
    default: () => '(0)',
  })
  estfuturoaju: number;

  @Column('float', { name: 'SUGCOMPRA', precision: 53, default: () => '(0)' })
  sugcompra: number;

  @Column('float', { name: 'COMPRA', precision: 53, default: () => '(0)' })
  compra: number;

  @Column('smallint', { name: 'RUPCRITICA', default: () => '(0)' })
  rupcritica: number;

  @Column('smallint', { name: 'RUPACEITAVEL', default: () => '(0)' })
  rupaceitavel: number;

  @Column('float', {
    name: 'COMPRAPREVISTA',
    precision: 53,
    default: () => '(0)',
  })
  compraprevista: number;

  @Column('float', { name: 'PEDEFETIVO', precision: 53 })
  pedefetivo: number;

  @OneToMany(() => TgfipaEntity, (tgfipaEntity) => tgfipaEntity.tgfipc)
  tgfipas: TgfipaEntity[];

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfipcs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfpcaEntity, (tgfpcaEntity) => tgfpcaEntity.tgfipcs)
  @JoinColumn([{ name: 'NUPCA', referencedColumnName: 'nupca' }])
  nupca2: TgfpcaEntity;

  @OneToMany(() => TgfpclEntity, (tgfpclEntity) => tgfpclEntity.tgfipc)
  tgfpcls: TgfpclEntity[];

  @OneToMany(() => TgfpcpEntity, (tgfpcpEntity) => tgfpcpEntity.tgfipc)
  tgfpcps: TgfpcpEntity[];

  @OneToMany(() => TgfppdEntity, (tgfppdEntity) => tgfppdEntity.tgfipc)
  tgfppds: TgfppdEntity[];
}
