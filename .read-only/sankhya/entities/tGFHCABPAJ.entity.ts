import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFHCABPAJ', ['nunota', 'nuprocesso'], { unique: true })
@Entity('TGFHCABPAJ', { schema: 'SANKHYA' })
export class TgfhcabpajEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { name: 'ORIGEMPROCESSO' })
  origemprocesso: number;

  @Column('varchar', { name: 'NUMPROCESSO', length: 60 })
  numprocesso: string;

  @Column('smallint', { name: 'TIPATOCONCES', nullable: true })
  tipatoconces: number | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfhcabpajs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
