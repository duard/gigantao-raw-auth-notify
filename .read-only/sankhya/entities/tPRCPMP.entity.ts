import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprcpmEntity } from './tPRCPM.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TPRCPMP', ['codprod', 'codcpm'], { unique: true })
@Entity('TPRCPMP', { schema: 'SANKHYA' })
export class TprcpmpEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODCPM' })
  codcpm: number;

  @Column('smallint', { name: 'QTDCOMP', default: () => '(1)' })
  qtdcomp: number;

  @ManyToOne(() => TprcpmEntity, (tprcpmEntity) => tprcpmEntity.tprcpmps)
  @JoinColumn([{ name: 'CODCPM', referencedColumnName: 'codcpm' }])
  codcpm2: TprcpmEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprcpmps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
