import { Column, Entity, Index } from 'typeorm';

@Index('PK__ACT_HI_COMMENT__179C6250', ['id'], { unique: true })
@Entity('ACT_HI_COMMENT', { schema: 'SANKHYA' })
export class ActHiCommentEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @Column('datetime', { name: 'TIME_', nullable: true })
  time: Date | null;

  @Column('nvarchar', { name: 'USER_ID_', nullable: true, length: 255 })
  userId: string | null;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'ACTION_', nullable: true, length: 255 })
  action: string | null;

  @Column('nvarchar', { name: 'MESSAGE_', nullable: true, length: 3103 })
  message: string | null;

  @Column('varbinary', { name: 'FULL_MSG_', nullable: true })
  fullMsg: Buffer | null;
}
