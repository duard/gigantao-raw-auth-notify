import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfhftEntity } from './tGFHFT.entity';

@Index(
  'PK_TGFDFT',
  ['nuagendamento', 'tipoage', 'sequencia', 'nuhistorico', 'nudetalhe'],
  {
    unique: true,
  },
)
@Entity('TGFDFT', { schema: 'SANKHYA' })
export class TgfdftEntity {
  @Column('int', { primary: true, name: 'NUAGENDAMENTO' })
  nuagendamento: number;

  @Column('varchar', { primary: true, name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(1)',
  })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUHISTORICO' })
  nuhistorico: number;

  @Column('int', { primary: true, name: 'NUDETALHE' })
  nudetalhe: number;

  @Column('int', { name: 'NUMCONTRATO', nullable: true })
  numcontrato: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @ManyToOne(() => TgfhftEntity, (tgfhftEntity) => tgfhftEntity.tgfdfts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAGENDAMENTO', referencedColumnName: 'nuagendamento' },
    { name: 'TIPOAGE', referencedColumnName: 'tipoage' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'NUHISTORICO', referencedColumnName: 'nuhistorico' },
  ])
  tgfhft: TgfhftEntity;
}
