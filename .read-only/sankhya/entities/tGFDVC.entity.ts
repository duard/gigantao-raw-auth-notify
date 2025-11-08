import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDVC', ['nunota', 'sequencia', 'nunotaorig', 'sequenciaorig'], {
  unique: true,
})
@Entity('TGFDVC', { schema: 'SANKHYA' })
export class TgfdvcEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIAORIG' })
  sequenciaorig: number;

  @Column('float', { name: 'QTDDEV', nullable: true, precision: 53 })
  qtddev: number | null;
}
