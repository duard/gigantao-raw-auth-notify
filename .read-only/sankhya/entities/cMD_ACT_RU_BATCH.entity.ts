import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmdActRuJobdefEntity } from './cMD_ACT_RU_JOBDEF.entity';

@Index('CMD_ACT_IDX_B_JOB_DEF', ['monitorJobDefId'], {})
@Index('CMD_ACT_IDX_BATCH_JOB_DEF', ['batchJobDefId'], {})
@Index('CMD_ACT_IDX_BATCH_SEED_JOB_DEF', ['seedJobDefId'], {})
@Index('PK__CMD_ACT___C4971C0F2CF90897', ['id'], { unique: true })
@Entity('CMD_ACT_RU_BATCH', { schema: 'SANKHYA' })
export class CmdActRuBatchEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_' })
  rev: number;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @Column('int', { name: 'TOTAL_JOBS_', nullable: true })
  totalJobs: number | null;

  @Column('int', { name: 'JOBS_CREATED_', nullable: true })
  jobsCreated: number | null;

  @Column('int', { name: 'JOBS_PER_SEED_', nullable: true })
  jobsPerSeed: number | null;

  @Column('int', { name: 'INVOCATIONS_PER_JOB_', nullable: true })
  invocationsPerJob: number | null;

  @Column('nvarchar', { name: 'SEED_JOB_DEF_ID_', nullable: true, length: 64 })
  seedJobDefId: string | null;

  @Column('nvarchar', { name: 'BATCH_JOB_DEF_ID_', nullable: true, length: 64 })
  batchJobDefId: string | null;

  @Column('nvarchar', {
    name: 'MONITOR_JOB_DEF_ID_',
    nullable: true,
    length: 64,
  })
  monitorJobDefId: string | null;

  @Column('tinyint', { name: 'SUSPENSION_STATE_', nullable: true })
  suspensionState: number | null;

  @Column('nvarchar', { name: 'CONFIGURATION_', nullable: true, length: 255 })
  configuration: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @ManyToOne(
    () => CmdActRuJobdefEntity,
    (cmdActRuJobdefEntity) => cmdActRuJobdefEntity.cmdActRuBatches,
  )
  @JoinColumn([{ name: 'SEED_JOB_DEF_ID_', referencedColumnName: 'id' }])
  seedJobDefId_2: CmdActRuJobdefEntity;

  @ManyToOne(
    () => CmdActRuJobdefEntity,
    (cmdActRuJobdefEntity) => cmdActRuJobdefEntity.cmdActRuBatches2,
  )
  @JoinColumn([{ name: 'MONITOR_JOB_DEF_ID_', referencedColumnName: 'id' }])
  monitorJobDefId_2: CmdActRuJobdefEntity;

  @ManyToOne(
    () => CmdActRuJobdefEntity,
    (cmdActRuJobdefEntity) => cmdActRuJobdefEntity.cmdActRuBatches3,
  )
  @JoinColumn([{ name: 'BATCH_JOB_DEF_ID_', referencedColumnName: 'id' }])
  batchJobDefId_2: CmdActRuJobdefEntity;
}
