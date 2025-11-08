import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGAGPL', ['codprod', 'codgrupoprod'], { unique: true })
@Entity('TGAGPL', { schema: 'SANKHYA' })
export class TgagplEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('char', { name: 'ALTPLANT', length: 1, default: () => "'S'" })
  altplant: string;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgagpls)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgagpls)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
