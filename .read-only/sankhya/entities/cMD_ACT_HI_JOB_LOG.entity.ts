import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_J_LDID', ['jobDefId'], {})
@Index('CMD_ACT_IDX_H_J_LPRD', ['processDefId'], {})
@Index('CMD_ACT_IDX_H_J_LPRI', ['processInstanceId'], {})
@Index('CMD_ACT_IDX_H_J_LPRK', ['processDefKey'], {})
@Index('CMD_ACT_IDX_H_J_LST', ['jobExceptionStackId'], {})
@Index('CMD_ACT_IDX_H_J_LTEID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F0F339B86', ['id'], { unique: true })
@Entity('CMD_ACT_HI_JOB_LOG', { schema: 'SANKHYA' })
export class CmdActHiJobLogEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('datetime', { name: 'TIMESTAMP_' })
  timestamp: Date;

  @Column('nvarchar', { name: 'JOB_ID_', length: 64 })
  jobId: string;

  @Column('datetime', { name: 'JOB_DUEDATE_', nullable: true })
  jobDuedate: Date | null;

  @Column('int', { name: 'JOB_RETRIES_', nullable: true })
  jobRetries: number | null;

  @Column('numeric', {
    name: 'JOB_PRIORITY_',
    precision: 19,
    scale: 0,
    default: () => '(0)',
  })
  jobPriority: number;

  @Column('nvarchar', {
    name: 'JOB_EXCEPTION_MSG_',
    nullable: true,
    length: 3103,
  })
  jobExceptionMsg: string | null;

  @Column('nvarchar', {
    name: 'JOB_EXCEPTION_STACK_ID_',
    nullable: true,
    length: 64,
  })
  jobExceptionStackId: string | null;

  @Column('int', { name: 'JOB_STATE_', nullable: true })
  jobState: number | null;

  @Column('nvarchar', { name: 'JOB_DEF_ID_', nullable: true, length: 64 })
  jobDefId: string | null;

  @Column('nvarchar', { name: 'JOB_DEF_TYPE_', nullable: true, length: 255 })
  jobDefType: string | null;

  @Column('nvarchar', {
    name: 'JOB_DEF_CONFIGURATION_',
    nullable: true,
    length: 255,
  })
  jobDefConfiguration: string | null;

  @Column('nvarchar', { name: 'ACT_ID_', nullable: true, length: 255 })
  actId: string | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', {
    name: 'PROCESS_INSTANCE_ID_',
    nullable: true,
    length: 64,
  })
  processInstanceId: string | null;

  @Column('nvarchar', { name: 'PROCESS_DEF_ID_', nullable: true, length: 64 })
  processDefId: string | null;

  @Column('nvarchar', { name: 'PROCESS_DEF_KEY_', nullable: true, length: 255 })
  processDefKey: string | null;

  @Column('nvarchar', { name: 'DEPLOYMENT_ID_', nullable: true, length: 64 })
  deploymentId: string | null;

  @Column('numeric', {
    name: 'SEQUENCE_COUNTER_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  sequenceCounter: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;
}
