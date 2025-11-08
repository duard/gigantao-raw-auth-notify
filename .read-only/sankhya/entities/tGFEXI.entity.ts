import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFEXI', ['nunotaexp', 'nunotacompra'], { unique: true })
@Index('TGFEXI_I01', ['nunotacompra'], {})
@Index('TGFEXI_IPER', ['nunotaexp'], {})
@Entity('TGFEXI', { schema: 'SANKHYA' })
export class TgfexiEntity {
  @Column('int', { primary: true, name: 'NUNOTAEXP' })
  nunotaexp: number;

  @Column('int', { primary: true, name: 'NUNOTACOMPRA' })
  nunotacompra: number;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfexis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTACOMPRA', referencedColumnName: 'nunota' }])
  nunotacompra2: TgfcabEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfexis2)
  @JoinColumn([{ name: 'NUNOTAEXP', referencedColumnName: 'nunota' }])
  nunotaexp2: TgfcabEntity;
}
