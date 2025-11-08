import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ActRuExecutionEntity } from './aCT_RU_EXECUTION.entity';
import { ActRuIdentitylinkEntity } from './aCT_RU_IDENTITYLINK.entity';
import { ActRuTaskEntity } from './aCT_RU_TASK.entity';

@Index('ACT_UNIQ_PROCDEF', ['key', 'version', 'tenantId'], { unique: true })
@Index('PK__ACT_RE_PROCDEF__3620E970', ['id'], { unique: true })
@Entity('ACT_RE_PROCDEF', { schema: 'SANKHYA' })
export class ActReProcdefEntity {
  @Column('nvarchar', { primary: true, name: 'ID_', length: 64 })
  id: string;

  @Column('int', { name: 'REV_', nullable: true })
  rev: number | null;

  @Column('nvarchar', { name: 'CATEGORY_', nullable: true, length: 255 })
  category: string | null;

  @Column('nvarchar', { name: 'NAME_', nullable: true, length: 255 })
  name: string | null;

  @Column('nvarchar', {
    name: 'KEY_',
    nullable: true,
    unique: true,
    length: 255,
  })
  key: string | null;

  @Column('int', { name: 'VERSION_', nullable: true, unique: true })
  version: number | null;

  @Column('nvarchar', { name: 'DEPLOYMENT_ID_', nullable: true, length: 64 })
  deploymentId: string | null;

  @Column('nvarchar', { name: 'RESOURCE_NAME_', nullable: true, length: 3103 })
  resourceName: string | null;

  @Column('nvarchar', {
    name: 'DGRM_RESOURCE_NAME_',
    nullable: true,
    length: 3103,
  })
  dgrmResourceName: string | null;

  @Column('nvarchar', { name: 'DESCRIPTION_', nullable: true, length: 3103 })
  description: string | null;

  @Column('tinyint', { name: 'HAS_START_FORM_KEY_', nullable: true })
  hasStartFormKey: number | null;

  @Column('tinyint', { name: 'HAS_GRAPHICAL_NOTATION_', nullable: true })
  hasGraphicalNotation: number | null;

  @Column('tinyint', { name: 'SUSPENSION_STATE_', nullable: true })
  suspensionState: number | null;

  @Column('nvarchar', {
    name: 'TENANT_ID_',
    nullable: true,
    unique: true,
    length: 255,
    default: () => "''",
  })
  tenantId: string | null;

  @OneToMany(
    () => ActRuExecutionEntity,
    (actRuExecutionEntity) => actRuExecutionEntity.procDefId_2,
  )
  actRuExecutions: ActRuExecutionEntity[];

  @OneToMany(
    () => ActRuIdentitylinkEntity,
    (actRuIdentitylinkEntity) => actRuIdentitylinkEntity.procDefId_2,
  )
  actRuIdentitylinks: ActRuIdentitylinkEntity[];

  @OneToMany(
    () => ActRuTaskEntity,
    (actRuTaskEntity) => actRuTaskEntity.procDefId_2,
  )
  actRuTasks: ActRuTaskEntity[];
}
