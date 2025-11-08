import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcfservosEntity } from './tCFSERVOS.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCFSERVOSATO', ['nuos', 'sequencia', 'id'], { unique: true })
@Entity('TCFSERVOSATO', { schema: 'SANKHYA' })
export class TcfservosatoEntity {
  @Column('int', { primary: true, name: 'NUOS' })
  nuos: number;

  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHINI', nullable: true })
  dhini: Date | null;

  @Column('datetime', { name: 'DHFIN', nullable: true })
  dhfin: Date | null;

  @Column('int', { name: 'INTERVALO', nullable: true })
  intervalo: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('datetime', { name: 'DHAPONT', nullable: true })
  dhapont: Date | null;

  @ManyToOne(
    () => TcfservosEntity,
    (tcfservosEntity) => tcfservosEntity.tcfservosatoes,
  )
  @JoinColumn([
    { name: 'NUOS', referencedColumnName: 'nuos' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tcfservos: TcfservosEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcfservosatoes)
  @JoinColumn([{ name: 'CODEXEC', referencedColumnName: 'codusu' }])
  codexec: TsiusuEntity;
}
