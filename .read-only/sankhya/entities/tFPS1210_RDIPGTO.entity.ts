import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210PrdipgtoEntity } from './tFPS1210_PRDIPGTO.entity';
import { Tfps1210DipgtoEntity } from './tFPS1210_DIPGTO.entity';

@Index(
  'PK_TFPS1210_RDIPGTO',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'cpfbenef',
    'dtTppgto',
    'perIdedmdev',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1210_RDIPGTO', { schema: 'SANKHYA' })
export class Tfps1210RdipgtoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CPFBENEF', length: 100 })
  cpfbenef: string;

  @Column('varchar', { primary: true, name: 'DT_TPPGTO', length: 100 })
  dtTppgto: string;

  @Column('varchar', { primary: true, name: 'PER_IDEDMDEV', length: 100 })
  perIdedmdev: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CODRUBR', nullable: true, length: 30 })
  codrubr: string | null;

  @Column('varchar', { name: 'IDETABRUBR', nullable: true, length: 8 })
  idetabrubr: string | null;

  @Column('float', { name: 'QTDRUBR', nullable: true, precision: 53 })
  qtdrubr: number | null;

  @Column('float', { name: 'FATORRUBR', nullable: true, precision: 53 })
  fatorrubr: number | null;

  @Column('float', { name: 'VRUNIT', nullable: true, precision: 53 })
  vrunit: number | null;

  @Column('float', { name: 'VRRUBR', nullable: true, precision: 53 })
  vrrubr: number | null;

  @OneToMany(
    () => Tfps1210PrdipgtoEntity,
    (tfps1210PrdipgtoEntity) => tfps1210PrdipgtoEntity.tfps1210Rdipgto,
  )
  tfps1210Prdipgtos: Tfps1210PrdipgtoEntity[];

  @ManyToOne(
    () => Tfps1210DipgtoEntity,
    (tfps1210DipgtoEntity) => tfps1210DipgtoEntity.tfps1210Rdipgtos,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CPFBENEF', referencedColumnName: 'cpfbenef' },
    { name: 'DT_TPPGTO', referencedColumnName: 'dtTppgto' },
    { name: 'PER_IDEDMDEV', referencedColumnName: 'chave' },
  ])
  tfps1210Dipgto: Tfps1210DipgtoEntity;
}
