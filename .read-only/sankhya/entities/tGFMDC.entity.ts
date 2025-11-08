import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgfadcEntity } from './tGFADC.entity';

@Index('PK_TGFMDC', ['nudev', 'nufinorig'], { unique: true })
@Index('TGFMDC_I01', ['nufinrec'], {})
@Index('TGFMDC_I02', ['nufindesp'], {})
@Index('TGFMDC_I03', ['nufinorig'], {})
@Entity('TGFMDC', { schema: 'SANKHYA' })
export class TgfmdcEntity {
  @Column('int', { primary: true, name: 'NUDEV' })
  nudev: number;

  @Column('int', { primary: true, name: 'NUFINORIG' })
  nufinorig: number;

  @Column('int', { name: 'NUFINDESP' })
  nufindesp: number;

  @Column('int', { name: 'NUFINREC' })
  nufinrec: number;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfmdcs)
  @JoinColumn([{ name: 'NUFINREC', referencedColumnName: 'nufin' }])
  nufinrec2: TgffinEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfmdcs2)
  @JoinColumn([{ name: 'NUFINDESP', referencedColumnName: 'nufin' }])
  nufindesp2: TgffinEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfmdcs3)
  @JoinColumn([{ name: 'NUFINORIG', referencedColumnName: 'nufin' }])
  nufinorig2: TgffinEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgfmdcs)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;

  @ManyToOne(() => TgfadcEntity, (tgfadcEntity) => tgfadcEntity.tgfmdcs)
  @JoinColumn([
    { name: 'ALINEACHEQDEV', referencedColumnName: 'alineacheqdev' },
  ])
  alineacheqdev: TgfadcEntity;
}
