import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1270Entity } from './tFPS1270.entity';

@Index(
  'PK_TFPS1270_REMUNAVNP',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave1270', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS1270_REMUNAVNP', { schema: 'SANKHYA' })
export class Tfps1270RemunavnpEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 14 })
  nrinscempregador: string | null;

  @Column('varchar', { name: 'CODLOTACAO', nullable: true, length: 30 })
  codlotacao: string | null;

  @Column('float', { name: 'VRBCCP00', nullable: true, precision: 53 })
  vrbccp00: number | null;

  @Column('float', { name: 'VRBCCP15', nullable: true, precision: 53 })
  vrbccp15: number | null;

  @Column('float', { name: 'VRBCCP20', nullable: true, precision: 53 })
  vrbccp20: number | null;

  @Column('float', { name: 'VRBCCP25', nullable: true, precision: 53 })
  vrbccp25: number | null;

  @Column('float', { name: 'VRBCCP13', nullable: true, precision: 53 })
  vrbccp13: number | null;

  @Column('float', { name: 'VRBCFGTS', nullable: true, precision: 53 })
  vrbcfgts: number | null;

  @Column('float', { name: 'VRDESCCP', nullable: true, precision: 53 })
  vrdesccp: number | null;

  @Column('varchar', { primary: true, name: 'CHAVE1270', length: 100 })
  chave1270: string;

  @ManyToOne(
    () => Tfps1270Entity,
    (tfps1270Entity) => tfps1270Entity.tfps1270Remunavnps,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1270', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1270Entity;
}
