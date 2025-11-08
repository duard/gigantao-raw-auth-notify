import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TapmapEntity } from './tAPMAP.entity';

@Index('PK_TAPPAA', ['nuaponta', 'codpar', 'sequencia'], { unique: true })
@Entity('TAPPAA', { schema: 'SANKHYA' })
export class TappaaEntity {
  @Column('int', { primary: true, name: 'NUAPONTA' })
  nuaponta: number;

  @Column('smallint', { primary: true, name: 'CODPAR' })
  codpar: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'HRINICIAL', nullable: true })
  hrinicial: number | null;

  @Column('smallint', { name: 'HRFINAL', nullable: true })
  hrfinal: number | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 256 })
  observacao: string | null;

  @Column('smallint', { name: 'HRFECHAMENTO', nullable: true })
  hrfechamento: number | null;

  @ManyToOne(() => TapmapEntity, (tapmapEntity) => tapmapEntity.tappaas)
  @JoinColumn([{ name: 'NUAPONTA', referencedColumnName: 'nuaponta' }])
  nuaponta2: TapmapEntity;
}
