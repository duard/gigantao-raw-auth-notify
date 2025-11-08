import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210InfodepAntEntity } from './tFPS1210_INFODEP_ANT.entity';
import { Tfps1210AntEntity } from './tFPS1210_ANT.entity';
import { Tfps1210InfoircrAntEntity } from './tFPS1210_INFOIRCR_ANT.entity';
import { Tfps1210InforeembmedAntEntity } from './tFPS1210_INFOREEMBMED_ANT.entity';
import { Tfps1210PlansaudeAntEntity } from './tFPS1210_PLANSAUDE_ANT.entity';

@Index(
  'PK_TFPS1210_INFOIRCOMPLEM_ANT',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chave',
    'dtrefret',
    'sequenciaret',
  ],
  { unique: true },
)
@Entity('TFPS1210_INFOIRCOMPLEM_ANT', { schema: 'SANKHYA' })
export class Tfps1210InfoircomplemAntEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('datetime', { name: 'DTLAUDO', nullable: true })
  dtlaudo: Date | null;

  @OneToMany(
    () => Tfps1210InfodepAntEntity,
    (tfps1210InfodepAntEntity) =>
      tfps1210InfodepAntEntity.tfps1210InfoircomplemAnt,
  )
  tfps1210InfodepAnts: Tfps1210InfodepAntEntity[];

  @ManyToOne(
    () => Tfps1210AntEntity,
    (tfps1210AntEntity) => tfps1210AntEntity.tfps1210InfoircomplemAnts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave' },
    { name: 'DTREFRET', referencedColumnName: 'dtrefret' },
    { name: 'SEQUENCIARET', referencedColumnName: 'sequenciaret' },
  ])
  tfps1210Ant: Tfps1210AntEntity;

  @OneToMany(
    () => Tfps1210InfoircrAntEntity,
    (tfps1210InfoircrAntEntity) =>
      tfps1210InfoircrAntEntity.tfps1210InfoircomplemAnt,
  )
  tfps1210InfoircrAnts: Tfps1210InfoircrAntEntity[];

  @OneToMany(
    () => Tfps1210InforeembmedAntEntity,
    (tfps1210InforeembmedAntEntity) =>
      tfps1210InforeembmedAntEntity.tfps1210InfoircomplemAnt,
  )
  tfps1210InforeembmedAnts: Tfps1210InforeembmedAntEntity[];

  @OneToMany(
    () => Tfps1210PlansaudeAntEntity,
    (tfps1210PlansaudeAntEntity) =>
      tfps1210PlansaudeAntEntity.tfps1210InfoircomplemAnt,
  )
  tfps1210PlansaudeAnts: Tfps1210PlansaudeAntEntity[];
}
