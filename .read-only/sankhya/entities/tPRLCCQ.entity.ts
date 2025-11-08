import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgacllEntity } from './tGACLL.entity';
import { TpriccqEntity } from './tPRICCQ.entity';
import { TpratvEntity } from './tPRATV.entity';

@Index('PK_TPRLCCQ', ['idiccq', 'nucll'], { unique: true })
@Entity('TPRLCCQ', { schema: 'SANKHYA' })
export class TprlccqEntity {
  @Column('int', { primary: true, name: 'IDICCQ' })
  idiccq: number;

  @Column('int', { primary: true, name: 'NUCLL' })
  nucll: number;

  @ManyToOne(() => TgacllEntity, (tgacllEntity) => tgacllEntity.tprlccqs)
  @JoinColumn([{ name: 'NUCLL', referencedColumnName: 'nucll' }])
  nucll2: TgacllEntity;

  @ManyToOne(() => TpriccqEntity, (tpriccqEntity) => tpriccqEntity.tprlccqs)
  @JoinColumn([{ name: 'IDICCQ', referencedColumnName: 'idiccq' }])
  idiccq2: TpriccqEntity;

  @ManyToOne(() => TpratvEntity, (tpratvEntity) => tpratvEntity.tprlccqs)
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx: TpratvEntity;
}
