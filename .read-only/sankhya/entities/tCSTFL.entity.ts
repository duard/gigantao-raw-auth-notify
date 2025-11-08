import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TCSTFL',
  [
    'codprod',
    'variacao',
    'codservorig',
    'sequenciaorig',
    'codservdest',
    'sequenciadest',
  ],
  { unique: true },
)
@Entity('TCSTFL', { schema: 'SANKHYA' })
export class TcstflEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'VARIACAO' })
  variacao: number;

  @Column('int', { primary: true, name: 'CODSERVORIG' })
  codservorig: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIAORIG' })
  sequenciaorig: number;

  @Column('int', { primary: true, name: 'CODSERVDEST' })
  codservdest: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIADEST' })
  sequenciadest: number;
}
