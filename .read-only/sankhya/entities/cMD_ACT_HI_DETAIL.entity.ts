import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_D_B', ['bytearrayId'], {})
@Index('CMD_ACT_IDX_H_D_CSEX', ['caseExecutionId'], {})
@Index('CMD_ACT_IDX_H_D_CSI', ['caseInstId'], {})
@Index('CMD_ACT_IDX_H_D_I', ['actInstId'], {})
@Index('CMD_ACT_IDX_H_D_N', ['name'], {})
@Index('CMD_ACT_IDX_H_D_PRI', ['procInstId'], {})
@Index('CMD_ACT_IDX_H_D_PRK', ['procDefKey'], {})
@Index('CMD_ACT_IDX_H_D_T', ['time'], {})
@Index('CMD_ACT_IDX_H_D_TEID', ['tenantId'], {})
@Index('CMD_ACT_IDX_H_D_TID', ['taskId'], {})
@Index('PK__CMD_ACT___C4971C0F7850362E', ['id'], { unique: true })
@Entity('CMD_ACT_HI_DETAIL', { schema: 'SANKHYA' })
export class CmdActHiDetailEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'TYPE_', length: 255 })
  type: string;

  @Column('nvarchar', { name: 'PROC_DEF_KEY_', nullable: true, length: 255 })
  procDefKey: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'CASE_DEF_KEY_', nullable: true, length: 255 })
  caseDefKey: string | null;

  @Column('nvarchar', { name: 'CASE_DEF_ID_', nullable: true, length: 64 })
  caseDefId: string | null;

  @Column('nvarchar', { name: 'CASE_INST_ID_', nullable: true, length: 64 })
  caseInstId: string | null;

  @Column('nvarchar', {
    name: 'CASE_EXECUTION_ID_',
    nullable: true,
    length: 64,
  })
  caseExecutionId: string | null;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', { name: 'ACT_INST_ID_', nullable: true, length: 64 })
  actInstId: string | null;

  @Column('nvarchar', { name: 'VAR_INST_ID_', nullable: true, length: 64 })
  varInstId: string | null;

  @Column('nvarchar', { name: 'NAME_', length: 255 })
  name: string;

  @Column('nvarchar', { name: 'VAR_TYPE_', nullable: true, length: 255 })
  varType: string | null;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('datetime', { name: 'TIME_' })
  time: Date;

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

  @Column('numeric', {
    name: 'SEQUENCE_COUNTER_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  sequenceCounter: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @Column('nvarchar', { name: 'OPERATION_ID_', nullable: true, length: 64 })
  operationId: string | null;
}
