import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210Entity } from './tFPS1210.entity';
import { Tfps1210InfoircomplemAntEntity } from './tFPS1210_INFOIRCOMPLEM_ANT.entity';
import { Tfps1210IpgtoAntEntity } from './tFPS1210_IPGTO_ANT.entity';

@Index(
  'PK_TFPS1210_ANT',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave',
    'dtrefret',
    'sequenciaret',
  ],
  { unique: true },
)
@Index('TFPS1210_ANT_I01', ['codemp', 'dtref', 'tpamb'], {})
@Entity('TFPS1210_ANT', { schema: 'SANKHYA' })
export class Tfps1210AntEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('datetime', { primary: true, name: 'DTREFRET' })
  dtrefret: Date;

  @Column('smallint', { name: 'INDAPURACAO', nullable: true })
  indapuracao: number | null;

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 7 })
  perapur: string | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'CPFBENEF', nullable: true, length: 11 })
  cpfbenef: string | null;

  @Column('float', { name: 'VRDEDDEP', nullable: true, precision: 53 })
  vrdeddep: number | null;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 40 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 40 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @ManyToOne(
    () => Tfps1210Entity,
    (tfps1210Entity) => tfps1210Entity.tfps1210Ants,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMPGER', referencedColumnName: 'codemp' },
    { name: 'DTREFGER', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIAGER', referencedColumnName: 'sequencia' },
    { name: 'TPAMBGER', referencedColumnName: 'tpamb' },
    { name: 'CHAVEGER', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1210Entity;

  @OneToMany(
    () => Tfps1210InfoircomplemAntEntity,
    (tfps1210InfoircomplemAntEntity) =>
      tfps1210InfoircomplemAntEntity.tfps1210Ant,
  )
  tfps1210InfoircomplemAnts: Tfps1210InfoircomplemAntEntity[];

  @OneToMany(
    () => Tfps1210IpgtoAntEntity,
    (tfps1210IpgtoAntEntity) => tfps1210IpgtoAntEntity.tfps1210Ant,
  )
  tfps1210IpgtoAnts: Tfps1210IpgtoAntEntity[];
}
