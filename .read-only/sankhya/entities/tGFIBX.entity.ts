import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGFIBX', ['nunota', 'sequencia', 'idoutbox'], { unique: true })
@Entity('TGFIBX', { schema: 'SANKHYA' })
export class TgfibxEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'IDOUTBOX', length: 11 })
  idoutbox: string;

  @Column('float', { name: 'QTD', precision: 53, default: () => '(0)' })
  qtd: number;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfibxes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
