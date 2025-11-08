import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCOI', ['nuconf', 'sequencia', 'nunotaorig', 'sequenciaorig'], {
  unique: true,
})
@Index('TGFCOI_I01', ['nunotaorig', 'sequenciaorig'], {})
@Entity('TGFCOI', { schema: 'SANKHYA' })
export class TgfcoiEntity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIAORIG' })
  sequenciaorig: number;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;
}
