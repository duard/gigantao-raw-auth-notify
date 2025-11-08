import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdacprbEntity } from './tGFDACPRB.entity';

@Index(
  'PK_TGFNCPRB',
  [
    'codemp',
    'dtref',
    'codcprb',
    'codobra',
    'tipoajuste',
    'codajuste',
    'nunota',
    'sequencia',
  ],
  { unique: true },
)
@Entity('TGFNCPRB', { schema: 'SANKHYA' })
export class TgfncprbEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'CODCPRB', length: 8 })
  codcprb: string;

  @Column('varchar', { primary: true, name: 'CODOBRA', length: 15 })
  codobra: string;

  @Column('smallint', { primary: true, name: 'TIPOAJUSTE' })
  tipoajuste: number;

  @Column('smallint', { primary: true, name: 'CODAJUSTE' })
  codajuste: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { name: 'DTDOC' })
  dtdoc: Date;

  @Column('float', { name: 'VLRAJUSTE', precision: 53 })
  vlrajuste: number;

  @Column('datetime', { name: 'DHMOV', nullable: true })
  dhmov: Date | null;

  @ManyToOne(
    () => TgfdacprbEntity,
    (tgfdacprbEntity) => tgfdacprbEntity.tgfncprbs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODCPRB', referencedColumnName: 'codcprb' },
    { name: 'CODOBRA', referencedColumnName: 'codobra' },
    { name: 'TIPOAJUSTE', referencedColumnName: 'tipoajuste' },
    { name: 'CODAJUSTE', referencedColumnName: 'codajuste' },
  ])
  tgfdacprb: TgfdacprbEntity;
}
