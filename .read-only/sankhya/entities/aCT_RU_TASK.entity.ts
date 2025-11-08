import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { ActReProcdefEntity } from './aCT_RE_PROCDEF.entity';
import { ActRuExecutionEntity } from './aCT_RU_EXECUTION.entity';
import { ActRuIdentitylinkEntity } from './aCT_RU_IDENTITYLINK.entity';

@Index('ACT_IDX_TASK_CREATE', ['createTime'], {})
@Index('ACT_IDX_TASK_EXEC', ['executionId'], {})
@Index('ACT_IDX_TASK_PROC_DEF_ID', ['procDefId'], {})
@Index('ACT_IDX_TASK_PROCINST', ['procInstId'], {})
@Index('PK__ACT_RU_TASK__437AE48E', ['id'], { unique: true })
@Entity('ACT_RU_TASK', { schema: 'SANKHYA' })
export class ActRuTaskEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'EXECUTION_ID_', nullable: true, length: 64 })
  executionId: string | null;

  @Column('nvarchar', { name: 'PROC_INST_ID_', nullable: true, length: 64 })
  procInstId: string | null;

  @Column('nvarchar', { name: 'PROC_DEF_ID_', nullable: true, length: 64 })
  procDefId: string | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', { name: 'PARENT_TASK_ID_', nullable: true, length: 64 })
  parentTaskId: string | null;

  @Column('nvarchar', { name: 'DESCRIPTION_', nullable: true, length: 3103 })
  description: string | null;

  @Column('nvarchar', { name: 'TASK_DEF_KEY_', nullable: true, length: 255 })
  taskDefKey: string | null;

  @Column('nvarchar', { name: 'OWNER_', nullable: true, length: 255 })
  owner: string | null;

  @Column('nvarchar', { name: 'ASSIGNEE_', nullable: true, length: 255 })
  assignee: string | null;

  @Column('nvarchar', { name: 'DELEGATION_', nullable: true, length: 64 })
  delegation: string | null;

  @Column('int', { name: 'PRIORITY_', nullable: true })
  priority: number | null;

  @Column('datetime', { name: 'CREATE_TIME_', nullable: true })
  createTime: Date | null;

  @Column('datetime', { name: 'DUE_DATE_', nullable: true })
  dueDate: Date | null;

  @Column('nvarchar', { name: 'CATEGORY_', nullable: true, length: 255 })
  category: string | null;

  @Column('int', { name: 'SUSPENSION_STATE_', nullable: true })
  suspensionState: number | null;

  @Column('nvarchar', {
    name: 'TENANT_ID_',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  tenantId: string | null;

  @Column('nvarchar', { name: 'FORM_KEY_', nullable: true, length: 255 })
  formKey: string | null;

  @OneToMany(
    () => ActRuIdentitylinkEntity,
    (actRuIdentitylinkEntity) => actRuIdentitylinkEntity.taskId_2,
  )
  actRuIdentitylinks: ActRuIdentitylinkEntity[];

  @ManyToOne(
    () => ActRuExecutionEntity,
    (actRuExecutionEntity) => actRuExecutionEntity.actRuTasks,
  )
  @JoinColumn([{ name: 'EXECUTION_ID_', referencedColumnName: 'id' }])
  executionId_2: ActRuExecutionEntity;

  @ManyToOne(
    () => ActRuExecutionEntity,
    (actRuExecutionEntity) => actRuExecutionEntity.actRuTasks2,
  )
  @JoinColumn([{ name: 'PROC_INST_ID_', referencedColumnName: 'id' }])
  procInstId_2: ActRuExecutionEntity;

  @ManyToOne(
    () => ActReProcdefEntity,
    (actReProcdefEntity) => actReProcdefEntity.actRuTasks,
  )
  @JoinColumn([{ name: 'PROC_DEF_ID_', referencedColumnName: 'id' }])
  procDefId_2: ActReProcdefEntity;
}
