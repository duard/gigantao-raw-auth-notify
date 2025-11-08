import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcgtveEntity } from './tGFCGTVE.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFIGTVE', ['nunota', 'idgtve'], { unique: true })
@Entity('TGFIGTVE', { schema: 'SANKHYA' })
export class TgfigtveEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'IDGTVE' })
  idgtve: number;

  @Column('varchar', { name: 'CHAVECTE', nullable: true, length: 44 })
  chavecte: string | null;

  @OneToMany(() => TgfcgtveEntity, (tgfcgtveEntity) => tgfcgtveEntity.tgfigtve)
  tgfcgtves: TgfcgtveEntity[];

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfigtves)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
