import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmdconEntity } from './tMDCON.entity';
import { TsiarfEntity } from './tSIARF.entity';

@Index('PK_TSIDRF', ['nurfe', 'sequencia', 'codcon'], { unique: true })
@Entity('TSIDRF', { schema: 'SANKHYA' })
export class TsidrfEntity {
  @Column('smallint', { primary: true, name: 'NURFE' })
  nurfe: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODCON' })
  codcon: number;

  @ManyToOne(() => TmdconEntity, (tmdconEntity) => tmdconEntity.tsidrfs)
  @JoinColumn([{ name: 'CODCON', referencedColumnName: 'codcon' }])
  codcon2: TmdconEntity;

  @ManyToOne(() => TsiarfEntity, (tsiarfEntity) => tsiarfEntity.tsidrfs)
  @JoinColumn([
    { name: 'NURFE', referencedColumnName: 'nurfe' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tsiarf: TsiarfEntity;
}
