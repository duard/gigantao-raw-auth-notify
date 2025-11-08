import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwendEntity } from './tGWEND.entity';
import { TgfgruEntity } from './tGFGRU.entity';

@Index('PK_TGWEXG', ['codend', 'codgrupoprod'], { unique: true })
@Entity('TGWEXG', { schema: 'SANKHYA' })
export class TgwexgEntity {
  @Column('int', { primary: true, name: 'CODEND' })
  codend: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwexgs)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend2: TgwendEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgwexgs)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;
}
