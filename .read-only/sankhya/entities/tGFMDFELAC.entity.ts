import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmdfeEntity } from './tGFMDFE.entity';

@Index('PK_TGFMDFELAC', ['nuviag', 'seqmdfe', 'numlacre'], { unique: true })
@Entity('TGFMDFELAC', { schema: 'SANKHYA' })
export class TgfmdfelacEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('varchar', { primary: true, name: 'NUMLACRE', length: 60 })
  numlacre: string;

  @ManyToOne(
    () => TgfmdfeEntity,
    (tgfmdfeEntity) => tgfmdfeEntity.tgfmdfelacs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;
}
