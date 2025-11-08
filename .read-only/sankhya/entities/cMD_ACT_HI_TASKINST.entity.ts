import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_T_IKEY', ['procDefKey'], {})
@Index('CMD_ACT_IDX_H_T_ITEID', ['tenantId'], {})
@Index('CMD_ACT_IDX_H_T_PRI', ['id', 'procInstId'], {})
@Index('CMD_ACT_IDX_H_T_PRIN', ['procInstId'], {})
@Index('PK__CMD_ACT___C4971C0F70AF1466', ['id'], { unique: true })
@Entity('CMD_ACT_HI_TASKINST', { schema: 'SANKHYA' })
export class CmdActHiTaskinstEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'TASK_DEF_KEY_', nullable: true, length: 255 })
  taskDefKey: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_KEY_', nullable: true, length: 255 })
  procDefKey: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'CASE_DEF_KEY_', nullable: true, length: 255 })
  caseDefKey: string | null;

  @Column('nvarchar', { name: 'CASE_DEF_ID_', nullable: true, length: 64 })
  caseDefId: string | null;

  @Column('nvarchar', { name: 'CASE_INST_ID_', nullable: true, length: 64 })
  caseInstId: string | null;

  @Column('nvarchar', {
    name: 'CASE_EXECUTION_ID_',
    nullable: true,
    length: 64,
  })
  caseExecutionId: string | null;

  @Column('nvarchar', { name: 'ACT_INST_ID_', nullable: true, length: 64 })
  actInstId: string | null;

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

  @Column('datetime', { name: 'START_TIME_' })
  startTime: Date;

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

  @Column('datetime', { name: 'FOLLOW_UP_DATE_', nullable: true })
  followUpDate: Date | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;
}
