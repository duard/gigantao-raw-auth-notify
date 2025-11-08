import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__ACT_EVT_LOG__568DB902', ['logNr'], { unique: true })
@Entity('ACT_EVT_LOG', { schema: 'SANKHYA' })
export class ActEvtLogEntity {
  @PrimaryGeneratedColumn({
    type: 'numeric',
    name: 'LOG_NR_',
  })
  logNr: number;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 64 })
  type: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('datetime', { name: 'TIME_STAMP_', nullable: true })
  timeStamp: Date | null;

  @Column('nvarchar', { name: 'USER_ID_', nullable: true, length: 255 })
  userId: string | null;

  @Column('varbinary', { name: 'DATA_', nullable: true })
  data: Buffer | null;

  @Column('nvarchar', { name: 'LOCK_OWNER_', nullable: true, length: 255 })
  lockOwner: string | null;

  @Column('datetime', { name: 'LOCK_TIME_', nullable: true })
  lockTime: Date | null;

  @Column('tinyint', {
    name: 'IS_PROCESSED_',
    nullable: true,
    default: () => '(0)',
  })
  isProcessed: number | null;
}
