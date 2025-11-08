import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFNMA', ['nunota', 'mao', 'codprod'], { unique: true })
@Entity('TGFNMA', { schema: 'SANKHYA' })
export class TgfnmaEntity {
  @Column('int', { primary: true, name: 'NUNOTA', default: () => '(0)' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'MAO', default: () => '(0)' })
  mao: number;

  @Column('int', { primary: true, name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfnmas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfnmas)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
