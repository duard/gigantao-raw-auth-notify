import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmdActRuExecutionEntity } from './cMD_ACT_RU_EXECUTION.entity';

@Index('CMD_ACT_IDX_EV_ID', ['tenantId'], {})
@Index('CMD_ACT_IDX_EV_SUB_CFG', ['configuration'], {})
@Index('CMD_ACT_IDX_EVENT_SUBSCR_EXEC', ['executionId'], {})
@Index('CMD_ACT_IDX_SB_EVT_N', ['eventName'], {})
@Index('PK__CMD_ACT___C4971C0F142D5ACD', ['id'], { unique: true })
@Entity('CMD_ACT_RU_EVENT_SUBSCR', { schema: 'SANKHYA' })
export class CmdActRuEventSubscrEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'EVENT_TYPE_', length: 255 })
  eventType: string;

  @Column('nvarchar', { name: 'EVENT_NAME_', nullable: true, length: 255 })
  eventName: string | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'ACTIVITY_ID_', nullable: true, length: 255 })
  activityId: string | null;

  @Column('nvarchar', { name: 'CONFIGURATION_', nullable: true, length: 255 })
  configuration: string | null;

  @Column('datetime', { name: 'CREATED_' })
  created: Date;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @ManyToOne(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.cmdActRuEventSubscrs,
  )
  @JoinColumn([{ name: 'EXECUTION_ID_', referencedColumnName: 'id' }])
  executionId_2: CmdActRuExecutionEntity;
}
