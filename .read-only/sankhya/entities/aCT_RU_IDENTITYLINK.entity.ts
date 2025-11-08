import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ActReProcdefEntity } from './aCT_RE_PROCDEF.entity';
import { ActRuExecutionEntity } from './aCT_RU_EXECUTION.entity';
import { ActRuTaskEntity } from './aCT_RU_TASK.entity';

@Index('ACT_IDX_ATHRZ_PROCEDEF', ['procDefId'], {})
@Index('ACT_IDX_IDENT_LNK_GROUP', ['groupId'], {})
@Index('ACT_IDX_IDENT_LNK_PROCINST', ['procInstId'], {})
@Index('ACT_IDX_IDENT_LNK_TASK', ['taskId'], {})
@Index('ACT_IDX_IDENT_LNK_USER', ['userId'], {})
@Index('PK__ACT_RU_IDENTITYL__4933BDE4', ['id'], { unique: true })
@Entity('ACT_RU_IDENTITYLINK', { schema: 'SANKHYA' })
export class ActRuIdentitylinkEntity {
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

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @ManyToOne(
    () => ActReProcdefEntity,
    (actReProcdefEntity) => actReProcdefEntity.actRuIdentitylinks,
  )
  @JoinColumn([{ name: 'PROC_DEF_ID_', referencedColumnName: 'id' }])
  procDefId_2: ActReProcdefEntity;

  @ManyToOne(
    () => ActRuExecutionEntity,
    (actRuExecutionEntity) => actRuExecutionEntity.actRuIdentitylinks,
  )
  @JoinColumn([{ name: 'PROC_INST_ID_', referencedColumnName: 'id' }])
  procInstId_2: ActRuExecutionEntity;

  @ManyToOne(
    () => ActRuTaskEntity,
    (actRuTaskEntity) => actRuTaskEntity.actRuIdentitylinks,
  )
  @JoinColumn([{ name: 'TASK_ID_', referencedColumnName: 'id' }])
  taskId_2: ActRuTaskEntity;
}
