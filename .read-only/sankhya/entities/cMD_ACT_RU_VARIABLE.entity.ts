import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmdActGeBytearrayEntity } from './cMD_ACT_GE_BYTEARRAY.entity';
import { CmdActRuCaseExecutionEntity } from './cMD_ACT_RU_CASE_EXECUTION.entity';
import { CmdActRuExecutionEntity } from './cMD_ACT_RU_EXECUTION.entity';

@Index('CMD_ACT_IDX_VARIABLE_BA', ['bytearrayId'], {})
@Index('CMD_ACT_IDX_VARIABLE_CASE_EXEC', ['caseExecutionId'], {})
@Index('CMD_ACT_IDX_VARIABLE_CASE_INST', ['caseInstId'], {})
@Index('CMD_ACT_IDX_VARIABLE_EXEC', ['executionId'], {})
@Index('CMD_ACT_IDX_VARIABLE_PROCINST', ['procInstId'], {})
@Index('CMD_ACT_IDX_VARIABLE_TASK_ID', ['taskId'], {})
@Index('CMD_ACT_IDX_VARIABLE_TENANT_ID', ['tenantId'], {})
@Index('CMD_ACT_UNIQ_VARIABLE', ['varScope', 'name'], { unique: true })
@Index('PK__CMD_ACT___C4971C0F105CC9E9', ['id'], { unique: true })
@Entity('CMD_ACT_RU_VARIABLE', { schema: 'SANKHYA' })
export class CmdActRuVariableEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'TYPE_', length: 255 })
  type: string;

  @Column('nvarchar', { name: 'NAME_', length: 255 })
  name: string;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', {
    name: 'CASE_EXECUTION_ID_',
    nullable: true,
    length: 64,
  })
  caseExecutionId: string | null;

  @Column('nvarchar', { name: 'CASE_INST_ID_', nullable: true, length: 64 })
  caseInstId: string | null;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', { name: 'BYTEARRAY_ID_', nullable: true, length: 64 })
  bytearrayId: string | null;

  @Column('float', { name: 'DOUBLE_', nullable: true, precision: 53 })
  double: number | null;

  @Column('numeric', { name: 'LONG_', nullable: true, precision: 19, scale: 0 })
  long: number | null;

  @Column('nvarchar', { name: 'TEXT_', nullable: true, length: 3103 })
  text: string | null;

  @Column('nvarchar', { name: 'TEXT2_', nullable: true, length: 3103 })
  text2: string | null;

  @Column('nvarchar', { name: 'VAR_SCOPE_', length: 64 })
  varScope: string;

  @Column('numeric', {
    name: 'SEQUENCE_COUNTER_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  sequenceCounter: number | null;

  @Column('tinyint', { name: 'IS_CONCURRENT_LOCAL_', nullable: true })
  isConcurrentLocal: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @ManyToOne(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.cmdActRuVariables,
  )
  @JoinColumn([{ name: 'EXECUTION_ID_', referencedColumnName: 'id' }])
  executionId_2: CmdActRuExecutionEntity;

  @ManyToOne(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.cmdActRuVariables2,
  )
  @JoinColumn([{ name: 'PROC_INST_ID_', referencedColumnName: 'id' }])
  procInstId_2: CmdActRuExecutionEntity;

  @ManyToOne(
    () => CmdActGeBytearrayEntity,
    (cmdActGeBytearrayEntity) => cmdActGeBytearrayEntity.cmdActRuVariables,
  )
  @JoinColumn([{ name: 'BYTEARRAY_ID_', referencedColumnName: 'id' }])
  bytearrayId_2: CmdActGeBytearrayEntity;

  @ManyToOne(
    () => CmdActRuCaseExecutionEntity,
    (cmdActRuCaseExecutionEntity) =>
      cmdActRuCaseExecutionEntity.cmdActRuVariables,
  )
  @JoinColumn([{ name: 'CASE_EXECUTION_ID_', referencedColumnName: 'id' }])
  caseExecutionId_2: CmdActRuCaseExecutionEntity;

  @ManyToOne(
    () => CmdActRuCaseExecutionEntity,
    (cmdActRuCaseExecutionEntity) =>
      cmdActRuCaseExecutionEntity.cmdActRuVariables2,
  )
  @JoinColumn([{ name: 'CASE_INST_ID_', referencedColumnName: 'id' }])
  caseInstId_2: CmdActRuCaseExecutionEntity;
}
