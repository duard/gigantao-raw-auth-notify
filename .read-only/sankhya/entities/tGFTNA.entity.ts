import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfnasEntity } from './tGFNAS.entity';

@Index('PK_TGFTNA', ['codemp', 'codtipoper'], { unique: true })
@Entity('TGFTNA', { schema: 'SANKHYA' })
export class TgftnaEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgftnas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfnasEntity, (tgfnasEntity) => tgfnasEntity.tgftnas)
  @JoinColumn([
    { name: 'CODNATOPER', referencedColumnName: 'codnatoper' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfnas: TgfnasEntity;
}
