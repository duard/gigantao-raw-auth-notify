import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprarwEntity } from './tPRARW.entity';

@Index(
  'PK_TPRIARW',
  ['nuapo', 'seqapa', 'codwcp', 'codcre', 'codmqp', 'nueqp', 'codrhp'],
  {
    unique: true,
  },
)
@Entity('TPRIARW', { schema: 'SANKHYA' })
export class TpriarwEntity {
  @Column('int', { primary: true, name: 'NUAPO' })
  nuapo: number;

  @Column('smallint', { primary: true, name: 'SEQAPA' })
  seqapa: number;

  @Column('int', { primary: true, name: 'CODWCP' })
  codwcp: number;

  @Column('int', { primary: true, name: 'CODCRE' })
  codcre: number;

  @Column('int', { primary: true, name: 'CODMQP', default: () => '(0)' })
  codmqp: number;

  @Column('int', { primary: true, name: 'NUEQP', default: () => '(0)' })
  nueqp: number;

  @Column('int', { primary: true, name: 'CODRHP', default: () => '(0)' })
  codrhp: number;

  @ManyToOne(() => TprarwEntity, (tprarwEntity) => tprarwEntity.tpriarws)
  @JoinColumn([
    { name: 'NUAPO', referencedColumnName: 'nuapo' },
    { name: 'SEQAPA', referencedColumnName: 'seqapa' },
    { name: 'CODWCP', referencedColumnName: 'codwcp' },
    { name: 'CODCRE', referencedColumnName: 'codcre' },
  ])
  tprarw: TprarwEntity;
}
