import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_O_L_PRI', ['procInstId'], {})
@Index('CMD_ACT_IDX_H_O_LPRD', ['procDefId'], {})
@Index('PK__CMD_ACT___C4971C0F079279BE', ['id'], { unique: true })
@Entity('CMD_ACT_HI_OP_LOG', { schema: 'SANKHYA' })
export class CmdActHiOpLogEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'DEPLOYMENT_ID_', nullable: true, length: 64 })
  deploymentId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_KEY_', nullable: true, length: 255 })
  procDefKey: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

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

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', { name: 'JOB_ID_', nullable: true, length: 64 })
  jobId: string | null;

  @Column('nvarchar', { name: 'JOB_DEF_ID_', nullable: true, length: 64 })
  jobDefId: string | null;

  @Column('nvarchar', { name: 'BATCH_ID_', nullable: true, length: 64 })
  batchId: string | null;

  @Column('nvarchar', { name: 'USER_ID_', nullable: true, length: 255 })
  userId: string | null;

  @Column('datetime', { name: 'TIMESTAMP_' })
  timestamp: Date;

  @Column('nvarchar', { name: 'OPERATION_TYPE_', nullable: true, length: 64 })
  operationType: string | null;

  @Column('nvarchar', { name: 'OPERATION_ID_', nullable: true, length: 64 })
  operationId: string | null;

  @Column('nvarchar', { name: 'ENTITY_TYPE_', nullable: true, length: 30 })
  entityType: string | null;

  @Column('nvarchar', { name: 'PROPERTY_', nullable: true, length: 64 })
  property: string | null;

  @Column('nvarchar', { name: 'ORG_VALUE_', nullable: true, length: 3103 })
  orgValue: string | null;

  @Column('nvarchar', { name: 'NEW_VALUE_', nullable: true, length: 3103 })
  newValue: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;
}
