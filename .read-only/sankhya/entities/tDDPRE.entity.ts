import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TddrelEntity } from './tDDREL.entity';

@Index('PK_TDDPRE', ['nurel', 'nomeparametro'], { unique: true })
@Entity('TDDPRE', { schema: 'SANKHYA' })
export class TddpreEntity {
  @Column('numeric', { primary: true, name: 'NUREL', precision: 10, scale: 0 })
  nurel: number;

  @Column('varchar', { primary: true, name: 'NOMEPARAMETRO', length: 32 })
  nomeparametro: string;

  @Column('varchar', { name: 'TIPPARAMETRO', length: 1 })
  tipparametro: string;

  @Column('varchar', { name: 'LABEL', nullable: true, length: 255 })
  label: string | null;

  @ManyToOne(() => TddrelEntity, (tddrelEntity) => tddrelEntity.tddpres)
  @JoinColumn([{ name: 'NUREL', referencedColumnName: 'nurel' }])
  nurel2: TddrelEntity;
}
