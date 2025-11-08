import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210DedsuspEntity } from './tFPS1210_DEDSUSP.entity';
import { Tfps1210InfoprocretEntity } from './tFPS1210_INFOPROCRET.entity';

@Index(
  'PK_TFPS1210_INFOVALORES',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplen',
    'chaveinfoircr',
    'chaveinfoprocret',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1210_INFOVALORES', { schema: 'SANKHYA' })
export class Tfps1210InfovaloresEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEINFOPROCRET', length: 100 })
  chaveinfoprocret: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'INDAPURACAO', nullable: true, length: 1 })
  indapuracao: string | null;

  @Column('float', { name: 'VLRNAORETIDO', nullable: true, precision: 53 })
  vlrnaoretido: number | null;

  @Column('float', { name: 'VLRDEPJUD', nullable: true, precision: 53 })
  vlrdepjud: number | null;

  @Column('float', { name: 'VLRCMPANOCAL', nullable: true, precision: 53 })
  vlrcmpanocal: number | null;

  @Column('float', { name: 'VLRCMPANOANT', nullable: true, precision: 53 })
  vlrcmpanoant: number | null;

  @Column('float', { name: 'VLRRENDSUSP', nullable: true, precision: 53 })
  vlrrendsusp: number | null;

  @OneToMany(
    () => Tfps1210DedsuspEntity,
    (tfps1210DedsuspEntity) => tfps1210DedsuspEntity.tfps1210Infovalores,
  )
  tfps1210Dedsusps: Tfps1210DedsuspEntity[];

  @ManyToOne(
    () => Tfps1210InfoprocretEntity,
    (tfps1210InfoprocretEntity) =>
      tfps1210InfoprocretEntity.tfps1210Infovalores,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave1210' },
    { name: 'CHAVEINFOIRCOMPLEN', referencedColumnName: 'chaveinfoircomplen' },
    { name: 'CHAVEINFOIRCR', referencedColumnName: 'chaveinfoircr' },
    { name: 'CHAVEINFOPROCRET', referencedColumnName: 'chave' },
  ])
  tfps1210Infoprocret: Tfps1210InfoprocretEntity;
}
