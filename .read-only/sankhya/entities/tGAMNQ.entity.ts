import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgaiqtEntity } from './tGAIQT.entity';

@Index('PK_TGAMNQ', ['codigo'], { unique: true })
@Entity('TGAMNQ', { schema: 'SANKHYA' })
export class TgamnqEntity {
  @Column('smallint', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @OneToMany(() => TgaiqtEntity, (tgaiqtEntity) => tgaiqtEntity.codigo)
  tgaiqts: TgaiqtEntity[];
}
