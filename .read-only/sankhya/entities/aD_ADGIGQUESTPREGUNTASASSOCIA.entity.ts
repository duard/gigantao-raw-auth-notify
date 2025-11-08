import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdAdgigquestperguntasEntity } from './aD_ADGIGQUESTPERGUNTAS.entity';

@Index('PK_AD_ADGIGQUESTPREGUNTASASSOCIA', ['idQuestPerguntas', 'idAssocia'], {
  unique: true,
})
@Entity('AD_ADGIGQUESTPREGUNTASASSOCIA', { schema: 'SANKHYA' })
export class AdAdgigquestpreguntasassociaEntity {
  @Column('int', { primary: true, name: 'ID_QUEST_PERGUNTAS' })
  idQuestPerguntas: number;

  @Column('int', { primary: true, name: 'ID_ASSOCIA' })
  idAssocia: number;

  @ManyToOne(
    () => AdAdgigquestperguntasEntity,
    (adAdgigquestperguntasEntity) =>
      adAdgigquestperguntasEntity.adAdgigquestpreguntasassocias,
  )
  @JoinColumn([
    { name: 'ID_QUEST_PERGUNTAS', referencedColumnName: 'idQuestPerguntas' },
  ])
  idQuestPerguntas2: AdAdgigquestperguntasEntity;
}
