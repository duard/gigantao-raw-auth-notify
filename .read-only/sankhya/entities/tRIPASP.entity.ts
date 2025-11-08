import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TriprisetEntity } from './tRIPRISET.entity';

@Index(
  'PK_TRIPASP',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'chaveprocesso',
    'nuprocesso',
    'seqprocesso',
  ],
  { unique: true },
)
@Entity('TRIPASP', { schema: 'SANKHYA' })
export class TripaspEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('varchar', { primary: true, name: 'CHAVEPROCESSO', length: 20 })
  chaveprocesso: string;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'SEQPROCESSO' })
  seqprocesso: number;

  @Column('smallint', { name: 'TPPROCRETADIC', nullable: true })
  tpprocretadic: number | null;

  @Column('varchar', { name: 'NRPROCRETADIC', nullable: true, length: 21 })
  nrprocretadic: string | null;

  @Column('varchar', { name: 'CODSUSPADIC', nullable: true, length: 14 })
  codsuspadic: string | null;

  @Column('float', { name: 'VALORADIC', nullable: true, precision: 53 })
  valoradic: number | null;

  @ManyToOne(
    () => TriprisetEntity,
    (triprisetEntity) => triprisetEntity.tripasps,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEPROCESSO', referencedColumnName: 'chave' },
    { name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' },
    { name: 'SEQPROCESSO', referencedColumnName: 'seqpriset' },
  ])
  tripriset: TriprisetEntity;
}
