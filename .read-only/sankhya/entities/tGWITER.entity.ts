import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwrecEntity } from './tGWREC.entity';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGWITER', ['nurecebimento', 'sequencia', 'nunota', 'seqnota'], {
  unique: true,
})
@Entity('TGWITER', { schema: 'SANKHYA' })
export class TgwiterEntity {
  @Column('int', { primary: true, name: 'NURECEBIMENTO' })
  nurecebimento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQNOTA' })
  seqnota: number;

  @Column('float', { name: 'QTDWMS', precision: 53, default: () => '(0)' })
  qtdwms: number;

  @ManyToOne(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.tgwiters)
  @JoinColumn([
    { name: 'NURECEBIMENTO', referencedColumnName: 'nurecebimento' },
  ])
  nurecebimento2: TgwrecEntity;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgwiters)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQNOTA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
