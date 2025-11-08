import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ActRuExecutionEntity } from './aCT_RU_EXECUTION.entity';

@Index('ACT_IDX_EVENT_SUBSCR_CONFIG_', ['configuration'], {})
@Index('ACT_IDX_EVENT_SUBSCR_EXEC_ID', ['executionId'], {})
@Index('PK__ACT_RU_EVENT_SUB__52BD281E', ['id'], { unique: true })
@Entity('ACT_RU_EVENT_SUBSCR', { schema: 'SANKHYA' })
export class ActRuEventSubscrEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'EVENT_TYPE_', nullable: true, length: 255 })
  eventType: string | null;

  @Column('nvarchar', { name: 'EVENT_NAME_', nullable: true, length: 255 })
  eventName: string | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'ACTIVITY_ID_', nullable: true, length: 64 })
  activityId: string | null;

  @Column('nvarchar', { name: 'CONFIGURATION_', nullable: true, length: 255 })
  configuration: string | null;

  @Column('datetime', { name: 'CREATED_', nullable: true })
  created: Date | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', {
    name: 'TENANT_ID_',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  tenantId: string | null;

  @ManyToOne(
    () => ActRuExecutionEntity,
    (actRuExecutionEntity) => actRuExecutionEntity.actRuEventSubscrs,
  )
  @JoinColumn([{ name: 'EXECUTION_ID_', referencedColumnName: 'id' }])
  executionId_2: ActRuExecutionEntity;
}
