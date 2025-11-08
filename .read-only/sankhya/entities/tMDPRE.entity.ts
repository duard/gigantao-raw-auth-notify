import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmdconEntity } from './tMDCON.entity';
import { TmdgrfEntity } from './tMDGRF.entity';

@Index('PK_TMDPRE', ['codcon', 'codgraf', 'codper'], { unique: true })
@Entity('TMDPRE', { schema: 'SANKHYA' })
export class TmdpreEntity {
  @Column('int', { primary: true, name: 'CODCON' })
  codcon: number;

  @Column('int', { primary: true, name: 'CODGRAF' })
  codgraf: number;

  @Column('int', { primary: true, name: 'CODPER' })
  codper: number;

  @ManyToOne(() => TmdconEntity, (tmdconEntity) => tmdconEntity.tmdpres)
  @JoinColumn([{ name: 'CODCON', referencedColumnName: 'codcon' }])
  codcon2: TmdconEntity;

  @ManyToOne(() => TmdgrfEntity, (tmdgrfEntity) => tmdgrfEntity.tmdpres)
  @JoinColumn([
    { name: 'CODGRAF', referencedColumnName: 'codgraf' },
    { name: 'CODPER', referencedColumnName: 'codper' },
  ])
  tmdgrf: TmdgrfEntity;
}
