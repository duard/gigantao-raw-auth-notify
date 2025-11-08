import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftagEntity } from './tGFTAG.entity';

@Index(
  'PK_TGFHIBPT',
  ['nuagendamento', 'tipoage', 'sequencia', 'nuhistorico'],
  { unique: true },
)
@Entity('TGFHIBPT', { schema: 'SANKHYA' })
export class TgfhibptEntity {
  @Column('int', { primary: true, name: 'NUAGENDAMENTO' })
  nuagendamento: number;

  @Column('varchar', { primary: true, name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUHISTORICO' })
  nuhistorico: number;

  @Column('datetime', { name: 'DHINIEXEC' })
  dhiniexec: Date;

  @Column('datetime', { name: 'DHFIMEXEC' })
  dhfimexec: Date;

  @Column('varchar', { name: 'MSGIBPT', nullable: true, length: 200 })
  msgibpt: string | null;

  @Column('varchar', { name: 'TPEXEC', nullable: true, length: 1 })
  tpexec: string | null;

  @ManyToOne(() => TgftagEntity, (tgftagEntity) => tgftagEntity.tgfhibpts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAGENDAMENTO', referencedColumnName: 'nuagendamento' },
    { name: 'TIPOAGE', referencedColumnName: 'tipoage' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgftag: TgftagEntity;
}
