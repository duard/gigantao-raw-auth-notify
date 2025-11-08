import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { GfratendimentoclienteEntity } from './gFRATENDIMENTOCLIENTE.entity';

@Index('PK_GFRATENDIMENTOCLIENTEPESQ', ['idatendimento', 'sequencia'], {
  unique: true,
})
@Entity('GFRATENDIMENTOCLIENTEPESQUISA', { schema: 'SANKHYA' })
export class GfratendimentoclientepesquisaEntity {
  @Column('int', { primary: true, name: 'IDATENDIMENTO' })
  idatendimento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'PESQUISA', length: 3103 })
  pesquisa: string;

  @ManyToOne(
    () => GfratendimentoclienteEntity,
    (gfratendimentoclienteEntity) =>
      gfratendimentoclienteEntity.gfratendimentoclientepesquisas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IDATENDIMENTO', referencedColumnName: 'id' }])
  idatendimento2: GfratendimentoclienteEntity;
}
