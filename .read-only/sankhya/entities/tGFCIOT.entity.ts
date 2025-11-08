import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmdfeEntity } from './tGFMDFE.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFCIOT', ['nuviag', 'seqmdfe', 'ciot'], { unique: true })
@Entity('TGFCIOT', { schema: 'SANKHYA' })
export class TgfciotEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('varchar', { primary: true, name: 'CIOT', length: 12 })
  ciot: string;

  @ManyToOne(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.tgfciots, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfciots)
  @JoinColumn([{ name: 'CODPARCCIOT', referencedColumnName: 'codparc' }])
  codparcciot: TgfparEntity;
}
