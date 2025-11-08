import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmdfeEntity } from './tGFMDFE.entity';

@Index('PK_TGFTERDESC', ['nuviag', 'seqmdfe', 'codterdes'], { unique: true })
@Entity('TGFTERDESC', { schema: 'SANKHYA' })
export class TgfterdescEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('smallint', { primary: true, name: 'CODTERDES' })
  codterdes: number;

  @Column('varchar', { name: 'CODTERMDESC', length: 8 })
  codtermdesc: string;

  @Column('varchar', { name: 'NOMETERMDESC', length: 60 })
  nometermdesc: string;

  @ManyToOne(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.tgfterdescs)
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;
}
