import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgficmEntity } from './tGFICM.entity';

@Index('PK_TGFFIC', ['codform'], { unique: true })
@Entity('TGFFIC', { schema: 'SANKHYA' })
export class TgfficEntity {
  @Column('smallint', { primary: true, name: 'CODFORM' })
  codform: number;

  @Column('varchar', { name: 'DESCRFORM', length: 36 })
  descrform: string;

  @Column('varchar', { name: 'FORMULA', length: 3103 })
  formula: string;

  @OneToMany(() => TgficmEntity, (tgficmEntity) => tgficmEntity.codformbasicm)
  tgficms: TgficmEntity[];
}
