import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwconEntity } from './tGWCON.entity';

@Index('PK_TGWECO', ['nuconferencia', 'codbarra'], { unique: true })
@Entity('TGWECO', { schema: 'SANKHYA' })
export class TgwecoEntity {
  @Column('int', { primary: true, name: 'NUCONFERENCIA' })
  nuconferencia: number;

  @Column('varchar', { primary: true, name: 'CODBARRA', length: 25 })
  codbarra: string;

  @Column('decimal', {
    name: 'QTDECONF',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtdeconf: number | null;

  @ManyToOne(() => TgwconEntity, (tgwconEntity) => tgwconEntity.tgwecos)
  @JoinColumn([
    { name: 'NUCONFERENCIA', referencedColumnName: 'nuconferencia' },
  ])
  nuconferencia2: TgwconEntity;
}
