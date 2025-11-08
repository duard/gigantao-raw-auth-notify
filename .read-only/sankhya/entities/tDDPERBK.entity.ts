import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsihcfEntity } from './tSIHCF.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TDDPERBK', ['nunico', 'codusu', 'sequencia'], { unique: true })
@Entity('TDDPERBK', { schema: 'SANKHYA' })
export class TddperbkEntity {
  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'IDACESSO', nullable: true, length: 100 })
  idacesso: string | null;

  @Column('smallint', { name: 'CODGRUPO', nullable: true })
  codgrupo: number | null;

  @Column('varchar', { name: 'ACESSO', nullable: true, length: 50 })
  acesso: string | null;

  @Column('smallint', { name: 'VERSAO', nullable: true })
  versao: number | null;

  @ManyToOne(() => TsihcfEntity, (tsihcfEntity) => tsihcfEntity.tddperbks)
  @JoinColumn([{ name: 'NUNICO', referencedColumnName: 'nunico' }])
  nunico2: TsihcfEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tddperbks)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
