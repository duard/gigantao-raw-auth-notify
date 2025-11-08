import { Column, Entity, Index } from 'typeorm';

@Index('CMD_ACT_IDX_H_I_LG', ['groupId'], {})
@Index('CMD_ACT_IDX_H_I_LTA', ['taskId'], {})
@Index('CMD_ACT_IDX_H_I_LTEID', ['tenantId'], {})
@Index('CMD_ACT_IDX_H_I_LU', ['userId'], {})
@Index('CMD_ACT_IDX_H_I_PRK', ['procDefKey'], {})
@Index('PK__CMD_ACT___C4971C0F7C20C712', ['id'], { unique: true })
@Entity('CMD_ACT_HI_IDENTITYLINK', { schema: 'SANKHYA' })
export class CmdActHiIdentitylinkEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('datetime', { name: 'TIMESTAMP_' })
  timestamp: Date;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @Column('nvarchar', { name: 'USER_ID_', nullable: true, length: 255 })
  userId: string | null;

  @Column('nvarchar', { name: 'GROUP_ID_', nullable: true, length: 255 })
  groupId: string | null;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'OPERATION_TYPE_', nullable: true, length: 64 })
  operationType: string | null;

  @Column('nvarchar', { name: 'ASSIGNER_ID_', nullable: true, length: 64 })
  assignerId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_KEY_', nullable: true, length: 255 })
  procDefKey: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;
}
