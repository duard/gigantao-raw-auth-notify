import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { AdAdgigquestionarioEntity } from './aD_ADGIGQUESTIONARIO.entity';
import { AdAdgigquestpreguntasassociaEntity } from './aD_ADGIGQUESTPREGUNTASASSOCIA.entity';

@Index('PK_AD_ADGIGQUESTPERGUNTAS', ['idQuestPerguntas'], { unique: true })
@Entity('AD_ADGIGQUESTPERGUNTAS', { schema: 'SANKHYA' })
export class AdAdgigquestperguntasEntity {
  @Column('int', { primary: true, name: 'ID_QUEST_PERGUNTAS' })
  idQuestPerguntas: number;

  @Column('varchar', { name: 'RH', nullable: true, length: 10 })
  rh: string | null;

  @Column('varchar', { name: 'SEGURANCA', nullable: true, length: 10 })
  seguranca: string | null;

  @Column('varchar', { name: 'GESTAO', nullable: true, length: 10 })
  gestao: string | null;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adAdgigquestperguntas,
  )
  @JoinColumn([{ name: 'USU_COLAB', referencedColumnName: 'codusu' }])
  usuColab: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adAdgigquestperguntas2,
  )
  @JoinColumn([{ name: 'USU_GESTOR', referencedColumnName: 'codusu' }])
  usuGestor: TsiusuEntity;

  @ManyToOne(
    () => AdAdgigquestionarioEntity,
    (adAdgigquestionarioEntity) =>
      adAdgigquestionarioEntity.adAdgigquestperguntas,
  )
  @JoinColumn([{ name: 'ID_QUESTIONARIO', referencedColumnName: 'id' }])
  idQuestionario: AdAdgigquestionarioEntity;

  @OneToMany(
    () => AdAdgigquestpreguntasassociaEntity,
    (adAdgigquestpreguntasassociaEntity) =>
      adAdgigquestpreguntasassociaEntity.idQuestPerguntas2,
  )
  adAdgigquestpreguntasassocias: AdAdgigquestpreguntasassociaEntity[];
}
