import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1210DedsuspAntEntity } from './tFPS1210_DEDSUSP_ANT.entity';

@Index(
  'PK_TFPS1210_BENEFPEN_ANT',
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
    'chavededsusp',
    'chave',
    'dtrefret',
    'sequenciaret',
  ],
  { unique: true },
)
@Entity('TFPS1210_BENEFPEN_ANT', { schema: 'SANKHYA' })
export class Tfps1210BenefpenAntEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEDEDSUSP', length: 100 })
  chavededsusp: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CPFDEP', nullable: true, length: 11 })
  cpfdep: string | null;

  @Column('float', { name: 'VLRDEPENSUSP', nullable: true, precision: 53 })
  vlrdepensusp: number | null;

  @ManyToOne(
    () => Tfps1210DedsuspAntEntity,
    (tfps1210DedsuspAntEntity) => tfps1210DedsuspAntEntity.tfps1210BenefpenAnts,
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
    { name: 'CHAVEINFOVALORES', referencedColumnName: 'chaveinfovalores' },
    { name: 'CHAVEDEDSUSP', referencedColumnName: 'chave' },
    { name: 'DTREFRET', referencedColumnName: 'dtrefret' },
    { name: 'SEQUENCIARET', referencedColumnName: 'sequenciaret' },
  ])
  tfps1210DedsuspAnt: Tfps1210DedsuspAntEntity;
}
