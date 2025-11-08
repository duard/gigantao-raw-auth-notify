import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_AD_ADGIGPERGUNTAS', ['idPergunta'], { unique: true })
@Entity('AD_ADGIGPERGUNTAS', { schema: 'SANKHYA' })
export class AdAdgigperguntasEntity {
  @Column('int', { primary: true, name: 'ID_PERGUNTA' })
  idPergunta: number;

  @Column('text', { name: 'DESCRICAO', nullable: true })
  descricao: string | null;

  @Column('varchar', { name: 'RESPOSTA', nullable: true, length: 10 })
  resposta: string | null;

  @Column('datetime', { name: 'DT_CREATED', nullable: true })
  dtCreated: Date | null;

  @Column('datetime', { name: 'DT_UPDATED', nullable: true })
  dtUpdated: Date | null;

  @Column('datetime', { name: 'DT_DELETED', nullable: true })
  dtDeleted: Date | null;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adAdgigperguntas,
  )
  @JoinColumn([{ name: 'USU_CREATED', referencedColumnName: 'codusu' }])
  usuCreated: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adAdgigperguntas2,
  )
  @JoinColumn([{ name: 'USU_UPDATED', referencedColumnName: 'codusu' }])
  usuUpdated: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adAdgigperguntas3,
  )
  @JoinColumn([{ name: 'USU_DELETED', referencedColumnName: 'codusu' }])
  usuDeleted: TsiusuEntity;
}
