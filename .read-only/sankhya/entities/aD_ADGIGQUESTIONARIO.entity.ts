import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { AdAdgigquestperguntasEntity } from './aD_ADGIGQUESTPERGUNTAS.entity';

@Index('PK_AD_ADGIGQUESTIONARIO', ['id'], { unique: true })
@Entity('AD_ADGIGQUESTIONARIO', { schema: 'SANKHYA' })
export class AdAdgigquestionarioEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('datetime', { name: 'DT_CREATED', nullable: true })
  dtCreated: Date | null;

  @Column('datetime', { name: 'DT_UPDATED', nullable: true })
  dtUpdated: Date | null;

  @Column('datetime', { name: 'DT_DELETED', nullable: true })
  dtDeleted: Date | null;

  @Column('int', { name: 'TIPO_QUESTIONARIO', nullable: true })
  tipoQuestionario: number | null;

  @Column('int', { name: 'DIAS', nullable: true })
  dias: number | null;

  @Column('int', { name: 'DIAS_ALERTA', nullable: true })
  diasAlerta: number | null;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 10 })
  ativo: string | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adAdgigquestionarios,
  )
  @JoinColumn([{ name: 'ID_USER_UPDATED', referencedColumnName: 'codusu' }])
  idUserUpdated: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adAdgigquestionarios2,
  )
  @JoinColumn([{ name: 'ID_USER_DELETED', referencedColumnName: 'codusu' }])
  idUserDeleted: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adAdgigquestionarios3,
  )
  @JoinColumn([{ name: 'ID_USER_CREATED', referencedColumnName: 'codusu' }])
  idUserCreated: TsiusuEntity;

  @OneToMany(
    () => AdAdgigquestperguntasEntity,
    (adAdgigquestperguntasEntity) => adAdgigquestperguntasEntity.idQuestionario,
  )
  adAdgigquestperguntas: AdAdgigquestperguntasEntity[];
}
