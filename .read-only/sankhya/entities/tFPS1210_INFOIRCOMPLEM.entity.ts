import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210InfodepEntity } from './tFPS1210_INFODEP.entity';
import { Tfps1210Entity } from './tFPS1210.entity';
import { Tfps1210InfoircrEntity } from './tFPS1210_INFOIRCR.entity';
import { Tfps1210InforeembmedEntity } from './tFPS1210_INFOREEMBMED.entity';
import { Tfps1210PlansaudeEntity } from './tFPS1210_PLANSAUDE.entity';

@Index(
  'PK_TFPS1210_INFOIRCOMPLEM',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave1210', 'chave'],
  { unique: true },
)
@Entity('TFPS1210_INFOIRCOMPLEM', { schema: 'SANKHYA' })
export class Tfps1210InfoircomplemEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('datetime', { name: 'DTLAUDO', nullable: true })
  dtlaudo: Date | null;

  @OneToMany(
    () => Tfps1210InfodepEntity,
    (tfps1210InfodepEntity) => tfps1210InfodepEntity.tfps1210Infoircomplem,
  )
  tfps1210Infodeps: Tfps1210InfodepEntity[];

  @ManyToOne(
    () => Tfps1210Entity,
    (tfps1210Entity) => tfps1210Entity.tfps1210Infoircomplems,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1210Entity;

  @OneToMany(
    () => Tfps1210InfoircrEntity,
    (tfps1210InfoircrEntity) => tfps1210InfoircrEntity.tfps1210Infoircomplem,
  )
  tfps1210Infoircrs: Tfps1210InfoircrEntity[];

  @OneToMany(
    () => Tfps1210InforeembmedEntity,
    (tfps1210InforeembmedEntity) =>
      tfps1210InforeembmedEntity.tfps1210Infoircomplem,
  )
  tfps1210Inforeembmeds: Tfps1210InforeembmedEntity[];

  @OneToMany(
    () => Tfps1210PlansaudeEntity,
    (tfps1210PlansaudeEntity) => tfps1210PlansaudeEntity.tfps1210Infoircomplem,
  )
  tfps1210Plansaudes: Tfps1210PlansaudeEntity[];
}
