import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgvpergEntity } from './tGVPERG.entity';

@Index('PK_TGVPEG', ['codperg', 'codgrupoprod'], { unique: true })
@Index('TGVPEG_I01', ['codgrupoprod'], {})
@Entity('TGVPEG', { schema: 'SANKHYA' })
export class TgvpegEntity {
  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvpegs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgvpegs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;

  @ManyToOne(() => TgvpergEntity, (tgvpergEntity) => tgvpergEntity.tgvpegs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg2: TgvpergEntity;
}
