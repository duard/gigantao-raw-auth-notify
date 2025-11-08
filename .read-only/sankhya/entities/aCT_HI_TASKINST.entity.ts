import { Column, Entity, Index } from 'typeorm';

@Index('PK__ACT_HI_TASKINST__10EF64C1', ['id'], { unique: true })
@Entity('ACT_HI_TASKINST', { schema: 'SANKHYA' })
export class ActHiTaskinstEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'TASK_DEF_KEY_', nullable: true, length: 255 })
  taskDefKey: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'PARENT_TASK_ID_', nullable: true, length: 64 })
  parentTaskId: string | null;

  @Column('nvarchar', { name: 'DESCRIPTION_', nullable: true, length: 3103 })
  description: string | null;

  @Column('nvarchar', { name: 'OWNER_', nullable: true, length: 255 })
  owner: string | null;

  @Column('nvarchar', { name: 'ASSIGNEE_', nullable: true, length: 255 })
  assignee: string | null;

  @Column('datetime', { name: 'START_TIME_', nullable: true })
  startTime: Date | null;

  @Column('datetime', { name: 'CLAIM_TIME_', nullable: true })
  claimTime: Date | null;

  @Column('datetime', { name: 'END_TIME_', nullable: true })
  endTime: Date | null;

  @Column('numeric', {
    name: 'DURATION_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  duration: number | null;

  @Column('nvarchar', { name: 'DELETE_REASON_', nullable: true, length: 3103 })
  deleteReason: string | null;

  @Column('int', { name: 'PRIORITY_', nullable: true })
  priority: number | null;

  @Column('datetime', { name: 'DUE_DATE_', nullable: true })
  dueDate: Date | null;

  @Column('nvarchar', { name: 'FORM_KEY_', nullable: true, length: 255 })
  formKey: string | null;

  @Column('nvarchar', { name: 'CATEGORY_', nullable: true, length: 255 })
  category: string | null;

  @Column('nvarchar', {
    name: 'TENANT_ID_',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  tenantId: string | null;
}
