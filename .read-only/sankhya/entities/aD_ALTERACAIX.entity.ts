import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_AD_ALTERACAIX', ['codlocal', 'nunico'], { unique: true })
@Entity('AD_ALTERACAIX', { schema: 'SANKHYA' })
export class AdAlteracaixEntity {
  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('datetime', { name: 'DHALT', nullable: true })
  dhalt: Date | null;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.adAlteracaixes)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adAlteracaixes)
  @JoinColumn([{ name: 'CODUSUALT', referencedColumnName: 'codusu' }])
  codusualt: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adAlteracaixes2)
  @JoinColumn([{ name: 'CODUSURESPANT', referencedColumnName: 'codusu' }])
  codusurespant: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adAlteracaixes3)
  @JoinColumn([{ name: 'CODUSURESPNOVO', referencedColumnName: 'codusu' }])
  codusurespnovo: TsiusuEntity;
}
