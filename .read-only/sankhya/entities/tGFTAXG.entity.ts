import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgruEntity } from './tGFGRU.entity';

@Index('PK_TGFTAXG', ['codtipvenda', 'codgrupoprod'], { unique: true })
@Entity('TGFTAXG', { schema: 'SANKHYA' })
export class TgftaxgEntity {
  @Column('smallint', { primary: true, name: 'CODTIPVENDA' })
  codtipvenda: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('money', { name: 'TAXA', nullable: true })
  taxa: number | null;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgftaxgs)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;
}
