import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFCABLIG', ['nunota', 'nunotaorig', 'tipo'], { unique: true })
@Index('TGFCABLIG_I01', ['nunotaorig'], {})
@Entity('TGFCABLIG', { schema: 'SANKHYA' })
export class TgfcabligEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('char', { primary: true, name: 'TIPO', length: 10 })
  tipo: string;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcabligs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcabligs2)
  @JoinColumn([{ name: 'NUNOTAORIG', referencedColumnName: 'nunota' }])
  nunotaorig2: TgfcabEntity;
}
