import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TriprisetEntity } from './tRIPRISET.entity';

@Index(
  'PK_TRIPRRC',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'cnpjassocdesp',
    'chaveprocesso',
    'nuprocesso',
    'seqpriset',
  ],
  { unique: true },
)
@Entity('TRIPRRC', { schema: 'SANKHYA' })
export class TriprrcEntity {
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

  @Column('varchar', { primary: true, name: 'CNPJASSOCDESP', length: 14 })
  cnpjassocdesp: string;

  @Column('varchar', { primary: true, name: 'CHAVEPROCESSO', length: 20 })
  chaveprocesso: string;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'SEQPRISET' })
  seqpriset: number;

  @Column('smallint', { name: 'TPPROC' })
  tpproc: number;

  @Column('varchar', { name: 'NRPROC', nullable: true, length: 21 })
  nrproc: string | null;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @Column('float', { name: 'VLRNRET', nullable: true, precision: 53 })
  vlrnret: number | null;

  @ManyToOne(
    () => TriprisetEntity,
    (triprisetEntity) => triprisetEntity.triprrcs,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEPROCESSO', referencedColumnName: 'chave' },
    { name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' },
    { name: 'SEQPRISET', referencedColumnName: 'seqpriset' },
  ])
  tripriset: TriprisetEntity;
}
