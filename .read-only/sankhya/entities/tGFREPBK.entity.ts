import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsihcfEntity } from './tSIHCF.entity';

@Index('PK_TGFREPBK', ['nunico', 'sequencia'], { unique: true })
@Entity('TGFREPBK', { schema: 'SANKHYA' })
export class TgfrepbkEntity {
  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('char', { name: 'TIPREST', length: 1 })
  tiprest: string;

  @Column('int', { name: 'CODCOLREST' })
  codcolrest: number;

  @Column('varchar', { name: 'SERIE', length: 3 })
  serie: string;

  @Column('char', { name: 'RESTRICAO', length: 1 })
  restricao: string;

  @ManyToOne(() => TsihcfEntity, (tsihcfEntity) => tsihcfEntity.tgfrepbks)
  @JoinColumn([{ name: 'NUNICO', referencedColumnName: 'nunico' }])
  nunico2: TsihcfEntity;
}
