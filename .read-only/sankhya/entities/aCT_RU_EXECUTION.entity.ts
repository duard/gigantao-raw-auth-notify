import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ActRuEventSubscrEntity } from './aCT_RU_EVENT_SUBSCR.entity';
import { ActReProcdefEntity } from './aCT_RE_PROCDEF.entity';
import { ActRuIdentitylinkEntity } from './aCT_RU_IDENTITYLINK.entity';
import { ActRuTaskEntity } from './aCT_RU_TASK.entity';
import { ActRuVariableEntity } from './aCT_RU_VARIABLE.entity';

@Index('ACT_IDX_EXEC_BUSKEY', ['businessKey'], {})
@Index('ACT_IDX_EXEC_PROC_INST_ID', ['procInstId'], {})
@Index('ACT_IDX_EXECUTION_IDANDREV', ['id', 'rev'], {})
@Index('ACT_IDX_EXECUTION_PARENT', ['parentId'], {})
@Index('ACT_IDX_EXECUTION_PROC', ['procDefId'], {})
@Index('ACT_IDX_EXECUTION_SUPER', ['superExec'], {})
@Index('PK__ACT_RU_EXECUTION__39F17A54', ['id'], { unique: true })
@Entity('ACT_RU_EXECUTION', { schema: 'SANKHYA' })
export class ActRuExecutionEntity {
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

  @Column('nvarchar', { name: 'ACT_ID_', nullable: true, length: 255 })
  actId: string | null;

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

  @Column('nvarchar', {
    name: 'TENANT_ID_',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  tenantId: string | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('datetime', { name: 'LOCK_TIME_', nullable: true })
  lockTime: Date | null;

  @OneToMany(
    () => ActRuEventSubscrEntity,
    (actRuEventSubscrEntity) => actRuEventSubscrEntity.executionId_2,
  )
  actRuEventSubscrs: ActRuEventSubscrEntity[];

  @ManyToOne(
    () => ActRuExecutionEntity,
    (actRuExecutionEntity) => actRuExecutionEntity.actRuExecutions,
  )
  @JoinColumn([{ name: 'PARENT_ID_', referencedColumnName: 'id' }])
  parentId_2: ActRuExecutionEntity;

  @OneToMany(
    () => ActRuExecutionEntity,
    (actRuExecutionEntity) => actRuExecutionEntity.parentId_2,
  )
  actRuExecutions: ActRuExecutionEntity[];

  @ManyToOne(
    () => ActRuExecutionEntity,
    (actRuExecutionEntity) => actRuExecutionEntity.actRuExecutions2,
  )
  @JoinColumn([{ name: 'SUPER_EXEC_', referencedColumnName: 'id' }])
  superExec_2: ActRuExecutionEntity;

  @OneToMany(
    () => ActRuExecutionEntity,
    (actRuExecutionEntity) => actRuExecutionEntity.superExec_2,
  )
  actRuExecutions2: ActRuExecutionEntity[];

  @ManyToOne(
    () => ActReProcdefEntity,
    (actReProcdefEntity) => actReProcdefEntity.actRuExecutions,
  )
  @JoinColumn([{ name: 'PROC_DEF_ID_', referencedColumnName: 'id' }])
  procDefId_2: ActReProcdefEntity;

  @OneToMany(
    () => ActRuIdentitylinkEntity,
    (actRuIdentitylinkEntity) => actRuIdentitylinkEntity.procInstId_2,
  )
  actRuIdentitylinks: ActRuIdentitylinkEntity[];

  @OneToMany(
    () => ActRuTaskEntity,
    (actRuTaskEntity) => actRuTaskEntity.executionId_2,
  )
  actRuTasks: ActRuTaskEntity[];

  @OneToMany(
    () => ActRuTaskEntity,
    (actRuTaskEntity) => actRuTaskEntity.procInstId_2,
  )
  actRuTasks2: ActRuTaskEntity[];

  @OneToMany(
    () => ActRuVariableEntity,
    (actRuVariableEntity) => actRuVariableEntity.executionId_2,
  )
  actRuVariables: ActRuVariableEntity[];

  @OneToMany(
    () => ActRuVariableEntity,
    (actRuVariableEntity) => actRuVariableEntity.procInstId_2,
  )
  actRuVariables2: ActRuVariableEntity[];
}
