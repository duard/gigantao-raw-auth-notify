import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2299DmdevEntity } from './tFPS2299_DMDEV.entity';
import { Tfps2299DmdevRraAdvEntity } from './tFPS2299_DMDEV_RRA_ADV.entity';

@Index(
  'PK_TFPS2299_DMDEV_RRA',
  ['codemp', 'dtref', 'tpamb', 'chave', 'sequencia', 'chave2299', 'idedmdev'],
  { unique: true },
)
@Entity('TFPS2299_DMDEV_RRA', { schema: 'SANKHYA' })
export class Tfps2299DmdevRraEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE2299', length: 100 })
  chave2299: string;

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
    () => Tfps2299DmdevEntity,
    (tfps2299DmdevEntity) => tfps2299DmdevEntity.tfps2299DmdevRras,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2299', referencedColumnName: 'chave2299' },
    { name: 'IDEDMDEV', referencedColumnName: 'chave' },
  ])
  tfps2299Dmdev: Tfps2299DmdevEntity;

  @OneToMany(
    () => Tfps2299DmdevRraAdvEntity,
    (tfps2299DmdevRraAdvEntity) => tfps2299DmdevRraAdvEntity.tfps2299DmdevRra,
  )
  tfps2299DmdevRraAdvs: Tfps2299DmdevRraAdvEntity[];
}
