import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmdActGeBytearrayEntity } from './cMD_ACT_GE_BYTEARRAY.entity';
import { CmdActRuExecutionEntity } from './cMD_ACT_RU_EXECUTION.entity';

@Index('CMD_ACT_IDX_ER_DT', ['errorDetailsId'], {})
@Index('CMD_ACT_IDX_EXT_TASK_EXEC', ['executionId'], {})
@Index('CMD_ACT_IDX_EXT_TASK_PRIORITY', ['priority'], {})
@Index('CMD_ACT_IDX_EXT_TASK_TENANT_ID', ['tenantId'], {})
@Index('CMD_ACT_IDX_EXT_TASK_TOPIC', ['topicName'], {})
@Index('PK__CMD_ACT___C4971C0F2834537A', ['id'], { unique: true })
@Entity('CMD_ACT_RU_EXT_TASK', { schema: 'SANKHYA' })
export class CmdActRuExtTaskEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_' })
  rev: number;

  @Column('nvarchar', { name: 'WORKER_ID_', nullable: true, length: 255 })
  workerId: string | null;

  @Column('nvarchar', { name: 'TOPIC_NAME_', nullable: true, length: 255 })
  topicName: string | null;

  @Column('int', { name: 'RETRIES_', nullable: true })
  retries: number | null;

  @Column('nvarchar', { name: 'ERROR_MSG_', nullable: true, length: 3103 })
  errorMsg: string | null;

  @Column('nvarchar', { name: 'ERROR_DETAILS_ID_', nullable: true, length: 64 })
  errorDetailsId: string | null;

  @Column('datetime', { name: 'LOCK_EXP_TIME_', nullable: true })
  lockExpTime: Date | null;

  @Column('tinyint', { name: 'SUSPENSION_STATE_', nullable: true })
  suspensionState: number | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_KEY_', nullable: true, length: 255 })
  procDefKey: string | null;

  @Column('nvarchar', { name: 'ACT_ID_', nullable: true, length: 255 })
  actId: string | null;

  @Column('nvarchar', { name: 'ACT_INST_ID_', nullable: true, length: 64 })
  actInstId: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @Column('numeric', {
    name: 'PRIORITY_',
    precision: 19,
    scale: 0,
    default: () => '(0)',
  })
  priority: number;

  @ManyToOne(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.cmdActRuExtTasks,
  )
  @JoinColumn([{ name: 'EXECUTION_ID_', referencedColumnName: 'id' }])
  executionId_2: CmdActRuExecutionEntity;

  @ManyToOne(
    () => CmdActGeBytearrayEntity,
    (cmdActGeBytearrayEntity) => cmdActGeBytearrayEntity.cmdActRuExtTasks,
  )
  @JoinColumn([{ name: 'ERROR_DETAILS_ID_', referencedColumnName: 'id' }])
  errorDetailsId_2: CmdActGeBytearrayEntity;
}
