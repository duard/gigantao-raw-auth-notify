import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1200DmdevRraEntity } from './tFPS1200_DMDEV_RRA.entity';

@Index(
  'PK_TFPS1200_DMDEV_RRA_ADV',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1200',
    'chaveDmdev',
    'chaveRra',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1200_DMDEV_RRA_ADV', { schema: 'SANKHYA' })
export class Tfps1200DmdevRraAdvEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE1200', length: 100 })
  chave1200: string;

  @Column('varchar', { primary: true, name: 'CHAVE_DMDEV', length: 100 })
  chaveDmdev: string;

  @Column('varchar', { primary: true, name: 'CHAVE_RRA', length: 100 })
  chaveRra: string;

  @Column('varchar', { name: 'IDEDMDEV', nullable: true, length: 100 })
  idedmdev: string | null;

  @Column('smallint', { name: 'TIPOINSCRICAO', nullable: true })
  tipoinscricao: number | null;

  @Column('varchar', { name: 'NROINSCRICAO', nullable: true, length: 14 })
  nroinscricao: string | null;

  @Column('float', { name: 'VLRADV', nullable: true, precision: 53 })
  vlradv: number | null;

  @ManyToOne(
    () => Tfps1200DmdevRraEntity,
    (tfps1200DmdevRraEntity) => tfps1200DmdevRraEntity.tfps1200DmdevRraAdvs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1200', referencedColumnName: 'chave1200' },
    { name: 'CHAVE_DMDEV', referencedColumnName: 'chaveDmdev' },
    { name: 'CHAVE_RRA', referencedColumnName: 'chave' },
  ])
  tfps1200DmdevRra: Tfps1200DmdevRraEntity;
}
