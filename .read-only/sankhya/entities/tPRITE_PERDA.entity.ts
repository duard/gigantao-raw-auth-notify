import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TPRITE_PERDA', ['nunota', 'sequencia'], { unique: true })
@Entity('TPRITE_PERDA', { schema: 'SANKHYA' })
export class TpritePerdaEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTDPERDA', precision: 53 })
  qtdperda: number;

  @OneToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tpritePerda, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
