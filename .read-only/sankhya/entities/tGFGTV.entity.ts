import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfigtvEntity } from './tGFIGTV.entity';

@Index('PK_TGFGTV', ['nunota'], { unique: true })
@Entity('TGFGTV', { schema: 'SANKHYA' })
export class TgfgtvEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'DESCEVENTO', length: 18 })
  descevento: string;

  @OneToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfgtv, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @OneToMany(() => TgfigtvEntity, (tgfigtvEntity) => tgfigtvEntity.nunota2)
  tgfigtvs: TgfigtvEntity[];
}
