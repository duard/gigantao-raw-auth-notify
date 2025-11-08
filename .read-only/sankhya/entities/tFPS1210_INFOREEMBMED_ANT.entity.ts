import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210DetreembtitAntEntity } from './tFPS1210_DETREEMBTIT_ANT.entity';
import { Tfps1210InforeembdepAntEntity } from './tFPS1210_INFOREEMBDEP_ANT.entity';
import { Tfps1210InfoircomplemAntEntity } from './tFPS1210_INFOIRCOMPLEM_ANT.entity';

@Index(
  'PK_TFPS1210_INFOREEMBMED_ANT',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplem',
    'chave',
    'dtrefret',
    'sequenciaret',
  ],
  { unique: true },
)
@Entity('TFPS1210_INFOREEMBMED_ANT', { schema: 'SANKHYA' })
export class Tfps1210InforeembmedAntEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'INDORGREEMB', length: 1 })
  indorgreemb: string;

  @Column('varchar', { name: 'CNPJOPER', nullable: true, length: 14 })
  cnpjoper: string | null;

  @Column('varchar', { name: 'REGANS', nullable: true, length: 6 })
  regans: string | null;

  @OneToMany(
    () => Tfps1210DetreembtitAntEntity,
    (tfps1210DetreembtitAntEntity) =>
      tfps1210DetreembtitAntEntity.tfps1210InforeembmedAnt,
  )
  tfps1210DetreembtitAnts: Tfps1210DetreembtitAntEntity[];

  @OneToMany(
    () => Tfps1210InforeembdepAntEntity,
    (tfps1210InforeembdepAntEntity) =>
      tfps1210InforeembdepAntEntity.tfps1210InforeembmedAnt,
  )
  tfps1210InforeembdepAnts: Tfps1210InforeembdepAntEntity[];

  @ManyToOne(
    () => Tfps1210InfoircomplemAntEntity,
    (tfps1210InfoircomplemAntEntity) =>
      tfps1210InfoircomplemAntEntity.tfps1210InforeembmedAnts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave1210' },
    { name: 'CHAVEINFOIRCOMPLEM', referencedColumnName: 'chave' },
    { name: 'DTREFRET', referencedColumnName: 'dtrefret' },
    { name: 'SEQUENCIARET', referencedColumnName: 'sequenciaret' },
  ])
  tfps1210InfoircomplemAnt: Tfps1210InfoircomplemAntEntity;
}
