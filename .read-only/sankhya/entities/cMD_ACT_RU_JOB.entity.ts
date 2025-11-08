import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmdActGeBytearrayEntity } from './cMD_ACT_GE_BYTEARRAY.entity';

@Index('CMD_ACT_IDX_JOB_EXCEPTION_STACK', ['exceptionStackId'], {})
@Index('CMD_ACT_IDX_JOB_EXECUTION_ID', ['executionId'], {})
@Index('CMD_ACT_IDX_JOB_HANDLER_TYPE', ['handlerType'], {})
@Index('CMD_ACT_IDX_JOB_JOB_DEF_ID', ['jobDefId'], {})
@Index('CMD_ACT_IDX_JOB_PROCINST', ['processInstanceId'], {})
@Index('CMD_ACT_IDX_JOB_TENANT_ID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F7B61AD03', ['id'], { unique: true })
@Entity('CMD_ACT_RU_JOB', { schema: 'SANKHYA' })
export class CmdActRuJobEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'TYPE_', length: 255 })
  type: string;

  @Column('datetime', { name: 'LOCK_EXP_TIME_', nullable: true })
  lockExpTime: Date | null;

  @Column('nvarchar', { name: 'LOCK_OWNER_', nullable: true, length: 255 })
  lockOwner: string | null;

  @Column('bit', { name: 'EXCLUSIVE_', nullable: true })
  exclusive: boolean | null;

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

  @Column('int', { name: 'RETRIES_', nullable: true })
  retries: number | null;

  @Column('nvarchar', {
    name: 'EXCEPTION_STACK_ID_',
    nullable: true,
    length: 64,
  })
  exceptionStackId: string | null;

  @Column('nvarchar', { name: 'EXCEPTION_MSG_', nullable: true, length: 3103 })
  exceptionMsg: string | null;

  @Column('datetime', { name: 'DUEDATE_', nullable: true })
  duedate: Date | null;

  @Column('nvarchar', { name: 'REPEAT_', nullable: true, length: 255 })
  repeat: string | null;

  @Column('nvarchar', { name: 'HANDLER_TYPE_', nullable: true, length: 255 })
  handlerType: string | null;

  @Column('nvarchar', { name: 'HANDLER_CFG_', nullable: true, length: 3103 })
  handlerCfg: string | null;

  @Column('nvarchar', { name: 'DEPLOYMENT_ID_', nullable: true, length: 64 })
  deploymentId: string | null;

  @Column('tinyint', { name: 'SUSPENSION_STATE_', default: () => '(1)' })
  suspensionState: number;

  @Column('numeric', {
    name: 'PRIORITY_',
    precision: 19,
    scale: 0,
    default: () => '(0)',
  })
  priority: number;

  @Column('nvarchar', { name: 'JOB_DEF_ID_', nullable: true, length: 64 })
  jobDefId: string | null;

  @Column('numeric', {
    name: 'SEQUENCE_COUNTER_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  sequenceCounter: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @ManyToOne(
    () => CmdActGeBytearrayEntity,
    (cmdActGeBytearrayEntity) => cmdActGeBytearrayEntity.cmdActRuJobs,
  )
  @JoinColumn([{ name: 'EXCEPTION_STACK_ID_', referencedColumnName: 'id' }])
  exceptionStackId_2: CmdActGeBytearrayEntity;
}
