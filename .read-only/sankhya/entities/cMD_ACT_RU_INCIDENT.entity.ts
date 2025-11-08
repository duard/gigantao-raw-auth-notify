import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { CmdActReProcdefEntity } from './cMD_ACT_RE_PROCDEF.entity';
import { CmdActRuExecutionEntity } from './cMD_ACT_RU_EXECUTION.entity';
import { CmdActRuJobdefEntity } from './cMD_ACT_RU_JOBDEF.entity';

@Index('CMD_ACT_IDX_INC_CONFIGURATION', ['configuration'], {})
@Index('CMD_ACT_IDX_INC_JOB_DEF', ['jobDefId'], {})
@Index('CMD_ACT_IDX_INC_TENANT_ID', ['tenantId'], {})
@Index('CMD_ACT_IDX_INCIDENT_CAUSE', ['causeIncidentId'], {})
@Index('CMD_ACT_IDX_INCIDENT_EXEC', ['executionId'], {})
@Index('CMD_ACT_IDX_INCIDENT_PROC_DEF_ID', ['procDefId'], {})
@Index('CMD_ACT_IDX_INCIDENT_PROCINST', ['procInstId'], {})
@Index('CMD_ACT_IDX_INCIDENT_ROOT_CAUSE', ['rootCauseIncidentId'], {})
@Index('PK__CMD_ACT___C4971C0F17FDEBB1', ['id'], { unique: true })
@Entity('CMD_ACT_RU_INCIDENT', { schema: 'SANKHYA' })
export class CmdActRuIncidentEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_' })
  rev: number;

  @Column('datetime', { name: 'INCIDENT_TIMESTAMP_' })
  incidentTimestamp: Date;

  @Column('nvarchar', { name: 'INCIDENT_MSG_', nullable: true, length: 3103 })
  incidentMsg: string | null;

  @Column('nvarchar', { name: 'INCIDENT_TYPE_', length: 255 })
  incidentType: string;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'ACTIVITY_ID_', nullable: true, length: 255 })
  activityId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

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

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @Column('nvarchar', { name: 'JOB_DEF_ID_', nullable: true, length: 64 })
  jobDefId: string | null;

  @ManyToOne(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.cmdActRuIncidents,
  )
  @JoinColumn([{ name: 'PROC_INST_ID_', referencedColumnName: 'id' }])
  procInstId_2: CmdActRuExecutionEntity;

  @ManyToOne(
    () => CmdActRuJobdefEntity,
    (cmdActRuJobdefEntity) => cmdActRuJobdefEntity.cmdActRuIncidents,
  )
  @JoinColumn([{ name: 'JOB_DEF_ID_', referencedColumnName: 'id' }])
  jobDefId_2: CmdActRuJobdefEntity;

  @ManyToOne(
    () => CmdActRuExecutionEntity,
    (cmdActRuExecutionEntity) => cmdActRuExecutionEntity.cmdActRuIncidents2,
  )
  @JoinColumn([{ name: 'EXECUTION_ID_', referencedColumnName: 'id' }])
  executionId_2: CmdActRuExecutionEntity;

  @ManyToOne(
    () => CmdActReProcdefEntity,
    (cmdActReProcdefEntity) => cmdActReProcdefEntity.cmdActRuIncidents,
  )
  @JoinColumn([{ name: 'PROC_DEF_ID_', referencedColumnName: 'id' }])
  procDefId_2: CmdActReProcdefEntity;

  @ManyToOne(
    () => CmdActRuIncidentEntity,
    (cmdActRuIncidentEntity) => cmdActRuIncidentEntity.cmdActRuIncidents,
  )
  @JoinColumn([{ name: 'CAUSE_INCIDENT_ID_', referencedColumnName: 'id' }])
  causeIncidentId_2: CmdActRuIncidentEntity;

  @OneToMany(
    () => CmdActRuIncidentEntity,
    (cmdActRuIncidentEntity) => cmdActRuIncidentEntity.causeIncidentId_2,
  )
  cmdActRuIncidents: CmdActRuIncidentEntity[];

  @ManyToOne(
    () => CmdActRuIncidentEntity,
    (cmdActRuIncidentEntity) => cmdActRuIncidentEntity.cmdActRuIncidents2,
  )
  @JoinColumn([{ name: 'ROOT_CAUSE_INCIDENT_ID_', referencedColumnName: 'id' }])
  rootCauseIncidentId_2: CmdActRuIncidentEntity;

  @OneToMany(
    () => CmdActRuIncidentEntity,
    (cmdActRuIncidentEntity) => cmdActRuIncidentEntity.rootCauseIncidentId_2,
  )
  cmdActRuIncidents2: CmdActRuIncidentEntity[];
}
