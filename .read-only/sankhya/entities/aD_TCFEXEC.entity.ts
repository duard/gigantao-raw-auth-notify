import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgruEntity } from './tGFGRU.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';

@Index('PK_AD_TCFEXEC', ['nuos', 'sequencia'], { unique: true })
@Entity('AD_TCFEXEC', { schema: 'SANKHYA' })
export class AdTcfexecEntity {
  @Column('int', { primary: true, name: 'NUOS' })
  nuos: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTINI', nullable: true })
  dtini: Date | null;

  @Column('datetime', { name: 'DTFIN', nullable: true })
  dtfin: Date | null;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.adTcfexecs)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod: TgfgruEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adTcfexecs)
  @JoinColumn([{ name: 'CODUSUEXEC', referencedColumnName: 'codusu' }])
  codusuexec: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adTcfexecs2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(
    () => TcfoscabEntity,
    (tcfoscabEntity) => tcfoscabEntity.adTcfexecs,
  )
  @JoinColumn([{ name: 'NUOS', referencedColumnName: 'nuos' }])
  nuos2: TcfoscabEntity;
}
