import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfutrEntity } from './tGFUTR.entity';

@Index('PK_TGFUCA', ['nunota', 'idutr', 'iduca'], { unique: true })
@Entity('TGFUCA', { schema: 'SANKHYA' })
export class TgfucaEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'IDUTR' })
  idutr: number;

  @Column('smallint', { primary: true, name: 'IDUCA' })
  iduca: number;

  @Column('char', { name: 'TPUNIDCARGA', nullable: true, length: 1 })
  tpunidcarga: string | null;

  @Column('varchar', { name: 'IDUNIDCARGA', nullable: true, length: 20 })
  idunidcarga: string | null;

  @Column('varchar', { name: 'NLACRE', nullable: true, length: 100 })
  nlacre: string | null;

  @Column('varchar', { name: 'QTDRAT', nullable: true, length: 6 })
  qtdrat: string | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfucas)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgfutrEntity, (tgfutrEntity) => tgfutrEntity.tgfucas)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'IDUTR', referencedColumnName: 'idutr' },
  ])
  tgfutr: TgfutrEntity;
}
