import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmdfeEntity } from './tGFMDFE.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFMDFEVALP', ['nuviag', 'seqmdfe', 'sequencia'], { unique: true })
@Entity('TGFMDFEVALP', { schema: 'SANKHYA' })
export class TgfmdfevalpEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NUCOMPRA', nullable: true, length: 20 })
  nucompra: string | null;

  @Column('float', { name: 'VLRPEDAGIO', precision: 53 })
  vlrpedagio: number;

  @Column('varchar', { name: 'TPVALEPED', nullable: true, length: 2 })
  tpvaleped: string | null;

  @Column('varchar', { name: 'CATEGCOMBVEIC', nullable: true, length: 2 })
  categcombveic: string | null;

  @ManyToOne(
    () => TgfmdfeEntity,
    (tgfmdfeEntity) => tgfmdfeEntity.tgfmdfevalps,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfmdfevalps)
  @JoinColumn([{ name: 'CODPARCPAG', referencedColumnName: 'codparc' }])
  codparcpag: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfmdfevalps2)
  @JoinColumn([{ name: 'CODPARCFORN', referencedColumnName: 'codparc' }])
  codparcforn: TgfparEntity;
}
