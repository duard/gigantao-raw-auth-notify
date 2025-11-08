import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwrecEntity } from './tGWREC.entity';

@Index('PK_TGWPPV', ['nurecebimento', 'nunota', 'sequencia'], { unique: true })
@Entity('TGWPPV', { schema: 'SANKHYA' })
export class TgwppvEntity {
  @Column('int', { primary: true, name: 'NURECEBIMENTO' })
  nurecebimento: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTDEDIF', precision: 53 })
  qtdedif: number;

  @ManyToOne(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.tgwppvs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NURECEBIMENTO', referencedColumnName: 'nurecebimento' },
  ])
  nurecebimento2: TgwrecEntity;
}
