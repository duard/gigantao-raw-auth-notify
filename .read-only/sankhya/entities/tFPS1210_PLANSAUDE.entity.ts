import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210InfodepsauEntity } from './tFPS1210_INFODEPSAU.entity';
import { Tfps1210InfoircomplemEntity } from './tFPS1210_INFOIRCOMPLEM.entity';

@Index(
  'PK_TFPS1210_PLANSAUDE',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplem',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1210_PLANSAUDE', { schema: 'SANKHYA' })
export class Tfps1210PlansaudeEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CNPJOPER', length: 14 })
  cnpjoper: string;

  @Column('varchar', { name: 'REGANS', nullable: true, length: 6 })
  regans: string | null;

  @Column('float', { name: 'VLRSAUDETIT', precision: 53 })
  vlrsaudetit: number;

  @OneToMany(
    () => Tfps1210InfodepsauEntity,
    (tfps1210InfodepsauEntity) => tfps1210InfodepsauEntity.tfps1210Plansaude,
  )
  tfps1210Infodepsaus: Tfps1210InfodepsauEntity[];

  @ManyToOne(
    () => Tfps1210InfoircomplemEntity,
    (tfps1210InfoircomplemEntity) =>
      tfps1210InfoircomplemEntity.tfps1210Plansaudes,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave1210' },
    { name: 'CHAVEINFOIRCOMPLEM', referencedColumnName: 'chave' },
  ])
  tfps1210Infoircomplem: Tfps1210InfoircomplemEntity;
}
