import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TagconEntity } from './tAGCON.entity';

@Index('PK_TAGFIN', ['idConfig', 'id'], { unique: true })
@Entity('TAGFIN', { schema: 'SANKHYA' })
export class TagfinEntity {
  @Column('int', { primary: true, name: 'ID_CONFIG' })
  idConfig: number;

  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'TIPO' })
  tipo: number;

  @Column('char', { name: 'BAIXA', length: 1, default: () => "'N'" })
  baixa: string;

  @Column('int', { name: 'TOPBAIXA', nullable: true })
  topbaixa: number | null;

  @ManyToOne(() => TagconEntity, (tagconEntity) => tagconEntity.tagfins)
  @JoinColumn([{ name: 'ID_CONFIG', referencedColumnName: 'id' }])
  idConfig2: TagconEntity;
}
