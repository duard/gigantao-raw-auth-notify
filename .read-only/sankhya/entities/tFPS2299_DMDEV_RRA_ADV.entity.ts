import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2299DmdevRraEntity } from './tFPS2299_DMDEV_RRA.entity';

@Index(
  'PK_TFPS2299_DMDEV_RRA_ADV',
  ['codemp', 'dtref', 'tpamb', 'chave', 'sequencia', 'chave2299', 'chaveRra'],
  { unique: true },
)
@Entity('TFPS2299_DMDEV_RRA_ADV', { schema: 'SANKHYA' })
export class Tfps2299DmdevRraAdvEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE2299', length: 100 })
  chave2299: string;

  @Column('varchar', { primary: true, name: 'CHAVE_RRA', length: 100 })
  chaveRra: string;

  @Column('smallint', { name: 'TIPOINSCRICAO', nullable: true })
  tipoinscricao: number | null;

  @Column('varchar', { name: 'NROINSCRICAO', nullable: true, length: 14 })
  nroinscricao: string | null;

  @Column('float', { name: 'VLRADV', nullable: true, precision: 53 })
  vlradv: number | null;

  @ManyToOne(
    () => Tfps2299DmdevRraEntity,
    (tfps2299DmdevRraEntity) => tfps2299DmdevRraEntity.tfps2299DmdevRraAdvs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE_RRA', referencedColumnName: 'chave' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2299', referencedColumnName: 'chave2299' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
  ])
  tfps2299DmdevRra: Tfps2299DmdevRraEntity;
}
