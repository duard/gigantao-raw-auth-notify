import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftagEntity } from './tGFTAG.entity';

@Index('PK_TGFRFD', ['nuagendamento', 'tipoage', 'sequencia', 'nurfd'], {
  unique: true,
})
@Entity('TGFRFD', { schema: 'SANKHYA' })
export class TgfrfdEntity {
  @Column('int', { primary: true, name: 'NUAGENDAMENTO' })
  nuagendamento: number;

  @Column('varchar', { primary: true, name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NURFD' })
  nurfd: number;

  @Column('smallint', { name: 'CODEMPDEST' })
  codempdest: number;

  @Column('smallint', { name: 'PRIORIDADE' })
  prioridade: number;

  @Column('int', { name: 'CODLOCAL', nullable: true })
  codlocal: number | null;

  @Column('varchar', { name: 'CONSIDRESERVA', length: 1, default: () => "'N'" })
  considreserva: string;

  @Column('varchar', {
    name: 'CONSIDCOMPRAPEND',
    length: 1,
    default: () => "'N'",
  })
  considcomprapend: string;

  @Column('varchar', {
    name: 'GERAMOVENTDEST',
    length: 1,
    default: () => "'N'",
  })
  geramoventdest: string;

  @Column('int', { name: 'CODMODDEST' })
  codmoddest: number;

  @ManyToOne(() => TgftagEntity, (tgftagEntity) => tgftagEntity.tgfrfds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAGENDAMENTO', referencedColumnName: 'nuagendamento' },
    { name: 'TIPOAGE', referencedColumnName: 'tipoage' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgftag: TgftagEntity;
}
