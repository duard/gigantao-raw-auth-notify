import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfialEntity } from './tGFIAL.entity';

@Index('PK_TGFALB', ['nualbum'], { unique: true })
@Entity('TGFALB', { schema: 'SANKHYA' })
export class TgfalbEntity {
  @Column('int', { primary: true, name: 'NUALBUM' })
  nualbum: number;

  @Column('char', {
    name: 'STATUSALBUM',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  statusalbum: string | null;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfalbs)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQNOTA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @OneToMany(() => TgfialEntity, (tgfialEntity) => tgfialEntity.nualbum2)
  tgfials: TgfialEntity[];
}
