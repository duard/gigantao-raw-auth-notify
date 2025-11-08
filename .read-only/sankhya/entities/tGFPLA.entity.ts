import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfgarEntity } from './tGFGAR.entity';

@Index('PK_TGFPLA', ['codplano'], { unique: true })
@Entity('TGFPLA', { schema: 'SANKHYA' })
export class TgfplaEntity {
  @Column('smallint', { primary: true, name: 'CODPLANO' })
  codplano: number;

  @Column('char', { name: 'NOMEPLANO', length: 50 })
  nomeplano: string;

  @OneToMany(() => TgfgarEntity, (tgfgarEntity) => tgfgarEntity.codplano2)
  tgfgars: TgfgarEntity[];
}
