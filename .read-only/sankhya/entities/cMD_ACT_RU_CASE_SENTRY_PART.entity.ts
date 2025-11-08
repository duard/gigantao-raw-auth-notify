import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmdActRuCaseExecutionEntity } from './cMD_ACT_RU_CASE_EXECUTION.entity';

@Index('CMD_ACT_IDX_SE_CS_EX', ['caseExecId'], {})
@Index('CMD_ACT_IDX_SE_CS_INS', ['caseInstId'], {})
@Index('PK__CMD_ACT___C4971C0F5136690D', ['id'], { unique: true })
@Entity('CMD_ACT_RU_CASE_SENTRY_PART', { schema: 'SANKHYA' })
export class CmdActRuCaseSentryPartEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'CASE_INST_ID_', nullable: true, length: 64 })
  caseInstId: string | null;

  @Column('nvarchar', { name: 'CASE_EXEC_ID_', nullable: true, length: 64 })
  caseExecId: string | null;

  @Column('nvarchar', { name: 'SENTRY_ID_', nullable: true, length: 255 })
  sentryId: string | null;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @Column('nvarchar', {
    name: 'SOURCE_CASE_EXEC_ID_',
    nullable: true,
    length: 64,
  })
  sourceCaseExecId: string | null;

  @Column('nvarchar', { name: 'STANDARD_EVENT_', nullable: true, length: 255 })
  standardEvent: string | null;

  @Column('nvarchar', { name: 'SOURCE_', nullable: true, length: 255 })
  source: string | null;

  @Column('nvarchar', { name: 'VARIABLE_EVENT_', nullable: true, length: 255 })
  variableEvent: string | null;

  @Column('nvarchar', { name: 'VARIABLE_NAME_', nullable: true, length: 255 })
  variableName: string | null;

  @Column('tinyint', { name: 'SATISFIED_', nullable: true })
  satisfied: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @ManyToOne(
    () => CmdActRuCaseExecutionEntity,
    (cmdActRuCaseExecutionEntity) =>
      cmdActRuCaseExecutionEntity.cmdActRuCaseSentryParts,
  )
  @JoinColumn([{ name: 'CASE_INST_ID_', referencedColumnName: 'id' }])
  caseInstId_2: CmdActRuCaseExecutionEntity;

  @ManyToOne(
    () => CmdActRuCaseExecutionEntity,
    (cmdActRuCaseExecutionEntity) =>
      cmdActRuCaseExecutionEntity.cmdActRuCaseSentryParts2,
  )
  @JoinColumn([{ name: 'CASE_EXEC_ID_', referencedColumnName: 'id' }])
  caseExecId_2: CmdActRuCaseExecutionEntity;
}
