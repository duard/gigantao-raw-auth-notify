import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TsicpoEntity } from './tSICPO.entity';

@Index('PK_TSIPOM', ['codconfig', 'nunota'], { unique: true })
@Entity('TSIPOM', { schema: 'SANKHYA' })
export class TsipomEntity {
  @Column('smallint', { primary: true, name: 'CODCONFIG' })
  codconfig: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'DESCRNOTA', length: 100 })
  descrnota: string;

  @Column('varchar', { name: 'PADRAO', length: 1, default: () => "'N'" })
  padrao: string;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tsipoms)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TsicpoEntity, (tsicpoEntity) => tsicpoEntity.tsipoms)
  @JoinColumn([{ name: 'CODCONFIG', referencedColumnName: 'codconfig' }])
  codconfig2: TsicpoEntity;
}
