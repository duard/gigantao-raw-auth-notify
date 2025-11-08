import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TriprisetEntity } from './tRIPRISET.entity';

@Index(
  'PK_TRIPPST',
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
@Entity('TRIPPST', { schema: 'SANKHYA' })
export class TrippstEntity {
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

  @Column('smallint', { name: 'TPPROCRETPRINC', nullable: true })
  tpprocretprinc: number | null;

  @Column('varchar', { name: 'NRPROCRETPRINC', nullable: true, length: 21 })
  nrprocretprinc: string | null;

  @Column('varchar', { name: 'CODSUSPPRINC', nullable: true, length: 14 })
  codsuspprinc: string | null;

  @Column('float', { name: 'VALORPRINC', nullable: true, precision: 53 })
  valorprinc: number | null;

  @ManyToOne(
    () => TriprisetEntity,
    (triprisetEntity) => triprisetEntity.trippsts,
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
