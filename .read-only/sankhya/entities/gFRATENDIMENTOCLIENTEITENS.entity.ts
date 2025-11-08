import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { GfratendimentoclienteEntity } from './gFRATENDIMENTOCLIENTE.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_GFRATENDIMENTOCLIENTEITENS', ['idatendimento', 'codprod'], {
  unique: true,
})
@Entity('GFRATENDIMENTOCLIENTEITENS', { schema: 'SANKHYA' })
export class GfratendimentoclienteitensEntity {
  @Column('int', { primary: true, name: 'IDATENDIMENTO' })
  idatendimento: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    name: 'COLOCOUCARRINHO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  colocoucarrinho: string | null;

  @Column('varchar', {
    name: 'RETIROUCARRINHO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  retiroucarrinho: string | null;

  @ManyToOne(
    () => GfratendimentoclienteEntity,
    (gfratendimentoclienteEntity) =>
      gfratendimentoclienteEntity.gfratendimentoclienteitens,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IDATENDIMENTO', referencedColumnName: 'id' }])
  idatendimento2: GfratendimentoclienteEntity;

  @ManyToOne(
    () => TgfproEntity,
    (tgfproEntity) => tgfproEntity.gfratendimentoclienteitens,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
