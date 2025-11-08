import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { CmdActReCaseDefEntity } from './cMD_ACT_RE_CASE_DEF.entity';
import { CmdActReProcdefEntity } from './cMD_ACT_RE_PROCDEF.entity';
import { CmdActRuCaseExecutionEntity } from './cMD_ACT_RU_CASE_EXECUTION.entity';
import { CmdActRuExecutionEntity } from './cMD_ACT_RU_EXECUTION.entity';
import { CmdActRuIdentitylinkEntity } from './cMD_ACT_RU_IDENTITYLINK.entity';

@Index('CMD_ACT_IDX_TASK_ASSIGNEE', ['assignee'], {})
@Index('CMD_ACT_IDX_TASK_CASE_DEF_ID', ['caseDefId'], {})
@Index('CMD_ACT_IDX_TASK_CASE_EXEC', ['caseExecutionId'], {})
@Index('CMD_ACT_IDX_TASK_CREATE', ['createTime'], {})
@Index('CMD_ACT_IDX_TASK_EXEC', ['executionId'], {})
@Index('CMD_ACT_IDX_TASK_PROC_DEF_ID', ['procDefId'], {})
@Index('CMD_ACT_IDX_TASK_PROCINST', ['procInstId'], {})
@Index('CMD_ACT_IDX_TASK_TENANT_ID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F08BBA821', ['id'], { unique: true })
@Entity('CMD_ACT_RU_TASK', { schema: 'SANKHYA' })
export class CmdActRuTaskEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', {
    name: 'CASE_EXECUTION_ID_',
    nullable: true,
    length: 64,
  })
  caseExecutionId: string | null;

  @Column('nvarchar', { name: 'CASE_INST_ID_', nullable: true, length: 64 })
  caseInstId: string | null;

  @Column('nvarchar', { name: 'CASE_DEF_ID_', nullable: true, length: 64 })
  caseDefId: string | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'PARENT_TASK_ID_', nullable: true, length: 64 })
  parentTaskId: string | null;

  @Column('nvarchar', { name: 'DESCRIPTION_', nullable: true, length: 3103 })
  description: string | null;

  @Column('nvarchar', { name: 'TASK_DEF_KEY_', nullable: true, length: 255 })
  taskDefKey: string | null;

  @Column('nvarchar', { name: 'OWNER_', nullable: true, length: 255 })
  owner: string | null;

  @Column('nvarchar', { name: 'ASSIGNEE_', nullable: true, length: 255 })
  assignee: string | null;

  @Column('nvarchar', { name: 'DELEGATION_', nullable: true, length: 64 })
  delegation: string | null;

  @Column('int', { name: 'PRIORITY_', nullable: true })
  priority: number | null;

  @Column('datetime', { name: 'CREATE_TIME_', nullable: true })
  createTime: Date | null;

  @Column('datetime', { name: 'DUE_DATE_', nullable: true })
  dueDate: Date | null;

  @Column('datetime', { name: 'FOLLOW_UP_DATE_', nullable: true })
  followUpDate: Date | null;

  @Column('int', { name: 'SUSPENSION_STATE_', nullable: true })
  suspensionState: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @OneToMany(
    () => CmdActRuIdentitylinkEntity,
    (cmdActRuIdentitylinkEntity) => cmdActRuIdentitylinkEntity.taskId_2,
  )
  cmdActRuIdentitylinks: CmdActRuIdentitylinkEntity[];

  @ManyToOne(
    () => CmdActReProcdefEntity,
    (cmdActReProcdefEntity) => cmdActReProcdefEntity.cmdActRuTasks,
  )
  @JoinColumn([{ name: 'PROC_DEF_ID_', referencedColumnName: 'id' }])
  procDefId_2: CmdActReProcdefEntity;

  @ManyToOne(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.cmdActRuTasks,
  )
  @JoinColumn([{ name: 'PROC_INST_ID_', referencedColumnName: 'id' }])
  procInstId_2: CmdActRuExecutionEntity;

  @ManyToOne(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.cmdActRuTasks2,
  )
  @JoinColumn([{ name: 'EXECUTION_ID_', referencedColumnName: 'id' }])
  executionId_2: CmdActRuExecutionEntity;

  @ManyToOne(
    () => CmdActRuCaseExecutionEntity,
    (cmdActRuCaseExecutionEntity) => cmdActRuCaseExecutionEntity.cmdActRuTasks,
  )
  @JoinColumn([{ name: 'CASE_EXECUTION_ID_', referencedColumnName: 'id' }])
  caseExecutionId_2: CmdActRuCaseExecutionEntity;

  @ManyToOne(
    () => CmdActReCaseDefEntity,
    (cmdActReCaseDefEntity) => cmdActReCaseDefEntity.cmdActRuTasks,
  )
  @JoinColumn([{ name: 'CASE_DEF_ID_', referencedColumnName: 'id' }])
  caseDefId_2: CmdActReCaseDefEntity;
}
