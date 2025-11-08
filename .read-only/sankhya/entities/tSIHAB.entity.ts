import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIHAB', ['codrgb', 'codhab'], { unique: true })
@Entity('TSIHAB', { schema: 'SANKHYA' })
export class TsihabEntity {
  @Column('varchar', { name: 'CAMPOALTER', length: 100 })
  campoalter: string;

  @Column('text', { name: 'VLRANT', nullable: true })
  vlrant: string | null;

  @Column('text', { name: 'VLRPOS' })
  vlrpos: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('varchar', { name: 'MOTIVO', length: 3103 })
  motivo: string;

  @Column('smallint', { primary: true, name: 'CODHAB' })
  codhab: number;

  @Column('smallint', { primary: true, name: 'CODRGB' })
  codrgb: number;

  @Column('varchar', { name: 'NOMEREGRA', length: 30 })
  nomeregra: string;

  @Column('varchar', { name: 'TABELA', length: 32 })
  tabela: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsihabs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
