import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { GfrmetasunidEntity } from './gFRMETASUNID.entity';
import { TgfgruEntity } from './tGFGRU.entity';

@Index('PK_GRFMETASCATEG', ['codmeta', 'codgrupoprod'], { unique: true })
@Entity('GFRMETASCATEG', { schema: 'SANKHYA' })
export class GfrmetascategEntity {
  @Column('int', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('float', { name: 'PORCENTAGEM', precision: 53 })
  porcentagem: number;

  @ManyToOne(
    () => GfrmetasunidEntity,
    (gfrmetasunidEntity) => gfrmetasunidEntity.gfrmetascategs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODMETA', referencedColumnName: 'codmeta' }])
  codmeta2: GfrmetasunidEntity;

  @ManyToOne(
    () => TgfgruEntity,
    (tgfgruEntity) => tgfgruEntity.gfrmetascategs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;
}
