import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcblanConsolidadaEntity } from './tCBLAN_CONSOLIDADA.entity';

@Index(
  'PK_TCBINT_CONSOLIDADA',
  [
    'idconsolid',
    'codemp',
    'referencia',
    'numlote',
    'numlanc',
    'tiplanc',
    'sequencia',
    'origem',
    'nunico',
    'seqnota',
  ],
  { unique: true },
)
@Entity('TCBINT_CONSOLIDADA', { schema: 'SANKHYA' })
export class TcbintConsolidadaEntity {
  @Column('smallint', { primary: true, name: 'IDCONSOLID' })
  idconsolid: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'NUMLANC' })
  numlanc: number;

  @Column('varchar', { primary: true, name: 'TIPLANC', length: 1 })
  tiplanc: string;

  @Column('varchar', { primary: true, name: 'ORIGEM', length: 1 })
  origem: string;

  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('smallint', { primary: true, name: 'NUMLOTE' })
  numlote: number;

  @Column('float', { name: 'VLRLANC', nullable: true, precision: 53 })
  vlrlanc: number | null;

  @Column('smallint', { primary: true, name: 'SEQNOTA' })
  seqnota: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @ManyToOne(
    () => TcblanConsolidadaEntity,
    (tcblanConsolidadaEntity) => tcblanConsolidadaEntity.tcbintConsolidadas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'IDCONSOLID', referencedColumnName: 'idconsolid' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
    { name: 'NUMLOTE', referencedColumnName: 'numlote' },
    { name: 'NUMLANC', referencedColumnName: 'numlanc' },
    { name: 'TIPLANC', referencedColumnName: 'tiplanc' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tcblanConsolidada: TcblanConsolidadaEntity;
}
