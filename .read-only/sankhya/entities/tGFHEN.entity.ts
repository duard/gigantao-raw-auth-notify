import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftagEntity } from './tGFTAG.entity';

@Index(
  'PK_TGFHEN',
  ['nuagendamento', 'tipoage', 'sequencia', 'dhexec', 'tiposervexec'],
  {
    unique: true,
  },
)
@Entity('TGFHEN', { schema: 'SANKHYA' })
export class TgfhenEntity {
  @Column('int', { primary: true, name: 'NUAGENDAMENTO' })
  nuagendamento: number;

  @Column('varchar', { primary: true, name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { primary: true, name: 'DHEXEC' })
  dhexec: Date;

  @Column('smallint', { primary: true, name: 'TIPOSERVEXEC' })
  tiposervexec: number;

  @Column('varchar', { name: 'MSG', nullable: true, length: 255 })
  msg: string | null;

  @ManyToOne(() => TgftagEntity, (tgftagEntity) => tgftagEntity.tgfhens, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAGENDAMENTO', referencedColumnName: 'nuagendamento' },
    { name: 'TIPOAGE', referencedColumnName: 'tipoage' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgftag: TgftagEntity;
}
