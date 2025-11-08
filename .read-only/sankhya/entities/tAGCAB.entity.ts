import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TagconEntity } from './tAGCON.entity';

@Index('PK_TAGCAB', ['idConfig', 'id'], { unique: true })
@Entity('TAGCAB', { schema: 'SANKHYA' })
export class TagcabEntity {
  @Column('int', { primary: true, name: 'ID_CONFIG' })
  idConfig: number;

  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'NOTAMODELO' })
  notamodelo: number;

  @ManyToOne(() => TagconEntity, (tagconEntity) => tagconEntity.tagcabs)
  @JoinColumn([{ name: 'ID_CONFIG', referencedColumnName: 'id' }])
  idConfig2: TagconEntity;
}
