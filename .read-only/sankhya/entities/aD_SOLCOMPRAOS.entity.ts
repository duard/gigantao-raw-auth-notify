import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgflocEntity } from './tGFLOC.entity';

@Index('PK_AD_SOLCOMPRAOS', ['nuos', 'sequencia'], { unique: true })
@Entity('AD_SOLCOMPRAOS', { schema: 'SANKHYA' })
export class AdSolcompraosEntity {
  @Column('int', { primary: true, name: 'NUOS' })
  nuos: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 100 })
  controle: string | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.adSolcompraos)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.adSolcompraos)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod: TgfgruEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.adSolcompraos)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.adSolcompraos)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;
}
