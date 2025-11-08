import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfhnpEntity } from './tGFHNP.entity';

@Index(
  'PK_TGFDPN',
  ['nuagendamento', 'tipoage', 'sequencia', 'nuhistorico', 'nudetalhe'],
  {
    unique: true,
  },
)
@Entity('TGFDPN', { schema: 'SANKHYA' })
export class TgfdpnEntity {
  @Column('int', { primary: true, name: 'NUAGENDAMENTO' })
  nuagendamento: number;

  @Column('varchar', { primary: true, name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUHISTORICO' })
  nuhistorico: number;

  @Column('int', { primary: true, name: 'NUDETALHE' })
  nudetalhe: number;

  @Column('int', { name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @ManyToOne(() => TgfhnpEntity, (tgfhnpEntity) => tgfhnpEntity.tgfdpns, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAGENDAMENTO', referencedColumnName: 'nuagendamento' },
    { name: 'TIPOAGE', referencedColumnName: 'tipoage' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'NUHISTORICO', referencedColumnName: 'nuhistorico' },
  ])
  tgfhnp: TgfhnpEntity;
}
