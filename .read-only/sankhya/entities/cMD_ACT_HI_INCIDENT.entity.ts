import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_IPRK', ['procDefKey'], {})
@Index('CMD_ACT_IDX_H_IPRT', ['procInstId'], {})
@Index('CMD_ACT_IDX_H_ITEID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F0B630AA2', ['id'], { unique: true })
@Entity('CMD_ACT_HI_INCIDENT', { schema: 'SANKHYA' })
export class CmdActHiIncidentEntity {
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

  @Column('datetime', { name: 'CREATE_TIME_' })
  createTime: Date;

  @Column('datetime', { name: 'END_TIME_', nullable: true })
  endTime: Date | null;

  @Column('nvarchar', { name: 'INCIDENT_MSG_', nullable: true, length: 3103 })
  incidentMsg: string | null;

  @Column('nvarchar', { name: 'INCIDENT_TYPE_', length: 255 })
  incidentType: string;

  @Column('nvarchar', { name: 'ACTIVITY_ID_', nullable: true, length: 255 })
  activityId: string | null;

  @Column('nvarchar', {
    name: 'CAUSE_INCIDENT_ID_',
    nullable: true,
    length: 64,
  })
  causeIncidentId: string | null;

  @Column('nvarchar', {
    name: 'ROOT_CAUSE_INCIDENT_ID_',
    nullable: true,
    length: 64,
  })
  rootCauseIncidentId: string | null;

  @Column('nvarchar', { name: 'CONFIGURATION_', nullable: true, length: 255 })
  configuration: string | null;

  @Column('int', { name: 'INCIDENT_STATE_', nullable: true })
  incidentState: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @Column('nvarchar', { name: 'JOB_DEF_ID_', nullable: true, length: 64 })
  jobDefId: string | null;
}
