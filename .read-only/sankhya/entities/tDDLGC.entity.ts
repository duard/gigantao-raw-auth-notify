import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TddligEntity } from './tDDLIG.entity';
import { TddcamEntity } from './tDDCAM.entity';

@Index(
  'IX_TDDLGC_CONTROLE_DE56A',
  [
    'nuinstorig',
    'nucampoorig',
    'nuinstdest',
    'nucampodest',
    'origObrigatoria',
    'ordem',
    'controle',
  ],
  {},
)
@Index(
  'PK_TDDLGC',
  ['nuinstorig', 'nucampoorig', 'nuinstdest', 'nucampodest'],
  { unique: true },
)
@Entity('TDDLGC', { schema: 'SANKHYA' })
export class TddlgcEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUINSTORIG',
    precision: 10,
    scale: 0,
  })
  nuinstorig: number;

  @Column('numeric', {
    primary: true,
    name: 'NUCAMPOORIG',
    precision: 10,
    scale: 0,
  })
  nucampoorig: number;

  @Column('numeric', {
    primary: true,
    name: 'NUINSTDEST',
    precision: 10,
    scale: 0,
  })
  nuinstdest: number;

  @Column('numeric', {
    primary: true,
    name: 'NUCAMPODEST',
    precision: 10,
    scale: 0,
  })
  nucampodest: number;

  @Column('varchar', {
    name: 'ORIG_OBRIGATORIA',
    length: 1,
    default: () => "'S'",
  })
  origObrigatoria: string;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;

  @ManyToOne(() => TddligEntity, (tddligEntity) => tddligEntity.tddlgcs)
  @JoinColumn([
    { name: 'NUINSTORIG', referencedColumnName: 'nuinstorig' },
    { name: 'NUINSTDEST', referencedColumnName: 'nuinstdest' },
  ])
  tddlig: TddligEntity;

  @ManyToOne(() => TddcamEntity, (tddcamEntity) => tddcamEntity.tddlgcs)
  @JoinColumn([{ name: 'NUCAMPODEST', referencedColumnName: 'nucampo' }])
  nucampodest2: TddcamEntity;

  @ManyToOne(() => TddcamEntity, (tddcamEntity) => tddcamEntity.tddlgcs2)
  @JoinColumn([{ name: 'NUCAMPOORIG', referencedColumnName: 'nucampo' }])
  nucampoorig2: TddcamEntity;
}
