import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfmdfeEntity } from './tGFMDFE.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfperiEntity } from './tGFPERI.entity';

@Index('PK_TGFNMDFE', ['nuviag', 'seqmdfe', 'nunota'], { unique: true })
@Index('TGFNMDFE_I01', ['nunota'], {})
@Entity('TGFNMDFE', { schema: 'SANKHYA' })
export class TgfnmdfeEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'INDREENTREGA', nullable: true, length: 1 })
  indreentrega: string | null;

  @Column('char', { name: 'STATUSENVIO', nullable: true, length: 1 })
  statusenvio: string | null;

  @ManyToOne(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.tgfnmdfes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfnmdfes)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @OneToMany(() => TgfperiEntity, (tgfperiEntity) => tgfperiEntity.tgfnmdfe)
  tgfperis: TgfperiEntity[];
}
