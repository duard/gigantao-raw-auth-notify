import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1210InfoircrAntEntity } from './tFPS1210_INFOIRCR_ANT.entity';

@Index(
  'PK_TFPS1210_PREVIDCOMPL_ANT',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircr',
    'chave',
    'dtrefret',
    'sequenciaret',
  ],
  { unique: true },
)
@Entity('TFPS1210_PREVIDCOMPL_ANT', { schema: 'SANKHYA' })
export class Tfps1210PrevidcomplAntEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEINFOIRCR', length: 100 })
  chaveinfoircr: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'TPPREV', length: 1 })
  tpprev: string;

  @Column('varchar', { name: 'CNPJENTIDPC', length: 14 })
  cnpjentidpc: string;

  @Column('float', { name: 'VLRDEDPC', precision: 53 })
  vlrdedpc: number;

  @Column('float', { name: 'VLRDEDPC13', nullable: true, precision: 53 })
  vlrdedpc13: number | null;

  @ManyToOne(
    () => Tfps1210InfoircrAntEntity,
    (tfps1210InfoircrAntEntity) =>
      tfps1210InfoircrAntEntity.tfps1210PrevidcomplAnts,
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
    { name: 'DTREFRET', referencedColumnName: 'dtrefret' },
    { name: 'SEQUENCIARET', referencedColumnName: 'sequenciaret' },
  ])
  tfps1210InfoircrAnt: Tfps1210InfoircrAntEntity;
}
