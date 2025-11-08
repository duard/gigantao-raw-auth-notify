import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfperEntity } from './tGFPER.entity';

@Index('PK_TGFTPR', ['nutpoperda'], { unique: true })
@Entity('TGFTPR', { schema: 'SANKHYA' })
export class TgftprEntity {
  @Column('smallint', { primary: true, name: 'NUTPOPERDA' })
  nutpoperda: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 40 })
  descricao: string | null;

  @Column('char', {
    name: 'EXIGEFIBRINA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  exigefibrina: string | null;

  @OneToMany(() => TgfperEntity, (tgfperEntity) => tgfperEntity.tipo)
  tgfpers: TgfperEntity[];
}
