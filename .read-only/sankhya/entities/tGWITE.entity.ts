import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGWITE', ['nuseparacao', 'sequencia', 'nunota', 'seqnota'], {
  unique: true,
})
@Index('TGWITE_I01', ['nunota', 'seqnota'], {})
@Index('TGWITE_IFK', ['nunota', 'sequencia'], {})
@Entity('TGWITE', { schema: 'SANKHYA' })
export class TgwiteEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQNOTA' })
  seqnota: number;

  @Column('float', { name: 'QTDWMS', precision: 53, default: () => '(0)' })
  qtdwms: number;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgwites)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQNOTA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
