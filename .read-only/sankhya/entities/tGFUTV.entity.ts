import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmdfeEntity } from './tGFMDFE.entity';

@Index('PK_TGFUTV', ['nuviag', 'seqmdfe', 'codunitv'], { unique: true })
@Entity('TGFUTV', { schema: 'SANKHYA' })
export class TgfutvEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('smallint', { primary: true, name: 'CODUNITV' })
  codunitv: number;

  @Column('varchar', { name: 'IDUNIDTRANSVAZIA', length: 20 })
  idunidtransvazia: string;

  @Column('smallint', { name: 'TIPOUNITRANSVAZIA' })
  tipounitransvazia: number;

  @ManyToOne(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.tgfutvs)
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;
}
