import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2399DmdevRraEntity } from './tFPS2399_DMDEV_RRA.entity';

@Index(
  'PK_TFPS2399_DMDEV_RRA_ADV',
  ['codemp', 'dtref', 'tpamb', 'chave', 'sequencia', 'chave2399', 'chaveRra'],
  { unique: true },
)
@Entity('TFPS2399_DMDEV_RRA_ADV', { schema: 'SANKHYA' })
export class Tfps2399DmdevRraAdvEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE2399', length: 100 })
  chave2399: string;

  @Column('varchar', { primary: true, name: 'CHAVE_RRA', length: 100 })
  chaveRra: string;

  @Column('smallint', { name: 'TIPOINSCRICAO', nullable: true })
  tipoinscricao: number | null;

  @Column('varchar', { name: 'NROINSCRICAO', nullable: true, length: 14 })
  nroinscricao: string | null;

  @Column('float', { name: 'VLRADV', nullable: true, precision: 53 })
  vlradv: number | null;

  @ManyToOne(
    () => Tfps2399DmdevRraEntity,
    (tfps2399DmdevRraEntity) => tfps2399DmdevRraEntity.tfps2399DmdevRraAdvs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE_RRA', referencedColumnName: 'chave' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2399', referencedColumnName: 'chave2399' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
  ])
  tfps2399DmdevRra: Tfps2399DmdevRraEntity;
}
