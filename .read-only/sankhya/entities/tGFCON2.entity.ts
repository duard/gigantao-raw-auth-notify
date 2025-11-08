import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { Tgfcoi2Entity } from './tGFCOI2.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfhcorEntity } from './tGFHCOR.entity';
import { TgfpddEntity } from './tGFPDD.entity';
import { TgfvcfEntity } from './tGFVCF.entity';

@Index('PK_TGFCON2', ['nuconf'], { unique: true })
@Index('TGFCON2_I01', ['nuconforig'], {})
@Index('TGFCON2_I02', ['nunotaorig'], {})
@Entity('TGFCON2', { schema: 'SANKHYA' })
export class Tgfcon2Entity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('int', { name: 'NUNOTAORIG', nullable: true })
  nunotaorig: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('int', { name: 'NUCONFORIG', nullable: true })
  nuconforig: number | null;

  @Column('datetime', { name: 'DHINICONF', nullable: true })
  dhiniconf: Date | null;

  @Column('datetime', { name: 'DHFINCONF', nullable: true })
  dhfinconf: Date | null;

  @Column('int', { name: 'QTDVOL', default: () => '(0)' })
  qtdvol: number;

  @Column('int', { name: 'NUPEDCOMP', nullable: true })
  nupedcomp: number | null;

  @Column('int', { name: 'NUNOTADEV', nullable: true })
  nunotadev: number | null;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.nuconfatual2)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => Tgfcoi2Entity, (tgfcoi2Entity) => tgfcoi2Entity.nuconf2)
  tgfcois: Tgfcoi2Entity[];

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcons2, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTAORIG', referencedColumnName: 'nunota' }])
  nunotaorig2: TgfcabEntity;

  @ManyToOne(() => Tgfcon2Entity, (tgfcon2Entity) => tgfcon2Entity.tgfcons)
  @JoinColumn([{ name: 'NUCONFORIG', referencedColumnName: 'nuconf' }])
  nuconforig2: Tgfcon2Entity;

  @OneToMany(() => Tgfcon2Entity, (tgfcon2Entity) => tgfcon2Entity.nuconforig2)
  tgfcons: Tgfcon2Entity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcons)
  @JoinColumn([{ name: 'CODUSUCONF', referencedColumnName: 'codusu' }])
  codusuconf: TsiusuEntity;

  @OneToMany(() => TgfhcorEntity, (tgfhcorEntity) => tgfhcorEntity.nuconf2)
  tgfhcors: TgfhcorEntity[];

  @OneToMany(() => TgfpddEntity, (tgfpddEntity) => tgfpddEntity.nuconf2)
  tgfpdds: TgfpddEntity[];

  @OneToMany(() => TgfvcfEntity, (tgfvcfEntity) => tgfvcfEntity.nuconf2)
  tgfvcfs: TgfvcfEntity[];
}
