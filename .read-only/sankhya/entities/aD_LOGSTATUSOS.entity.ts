import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';

@Index('PK_AD_LOGSTATUSOS', ['nuos', 'sequencia'], { unique: true })
@Entity('AD_LOGSTATUSOS', { schema: 'SANKHYA' })
export class AdLogstatusosEntity {
  @Column('int', { primary: true, name: 'NUOS' })
  nuos: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('varchar', { name: 'STATUSFIN', nullable: true, length: 10 })
  statusfin: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adLogstatusos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(
    () => TcfoscabEntity,
    (tcfoscabEntity) => tcfoscabEntity.adLogstatusos,
  )
  @JoinColumn([{ name: 'NUOS', referencedColumnName: 'nuos' }])
  nuos2: TcfoscabEntity;
}
