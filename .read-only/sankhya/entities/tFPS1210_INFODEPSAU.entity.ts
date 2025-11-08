import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1210PlansaudeEntity } from './tFPS1210_PLANSAUDE.entity';

@Index(
  'PK_TFPS1210_INFODEPSAU',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplem',
    'chaveplansaude',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1210_INFODEPSAU', { schema: 'SANKHYA' })
export class Tfps1210InfodepsauEntity {
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
    () => Tfps1210PlansaudeEntity,
    (tfps1210PlansaudeEntity) => tfps1210PlansaudeEntity.tfps1210Infodepsaus,
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
  ])
  tfps1210Plansaude: Tfps1210PlansaudeEntity;
}
