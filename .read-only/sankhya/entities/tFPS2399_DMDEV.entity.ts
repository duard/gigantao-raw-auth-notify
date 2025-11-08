import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2399Entity } from './tFPS2399.entity';
import { Tfps2399DmdevElEntity } from './tFPS2399_DMDEV_EL.entity';
import { Tfps2399DmdevRraEntity } from './tFPS2399_DMDEV_RRA.entity';

@Index(
  'PK_TFPS2399_DMDEV',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2399', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2399_DMDEV', { schema: 'SANKHYA' })
export class Tfps2399DmdevEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE2399', length: 100 })
  chave2399: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'IDEDMDEV', nullable: true, length: 100 })
  idedmdev: string | null;

  @Column('float', { name: 'QMESRRA', nullable: true, precision: 53 })
  qmesrra: number | null;

  @Column('char', { name: 'INDRRA', nullable: true, length: 1 })
  indrra: string | null;

  @ManyToOne(
    () => Tfps2399Entity,
    (tfps2399Entity) => tfps2399Entity.tfps2399Dmdevs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2399', referencedColumnName: 'chave' },
  ])
  tfps2: Tfps2399Entity;

  @OneToMany(
    () => Tfps2399DmdevElEntity,
    (tfps2399DmdevElEntity) => tfps2399DmdevElEntity.tfps2399Dmdev,
  )
  tfps2399DmdevEls: Tfps2399DmdevElEntity[];

  @OneToMany(
    () => Tfps2399DmdevRraEntity,
    (tfps2399DmdevRraEntity) => tfps2399DmdevRraEntity.tfps2399Dmdev,
  )
  tfps2399DmdevRras: Tfps2399DmdevRraEntity[];
}
