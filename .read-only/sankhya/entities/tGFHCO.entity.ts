import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfextEntity } from './tGFEXT.entity';
import { TgffocEntity } from './tGFFOC.entity';

@Index('PK_TGFHCO', ['codhistcom'], { unique: true })
@Entity('TGFHCO', { schema: 'SANKHYA' })
export class TgfhcoEntity {
  @Column('smallint', { primary: true, name: 'CODHISTCOM' })
  codhistcom: number;

  @Column('char', { name: 'DESCRHIST', length: 40 })
  descrhist: string;

  @OneToMany(() => TgfextEntity, (tgfextEntity) => tgfextEntity.codhistcom)
  tgfexts: TgfextEntity[];

  @OneToMany(() => TgffocEntity, (tgffocEntity) => tgffocEntity.histregterc)
  tgffocs: TgffocEntity[];

  @OneToMany(() => TgffocEntity, (tgffocEntity) => tgffocEntity.histsupregprop)
  tgffocs2: TgffocEntity[];

  @OneToMany(() => TgffocEntity, (tgffocEntity) => tgffocEntity.histsupregterc)
  tgffocs3: TgffocEntity[];

  @OneToMany(() => TgffocEntity, (tgffocEntity) => tgffocEntity.histsuptercreg)
  tgffocs4: TgffocEntity[];

  @OneToMany(() => TgffocEntity, (tgffocEntity) => tgffocEntity.histregprop)
  tgffocs5: TgffocEntity[];

  @OneToMany(() => TgffocEntity, (tgffocEntity) => tgffocEntity.histtercreg)
  tgffocs6: TgffocEntity[];
}
