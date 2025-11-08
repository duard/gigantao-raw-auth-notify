import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2399DmdevDrpaEntity } from './tFPS2399_DMDEV_DRPA.entity';
import { Tfps2399DmdevEntity } from './tFPS2399_DMDEV.entity';
import { Tfps2399DmdevIrpaEntity } from './tFPS2399_DMDEV_IRPA.entity';

@Index(
  'PK_TFPS2399_DMDEV_EL',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2399', 'idedmdev', 'chave'],
  { unique: true },
)
@Entity('TFPS2399_DMDEV_EL', { schema: 'SANKHYA' })
export class Tfps2399DmdevElEntity {
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

  @Column('varchar', { primary: true, name: 'IDEDMDEV', length: 100 })
  idedmdev: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('varchar', { name: 'CODLOTACAO', nullable: true, length: 30 })
  codlotacao: string | null;

  @Column('smallint', { name: 'GRAUEXP', nullable: true })
  grauexp: number | null;

  @Column('smallint', { name: 'INDSIMPLES', nullable: true })
  indsimples: number | null;

  @OneToMany(
    () => Tfps2399DmdevDrpaEntity,
    (tfps2399DmdevDrpaEntity) => tfps2399DmdevDrpaEntity.tfps2399DmdevEl,
  )
  tfps2399DmdevDrpas: Tfps2399DmdevDrpaEntity[];

  @ManyToOne(
    () => Tfps2399DmdevEntity,
    (tfps2399DmdevEntity) => tfps2399DmdevEntity.tfps2399DmdevEls,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2399', referencedColumnName: 'chave2399' },
    { name: 'IDEDMDEV', referencedColumnName: 'chave' },
  ])
  tfps2399Dmdev: Tfps2399DmdevEntity;

  @OneToMany(
    () => Tfps2399DmdevIrpaEntity,
    (tfps2399DmdevIrpaEntity) => tfps2399DmdevIrpaEntity.tfps2399DmdevEl,
  )
  tfps2399DmdevIrpas: Tfps2399DmdevIrpaEntity[];
}
