import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_C_ACOMP', ['caseActId', 'endTime', 'id'], {})
@Index('CMD_ACT_IDX_H_C_ACR', ['createTime'], {})
@Index('CMD_ACT_IDX_H_C_AEND', ['endTime'], {})
@Index('CMD_ACT_IDX_H_C_ATEID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F233A9433', ['id'], { unique: true })
@Entity('CMD_ACT_HI_CASEACTINST', { schema: 'SANKHYA' })
export class CmdActHiCaseactinstEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', {
    name: 'PARENT_ACT_INST_ID_',
    nullable: true,
    length: 64,
  })
  parentActInstId: string | null;

  @Column('nvarchar', { name: 'CASE_DEF_ID_', length: 64 })
  caseDefId: string;

  @Column('nvarchar', { name: 'CASE_INST_ID_', length: 64 })
  caseInstId: string;

  @Column('nvarchar', { name: 'CASE_ACT_ID_', length: 255 })
  caseActId: string;

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

  @Column('nvarchar', { name: 'CASE_ACT_NAME_', nullable: true, length: 255 })
  caseActName: string | null;

  @Column('nvarchar', { name: 'CASE_ACT_TYPE_', nullable: true, length: 255 })
  caseActType: string | null;

  @Column('datetime', { name: 'CREATE_TIME_' })
  createTime: Date;

  @Column('datetime', { name: 'END_TIME_', nullable: true })
  endTime: Date | null;

  @Column('numeric', {
    name: 'DURATION_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  duration: number | null;

  @Column('tinyint', { name: 'STATE_', nullable: true })
  state: number | null;

  @Column('tinyint', { name: 'REQUIRED_', nullable: true })
  required: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;
}
