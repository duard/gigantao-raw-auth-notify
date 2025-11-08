import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2399DmdevEntity } from './tFPS2399_DMDEV.entity';
import { Tfps2399DmdevRraAdvEntity } from './tFPS2399_DMDEV_RRA_ADV.entity';

@Index(
  'PK_TFPS2399_DMDEV_RRA',
  ['codemp', 'dtref', 'tpamb', 'chave', 'sequencia', 'chave2399', 'idedmdev'],
  { unique: true },
)
@Entity('TFPS2399_DMDEV_RRA', { schema: 'SANKHYA' })
export class Tfps2399DmdevRraEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE2399', length: 100 })
  chave2399: string;

  @Column('varchar', { primary: true, name: 'IDEDMDEV', length: 100 })
  idedmdev: string;

  @Column('smallint', { name: 'TIPOPROCESSORRA', nullable: true })
  tipoprocessorra: number | null;

  @Column('varchar', { name: 'NROPROCESSORRA', nullable: true, length: 21 })
  nroprocessorra: string | null;

  @Column('varchar', { name: 'DESCRICAORRA', nullable: true, length: 50 })
  descricaorra: string | null;

  @Column('float', { name: 'QMESRRA', nullable: true, precision: 53 })
  qmesrra: number | null;

  @Column('float', { name: 'VLRDESPESAJUD', nullable: true, precision: 53 })
  vlrdespesajud: number | null;

  @Column('float', { name: 'VLRDESPESAADV', nullable: true, precision: 53 })
  vlrdespesaadv: number | null;

  @ManyToOne(
    () => Tfps2399DmdevEntity,
    (tfps2399DmdevEntity) => tfps2399DmdevEntity.tfps2399DmdevRras,
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
    () => Tfps2399DmdevRraAdvEntity,
    (tfps2399DmdevRraAdvEntity) => tfps2399DmdevRraAdvEntity.tfps2399DmdevRra,
  )
  tfps2399DmdevRraAdvs: Tfps2399DmdevRraAdvEntity[];
}
