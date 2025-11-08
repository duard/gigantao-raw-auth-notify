import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_CPRI', ['procInstId'], {})
@Index('CMD_ACT_IDX_H_CTA', ['taskId'], {})
@Index('PK__CMD_ACT___C4971C0F7FF157F6', ['id'], { unique: true })
@Entity('CMD_ACT_HI_COMMENT', { schema: 'SANKHYA' })
export class CmdActHiCommentEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @Column('datetime', { name: 'TIME_' })
  time: Date;

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

  @Column('image', { name: 'FULL_MSG_', nullable: true })
  fullMsg: Buffer | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;
}
