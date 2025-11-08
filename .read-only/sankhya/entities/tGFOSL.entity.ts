import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';

@Index('PK_TGFOSL', ['codtipoper', 'codlocal'], { unique: true })
@Entity('TGFOSL', { schema: 'SANKHYA' })
export class TgfoslEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('smallint', { name: 'ORDEM' })
  ordem: number;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfosls)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;
}
