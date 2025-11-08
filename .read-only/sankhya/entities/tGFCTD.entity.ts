import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_TGFCTD',
  ['nunota', 'sequencia', 'nunotaorig', 'sequenciaorig', 'dhcusto'],
  {
    unique: true,
  },
)
@Entity('TGFCTD', { schema: 'SANKHYA' })
export class TgfctdEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIAORIG' })
  sequenciaorig: number;

  @Column('datetime', { primary: true, name: 'DHCUSTO' })
  dhcusto: Date;

  @Column('float', { name: 'VLRCUS', precision: 53, default: () => '(0)' })
  vlrcus: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfctds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfctds)
  @JoinColumn([{ name: 'NUNOTACOTACAO', referencedColumnName: 'nunota' }])
  nunotacotacao: TgfcabEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfctds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
