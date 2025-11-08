import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210InfoircrEntity } from './tFPS1210_INFOIRCR.entity';
import { Tfps1210InfovaloresEntity } from './tFPS1210_INFOVALORES.entity';

@Index(
  'PK_TFPS1210_INFOPROCRET',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplen',
    'chaveinfoircr',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1210_INFOPROCRET', { schema: 'SANKHYA' })
export class Tfps1210InfoprocretEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE1210', length: 100 })
  chave1210: string;

  @Column('varchar', { primary: true, name: 'CHAVEINFOIRCOMPLEN', length: 100 })
  chaveinfoircomplen: string;

  @Column('varchar', { primary: true, name: 'CHAVEINFOIRCR', length: 100 })
  chaveinfoircr: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'TPPROCRET', nullable: true, length: 1 })
  tpprocret: string | null;

  @Column('varchar', { name: 'NRPROCRET', nullable: true, length: 21 })
  nrprocret: string | null;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @ManyToOne(
    () => Tfps1210InfoircrEntity,
    (tfps1210InfoircrEntity) => tfps1210InfoircrEntity.tfps1210Infoprocrets,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave1210' },
    { name: 'CHAVEINFOIRCOMPLEN', referencedColumnName: 'chaveinfoircomplen' },
    { name: 'CHAVEINFOIRCR', referencedColumnName: 'chave' },
  ])
  tfps1210Infoircr: Tfps1210InfoircrEntity;

  @OneToMany(
    () => Tfps1210InfovaloresEntity,
    (tfps1210InfovaloresEntity) =>
      tfps1210InfovaloresEntity.tfps1210Infoprocret,
  )
  tfps1210Infovalores: Tfps1210InfovaloresEntity[];
}
