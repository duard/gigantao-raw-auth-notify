import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFCMN', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFCMN', { schema: 'SANKHYA' })
export class TgfcmnEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'TIPMODALCTE', nullable: true, length: 1 })
  tipmodalcte: string | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODCIDINICIO', nullable: true })
  codcidinicio: number | null;

  @Column('int', { name: 'CODCIDTERMINO', nullable: true })
  codcidtermino: number | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcmns)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
