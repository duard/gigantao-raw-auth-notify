import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1200DmdevEntity } from './tFPS1200_DMDEV.entity';
import { Tfps1200DmdevRraAdvEntity } from './tFPS1200_DMDEV_RRA_ADV.entity';

@Index(
  'PK_TFPS1200_DMDEV_RRA',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave1200', 'chaveDmdev', 'chave'],
  { unique: true },
)
@Entity('TFPS1200_DMDEV_RRA', { schema: 'SANKHYA' })
export class Tfps1200DmdevRraEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE1200', length: 100 })
  chave1200: string;

  @Column('varchar', { primary: true, name: 'CHAVE_DMDEV', length: 100 })
  chaveDmdev: string;

  @Column('varchar', { name: 'IDEDMDEV', nullable: true, length: 100 })
  idedmdev: string | null;

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
    () => Tfps1200DmdevEntity,
    (tfps1200DmdevEntity) => tfps1200DmdevEntity.tfps1200DmdevRras,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1200', referencedColumnName: 'chave1200' },
    { name: 'CHAVE_DMDEV', referencedColumnName: 'chave' },
  ])
  tfps1200Dmdev: Tfps1200DmdevEntity;

  @OneToMany(
    () => Tfps1200DmdevRraAdvEntity,
    (tfps1200DmdevRraAdvEntity) => tfps1200DmdevRraAdvEntity.tfps1200DmdevRra,
  )
  tfps1200DmdevRraAdvs: Tfps1200DmdevRraAdvEntity[];
}
