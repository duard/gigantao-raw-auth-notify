import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmimetEntity } from './tMIMET.entity';

@Index('PK_TMIFME', ['numet', 'farol'], { unique: true })
@Entity('TMIFME', { schema: 'SANKHYA' })
export class TmifmeEntity {
  @Column('int', { primary: true, name: 'NUMET' })
  numet: number;

  @Column('smallint', { primary: true, name: 'FAROL', default: () => '(0)' })
  farol: number;

  @Column('text', { name: 'EXPFAROL' })
  expfarol: string;

  @Column('smallint', { name: 'ORDEMAVAL' })
  ordemaval: number;

  @ManyToOne(() => TmimetEntity, (tmimetEntity) => tmimetEntity.tmifmes)
  @JoinColumn([{ name: 'NUMET', referencedColumnName: 'numet' }])
  numet2: TmimetEntity;
}
