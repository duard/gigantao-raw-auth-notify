import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfstmvproEntity } from './tGFSTMVPRO.entity';

@Index(
  'PK_TGFSTMVPRODET',
  ['codemp', 'referencia', 'codprod', 'nunota', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFSTMVPRODET', { schema: 'SANKHYA' })
export class TgfstmvprodetEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTDNEG', precision: 53, default: () => '(0)' })
  qtdneg: number;

  @Column('float', { name: 'VLRTOT', precision: 53, default: () => '(0)' })
  vlrtot: number;

  @Column('float', { name: 'VLRDESC', precision: 53, default: () => '(0)' })
  vlrdesc: number;

  @Column('float', { name: 'VLRLIQ', precision: 53, default: () => '(0)' })
  vlrliq: number;

  @ManyToOne(
    () => TgfstmvproEntity,
    (tgfstmvproEntity) => tgfstmvproEntity.tgfstmvprodets,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tgfstmvpro: TgfstmvproEntity;
}
