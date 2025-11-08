import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmdfesegEntity } from './tGFMDFESEG.entity';

@Index('PK_TGFAVE', ['nuviag', 'seqmdfe', 'numapolice', 'numaverb'], {
  unique: true,
})
@Entity('TGFAVE', { schema: 'SANKHYA' })
export class TgfaveEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('varchar', { primary: true, name: 'NUMAPOLICE', length: 20 })
  numapolice: string;

  @Column('varchar', { primary: true, name: 'NUMAVERB', length: 40 })
  numaverb: string;

  @ManyToOne(
    () => TgfmdfesegEntity,
    (tgfmdfesegEntity) => tgfmdfesegEntity.tgfaves,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
    { name: 'NUMAPOLICE', referencedColumnName: 'numapolice' },
  ])
  tgfmdfeseg: TgfmdfesegEntity;
}
