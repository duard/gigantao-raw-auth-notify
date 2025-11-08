import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsihcfEntity } from './tSIHCF.entity';

@Index('PK_TSICONFBK', ['nunico', 'codusu', 'sequencia'], { unique: true })
@Entity('TSICONFBK', { schema: 'SANKHYA' })
export class TsiconfbkEntity {
  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'FORM', nullable: true, length: 20 })
  form: string | null;

  @Column('text', { name: 'CONF', nullable: true })
  conf: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiconfbks)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsihcfEntity, (tsihcfEntity) => tsihcfEntity.tsiconfbks)
  @JoinColumn([{ name: 'NUNICO', referencedColumnName: 'nunico' }])
  nunico2: TsihcfEntity;
}
