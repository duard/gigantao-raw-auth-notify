import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgficmEntity } from './tGFICM.entity';

@Index('PK_TGFFDA', ['codform'], { unique: true })
@Entity('TGFFDA', { schema: 'SANKHYA' })
export class TgffdaEntity {
  @Column('int', { primary: true, name: 'CODFORM' })
  codform: number;

  @Column('varchar', { name: 'DESCRFORM', length: 36 })
  descrform: string;

  @Column('text', { name: 'FORMULA' })
  formula: string;

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codfordifaliq)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TgficmEntity, (tgficmEntity) => tgficmEntity.codformbasdifal)
  tgficms: TgficmEntity[];

  @OneToMany(() => TgficmEntity, (tgficmEntity) => tgficmEntity.codformbcicmsat)
  tgficms2: TgficmEntity[];
}
