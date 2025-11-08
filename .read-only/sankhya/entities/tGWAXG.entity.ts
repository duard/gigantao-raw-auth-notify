import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgwaraEntity } from './tGWARA.entity';

@Index('PK_TGWAXG', ['nuarea', 'codgrupoprod'], { unique: true })
@Entity('TGWAXG', { schema: 'SANKHYA' })
export class TgwaxgEntity {
  @Column('int', { primary: true, name: 'NUAREA' })
  nuarea: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('datetime', { name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgwaxgs)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;

  @ManyToOne(() => TgwaraEntity, (tgwaraEntity) => tgwaraEntity.tgwaxgs)
  @JoinColumn([{ name: 'NUAREA', referencedColumnName: 'nuarea' }])
  nuarea2: TgwaraEntity;
}
