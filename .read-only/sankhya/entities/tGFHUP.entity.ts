import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfhppEntity } from './tGFHPP.entity';

@Index('PK_TGFHUP', ['codhup'], { unique: true })
@Entity('TGFHUP', { schema: 'SANKHYA' })
export class TgfhupEntity {
  @Column('int', { primary: true, name: 'CODHUP' })
  codhup: number;

  @Column('varchar', { name: 'DESCRHUP', length: 100 })
  descrhup: string;

  @OneToMany(() => TgfhppEntity, (tgfhppEntity) => tgfhppEntity.codhup2)
  tgfhpps: TgfhppEntity[];
}
