import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsihcfEntity } from './tSIHCF.entity';

@Index('PK_TSIACIBK', ['nunico', 'codusu', 'sequencia'], { unique: true })
@Entity('TSIACIBK', { schema: 'SANKHYA' })
export class TsiacibkEntity {
  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODGRUPO', nullable: true })
  codgrupo: number | null;

  @Column('int', { name: 'CODREL', nullable: true })
  codrel: number | null;

  @Column('varchar', { name: 'CONS', nullable: true, length: 1 })
  cons: string | null;

  @Column('varchar', { name: 'ALTERA', nullable: true, length: 1 })
  altera: string | null;

  @Column('varchar', { name: 'FILTRO', nullable: true, length: 1 })
  filtro: string | null;

  @Column('varchar', { name: 'RESUMO', nullable: true, length: 1 })
  resumo: string | null;

  @Column('varchar', { name: 'SEGURANCA', nullable: true, length: 1 })
  seguranca: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiacibks)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsihcfEntity, (tsihcfEntity) => tsihcfEntity.tsiacibks)
  @JoinColumn([{ name: 'NUNICO', referencedColumnName: 'nunico' }])
  nunico2: TsihcfEntity;
}
