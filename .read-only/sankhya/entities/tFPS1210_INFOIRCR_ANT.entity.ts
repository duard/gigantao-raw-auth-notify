import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210DeddepenAntEntity } from './tFPS1210_DEDDEPEN_ANT.entity';
import { Tfps1210InfoircomplemAntEntity } from './tFPS1210_INFOIRCOMPLEM_ANT.entity';
import { Tfps1210InfoprocretAntEntity } from './tFPS1210_INFOPROCRET_ANT.entity';
import { Tfps1210PenalimAntEntity } from './tFPS1210_PENALIM_ANT.entity';
import { Tfps1210PrevidcomplAntEntity } from './tFPS1210_PREVIDCOMPL_ANT.entity';

@Index(
  'PK_TFPS1210_INFOIRCR_ANT',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplen',
    'chave',
    'dtrefret',
    'sequenciaret',
  ],
  { unique: true },
)
@Index(
  'TFPS1210_INFOIRCR_ANT_I01',
  ['codemp', 'dtref', 'chave', 'chave1210', 'chaveinfoircomplen'],
  {},
)
@Entity('TFPS1210_INFOIRCR_ANT', { schema: 'SANKHYA' })
export class Tfps1210InfoircrAntEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIARET',
    default: () => '(0)',
  })
  sequenciaret: number;

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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'TPCR', length: 10 })
  tpcr: string;

  @Column('datetime', { primary: true, name: 'DTREFRET' })
  dtrefret: Date;

  @OneToMany(
    () => Tfps1210DeddepenAntEntity,
    (tfps1210DeddepenAntEntity) =>
      tfps1210DeddepenAntEntity.tfps1210InfoircrAnt,
  )
  tfps1210DeddepenAnts: Tfps1210DeddepenAntEntity[];

  @ManyToOne(
    () => Tfps1210InfoircomplemAntEntity,
    (tfps1210InfoircomplemAntEntity) =>
      tfps1210InfoircomplemAntEntity.tfps1210InfoircrAnts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave1210' },
    { name: 'CHAVEINFOIRCOMPLEN', referencedColumnName: 'chave' },
    { name: 'DTREFRET', referencedColumnName: 'dtrefret' },
    { name: 'SEQUENCIARET', referencedColumnName: 'sequenciaret' },
  ])
  tfps1210InfoircomplemAnt: Tfps1210InfoircomplemAntEntity;

  @OneToMany(
    () => Tfps1210InfoprocretAntEntity,
    (tfps1210InfoprocretAntEntity) =>
      tfps1210InfoprocretAntEntity.tfps1210InfoircrAnt,
  )
  tfps1210InfoprocretAnts: Tfps1210InfoprocretAntEntity[];

  @OneToMany(
    () => Tfps1210PenalimAntEntity,
    (tfps1210PenalimAntEntity) => tfps1210PenalimAntEntity.tfps1210InfoircrAnt,
  )
  tfps1210PenalimAnts: Tfps1210PenalimAntEntity[];

  @OneToMany(
    () => Tfps1210PrevidcomplAntEntity,
    (tfps1210PrevidcomplAntEntity) =>
      tfps1210PrevidcomplAntEntity.tfps1210InfoircrAnt,
  )
  tfps1210PrevidcomplAnts: Tfps1210PrevidcomplAntEntity[];
}
