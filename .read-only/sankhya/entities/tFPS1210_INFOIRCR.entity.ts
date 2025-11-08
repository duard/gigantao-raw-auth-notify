import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210DeddepenEntity } from './tFPS1210_DEDDEPEN.entity';
import { Tfps1210InfoircomplemEntity } from './tFPS1210_INFOIRCOMPLEM.entity';
import { Tfps1210InfoprocretEntity } from './tFPS1210_INFOPROCRET.entity';
import { Tfps1210PenalimEntity } from './tFPS1210_PENALIM.entity';
import { Tfps1210PrevidcomplEntity } from './tFPS1210_PREVIDCOMPL.entity';

@Index(
  'PK_TFPS1210_INFOIRCR',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplen',
    'chave',
  ],
  { unique: true },
)
@Index(
  'TFPS1210_INFOIRCR_I01',
  ['codemp', 'dtref', 'chave', 'chave1210', 'chaveinfoircomplen'],
  {},
)
@Entity('TFPS1210_INFOIRCR', { schema: 'SANKHYA' })
export class Tfps1210InfoircrEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'TPCR', length: 10 })
  tpcr: string;

  @OneToMany(
    () => Tfps1210DeddepenEntity,
    (tfps1210DeddepenEntity) => tfps1210DeddepenEntity.tfps1210Infoircr,
  )
  tfps1210Deddepens: Tfps1210DeddepenEntity[];

  @ManyToOne(
    () => Tfps1210InfoircomplemEntity,
    (tfps1210InfoircomplemEntity) =>
      tfps1210InfoircomplemEntity.tfps1210Infoircrs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave1210' },
    { name: 'CHAVEINFOIRCOMPLEN', referencedColumnName: 'chave' },
  ])
  tfps1210Infoircomplem: Tfps1210InfoircomplemEntity;

  @OneToMany(
    () => Tfps1210InfoprocretEntity,
    (tfps1210InfoprocretEntity) => tfps1210InfoprocretEntity.tfps1210Infoircr,
  )
  tfps1210Infoprocrets: Tfps1210InfoprocretEntity[];

  @OneToMany(
    () => Tfps1210PenalimEntity,
    (tfps1210PenalimEntity) => tfps1210PenalimEntity.tfps1210Infoircr,
  )
  tfps1210Penalims: Tfps1210PenalimEntity[];

  @OneToMany(
    () => Tfps1210PrevidcomplEntity,
    (tfps1210PrevidcomplEntity) => tfps1210PrevidcomplEntity.tfps1210Infoircr,
  )
  tfps1210Previdcompls: Tfps1210PrevidcomplEntity[];
}
