import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftdocstaEntity } from './tGFTDOCSTA.entity';

@Index(
  'PK_TGFCUTNUM',
  ['codemp', 'referencia', 'serienota', 'codmoddoc', 'numnota'],
  {
    unique: true,
  },
)
@Entity('TGFCUTNUM', { schema: 'SANKHYA' })
export class TgfcutnumEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { primary: true, name: 'SERIENOTA', length: 3 })
  serienota: string;

  @Column('smallint', { primary: true, name: 'CODMODDOC' })
  codmoddoc: number;

  @Column('int', { primary: true, name: 'NUMNOTA' })
  numnota: number;

  @ManyToOne(
    () => TgftdocstaEntity,
    (tgftdocstaEntity) => tgftdocstaEntity.tgfcutnums,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
    { name: 'SERIENOTA', referencedColumnName: 'serienota' },
    { name: 'CODMODDOC', referencedColumnName: 'codmoddoc' },
  ])
  tgftdocsta: TgftdocstaEntity;
}
