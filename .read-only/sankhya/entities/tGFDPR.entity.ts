import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfhisEntity } from './tGFHIS.entity';

@Index(
  'PK_TGFDPR',
  ['nuagendamento', 'tipoage', 'sequencia', 'nuhistorico', 'nudetalhe'],
  {
    unique: true,
  },
)
@Entity('TGFDPR', { schema: 'SANKHYA' })
export class TgfdprEntity {
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

  @Column('int', { name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 500 })
  observacao: string | null;

  @ManyToOne(() => TgfhisEntity, (tgfhisEntity) => tgfhisEntity.tgfdprs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAGENDAMENTO', referencedColumnName: 'nuagendamento' },
    { name: 'TIPOAGE', referencedColumnName: 'tipoage' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'NUHISTORICO', referencedColumnName: 'nuhistorico' },
  ])
  tgfhis: TgfhisEntity;
}
