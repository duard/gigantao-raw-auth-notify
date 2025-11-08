import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgwcoiEntity } from './tGWCOI.entity';
import { TgwrecEntity } from './tGWREC.entity';
import { TgwcserEntity } from './tGWCSER.entity';
import { TgwdevEntity } from './tGWDEV.entity';
import { TgwecoEntity } from './tGWECO.entity';
import { TgwiccEntity } from './tGWICC.entity';
import { TgwivlEntity } from './tGWIVL.entity';
import { TgwpvolEntity } from './tGWPVOL.entity';
import { TgwsepEntity } from './tGWSEP.entity';
import { TgwtarEntity } from './tGWTAR.entity';

@Index('PK_TGWCON', ['nuconferencia'], { unique: true })
@Entity('TGWCON', { schema: 'SANKHYA' })
export class TgwconEntity {
  @Column('int', { primary: true, name: 'NUCONFERENCIA' })
  nuconferencia: number;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'E'" })
  situacao: string;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHINICIOCONF', nullable: true })
  dhinicioconf: Date | null;

  @Column('datetime', { name: 'DHFINALCONF', nullable: true })
  dhfinalconf: Date | null;

  @Column('char', { name: 'TIPCONF', length: 1, default: () => "'R'" })
  tipconf: string;

  @Column('char', { name: 'DESTFINAL', length: 1, default: () => "'S'" })
  destfinal: string;

  @Column('char', { name: 'PARCIAL', length: 1, default: () => "'N'" })
  parcial: string;

  @OneToMany(() => TgwcoiEntity, (tgwcoiEntity) => tgwcoiEntity.nuconferencia2)
  tgwcois: TgwcoiEntity[];

  @ManyToOne(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.tgwcons)
  @JoinColumn([
    { name: 'NURECEBIMENTO', referencedColumnName: 'nurecebimento' },
  ])
  nurecebimento: TgwrecEntity;

  @OneToMany(
    () => TgwcserEntity,
    (tgwcserEntity) => tgwcserEntity.nuconferencia2,
  )
  tgwcsers: TgwcserEntity[];

  @OneToMany(() => TgwdevEntity, (tgwdevEntity) => tgwdevEntity.nuconferencia)
  tgwdevs: TgwdevEntity[];

  @OneToMany(() => TgwecoEntity, (tgwecoEntity) => tgwecoEntity.nuconferencia2)
  tgwecos: TgwecoEntity[];

  @OneToMany(() => TgwiccEntity, (tgwiccEntity) => tgwiccEntity.nuconferencia2)
  tgwiccs: TgwiccEntity[];

  @OneToMany(() => TgwivlEntity, (tgwivlEntity) => tgwivlEntity.nuconferencia2)
  tgwivls: TgwivlEntity[];

  @OneToMany(
    () => TgwpvolEntity,
    (tgwpvolEntity) => tgwpvolEntity.nuconferencia2,
  )
  tgwpvols: TgwpvolEntity[];

  @OneToMany(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.nuconferencia2)
  tgwrecs: TgwrecEntity[];

  @OneToMany(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.nuconferencia2)
  tgwseps: TgwsepEntity[];

  @OneToMany(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.nuconferencia)
  tgwtars: TgwtarEntity[];
}
