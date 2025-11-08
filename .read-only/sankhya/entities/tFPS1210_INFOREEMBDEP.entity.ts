import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210DetreembdepEntity } from './tFPS1210_DETREEMBDEP.entity';
import { Tfps1210InforeembmedEntity } from './tFPS1210_INFOREEMBMED.entity';

@Index(
  'PK_TFPS1210_INFOREEMBDEP',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplem',
    'chaveinforeembmed',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1210_INFOREEMBDEP', { schema: 'SANKHYA' })
export class Tfps1210InforeembdepEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEINFOREEMBMED', length: 100 })
  chaveinforeembmed: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CPFBENEF', length: 11 })
  cpfbenef: string;

  @OneToMany(
    () => Tfps1210DetreembdepEntity,
    (tfps1210DetreembdepEntity) =>
      tfps1210DetreembdepEntity.tfps1210Inforeembdep,
  )
  tfps1210Detreembdeps: Tfps1210DetreembdepEntity[];

  @ManyToOne(
    () => Tfps1210InforeembmedEntity,
    (tfps1210InforeembmedEntity) =>
      tfps1210InforeembmedEntity.tfps1210Inforeembdeps,
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
  ])
  tfps1210Inforeembmed: Tfps1210InforeembmedEntity;
}
