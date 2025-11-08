import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__AD_GIG_Q__3214EC27E4F01B86', ['id'], { unique: true })
@Entity('AD_GIG_QUESTIONARIOS', { schema: 'SANKHYA' })
export class AdGigQuestionariosEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('nvarchar', { name: 'DESC', nullable: true, length: 50 })
  desc: string | null;

  @Column('nvarchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('date', { name: 'DT_INI', nullable: true })
  dtIni: Date | null;

  @Column('date', { name: 'DT_CONCLUSAO', nullable: true })
  dtConclusao: Date | null;

  @Column('nvarchar', { name: 'LINK_FORM', nullable: true, length: 255 })
  linkForm: string | null;

  @Column('int', { name: 'AFTER_DAYS', nullable: true })
  afterDays: number | null;

  @Column('date', { name: 'DT_CREATED', nullable: true })
  dtCreated: Date | null;

  @Column('date', { name: 'DT_UPDATED', nullable: true })
  dtUpdated: Date | null;

  @Column('int', { name: 'USER_ID', nullable: true })
  userId: number | null;
}
