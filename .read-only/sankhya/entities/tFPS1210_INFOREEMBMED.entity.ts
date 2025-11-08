import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210DetreembtitEntity } from './tFPS1210_DETREEMBTIT.entity';
import { Tfps1210InforeembdepEntity } from './tFPS1210_INFOREEMBDEP.entity';
import { Tfps1210InfoircomplemEntity } from './tFPS1210_INFOIRCOMPLEM.entity';

@Index(
  'PK_TFPS1210_INFOREEMBMED',
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
@Entity('TFPS1210_INFOREEMBMED', { schema: 'SANKHYA' })
export class Tfps1210InforeembmedEntity {
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

  @Column('varchar', { name: 'INDORGREEMB', length: 1 })
  indorgreemb: string;

  @Column('varchar', { name: 'CNPJOPER', nullable: true, length: 14 })
  cnpjoper: string | null;

  @Column('varchar', { name: 'REGANS', nullable: true, length: 6 })
  regans: string | null;

  @OneToMany(
    () => Tfps1210DetreembtitEntity,
    (tfps1210DetreembtitEntity) =>
      tfps1210DetreembtitEntity.tfps1210Inforeembmed,
  )
  tfps1210Detreembtits: Tfps1210DetreembtitEntity[];

  @OneToMany(
    () => Tfps1210InforeembdepEntity,
    (tfps1210InforeembdepEntity) =>
      tfps1210InforeembdepEntity.tfps1210Inforeembmed,
  )
  tfps1210Inforeembdeps: Tfps1210InforeembdepEntity[];

  @ManyToOne(
    () => Tfps1210InfoircomplemEntity,
    (tfps1210InfoircomplemEntity) =>
      tfps1210InfoircomplemEntity.tfps1210Inforeembmeds,
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
