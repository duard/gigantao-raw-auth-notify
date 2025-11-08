import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TriprisetEntity } from './tRIPRISET.entity';

@Index(
  'PK_TRIIPFC',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'indcom',
    'chaveprocesso',
    'nuprocesso',
    'seqprocesso',
  ],
  { unique: true },
)
@Entity('TRIIPFC', { schema: 'SANKHYA' })
export class TriipfcEntity {
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

  @Column('smallint', { primary: true, name: 'INDCOM' })
  indcom: number;

  @Column('float', { name: 'ALIQUOTAINSSMAX', nullable: true, precision: 53 })
  aliquotainssmax: number | null;

  @Column('float', { name: 'ALIQUOTAGILRATMAX', nullable: true, precision: 53 })
  aliquotagilratmax: number | null;

  @Column('float', { name: 'ALIQUOTASENARMAX', nullable: true, precision: 53 })
  aliquotasenarmax: number | null;

  @Column('float', { name: 'ALIQUOTAINSSMIN', nullable: true, precision: 53 })
  aliquotainssmin: number | null;

  @Column('float', { name: 'ALIQUOTAGILRATMIN', nullable: true, precision: 53 })
  aliquotagilratmin: number | null;

  @Column('float', { name: 'ALIQUOTASENARMIN', nullable: true, precision: 53 })
  aliquotasenarmin: number | null;

  @ManyToOne(
    () => TriprisetEntity,
    (triprisetEntity) => triprisetEntity.triipfcs,
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
