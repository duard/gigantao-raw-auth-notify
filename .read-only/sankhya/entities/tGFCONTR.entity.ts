import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfmdfeEntity } from './tGFMDFE.entity';

@Index('PK_TGFCONTR', ['nuviag', 'seqmdfe', 'codparccontr'], { unique: true })
@Entity('TGFCONTR', { schema: 'SANKHYA' })
export class TgfcontrEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('int', { primary: true, name: 'CODPARCCONTR' })
  codparccontr: number;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcontrs)
  @JoinColumn([{ name: 'CODPARCCONTR', referencedColumnName: 'codparc' }])
  codparccontr2: TgfparEntity;

  @ManyToOne(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.tgfcontrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;
}
