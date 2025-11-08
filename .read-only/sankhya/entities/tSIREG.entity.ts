import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfrpvEntity } from './tGFRPV.entity';
import { TgftabEntity } from './tGFTAB.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgfvisEntity } from './tGFVIS.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TjctabEntity } from './tJCTAB.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TsicidEntity } from './tSICID.entity';

@Index('PK_TSIREG', ['codreg'], { unique: true })
@Entity('TSIREG', { schema: 'SANKHYA' })
export class TsiregEntity {
  @Column('int', { primary: true, name: 'CODREG' })
  codreg: number;

  @Column('char', { name: 'NOMEREG', length: 20 })
  nomereg: string;

  @Column('money', { name: 'FRETEMIN', nullable: true })
  fretemin: number | null;

  @Column('smallint', { name: 'GRAU', default: () => '(0)' })
  grau: number;

  @Column('char', { name: 'ANALITICA', length: 1, default: () => "'S'" })
  analitica: string;

  @Column('int', { name: 'CODREGPAI', default: () => '(-999999999)' })
  codregpai: number;

  @Column('char', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @Column('smallint', { name: 'CODVEND', nullable: true })
  codvend: number | null;

  @Column('money', { name: 'VLRANTECIPACAO', nullable: true })
  vlrantecipacao: number | null;

  @Column('char', { name: 'GERARRECEITA', length: 1, default: () => "'S'" })
  gerarreceita: string;

  @Column('float', { name: 'PERCADICIONAL', nullable: true, precision: 53 })
  percadicional: number | null;

  @Column('float', { name: 'PERCPREMIO', nullable: true, precision: 53 })
  percpremio: number | null;

  @Column('float', { name: 'PERCCUSVAR', nullable: true, precision: 53 })
  perccusvar: number | null;

  @Column('float', { name: 'SEMANA1_DOM', nullable: true, precision: 53 })
  semana1Dom: number | null;

  @Column('float', { name: 'SEMANA1_SEG', nullable: true, precision: 53 })
  semana1Seg: number | null;

  @Column('float', { name: 'SEMANA1_TER', nullable: true, precision: 53 })
  semana1Ter: number | null;

  @Column('float', { name: 'SEMANA1_QUA', nullable: true, precision: 53 })
  semana1Qua: number | null;

  @Column('float', { name: 'SEMANA1_QUI', nullable: true, precision: 53 })
  semana1Qui: number | null;

  @Column('float', { name: 'SEMANA1_SEX', nullable: true, precision: 53 })
  semana1Sex: number | null;

  @Column('float', { name: 'SEMANA1_SAB', nullable: true, precision: 53 })
  semana1Sab: number | null;

  @Column('float', { name: 'SEMANA2_DOM', nullable: true, precision: 53 })
  semana2Dom: number | null;

  @Column('float', { name: 'SEMANA2_SEG', nullable: true, precision: 53 })
  semana2Seg: number | null;

  @Column('float', { name: 'SEMANA2_TER', nullable: true, precision: 53 })
  semana2Ter: number | null;

  @Column('float', { name: 'SEMANA2_QUA', nullable: true, precision: 53 })
  semana2Qua: number | null;

  @Column('float', { name: 'SEMANA2_QUI', nullable: true, precision: 53 })
  semana2Qui: number | null;

  @Column('float', { name: 'SEMANA2_SEX', nullable: true, precision: 53 })
  semana2Sex: number | null;

  @Column('float', { name: 'SEMANA2_SAB', nullable: true, precision: 53 })
  semana2Sab: number | null;

  @Column('float', { name: 'PERCMETA', nullable: true, precision: 53 })
  percmeta: number | null;

  @Column('float', { name: 'PERCDESCFOB', nullable: true, precision: 53 })
  percdescfob: number | null;

  @Column('float', { name: 'VENDAMIN', nullable: true, precision: 53 })
  vendamin: number | null;

  @OneToMany(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.codreg)
  tgfctts: TgfcttEntity[];

  @OneToMany(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.codreg)
  tgfntas: TgfntaEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codreg)
  tgfords: TgfordEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codreg)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfrpvEntity, (tgfrpvEntity) => tgfrpvEntity.codreg2)
  tgfrpvs: TgfrpvEntity[];

  @OneToMany(() => TgftabEntity, (tgftabEntity) => tgftabEntity.codreg)
  tgftabs: TgftabEntity[];

  @OneToMany(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.codreg)
  tgfvens: TgfvenEntity[];

  @OneToMany(() => TgfvisEntity, (tgfvisEntity) => tgfvisEntity.codreg2)
  tgfvis: TgfvisEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotregiao)
  timlots: TimlotEntity[];

  @OneToMany(() => TjctabEntity, (tjctabEntity) => tjctabEntity.codreg2)
  tjctabs: TjctabEntity[];

  @OneToMany(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.codreg)
  tsibais: TsibaiEntity[];

  @OneToMany(() => TsicidEntity, (tsicidEntity) => tsicidEntity.codreg)
  tsics: TsicidEntity[];

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tsiregs)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tsiregs2)
  @JoinColumn([{ name: 'CODTABMIN', referencedColumnName: 'codtab' }])
  codtabmin: TgfntaEntity;
}
