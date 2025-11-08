import { Column, Entity, Index } from 'typeorm';

@Index('ACT_IDX_HI_PRO_I_BUSKEY', ['businessKey'], {})
@Index('ACT_IDX_HI_PRO_INST_END', ['endTime'], {})
@Index('PK__ACT_HI_PROCINST__0A426732', ['id'], { unique: true })
@Index('UQ__ACT_HI_PROCINST__0B368B6B', ['procInstId'], { unique: true })
@Entity('ACT_HI_PROCINST', { schema: 'SANKHYA' })
export class ActHiProcinstEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('nvarchar', {
    name: 'PROC_INST_ID_',
    nullable: true,
    unique: true,
    length: 64,
  })
  procInstId: string | null;

  @Column('nvarchar', { name: 'BUSINESS_KEY_', nullable: true, length: 255 })
  businessKey: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

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

  @Column('nvarchar', { name: 'DELETE_REASON_', nullable: true, length: 3103 })
  deleteReason: string | null;

  @Column('nvarchar', {
    name: 'TENANT_ID_',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  tenantId: string | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;
}
