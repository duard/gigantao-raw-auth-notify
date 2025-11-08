import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210DetreembdepAntEntity } from './tFPS1210_DETREEMBDEP_ANT.entity';
import { Tfps1210InforeembmedAntEntity } from './tFPS1210_INFOREEMBMED_ANT.entity';

@Index(
  'PK_TFPS1210_INFOREEMBDEP_ANT',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplem',
    'chaveinforeembmed',
    'chave',
    'dtrefret',
    'sequenciaret',
  ],
  { unique: true },
)
@Entity('TFPS1210_INFOREEMBDEP_ANT', { schema: 'SANKHYA' })
export class Tfps1210InforeembdepAntEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CPFBENEF', length: 11 })
  cpfbenef: string;

  @OneToMany(
    () => Tfps1210DetreembdepAntEntity,
    (tfps1210DetreembdepAntEntity) =>
      tfps1210DetreembdepAntEntity.tfps1210InforeembdepAnt,
  )
  tfps1210DetreembdepAnts: Tfps1210DetreembdepAntEntity[];

  @ManyToOne(
    () => Tfps1210InforeembmedAntEntity,
    (tfps1210InforeembmedAntEntity) =>
      tfps1210InforeembmedAntEntity.tfps1210InforeembdepAnts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave1210' },
    { name: 'CHAVEINFOIRCOMPLEM', referencedColumnName: 'chaveinfoircomplem' },
    { name: 'CHAVEINFOREEMBMED', referencedColumnName: 'chave' },
    { name: 'DTREFRET', referencedColumnName: 'dtrefret' },
    { name: 'SEQUENCIARET', referencedColumnName: 'sequenciaret' },
  ])
  tfps1210InforeembmedAnt: Tfps1210InforeembmedAntEntity;
}
