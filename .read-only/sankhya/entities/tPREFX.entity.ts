import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TpratvEntity } from './tPRATV.entity';
import { TprprcEntity } from './tPRPRC.entity';
import { TprevpiEntity } from './tPREVPI.entity';
import { TprevtEntity } from './tPREVT.entity';
import { TprfrmeEntity } from './tPRFRME.entity';
import { TprfxtEntity } from './tPRFXT.entity';
import { TprgtwEntity } from './tPRGTW.entity';
import { TprirpaEntity } from './tPRIRPA.entity';
import { TprlndEntity } from './tPRLND.entity';
import { TproestEntity } from './tPROEST.entity';
import { TprpefxEntity } from './tPRPEFX.entity';
import { TprrwaEntity } from './tPRRWA.entity';
import { TprtfxEntity } from './tPRTFX.entity';

@Index('PK_TPREFX', ['idefx'], { unique: true })
@Index('TPREFX_I01', ['idproc'], {})
@Entity('TPREFX', { schema: 'SANKHYA' })
export class TprefxEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('int', { name: 'IDPROC' })
  idproc: number;

  @Column('smallint', { name: 'TIPO', default: () => '(1101)' })
  tipo: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 255 })
  descricao: string | null;

  @Column('float', { name: 'X1POS', nullable: true, precision: 53 })
  x1Pos: number | null;

  @Column('float', { name: 'Y1POS', nullable: true, precision: 53 })
  y1Pos: number | null;

  @Column('float', { name: 'X2POS', nullable: true, precision: 53 })
  x2Pos: number | null;

  @Column('float', { name: 'Y2POS', nullable: true, precision: 53 })
  y2Pos: number | null;

  @Column('varchar', { name: 'CORPREENCHIMENTO', nullable: true, length: 6 })
  corpreenchimento: string | null;

  @Column('smallint', { name: 'TAMFONTE', nullable: true })
  tamfonte: number | null;

  @Column('varchar', { name: 'CORFONTE', nullable: true, length: 6 })
  corfonte: string | null;

  @Column('int', { name: 'IDEFXLANE', nullable: true })
  idefxlane: number | null;

  @Column('text', { name: 'WAYPOINTS', nullable: true })
  waypoints: string | null;

  @OneToOne(() => TpratvEntity, (tpratvEntity) => tpratvEntity.idefx2)
  tpratv: TpratvEntity;

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tprefxes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDPROC', referencedColumnName: 'idproc' }])
  idproc2: TprprcEntity;

  @OneToMany(() => TprevpiEntity, (tprevpiEntity) => tprevpiEntity.idefx2)
  tprevpis: TprevpiEntity[];

  @OneToOne(() => TprevtEntity, (tprevtEntity) => tprevtEntity.idefx2)
  tprevt: TprevtEntity;

  @OneToMany(() => TprfrmeEntity, (tprfrmeEntity) => tprfrmeEntity.idefx2)
  tprfrmes: TprfrmeEntity[];

  @OneToMany(() => TprfxtEntity, (tprfxtEntity) => tprfxtEntity.idefx2)
  tprfxts: TprfxtEntity[];

  @OneToOne(() => TprgtwEntity, (tprgtwEntity) => tprgtwEntity.tprefx)
  tprgtw: TprgtwEntity;

  @OneToMany(() => TprirpaEntity, (tprirpaEntity) => tprirpaEntity.idefx2)
  tprirpas: TprirpaEntity[];

  @OneToOne(() => TprlndEntity, (tprlndEntity) => tprlndEntity.idefx2)
  tprlnd: TprlndEntity;

  @OneToMany(() => TprlndEntity, (tprlndEntity) => tprlndEntity.idefxpool)
  tprlnds: TprlndEntity[];

  @OneToMany(() => TproestEntity, (tproestEntity) => tproestEntity.idefx2)
  tproests: TproestEntity[];

  @OneToMany(() => TprpefxEntity, (tprpefxEntity) => tprpefxEntity.idefx2)
  tprpefxes: TprpefxEntity[];

  @OneToMany(() => TprrwaEntity, (tprrwaEntity) => tprrwaEntity.idefx2)
  tprrwas: TprrwaEntity[];

  @OneToOne(() => TprtfxEntity, (tprtfxEntity) => tprtfxEntity.idefx2)
  tprtfx: TprtfxEntity;
}
