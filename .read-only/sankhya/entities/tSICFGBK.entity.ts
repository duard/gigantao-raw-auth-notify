import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsihcfEntity } from './tSIHCF.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSICFGBK', ['nunico', 'codusu', 'sequencia'], { unique: true })
@Entity('TSICFGBK', { schema: 'SANKHYA' })
export class TsicfgbkEntity {
  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 400 })
  chave: string | null;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('varchar', { name: 'CHAVEPAI', nullable: true, length: 100 })
  chavepai: string | null;

  @ManyToOne(() => TsihcfEntity, (tsihcfEntity) => tsihcfEntity.tsicfgbks)
  @JoinColumn([{ name: 'NUNICO', referencedColumnName: 'nunico' }])
  nunico2: TsihcfEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsicfgbks)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
