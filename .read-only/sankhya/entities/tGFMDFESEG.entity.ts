import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfaveEntity } from './tGFAVE.entity';
import { TgfmdfeEntity } from './tGFMDFE.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFMDFESEG', ['nuviag', 'seqmdfe', 'numapolice'], { unique: true })
@Entity('TGFMDFESEG', { schema: 'SANKHYA' })
export class TgfmdfesegEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('varchar', { primary: true, name: 'NUMAPOLICE', length: 20 })
  numapolice: string;

  @OneToMany(() => TgfaveEntity, (tgfaveEntity) => tgfaveEntity.tgfmdfeseg)
  tgfaves: TgfaveEntity[];

  @ManyToOne(
    () => TgfmdfeEntity,
    (tgfmdfeEntity) => tgfmdfeEntity.tgfmdfesegs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfmdfesegs)
  @JoinColumn([{ name: 'CODPARCSEG', referencedColumnName: 'codparc' }])
  codparcseg: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfmdfesegs2)
  @JoinColumn([{ name: 'CODPARCRESPSEG', referencedColumnName: 'codparc' }])
  codparcrespseg: TgfparEntity;
}
