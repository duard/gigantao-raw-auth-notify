import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_A_CO', ['contentId'], {})
@Index('CMD_ACT_IDX_H_A_PRI', ['procInstId'], {})
@Index('CMD_ACT_IDX_H_A_TA', ['taskId'], {})
@Index('PK__CMD_ACT___C4971C0F03C1E8DA', ['id'], { unique: true })
@Entity('CMD_ACT_HI_ATTACHMENT', { schema: 'SANKHYA' })
export class CmdActHiAttachmentEntity {
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

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;
}
