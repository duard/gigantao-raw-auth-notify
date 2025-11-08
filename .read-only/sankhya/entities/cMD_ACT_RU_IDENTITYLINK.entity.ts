import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmdActReProcdefEntity } from './cMD_ACT_RE_PROCDEF.entity';
import { CmdActRuTaskEntity } from './cMD_ACT_RU_TASK.entity';

@Index('CMD_ACT_IDX_ATHRZ_PROCEDEF', ['procDefId'], {})
@Index('CMD_ACT_IDX_IDENT_LNK_GROUP', ['groupId'], {})
@Index('CMD_ACT_IDX_IDENT_LNK_TASK', ['taskId'], {})
@Index('CMD_ACT_IDX_IDENT_LNK_USER', ['userId'], {})
@Index('PK__CMD_ACT___C4971C0F0C8C3905', ['id'], { unique: true })
@Entity('CMD_ACT_RU_IDENTITYLINK', { schema: 'SANKHYA' })
export class CmdActRuIdentitylinkEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'GROUP_ID_', nullable: true, length: 255 })
  groupId: string | null;

  @Column('nvarchar', { name: 'TYPE_', nullable: true, length: 255 })
  type: string | null;

  @Column('nvarchar', { name: 'USER_ID_', nullable: true, length: 255 })
  userId: string | null;

  @Column('nvarchar', { name: 'TASK_ID_', nullable: true, length: 64 })
  taskId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'TENANT_ID_', nullable: true, length: 64 })
  tenantId: string | null;

  @ManyToOne(
    () => CmdActReProcdefEntity,
    (cmdActReProcdefEntity) => cmdActReProcdefEntity.cmdActRuIdentitylinks,
  )
  @JoinColumn([{ name: 'PROC_DEF_ID_', referencedColumnName: 'id' }])
  procDefId_2: CmdActReProcdefEntity;

  @ManyToOne(
    () => CmdActRuTaskEntity,
    (cmdActRuTaskEntity) => cmdActRuTaskEntity.cmdActRuIdentitylinks,
  )
  @JoinColumn([{ name: 'TASK_ID_', referencedColumnName: 'id' }])
  taskId_2: CmdActRuTaskEntity;
}
