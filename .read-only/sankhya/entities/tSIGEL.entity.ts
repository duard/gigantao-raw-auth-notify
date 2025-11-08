import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsigdgEntity } from './tSIGDG.entity';

@Index('PK_TSIGEL', ['nugdg', 'evento'], { unique: true })
@Entity('TSIGEL', { schema: 'SANKHYA' })
export class TsigelEntity {
  @Column('int', { primary: true, name: 'NUGDG' })
  nugdg: number;

  @Column('smallint', { primary: true, name: 'EVENTO' })
  evento: number;

  @ManyToOne(() => TsigdgEntity, (tsigdgEntity) => tsigdgEntity.tsigels)
  @JoinColumn([{ name: 'NUGDG', referencedColumnName: 'nugdg' }])
  nugdg2: TsigdgEntity;
}
