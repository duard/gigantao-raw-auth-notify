import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_H_E_ERR', ['errorDetailsId'], {})
@Index('CMD_ACT_H_E_PRD', ['procDefId'], {})
@Index('CMD_ACT_H_E_PRI', ['procInstId'], {})
@Index('CMD_ACT_H_E_TAKEY', ['procDefKey'], {})
@Index('CMD_ACT_H_E_TEID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F17C8E187', ['id'], { unique: true })
@Entity('CMD_ACT_HI_EXT_TASK_LOG', { schema: 'SANKHYA' })
export class CmdActHiExtTaskLogEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('datetime', { name: 'TIMESTAMP_' })
  timestamp: Date;

  @Column('nvarchar', { name: 'EXT_TASK_ID_', length: 64 })
  extTaskId: string;

  @Column('int', { name: 'RETRIES_', nullable: true })
  retries: number | null;

  @Column('nvarchar', { name: 'TOPIC_NAME_', nullable: true, length: 255 })
  topicName: string | null;

  @Column('nvarchar', { name: 'WORKER_ID_', nullable: true, length: 255 })
  workerId: string | null;

  @Column('numeric', {
    name: 'PRIORITY_',
    precision: 19,
    scale: 0,
    default: () => '(0)',
  })
  priority: number;

  @Column('nvarchar', { name: 'ERROR_MSG_', nullable: true, length: 3103 })
  errorMsg: string | null;

  @Column('nvarchar', { name: 'ERROR_DETAILS_ID_', nullable: true, length: 64 })
  errorDetailsId: string | null;

  @Column('nvarchar', { name: 'ACT_ID_', nullable: true, length: 255 })
  actId: string | null;

  @Column('nvarchar', { name: 'ACT_INST_ID_', nullable: true, length: 64 })
  actInstId: string | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_KEY_', nullable: true, length: 255 })
  procDefKey: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @Column('int', { name: 'STATE_', nullable: true })
  state: number | null;
}
