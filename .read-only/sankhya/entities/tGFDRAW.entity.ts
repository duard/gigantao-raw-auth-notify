import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGFDRAW', ['nunota', 'sequencia', 'sequenciadraw'], { unique: true })
@Index('TGFDRAW_I01', ['nunota', 'sequencia', 'nroatoconcdraw'], {
  unique: true,
})
@Entity('TGFDRAW', { schema: 'SANKHYA' })
export class TgfdrawEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIADRAW' })
  sequenciadraw: number;

  @Column('varchar', { name: 'NROATOCONCDRAW', unique: true, length: 11 })
  nroatoconcdraw: string;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfdraws, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
