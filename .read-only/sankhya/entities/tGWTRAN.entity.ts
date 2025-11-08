import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgwittEntity } from './tGWITT.entity';

@Index('PK_TGWTRAN', ['nutarefa', 'sequencia'], { unique: true })
@Entity('TGWTRAN', { schema: 'SANKHYA' })
export class TgwtranEntity {
  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTDDIVERGCONEX', nullable: true, precision: 53 })
  qtddivergconex: number | null;

  @OneToOne(() => TgwittEntity, (tgwittEntity) => tgwittEntity.tgwtran)
  @JoinColumn([
    { name: 'NUTAREFA', referencedColumnName: 'nutarefa' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgwitt: TgwittEntity;
}
