import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfplacEntity } from './tGFPLAC.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index(
  'PK_TGFPLAI',
  ['nuplan', 'codparcfat', 'codcontato', 'nunotaorig', 'sequenciaorig'],
  {
    unique: true,
  },
)
@Entity('TGFPLAI', { schema: 'SANKHYA' })
export class TgfplaiEntity {
  @Column('int', { primary: true, name: 'NUPLAN' })
  nuplan: number;

  @Column('int', { primary: true, name: 'CODPARCFAT' })
  codparcfat: number;

  @Column('int', { primary: true, name: 'CODCONTATO' })
  codcontato: number;

  @Column('int', { name: 'QTDNEG', nullable: true })
  qtdneg: number | null;

  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIAORIG' })
  sequenciaorig: number;

  @ManyToOne(() => TgfplacEntity, (tgfplacEntity) => tgfplacEntity.tgfplais, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUPLAN', referencedColumnName: 'nuplan' },
    { name: 'CODPARCFAT', referencedColumnName: 'codparcfat' },
    { name: 'CODCONTATO', referencedColumnName: 'codcontato' },
  ])
  tgfplac: TgfplacEntity;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfplais)
  @JoinColumn([
    { name: 'NUNOTAORIG', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIAORIG', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfplais)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
