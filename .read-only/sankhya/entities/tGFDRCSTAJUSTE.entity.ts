import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index(
  'PK_TGFDRCSTAJUSTE',
  [
    'nunota',
    'numnota',
    'serienota',
    'codprod',
    'chavearquivo',
    'sequenciafiscal',
  ],
  { unique: true },
)
@Entity('TGFDRCSTAJUSTE', { schema: 'SANKHYA' })
export class TgfdrcstajusteEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NUMNOTA' })
  numnota: number;

  @Column('varchar', { primary: true, name: 'SERIENOTA', length: 5 })
  serienota: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { primary: true, name: 'CHAVEARQUIVO', length: 44 })
  chavearquivo: string;

  @Column('int', { primary: true, name: 'SEQUENCIAFISCAL' })
  sequenciafiscal: number;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('char', { name: 'DIGITADO', nullable: true, length: 1 })
  digitado: string | null;

  @ManyToOne(
    () => TgfcabEntity,
    (tgfcabEntity) => tgfcabEntity.tgfdrcstajustes,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
