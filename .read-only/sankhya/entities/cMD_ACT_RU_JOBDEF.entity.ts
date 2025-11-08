import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CmdActRuBatchEntity } from './cMD_ACT_RU_BATCH.entity';
import { CmdActRuIncidentEntity } from './cMD_ACT_RU_INCIDENT.entity';

@Index('CMD_ACT_IDX_JOBDEF_PROC_DEF_ID', ['procDefId'], {})
@Index('CMD_ACT_IDX_JOBDEF_TENANT_ID', ['tenantId'], {})
@Index('PK__CMD_ACT___C4971C0F011A8659', ['id'], { unique: true })
@Entity('CMD_ACT_RU_JOBDEF', { schema: 'SANKHYA' })
export class CmdActRuJobdefEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_KEY_', nullable: true, length: 255 })
  procDefKey: string | null;

  @Column('nvarchar', { name: 'ACT_ID_', nullable: true, length: 255 })
  actId: string | null;

  @Column('nvarchar', { name: 'JOB_TYPE_', length: 255 })
  jobType: string;

  @Column('nvarchar', {
    name: 'JOB_CONFIGURATION_',
    nullable: true,
    length: 255,
  })
  jobConfiguration: string | null;

  @Column('tinyint', { name: 'SUSPENSION_STATE_', nullable: true })
  suspensionState: number | null;

  @Column('numeric', {
    name: 'JOB_PRIORITY_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  jobPriority: number | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @OneToMany(
    () => CmdActRuBatchEntity,
    (cmdActRuBatchEntity) => cmdActRuBatchEntity.seedJobDefId_2,
  )
  cmdActRuBatches: CmdActRuBatchEntity[];

  @OneToMany(
    () => CmdActRuBatchEntity,
    (cmdActRuBatchEntity) => cmdActRuBatchEntity.monitorJobDefId_2,
  )
  cmdActRuBatches2: CmdActRuBatchEntity[];

  @OneToMany(
    () => CmdActRuBatchEntity,
    (cmdActRuBatchEntity) => cmdActRuBatchEntity.batchJobDefId_2,
  )
  cmdActRuBatches3: CmdActRuBatchEntity[];

  @OneToMany(
    () => CmdActRuIncidentEntity,
    (cmdActRuIncidentEntity) => cmdActRuIncidentEntity.jobDefId_2,
  )
  cmdActRuIncidents: CmdActRuIncidentEntity[];
}
