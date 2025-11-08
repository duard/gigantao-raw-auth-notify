import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftopEntity } from './tGFTOP.entity';
import { TgfstmvEntity } from './tGFSTMV.entity';

@Index('PK_TGFSTMVT', ['nrounico', 'codtipoper'], { unique: true })
@Entity('TGFSTMVT', { schema: 'SANKHYA' })
export class TgfstmvtEntity {
  @Column('int', { primary: true, name: 'NROUNICO' })
  nrounico: number;

  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @ManyToOne(() => TgftopEntity, (tgftopEntity) => tgftopEntity.tgfstmvts)
  @JoinColumn([
    { name: 'CODTIPOPER', referencedColumnName: 'codtipoper' },
    { name: 'DHTIPOPER', referencedColumnName: 'dhalter' },
  ])
  tgftop: TgftopEntity;

  @ManyToOne(() => TgfstmvEntity, (tgfstmvEntity) => tgfstmvEntity.tgfstmvts)
  @JoinColumn([{ name: 'NROUNICO', referencedColumnName: 'nrounico' }])
  nrounico2: TgfstmvEntity;
}
