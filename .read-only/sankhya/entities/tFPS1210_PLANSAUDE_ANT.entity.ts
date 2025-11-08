import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210InfodepsauAntEntity } from './tFPS1210_INFODEPSAU_ANT.entity';
import { Tfps1210InfoircomplemAntEntity } from './tFPS1210_INFOIRCOMPLEM_ANT.entity';

@Index(
  'PK_TFPS1210_PLANSAUDE_ANT',
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
@Entity('TFPS1210_PLANSAUDE_ANT', { schema: 'SANKHYA' })
export class Tfps1210PlansaudeAntEntity {
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

  @Column('varchar', { name: 'CNPJOPER', length: 14 })
  cnpjoper: string;

  @Column('varchar', { name: 'REGANS', nullable: true, length: 6 })
  regans: string | null;

  @Column('float', { name: 'VLRSAUDETIT', precision: 53 })
  vlrsaudetit: number;

  @OneToMany(
    () => Tfps1210InfodepsauAntEntity,
    (tfps1210InfodepsauAntEntity) =>
      tfps1210InfodepsauAntEntity.tfps1210PlansaudeAnt,
  )
  tfps1210InfodepsauAnts: Tfps1210InfodepsauAntEntity[];

  @ManyToOne(
    () => Tfps1210InfoircomplemAntEntity,
    (tfps1210InfoircomplemAntEntity) =>
      tfps1210InfoircomplemAntEntity.tfps1210PlansaudeAnts,
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
