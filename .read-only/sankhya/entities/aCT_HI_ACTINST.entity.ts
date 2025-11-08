import { Column, Entity, Index } from 'typeorm';

@Index('ACT_IDX_HI_ACT_INST_END', ['endTime'], {})
@Index('ACT_IDX_HI_ACT_INST_EXEC', ['executionId', 'actId'], {})
@Index('ACT_IDX_HI_ACT_INST_PROCINST', ['procInstId', 'actId'], {})
@Index('ACT_IDX_HI_ACT_INST_START', ['startTime'], {})
@Index('PK__ACT_HI_ACTINST__0E12F816', ['id'], { unique: true })
@Entity('ACT_HI_ACTINST', { schema: 'SANKHYA' })
export class ActHiActinstEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'ACT_ID_', nullable: true, length: 255 })
  actId: string | null;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', {
    name: 'CALL_PROC_INST_ID_',
    nullable: true,
    length: 64,
  })
  callProcInstId: string | null;

  @Column('nvarchar', { name: 'ACT_NAME_', nullable: true, length: 255 })
  actName: string | null;

  @Column('nvarchar', { name: 'ACT_TYPE_', nullable: true, length: 255 })
  actType: string | null;

  @Column('nvarchar', { name: 'ASSIGNEE_', nullable: true, length: 255 })
  assignee: string | null;

  @Column('datetime', { name: 'START_TIME_', nullable: true })
  startTime: Date | null;

  @Column('datetime', { name: 'END_TIME_', nullable: true })
  endTime: Date | null;

  @Column('numeric', {
    name: 'DURATION_',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  duration: number | null;

  @Column('nvarchar', {
    name: 'TENANT_ID_',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  tenantId: string | null;
}
