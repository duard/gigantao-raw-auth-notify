import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ActGeBytearrayEntity } from './aCT_GE_BYTEARRAY.entity';

@Index('ACT_IDX_JOB_EXCEPTION_STACK_ID', ['exceptionStackId'], {})
@Index('PK__ACT_RU_JOB__3FAA53AA', ['id'], { unique: true })
@Entity('ACT_RU_JOB', { schema: 'SANKHYA' })
export class ActRuJobEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @Column('datetime', { name: 'LOCK_EXP_TIME_', nullable: true })
  lockExpTime: Date | null;

  @Column('nvarchar', { name: 'LOCK_OWNER_', nullable: true, length: 255 })
  lockOwner: string | null;

  @Column('bit', { name: 'EXCLUSIVE_', nullable: true })
  exclusive: boolean | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', {
    name: 'PROCESS_INSTANCE_ID_',
    nullable: true,
    length: 64,
  })
  processInstanceId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('int', { name: 'RETRIES_', nullable: true })
  retries: number | null;

  @Column('nvarchar', {
    name: 'EXCEPTION_STACK_ID_',
    nullable: true,
    length: 64,
  })
  exceptionStackId: string | null;

  @Column('nvarchar', { name: 'EXCEPTION_MSG_', nullable: true, length: 3103 })
  exceptionMsg: string | null;

  @Column('datetime', { name: 'DUEDATE_', nullable: true })
  duedate: Date | null;

  @Column('nvarchar', { name: 'REPEAT_', nullable: true, length: 255 })
  repeat: string | null;

  @Column('nvarchar', { name: 'HANDLER_TYPE_', nullable: true, length: 255 })
  handlerType: string | null;

  @Column('nvarchar', { name: 'HANDLER_CFG_', nullable: true, length: 3103 })
  handlerCfg: string | null;

  @Column('nvarchar', {
    name: 'TENANT_ID_',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  tenantId: string | null;

  @ManyToOne(
    () => ActGeBytearrayEntity,
    (actGeBytearrayEntity) => actGeBytearrayEntity.actRuJobs,
  )
  @JoinColumn([{ name: 'EXCEPTION_STACK_ID_', referencedColumnName: 'id' }])
  exceptionStackId_2: ActGeBytearrayEntity;
}
