import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1210InforeembdepAntEntity } from './tFPS1210_INFOREEMBDEP_ANT.entity';

@Index(
  'PK_TFPS1210_DETREEMBDEP_ANT',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplem',
    'chaveinforeembmed',
    'chaveinforeembdep',
    'chave',
    'dtrefret',
    'sequenciaret',
  ],
  { unique: true },
)
@Entity('TFPS1210_DETREEMBDEP_ANT', { schema: 'SANKHYA' })
export class Tfps1210DetreembdepAntEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEINFOIRCOMPLEM', length: 100 })
  chaveinfoircomplem: string;

  @Column('varchar', { primary: true, name: 'CHAVEINFOREEMBMED', length: 100 })
  chaveinforeembmed: string;

  @Column('varchar', { primary: true, name: 'CHAVEINFOREEMBDEP', length: 100 })
  chaveinforeembdep: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'TPINSC' })
  tpinsc: number;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('float', { name: 'VLRREEMB', nullable: true, precision: 53 })
  vlrreemb: number | null;

  @Column('float', { name: 'VLRREEMBANT', nullable: true, precision: 53 })
  vlrreembant: number | null;

  @ManyToOne(
    () => Tfps1210InforeembdepAntEntity,
    (tfps1210InforeembdepAntEntity) =>
      tfps1210InforeembdepAntEntity.tfps1210DetreembdepAnts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave1210' },
    { name: 'CHAVEINFOIRCOMPLEM', referencedColumnName: 'chaveinfoircomplem' },
    { name: 'CHAVEINFOREEMBMED', referencedColumnName: 'chaveinforeembmed' },
    { name: 'CHAVEINFOREEMBDEP', referencedColumnName: 'chave' },
    { name: 'DTREFRET', referencedColumnName: 'dtrefret' },
    { name: 'SEQUENCIARET', referencedColumnName: 'sequenciaret' },
  ])
  tfps1210InforeembdepAnt: Tfps1210InforeembdepAntEntity;
}
