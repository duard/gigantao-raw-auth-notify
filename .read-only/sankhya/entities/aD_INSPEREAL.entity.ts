import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_AD_INSPEREAL', ['codlocal', 'nunico'], { unique: true })
@Entity('AD_INSPEREAL', { schema: 'SANKHYA' })
export class AdInsperealEntity {
  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('datetime', { name: 'DHINSP', nullable: true })
  dhinsp: Date | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('varchar', { name: 'TIPVENC', length: 10 })
  tipvenc: string;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.adInspereals)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adInspereals)
  @JoinColumn([{ name: 'CODUSUINSP', referencedColumnName: 'codusu' }])
  codusuinsp: TsiusuEntity;
}
