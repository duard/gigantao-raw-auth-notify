import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1210PlansaudeAntEntity } from './tFPS1210_PLANSAUDE_ANT.entity';

@Index(
  'PK_TFPS1210_INFODEPSAU_ANT',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplem',
    'chaveplansaude',
    'chave',
    'dtrefret',
    'sequenciaret',
  ],
  { unique: true },
)
@Entity('TFPS1210_INFODEPSAU_ANT', { schema: 'SANKHYA' })
export class Tfps1210InfodepsauAntEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEPLANSAUDE', length: 100 })
  chaveplansaude: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CPFDEP', length: 11 })
  cpfdep: string;

  @Column('float', { name: 'VLRSAUDEDEP', precision: 53 })
  vlrsaudedep: number;

  @ManyToOne(
    () => Tfps1210PlansaudeAntEntity,
    (tfps1210PlansaudeAntEntity) =>
      tfps1210PlansaudeAntEntity.tfps1210InfodepsauAnts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave1210' },
    { name: 'CHAVEINFOIRCOMPLEM', referencedColumnName: 'chaveinfoircomplem' },
    { name: 'CHAVEPLANSAUDE', referencedColumnName: 'chave' },
    { name: 'DTREFRET', referencedColumnName: 'dtrefret' },
    { name: 'SEQUENCIARET', referencedColumnName: 'sequenciaret' },
  ])
  tfps1210PlansaudeAnt: Tfps1210PlansaudeAntEntity;
}
