import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFRESI', ['codresiduo'], { unique: true })
@Entity('TGFRESI', { schema: 'SANKHYA' })
export class TgfresiEntity {
  @Column('int', { primary: true, name: 'CODRESIDUO' })
  codresiduo: number;

  @Column('varchar', { name: 'DESCRRESIDUO', length: 40 })
  descrresiduo: string;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codresiduo)
  tgfcabs: TgfcabEntity[];
}
