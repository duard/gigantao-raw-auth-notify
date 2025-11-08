import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CmdActRuEventSubscrEntity } from './cMD_ACT_RU_EVENT_SUBSCR.entity';
import { CmdActReProcdefEntity } from './cMD_ACT_RE_PROCDEF.entity';
import { CmdActRuExtTaskEntity } from './cMD_ACT_RU_EXT_TASK.entity';
import { CmdActRuIncidentEntity } from './cMD_ACT_RU_INCIDENT.entity';
import { CmdActRuTaskEntity } from './cMD_ACT_RU_TASK.entity';
import { CmdActRuVariableEntity } from './cMD_ACT_RU_VARIABLE.entity';

@Index('CMD_ACT_IDX_EXEC_BUSKEY', ['businessKey'], {})
@Index('CMD_ACT_IDX_EXEC_TENANT_ID', ['tenantId'], {})
@Index('CMD_ACT_IDX_EXECUTION_PARENT', ['parentId'], {})
@Index('CMD_ACT_IDX_EXECUTION_PROC', ['procDefId'], {})
@Index('CMD_ACT_IDX_EXECUTION_PROCINST', ['procInstId'], {})
@Index('CMD_ACT_IDX_EXECUTION_SUPER', ['superExec'], {})
@Index('PK__CMD_ACT___C4971C0F77911C1F', ['id'], { unique: true })
@Entity('CMD_ACT_RU_EXECUTION', { schema: 'SANKHYA' })
export class CmdActRuExecutionEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'BUSINESS_KEY_', nullable: true, length: 255 })
  businessKey: string | null;

  @Column('nvarchar', { name: 'PARENT_ID_', nullable: true, length: 64 })
  parentId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'SUPER_EXEC_', nullable: true, length: 64 })
  superExec: string | null;

  @Column('nvarchar', { name: 'SUPER_CASE_EXEC_', nullable: true, length: 64 })
  superCaseExec: string | null;

  @Column('nvarchar', { name: 'CASE_INST_ID_', nullable: true, length: 64 })
  caseInstId: string | null;

  @Column('nvarchar', { name: 'ACT_ID_', nullable: true, length: 255 })
  actId: string | null;

  @Column('nvarchar', { name: 'ACT_INST_ID_', nullable: true, length: 64 })
  actInstId: string | null;

  @Column('tinyint', { name: 'IS_ACTIVE_', nullable: true })
  isActive: number | null;

  @Column('tinyint', { name: 'IS_CONCURRENT_', nullable: true })
  isConcurrent: number | null;

  @Column('tinyint', { name: 'IS_SCOPE_', nullable: true })
  isScope: number | null;

  @Column('tinyint', { name: 'IS_EVENT_SCOPE_', nullable: true })
  isEventScope: number | null;

  @Column('tinyint', { name: 'SUSPENSION_STATE_', nullable: true })
  suspensionState: number | null;

  @Column('int', { name: 'CACHED_ENT_STATE_', nullable: true })
  cachedEntState: number | null;

  @Column('numeric', {
    name: 'SEQUENCE_COUNTER_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  sequenceCounter: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @OneToMany(
    () => CmdActRuEventSubscrEntity,
    (cmdActRuEventSubscrEntity) => cmdActRuEventSubscrEntity.executionId_2,
  )
  cmdActRuEventSubscrs: CmdActRuEventSubscrEntity[];

  @ManyToOne(
    () => CmdActReProcdefEntity,
    (cmdActReProcdefEntity) => cmdActReProcdefEntity.cmdActRuExecutions,
  )
  @JoinColumn([{ name: 'PROC_DEF_ID_', referencedColumnName: 'id' }])
  procDefId_2: CmdActReProcdefEntity;

  @ManyToOne(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.cmdActRuExecutions,
  )
  @JoinColumn([{ name: 'PARENT_ID_', referencedColumnName: 'id' }])
  parentId_2: CmdActRuExecutionEntity;

  @OneToMany(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.parentId_2,
  )
  cmdActRuExecutions: CmdActRuExecutionEntity[];

  @ManyToOne(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.cmdActRuExecutions2,
  )
  @JoinColumn([{ name: 'SUPER_EXEC_', referencedColumnName: 'id' }])
  superExec_2: CmdActRuExecutionEntity;

  @OneToMany(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.superExec_2,
  )
  cmdActRuExecutions2: CmdActRuExecutionEntity[];

  @ManyToOne(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.cmdActRuExecutions3,
  )
  @JoinColumn([{ name: 'PROC_INST_ID_', referencedColumnName: 'id' }])
  procInstId_2: CmdActRuExecutionEntity;

  @OneToMany(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.procInstId_2,
  )
  cmdActRuExecutions3: CmdActRuExecutionEntity[];

  @OneToMany(
    () => CmdActRuExtTaskEntity,
    (cmdActRuExtTaskEntity) => cmdActRuExtTaskEntity.executionId_2,
  )
  cmdActRuExtTasks: CmdActRuExtTaskEntity[];

  @OneToMany(
    () => CmdActRuIncidentEntity,
    (cmdActRuIncidentEntity) => cmdActRuIncidentEntity.procInstId_2,
  )
  cmdActRuIncidents: CmdActRuIncidentEntity[];

  @OneToMany(
    () => CmdActRuIncidentEntity,
    (cmdActRuIncidentEntity) => cmdActRuIncidentEntity.executionId_2,
  )
  cmdActRuIncidents2: CmdActRuIncidentEntity[];

  @OneToMany(
    () => CmdActRuTaskEntity,
    (cmdActRuTaskEntity) => cmdActRuTaskEntity.procInstId_2,
  )
  cmdActRuTasks: CmdActRuTaskEntity[];

  @OneToMany(
    () => CmdActRuTaskEntity,
    (cmdActRuTaskEntity) => cmdActRuTaskEntity.executionId_2,
  )
  cmdActRuTasks2: CmdActRuTaskEntity[];

  @OneToMany(
    () => CmdActRuVariableEntity,
    (cmdActRuVariableEntity) => cmdActRuVariableEntity.executionId_2,
  )
  cmdActRuVariables: CmdActRuVariableEntity[];

  @OneToMany(
    () => CmdActRuVariableEntity,
    (cmdActRuVariableEntity) => cmdActRuVariableEntity.procInstId_2,
  )
  cmdActRuVariables2: CmdActRuVariableEntity[];
}
