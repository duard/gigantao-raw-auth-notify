import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfgruEntity } from './tGFGRU.entity';

@Index('PK_TGFVDG', ['codusulib', 'codgrupoprod'], { unique: true })
@Entity('TGFVDG', { schema: 'SANKHYA' })
export class TgfvdgEntity {
  @Column('smallint', { primary: true, name: 'CODUSULIB' })
  codusulib: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('float', { name: 'PERC', precision: 53 })
  perc: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfvdgs)
  @JoinColumn([{ name: 'CODUSULIB', referencedColumnName: 'codusu' }])
  codusulib2: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfvdgs2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgfvdgs)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;
}
