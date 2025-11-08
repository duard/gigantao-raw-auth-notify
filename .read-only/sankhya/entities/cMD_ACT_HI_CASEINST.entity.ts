import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_C_IBKEY', ['businessKey'], {})
@Index('CMD_ACT_IDX_H_C_IC', ['closeTime'], {})
@Index('CMD_ACT_IDX_H_C_ITEID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F1C8D96A4', ['id'], { unique: true })
@Index('UQ__CMD_ACT___7972A3CB1F6A034F', ['caseInstId'], { unique: true })
@Entity('CMD_ACT_HI_CASEINST', { schema: 'SANKHYA' })
export class CmdActHiCaseinstEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'CASE_INST_ID_', unique: true, length: 64 })
  caseInstId: string;

  @Column('nvarchar', { name: 'BUSINESS_KEY_', nullable: true, length: 255 })
  businessKey: string | null;

  @Column('nvarchar', { name: 'CASE_DEF_ID_', length: 64 })
  caseDefId: string;

  @Column('datetime', { name: 'CREATE_TIME_' })
  createTime: Date;

  @Column('datetime', { name: 'CLOSE_TIME_', nullable: true })
  closeTime: Date | null;

  @Column('numeric', {
    name: 'DURATION_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  duration: number | null;

  @Column('tinyint', { name: 'STATE_', nullable: true })
  state: number | null;

  @Column('nvarchar', { name: 'CREATE_USER_ID_', nullable: true, length: 255 })
  createUserId: string | null;

  @Column('nvarchar', {
    name: 'SUPER_CASE_INSTANCE_ID_',
    nullable: true,
    length: 64,
  })
  superCaseInstanceId: string | null;

  @Column('nvarchar', {
    name: 'SUPER_PROCESS_INSTANCE_ID_',
    nullable: true,
    length: 64,
  })
  superProcessInstanceId: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;
}
