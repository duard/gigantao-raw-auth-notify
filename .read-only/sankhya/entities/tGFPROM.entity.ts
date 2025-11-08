import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfproiEntity } from './tGFPROI.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFPROM', ['codpromo'], { unique: true })
@Entity('TGFPROM', { schema: 'SANKHYA' })
export class TgfpromEntity {
  @Column('int', { primary: true, name: 'CODPROMO' })
  codpromo: number;

  @Column('varchar', { name: 'DESCRPROMO', length: 40 })
  descrpromo: string;

  @Column('datetime', { name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', { name: 'ATIVO', length: 1 })
  ativo: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codpromo2)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgfproiEntity, (tgfproiEntity) => tgfproiEntity.codpromo2)
  tgfprois: TgfproiEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfproms, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
