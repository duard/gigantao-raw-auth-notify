import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfarcstEntity } from './tGFARCST.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index(
  'PK_TGFIRCST',
  ['codemp', 'dtref', 'nunota', 'sequencia', 'nunotaorig', 'sequenciaorig'],
  {
    unique: true,
  },
)
@Entity('TGFIRCST', { schema: 'SANKHYA' })
export class TgfircstEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIAORIG' })
  sequenciaorig: number;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('smallint', { name: 'CODTRIBORIG', nullable: true })
  codtriborig: number | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'VLRVENDA', nullable: true, precision: 53 })
  vlrvenda: number | null;

  @Column('float', { name: 'VLRCOMPRA', nullable: true, precision: 53 })
  vlrcompra: number | null;

  @Column('float', { name: 'VLRDIFOPER', nullable: true, precision: 53 })
  vlrdifoper: number | null;

  @Column('float', { name: 'VLRAPUR', nullable: true, precision: 53 })
  vlrapur: number | null;

  @Column('char', { name: 'TIPOAPUR', length: 1 })
  tipoapur: string;

  @Column('char', { name: 'TIPONOTA', length: 1 })
  tiponota: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfarcstEntity, (tgfarcstEntity) => tgfarcstEntity.tgfircsts)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfarcst: TgfarcstEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfircsts)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
