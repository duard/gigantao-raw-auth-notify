import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfrqeEntity } from './tGFRQE.entity';

@Index('PK_TGFQAL', ['nualbum', 'nurqe'], { unique: true })
@Entity('TGFQAL', { schema: 'SANKHYA' })
export class TgfqalEntity {
  @Column('int', { primary: true, name: 'NUALBUM' })
  nualbum: number;

  @Column('int', { primary: true, name: 'NURQE' })
  nurqe: number;

  @ManyToOne(() => TgfrqeEntity, (tgfrqeEntity) => tgfrqeEntity.tgfqals)
  @JoinColumn([{ name: 'NURQE', referencedColumnName: 'nurqe' }])
  nurqe2: TgfrqeEntity;
}
