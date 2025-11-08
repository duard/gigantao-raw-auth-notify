import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcbcEntity } from './tGFCBC.entity';
import { Tgfcon2Entity } from './tGFCON2.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfconserEntity } from './tGFCONSER.entity';
import { TgfpconEntity } from './tGFPCON.entity';
import { TgfsltEntity } from './tGFSLT.entity';

@Index('PK_TGFCOI2', ['nuconf', 'seqconf'], { unique: true })
@Index('TGFCOI2_I01', ['nuconf', 'codbarra', 'codprod', 'codvol', 'controle'], {
  unique: true,
})
@Entity('TGFCOI2', { schema: 'SANKHYA' })
export class Tgfcoi2Entity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('smallint', { primary: true, name: 'SEQCONF' })
  seqconf: number;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 50 })
  codbarra: string | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('char', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 11 })
  controle: string | null;

  @Column('float', { name: 'QTDCONFVOLPAD', nullable: true, precision: 53 })
  qtdconfvolpad: number | null;

  @Column('float', { name: 'QTDCONF', nullable: true, precision: 53 })
  qtdconf: number | null;

  @Column('varchar', { name: 'COPIA', nullable: true, length: 1 })
  copia: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @OneToMany(() => TgfcbcEntity, (tgfcbcEntity) => tgfcbcEntity.tgfcoi)
  tgfcbcs: TgfcbcEntity[];

  @ManyToOne(() => Tgfcon2Entity, (tgfcon2Entity) => tgfcon2Entity.tgfcois, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCONF', referencedColumnName: 'nuconf' }])
  nuconf2: Tgfcon2Entity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfcois)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfcois)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;

  @OneToMany(() => TgfconserEntity, (tgfconserEntity) => tgfconserEntity.tgfcoi)
  tgfconsers: TgfconserEntity[];

  @OneToMany(() => TgfpconEntity, (tgfpconEntity) => tgfpconEntity.tgfcoi)
  tgfpcons: TgfpconEntity[];

  @OneToMany(() => TgfsltEntity, (tgfsltEntity) => tgfsltEntity.tgfcoi)
  tgfslts: TgfsltEntity[];
}
