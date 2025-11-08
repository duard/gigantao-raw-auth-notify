import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftagEntity } from './tGFTAG.entity';

@Index(
  'PK_TGFHIISS',
  ['nuagendamento', 'tipoage', 'sequencia', 'nuhistorico'],
  { unique: true },
)
@Entity('TGFHIISS', { schema: 'SANKHYA' })
export class TgfhiissEntity {
  @Column('int', { primary: true, name: 'NUAGENDAMENTO' })
  nuagendamento: number;

  @Column('varchar', { primary: true, name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUHISTORICO' })
  nuhistorico: number;

  @Column('smallint', { name: 'QNTNOTAS', nullable: true })
  qntnotas: number | null;

  @Column('smallint', { name: 'QNTCANCELADAS', nullable: true })
  qntcanceladas: number | null;

  @Column('smallint', { name: 'QNTFINANCEIRO', nullable: true })
  qntfinanceiro: number | null;

  @Column('smallint', { name: 'QNTREDUCAOZ', nullable: true })
  qntreducaoz: number | null;

  @Column('datetime', { name: 'DHINIEXEC' })
  dhiniexec: Date;

  @Column('datetime', { name: 'DHFIMEXEC' })
  dhfimexec: Date;

  @ManyToOne(() => TgftagEntity, (tgftagEntity) => tgftagEntity.tgfhiisses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAGENDAMENTO', referencedColumnName: 'nuagendamento' },
    { name: 'TIPOAGE', referencedColumnName: 'tipoage' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgftag: TgftagEntity;
}
