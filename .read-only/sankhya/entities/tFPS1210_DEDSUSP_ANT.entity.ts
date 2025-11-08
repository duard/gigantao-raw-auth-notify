import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210BenefpenAntEntity } from './tFPS1210_BENEFPEN_ANT.entity';
import { Tfps1210InfovaloresAntEntity } from './tFPS1210_INFOVALORES_ANT.entity';

@Index(
  'PK_TFPS1210_DEDSUSP_ANT',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplen',
    'chaveinfoircr',
    'chaveinfoprocret',
    'chaveinfovalores',
    'chave',
    'dtrefret',
    'sequenciaret',
  ],
  { unique: true },
)
@Entity('TFPS1210_DEDSUSP_ANT', { schema: 'SANKHYA' })
export class Tfps1210DedsuspAntEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('datetime', { primary: true, name: 'DTREFRET' })
  dtrefret: Date;

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

  @Column('varchar', { primary: true, name: 'CHAVEINFOIRCR', length: 100 })
  chaveinfoircr: string;

  @Column('varchar', { primary: true, name: 'CHAVEINFOPROCRET', length: 100 })
  chaveinfoprocret: string;

  @Column('varchar', { primary: true, name: 'CHAVEINFOVALORES', length: 100 })
  chaveinfovalores: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'INDTPDEDUCAO', nullable: true, length: 1 })
  indtpdeducao: string | null;

  @Column('float', { name: 'VLRDEDSUSP', nullable: true, precision: 53 })
  vlrdedsusp: number | null;

  @Column('varchar', { name: 'CNPJENTIDPC', nullable: true, length: 14 })
  cnpjentidpc: string | null;

  @Column('float', { name: 'VLRPATROCFUNP', nullable: true, precision: 53 })
  vlrpatrocfunp: number | null;

  @OneToMany(
    () => Tfps1210BenefpenAntEntity,
    (tfps1210BenefpenAntEntity) => tfps1210BenefpenAntEntity.tfps1210DedsuspAnt,
  )
  tfps1210BenefpenAnts: Tfps1210BenefpenAntEntity[];

  @ManyToOne(
    () => Tfps1210InfovaloresAntEntity,
    (tfps1210InfovaloresAntEntity) =>
      tfps1210InfovaloresAntEntity.tfps1210DedsuspAnts,
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
    { name: 'CHAVEINFOPROCRET', referencedColumnName: 'chaveinfoprocret' },
    { name: 'CHAVEINFOVALORES', referencedColumnName: 'chave' },
    { name: 'DTREFRET', referencedColumnName: 'dtrefret' },
    { name: 'SEQUENCIARET', referencedColumnName: 'sequenciaret' },
  ])
  tfps1210InfovaloresAnt: Tfps1210InfovaloresAntEntity;
}
