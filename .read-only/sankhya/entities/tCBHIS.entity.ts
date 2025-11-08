import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcbhfcEntity } from './tCBHFC.entity';
import { TcblanEntity } from './tCBLAN.entity';
import { TcblanConfEntity } from './tCBLAN_CONF.entity';
import { TfpctbEntity } from './tFPCTB.entity';
import { TfpctfEntity } from './tFPCTF.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TgfctbEntity } from './tGFCTB.entity';
import { TgfnatEntity } from './tGFNAT.entity';

@Index('PK_TCBHIS', ['codhistctb'], { unique: true })
@Entity('TCBHIS', { schema: 'SANKHYA' })
export class TcbhisEntity {
  @Column('smallint', { primary: true, name: 'CODHISTCTB' })
  codhistctb: number;

  @Column('varchar', { name: 'HISTORICO', nullable: true, length: 255 })
  historico: string | null;

  @OneToMany(() => TcbhfcEntity, (tcbhfcEntity) => tcbhfcEntity.codhistctb2)
  tcbhfcs: TcbhfcEntity[];

  @OneToMany(() => TcblanEntity, (tcblanEntity) => tcblanEntity.codhistctb)
  tcblans: TcblanEntity[];

  @OneToMany(
    () => TcblanConfEntity,
    (tcblanConfEntity) => tcblanConfEntity.codhistctb,
  )
  tcblanConfs: TcblanConfEntity[];

  @OneToMany(
    () => TfpctbEntity,
    (tfpctbEntity) => tfpctbEntity.historicocredito,
  )
  tfpctbs: TfpctbEntity[];

  @OneToMany(() => TfpctbEntity, (tfpctbEntity) => tfpctbEntity.historicodebito)
  tfpctbs2: TfpctbEntity[];

  @OneToMany(
    () => TfpctfEntity,
    (tfpctfEntity) => tfpctfEntity.historicocredito,
  )
  tfpctfs: TfpctfEntity[];

  @OneToMany(() => TfpctfEntity, (tfpctfEntity) => tfpctfEntity.historicodebito)
  tfpctfs2: TfpctfEntity[];

  @OneToMany(
    () => TfpempEntity,
    (tfpempEntity) => tfpempEntity.histctbcratocoop,
  )
  tfpemps: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codhistctbrever)
  tfpemps2: TfpempEntity[];

  @OneToMany(
    () => TfpempEntity,
    (tfpempEntity) => tfpempEntity.histctbdbatocoop,
  )
  tfpemps3: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.histctbreversao)
  tfpemps4: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.histctbexercant)
  tfpemps5: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.histctbexercatu)
  tfpemps6: TfpempEntity[];

  @OneToMany(() => TgfctbEntity, (tgfctbEntity) => tgfctbEntity.codhistctb)
  tgfctbs: TgfctbEntity[];

  @OneToMany(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.codhistctb)
  tgfnats: TgfnatEntity[];
}
