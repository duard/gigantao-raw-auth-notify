import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfhrfEntity } from './tGFHRF.entity';

@Index(
  'PK_TGFHDRF',
  ['nuagendamento', 'tipoage', 'sequencia', 'nuhistorico', 'nudetalhe'],
  {
    unique: true,
  },
)
@Entity('TGFHDRF', { schema: 'SANKHYA' })
export class TgfhdrfEntity {
  @Column('int', { primary: true, name: 'NUAGENDAMENTO' })
  nuagendamento: number;

  @Column('varchar', { primary: true, name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'NUHISTORICO' })
  nuhistorico: number;

  @Column('smallint', { primary: true, name: 'NUDETALHE' })
  nudetalhe: number;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('smallint', { name: 'CODEMPDEST', nullable: true })
  codempdest: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @ManyToOne(() => TgfhrfEntity, (tgfhrfEntity) => tgfhrfEntity.tgfhdrfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAGENDAMENTO', referencedColumnName: 'nuagendamento' },
    { name: 'TIPOAGE', referencedColumnName: 'tipoage' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'NUHISTORICO', referencedColumnName: 'nuhistorico' },
  ])
  tgfhrf: TgfhrfEntity;
}
