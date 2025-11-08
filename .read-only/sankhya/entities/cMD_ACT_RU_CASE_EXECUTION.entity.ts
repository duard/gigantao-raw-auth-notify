import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CmdActReCaseDefEntity } from './cMD_ACT_RE_CASE_DEF.entity';
import { CmdActRuCaseSentryPartEntity } from './cMD_ACT_RU_CASE_SENTRY_PART.entity';
import { CmdActRuTaskEntity } from './cMD_ACT_RU_TASK.entity';
import { CmdActRuVariableEntity } from './cMD_ACT_RU_VARIABLE.entity';

@Index('CMD_ACT_IDX_CASE_EXEC_BUSKEY', ['businessKey'], {})
@Index('CMD_ACT_IDX_CASE_EXEC_CASE', ['caseDefId'], {})
@Index('CMD_ACT_IDX_CASE_EXEC_PARENT', ['parentId'], {})
@Index('CMD_ACT_IDX_EX_TE_ID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F4D65D829', ['id'], { unique: true })
@Entity('CMD_ACT_RU_CASE_EXECUTION', { schema: 'SANKHYA' })
export class CmdActRuCaseExecutionEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'SUPER_CASE_EXEC_', nullable: true, length: 64 })
  superCaseExec: string | null;

  @Column('nvarchar', { name: 'SUPER_EXEC_', nullable: true, length: 64 })
  superExec: string | null;

  @Column('nvarchar', { name: 'BUSINESS_KEY_', nullable: true, length: 255 })
  businessKey: string | null;

  @Column('nvarchar', { name: 'PARENT_ID_', nullable: true, length: 64 })
  parentId: string | null;

  @Column('nvarchar', { name: 'CASE_DEF_ID_', nullable: true, length: 64 })
  caseDefId: string | null;

  @Column('nvarchar', { name: 'ACT_ID_', nullable: true, length: 255 })
  actId: string | null;

  @Column('int', { name: 'PREV_STATE_', nullable: true })
  prevState: number | null;

  @Column('int', { name: 'CURRENT_STATE_', nullable: true })
  currentState: number | null;

  @Column('tinyint', { name: 'REQUIRED_', nullable: true })
  required: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @ManyToOne(
    () => CmdActReCaseDefEntity,
    (cmdActReCaseDefEntity) => cmdActReCaseDefEntity.cmdActRuCaseExecutions,
  )
  @JoinColumn([{ name: 'CASE_DEF_ID_', referencedColumnName: 'id' }])
  caseDefId_2: CmdActReCaseDefEntity;

  @ManyToOne(
    () => CmdActRuCaseExecutionEntity,
    (cmdActRuCaseExecutionEntity) =>
      cmdActRuCaseExecutionEntity.cmdActRuCaseExecutions,
  )
  @JoinColumn([{ name: 'CASE_INST_ID_', referencedColumnName: 'id' }])
  caseInstId: CmdActRuCaseExecutionEntity;

  @OneToMany(
    () => CmdActRuCaseExecutionEntity,
    (cmdActRuCaseExecutionEntity) => cmdActRuCaseExecutionEntity.caseInstId,
  )
  cmdActRuCaseExecutions: CmdActRuCaseExecutionEntity[];

  @ManyToOne(
    () => CmdActRuCaseExecutionEntity,
    (cmdActRuCaseExecutionEntity) =>
      cmdActRuCaseExecutionEntity.cmdActRuCaseExecutions2,
  )
  @JoinColumn([{ name: 'PARENT_ID_', referencedColumnName: 'id' }])
  parentId_2: CmdActRuCaseExecutionEntity;

  @OneToMany(
    () => CmdActRuCaseExecutionEntity,
    (cmdActRuCaseExecutionEntity) => cmdActRuCaseExecutionEntity.parentId_2,
  )
  cmdActRuCaseExecutions2: CmdActRuCaseExecutionEntity[];

  @OneToMany(
    () => CmdActRuCaseSentryPartEntity,
    (cmdActRuCaseSentryPartEntity) => cmdActRuCaseSentryPartEntity.caseInstId_2,
  )
  cmdActRuCaseSentryParts: CmdActRuCaseSentryPartEntity[];

  @OneToMany(
    () => CmdActRuCaseSentryPartEntity,
    (cmdActRuCaseSentryPartEntity) => cmdActRuCaseSentryPartEntity.caseExecId_2,
  )
  cmdActRuCaseSentryParts2: CmdActRuCaseSentryPartEntity[];

  @OneToMany(
    () => CmdActRuTaskEntity,
    (cmdActRuTaskEntity) => cmdActRuTaskEntity.caseExecutionId_2,
  )
  cmdActRuTasks: CmdActRuTaskEntity[];

  @OneToMany(
    () => CmdActRuVariableEntity,
    (cmdActRuVariableEntity) => cmdActRuVariableEntity.caseExecutionId_2,
  )
  cmdActRuVariables: CmdActRuVariableEntity[];

  @OneToMany(
    () => CmdActRuVariableEntity,
    (cmdActRuVariableEntity) => cmdActRuVariableEntity.caseInstId_2,
  )
  cmdActRuVariables2: CmdActRuVariableEntity[];
}
