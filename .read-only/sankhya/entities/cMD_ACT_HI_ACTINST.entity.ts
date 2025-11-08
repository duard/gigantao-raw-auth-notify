import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_A_IC', ['executionId', 'actId', 'endTime', 'id'], {})
@Index('CMD_ACT_IDX_H_A_IEND', ['endTime'], {})
@Index('CMD_ACT_IDX_H_A_IPR', ['procInstId', 'actId'], {})
@Index('CMD_ACT_IDX_H_A_IPRK', ['procDefKey'], {})
@Index(
  'CMD_ACT_IDX_H_A_IST',
  ['procDefId', 'procInstId', 'actId', 'endTime', 'actInstState'],
  {},
)
@Index('CMD_ACT_IDX_H_A_ITEID', ['tenantId'], {})
@Index('CMD_ACT_IDX_H_A_PETIME', ['procDefId', 'endTime'], {})
@Index('CMD_ACT_IDX_H_A_ST', ['startTime'], {})
@Index('PK__CMD_ACT___C4971C0F6CDE8382', ['id'], { unique: true })
@Entity('CMD_ACT_HI_ACTINST', { schema: 'SANKHYA' })
export class CmdActHiActinstEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', {
    name: 'PARENT_ACT_INST_ID_',
    nullable: true,
    length: 64,
  })
  parentActInstId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_KEY_', nullable: true, length: 255 })
  procDefKey: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', length: 64 })
  procDefId: string;

  @Column('nvarchar', { name: 'PROC_INST_ID_', length: 64 })
  procInstId: string;

  @Column('nvarchar', { name: 'EXECUTION_ID_', length: 64 })
  executionId: string;

  @Column('nvarchar', { name: 'ACT_ID_', length: 255 })
  actId: string;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', {
    name: 'CALL_PROC_INST_ID_',
    nullable: true,
    length: 64,
  })
  callProcInstId: string | null;

  @Column('nvarchar', {
    name: 'CALL_CASE_INST_ID_',
    nullable: true,
    length: 64,
  })
  callCaseInstId: string | null;

  @Column('nvarchar', { name: 'ACT_NAME_', nullable: true, length: 255 })
  actName: string | null;

  @Column('nvarchar', { name: 'ACT_TYPE_', length: 255 })
  actType: string;

  @Column('nvarchar', { name: 'ASSIGNEE_', nullable: true, length: 64 })
  assignee: string | null;

  @Column('datetime', { name: 'START_TIME_' })
  startTime: Date;

  @Column('datetime', { name: 'END_TIME_', nullable: true })
  endTime: Date | null;

  @Column('numeric', {
    name: 'DURATION_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  duration: number | null;

  @Column('tinyint', { name: 'ACT_INST_STATE_', nullable: true })
  actInstState: number | null;

  @Column('numeric', {
    name: 'SEQUENCE_COUNTER_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  sequenceCounter: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;
}
