import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_C_CSI', ['caseInstId'], {})
@Index('CMD_ACT_IDX_H_PR_NTY', ['name', 'varType'], {})
@Index('CMD_ACT_IDX_H_PR_PRIT', ['procInstId'], {})
@Index('CMD_ACT_IDX_H_V_B', ['bytearrayId'], {})
@Index('CMD_ACT_IDX_H_V_IPRK', ['procDefKey'], {})
@Index('CMD_ACT_IDX_H_V_ITEID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F747FA54A', ['id'], { unique: true })
@Entity('CMD_ACT_HI_VARINST', { schema: 'SANKHYA' })
export class CmdActHiVarinstEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

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

  @Column('nvarchar', { name: 'ACT_INST_ID_', nullable: true, length: 64 })
  actInstId: string | null;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', { name: 'NAME_', length: 255 })
  name: string;

  @Column('nvarchar', { name: 'VAR_TYPE_', nullable: true, length: 100 })
  varType: string | null;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

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

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @Column('nvarchar', { name: 'STATE_', nullable: true, length: 20 })
  state: string | null;
}
