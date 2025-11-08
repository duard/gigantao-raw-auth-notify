import { Column, Entity, Index } from 'typeorm';

@Index('PK__CMD_ACT___C4971C0F13F850A3', ['id'], { unique: true })
@Entity('CMD_ACT_HI_BATCH', { schema: 'SANKHYA' })
export class CmdActHiBatchEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @Column('int', { name: 'TOTAL_JOBS_', nullable: true })
  totalJobs: number | null;

  @Column('int', { name: 'JOBS_PER_SEED_', nullable: true })
  jobsPerSeed: number | null;

  @Column('int', { name: 'INVOCATIONS_PER_JOB_', nullable: true })
  invocationsPerJob: number | null;

  @Column('nvarchar', { name: 'SEED_JOB_DEF_ID_', nullable: true, length: 64 })
  seedJobDefId: string | null;

  @Column('nvarchar', {
    name: 'MONITOR_JOB_DEF_ID_',
    nullable: true,
    length: 64,
  })
  monitorJobDefId: string | null;

  @Column('nvarchar', { name: 'BATCH_JOB_DEF_ID_', nullable: true, length: 64 })
  batchJobDefId: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @Column('datetime', { name: 'START_TIME_' })
  startTime: Date;

  @Column('datetime', { name: 'END_TIME_', nullable: true })
  endTime: Date | null;
}
