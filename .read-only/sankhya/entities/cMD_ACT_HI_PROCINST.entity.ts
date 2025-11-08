import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_P_BKEY', ['businessKey'], {})
@Index('CMD_ACT_IDX_H_P_END', ['endTime'], {})
@Index('CMD_ACT_IDX_H_P_PRK', ['procDefKey'], {})
@Index('CMD_ACT_IDX_H_P_PRT', ['startTime', 'endTime'], {})
@Index('CMD_ACT_IDX_H_P_PTIME', ['procDefId', 'endTime'], {})
@Index('CMD_ACT_IDX_H_P_TEID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F663185F3', ['id'], { unique: true })
@Index('UQ__CMD_ACT___C0341572690DF29E', ['procInstId'], { unique: true })
@Entity('CMD_ACT_HI_PROCINST', { schema: 'SANKHYA' })
export class CmdActHiProcinstEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'PROC_INST_ID_', unique: true, length: 64 })
  procInstId: string;

  @Column('nvarchar', { name: 'BUSINESS_KEY_', nullable: true, length: 255 })
  businessKey: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_KEY_', nullable: true, length: 255 })
  procDefKey: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', length: 64 })
  procDefId: string;

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

  @Column('nvarchar', { name: 'START_USER_ID_', nullable: true, length: 255 })
  startUserId: string | null;

  @Column('nvarchar', { name: 'START_ACT_ID_', nullable: true, length: 255 })
  startActId: string | null;

  @Column('nvarchar', { name: 'END_ACT_ID_', nullable: true, length: 255 })
  endActId: string | null;

  @Column('nvarchar', {
    name: 'SUPER_PROCESS_INSTANCE_ID_',
    nullable: true,
    length: 64,
  })
  superProcessInstanceId: string | null;

  @Column('nvarchar', {
    name: 'SUPER_CASE_INSTANCE_ID_',
    nullable: true,
    length: 64,
  })
  superCaseInstanceId: string | null;

  @Column('nvarchar', { name: 'CASE_INST_ID_', nullable: true, length: 64 })
  caseInstId: string | null;

  @Column('nvarchar', { name: 'DELETE_REASON_', nullable: true, length: 3103 })
  deleteReason: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @Column('nvarchar', { name: 'STATE_', nullable: true, length: 255 })
  state: string | null;
}
