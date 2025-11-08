import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgvcEntity } from './tGFGVC.entity';

@Index('PK_TGFGVF_NUFAIXA', ['nufaixa'], { unique: true })
@Entity('TGFGVF', { schema: 'SANKHYA' })
export class TgfgvfEntity {
  @Column('int', { primary: true, name: 'NUFAIXA' })
  nufaixa: number;

  @Column('float', { name: 'VLRMIN', nullable: true, precision: 53 })
  vlrmin: number | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('float', { name: 'VLRRECOM', nullable: true, precision: 53 })
  vlrrecom: number | null;

  @ManyToOne(() => TgfgvcEntity, (tgfgvcEntity) => tgfgvcEntity.tgfgvfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCRITERIO', referencedColumnName: 'nucriterio' }])
  nucriterio: TgfgvcEntity;
}
