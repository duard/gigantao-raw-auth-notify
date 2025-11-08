import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfucaEntity } from './tGFUCA.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFUTR', ['nunota', 'idutr'], { unique: true })
@Entity('TGFUTR', { schema: 'SANKHYA' })
export class TgfutrEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'IDUTR' })
  idutr: number;

  @Column('char', { name: 'TPUNIDTRANSP', nullable: true, length: 1 })
  tpunidtransp: string | null;

  @Column('varchar', { name: 'IDUNIDTRANSP', nullable: true, length: 20 })
  idunidtransp: string | null;

  @Column('varchar', { name: 'NLACRE', nullable: true, length: 100 })
  nlacre: string | null;

  @OneToMany(() => TgfucaEntity, (tgfucaEntity) => tgfucaEntity.tgfutr)
  tgfucas: TgfucaEntity[];

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfutrs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
