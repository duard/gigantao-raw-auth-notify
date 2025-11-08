import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcblanConfEntity } from './tCBLAN_CONF.entity';

@Index(
  'PK_TCBINT_CONF',
  [
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
@Entity('TCBINT_CONF', { schema: 'SANKHYA' })
export class TcbintConfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'NUMLANC' })
  numlanc: number;

  @Column('char', { primary: true, name: 'TIPLANC', length: 1 })
  tiplanc: string;

  @Column('char', { primary: true, name: 'ORIGEM', length: 1 })
  origem: string;

  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('smallint', { primary: true, name: 'NUMLOTE' })
  numlote: number;

  @Column('money', { name: 'VLRLANC', nullable: true })
  vlrlanc: number | null;

  @Column('smallint', { primary: true, name: 'SEQNOTA' })
  seqnota: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('char', { name: 'NUAGENDAMENTO', nullable: true, length: 13 })
  nuagendamento: string | null;

  @ManyToOne(
    () => TcblanConfEntity,
    (tcblanConfEntity) => tcblanConfEntity.tcbintConfs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
    { name: 'NUMLOTE', referencedColumnName: 'numlote' },
    { name: 'NUMLANC', referencedColumnName: 'numlanc' },
    { name: 'TIPLANC', referencedColumnName: 'tiplanc' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tcblanConf: TcblanConfEntity;
}
