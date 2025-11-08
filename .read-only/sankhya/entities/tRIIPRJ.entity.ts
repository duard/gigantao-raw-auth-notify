import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TriprisetEntity } from './tRIPRISET.entity';

@Index(
  'PK_TRIIPRJ',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'indaquis',
    'chaveprocesso',
    'nuprocesso',
    'seqprocesso',
  ],
  { unique: true },
)
@Entity('TRIIPRJ', { schema: 'SANKHYA' })
export class TriiprjEntity {
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

  @Column('smallint', { name: 'TPPROC', nullable: true })
  tpproc: number | null;

  @Column('varchar', { name: 'NRPROC', nullable: true, length: 21 })
  nrproc: string | null;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @Column('float', { name: 'VLRCPSUSP', nullable: true, precision: 53 })
  vlrcpsusp: number | null;

  @Column('float', { name: 'VLRRATSUSP', nullable: true, precision: 53 })
  vlrratsusp: number | null;

  @Column('float', { name: 'VLRSENARSUSP', nullable: true, precision: 53 })
  vlrsenarsusp: number | null;

  @Column('varchar', { primary: true, name: 'INDAQUIS', length: 5 })
  indaquis: string;

  @Column('smallint', { name: 'INDOPCCP', nullable: true })
  indopccp: number | null;

  @ManyToOne(
    () => TriprisetEntity,
    (triprisetEntity) => triprisetEntity.triiprjs,
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
