import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfhrfEntity } from './tGFHRF.entity';

@Index(
  'PK_TGFHPRF',
  ['nuagendamento', 'tipoage', 'sequencia', 'nuhistorico', 'nudetalhe'],
  {
    unique: true,
  },
)
@Entity('TGFHPRF', { schema: 'SANKHYA' })
export class TgfhprfEntity {
  @Column('int', { primary: true, name: 'NUAGENDAMENTO' })
  nuagendamento: number;

  @Column('varchar', { primary: true, name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'NUHISTORICO' })
  nuhistorico: number;

  @Column('varchar', { name: 'MOTIVOERRO', length: 1000 })
  motivoerro: string;

  @Column('int', { primary: true, name: 'NUDETALHE' })
  nudetalhe: number;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('smallint', { name: 'CODEMPDEST', nullable: true })
  codempdest: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('float', { name: 'QTDNECESSARIA', nullable: true, precision: 53 })
  qtdnecessaria: number | null;

  @Column('float', { name: 'QTDDISPONIVEL', nullable: true, precision: 53 })
  qtddisponivel: number | null;

  @ManyToOne(() => TgfhrfEntity, (tgfhrfEntity) => tgfhrfEntity.tgfhprfs, {
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
