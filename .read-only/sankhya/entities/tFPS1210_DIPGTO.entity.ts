import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210IpgtoEntity } from './tFPS1210_IPGTO.entity';
import { Tfps1210RdipgtoEntity } from './tFPS1210_RDIPGTO.entity';

@Index(
  'PK_TFPS1210_DIPGTO',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'cpfbenef', 'dtTppgto', 'chave'],
  { unique: true },
)
@Entity('TFPS1210_DIPGTO', { schema: 'SANKHYA' })
export class Tfps1210DipgtoEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'PERREF', nullable: true, length: 7 })
  perref: string | null;

  @Column('varchar', { name: 'IDEDMDEV', nullable: true, length: 30 })
  idedmdev: string | null;

  @Column('char', { name: 'INDPGTOTT', nullable: true, length: 1 })
  indpgtott: string | null;

  @Column('float', { name: 'VRLIQ', nullable: true, precision: 53 })
  vrliq: number | null;

  @Column('varchar', { name: 'NRRECARQ', nullable: true, length: 40 })
  nrrecarq: string | null;

  @ManyToOne(
    () => Tfps1210IpgtoEntity,
    (tfps1210IpgtoEntity) => tfps1210IpgtoEntity.tfps1210Dipgtos,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CPFBENEF', referencedColumnName: 'cpfbenef' },
    { name: 'DT_TPPGTO', referencedColumnName: 'chave' },
  ])
  tfps1210Ipgto: Tfps1210IpgtoEntity;

  @OneToMany(
    () => Tfps1210RdipgtoEntity,
    (tfps1210RdipgtoEntity) => tfps1210RdipgtoEntity.tfps1210Dipgto,
  )
  tfps1210Rdipgtos: Tfps1210RdipgtoEntity[];
}
