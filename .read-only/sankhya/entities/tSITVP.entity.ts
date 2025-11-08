import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsigdgEntity } from './tSIGDG.entity';

@Index('PK_TSITVP', ['codusu', 'nutv'], { unique: true })
@Entity('TSITVP', { schema: 'SANKHYA' })
export class TsitvpEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'NUTV' })
  nutv: number;

  @Column('int', { name: 'NUGDGINT', nullable: true })
  nugdgint: number | null;

  @Column('varchar', { name: 'URL', nullable: true, length: 400 })
  url: string | null;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('smallint', { name: 'TEMPO', nullable: true })
  tempo: number | null;

  @Column('varchar', { name: 'URLRSS', nullable: true, length: 400 })
  urlrss: string | null;

  @Column('varchar', { name: 'URLVIDEOYOUTUBE', nullable: true, length: 400 })
  urlvideoyoutube: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsitvps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsigdgEntity, (tsigdgEntity) => tsigdgEntity.tsitvps)
  @JoinColumn([{ name: 'NUGDG', referencedColumnName: 'nugdg' }])
  nugdg: TsigdgEntity;
}
