import { Column, Entity, Index } from 'typeorm';

@Index('PK__ACT_HI_ATTACHMEN__1984AAC2', ['id'], { unique: true })
@Entity('ACT_HI_ATTACHMENT', { schema: 'SANKHYA' })
export class ActHiAttachmentEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'USER_ID_', nullable: true, length: 255 })
  userId: string | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'DESCRIPTION_', nullable: true, length: 3103 })
  description: string | null;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'URL_', nullable: true, length: 3103 })
  url: string | null;

  @Column('nvarchar', { name: 'CONTENT_ID_', nullable: true, length: 64 })
  contentId: string | null;

  @Column('datetime', { name: 'TIME_', nullable: true })
  time: Date | null;
}
