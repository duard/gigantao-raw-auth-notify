import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpprtibcEntity } from './tFPPRTIBC.entity';

@Index('PK_TFPPRTINTERM', ['nuinterm'], { unique: true })
@Entity('TFPPRTINTERM', { schema: 'SANKHYA' })
export class TfpprtintermEntity {
  @Column('int', { primary: true, name: 'NUINTERM' })
  nuinterm: number;

  @Column('smallint', { name: 'DIA' })
  dia: number;

  @Column('varchar', { name: 'HORASTRAB', nullable: true, length: 5 })
  horastrab: string | null;

  @ManyToOne(
    () => TfpprtibcEntity,
    (tfpprtibcEntity) => tfpprtibcEntity.tfpprtinterms,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUIBC', referencedColumnName: 'nuibc' }])
  nuibc: TfpprtibcEntity;
}
